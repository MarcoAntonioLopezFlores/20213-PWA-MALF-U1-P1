self.addEventListener("install", (event) => {
  console.log("SW instalado");
});

self.addEventListener("activate", (event) => {
  console.log("SW activado");
});

self.addEventListener("fetch", (event) => {
  if (event.request.url.includes(".jpg")) {
    let newResponse = fetch("./images/gato.jpg");

    event.respondWith(newResponse);
  }

  if (event.request.url.includes("page.css")) {
    let newResponse = new Response(
      `
        body{
            background-color:black !important;
            color: red !important;
        }    
        `,
      {
        headers: {
          "Content-Type": "text/css",
        },
      }
    );

    event.respondWith(newResponse);
  }

  if (event.request.url.includes("reqres.in")) {
    let newResponse = new Response(
      `[{
          "email":"marco@gmail.com",
            "first_name": "Marco",
            "last_name": "López",
            "id":7,
            "avatar":"./images/gato.jpg"
        },
        {
            "email":"marcoflores@gmail.com",
            "first_name": "Marco",
            "last_name": "Flores",
            "id":8,
            "avatar":"./images/gato.jpg"
        },
        {
            "email":"antonio@gmail.com",
            "first_name": "Antonio",
            "last_name": "Flores",
            "id":9,
            "avatar":"./images/gato.jpg"
        },
        {
            "email":"antonioflores@gmail.com",
            "first_name": "Antonio Leonardo",
            "last_name": "Lopez",
            "id":10,
            "avatar":"./images/gato.jpg"
        },
        {
            "email":"isaac@gmail.com",
            "first_name": "Isaac",
            "last_name": "Flores",
            "id":11,
            "avatar":"./images/gato.jpg"
        },
        {
            "email":"christian@gmail.com",
            "first_name": "Christian",
            "last_name": "Figueroa",
            "id":12,
            "avatar":"./images/gato.jpg"
        }
    ]`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    event.respondWith(newResponse);
  }
});
