let url = window.location.href;
let swDirect = '/20213-PWA-MALF-U1-P1/serviceWorker.js'

if(navigator.serviceWorker){

    if(url.includes('localhost')){
        swDirect = '/serviceWorker.js'
    }
    navigator.serviceWorker.register(swDirect)
}else{
    console.log("Ups, cambia de navegador")
}

getMoreUsers = (page) => {
    fetch("https://reqres.in/api/users?page=" + page)
        .then(data => data.json())
        .then((json) => {
            let container = document.getElementById("registros")
            let pagination = document.getElementById("pagination")
            //json.data
            json.map(element => {
                let myDiv = document.createElement("div");
                myDiv.setAttribute("class", "card col-sm-6 col-md-4 mb-4")
                myDiv.setAttribute("style", "width: 22rem;")
                let cardElement =
                    `
                <img src=${element.avatar} class="card-img-top" alt=${element.name}>
                <div class="card-body">
                    <h5 class="card-title">${element.first_name + ' ' + element.last_name}</h5>
                    <p class="card-text" style="font-size: 14px;">${element.email}</p>
                    <button type="button" onclick="getDetailsUser(${element.id})" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Detalles
                    </button>
                    
                </div>
                `;
                myDiv.innerHTML = cardElement
                container.append(myDiv)
            });
            if (page == 2) {
                let liElement = `<li class="page-item"><a class="btn btn-primary btn-sm"
                        onclick="getLessUsers()">Volver</a></li>`
                pagination.innerHTML = liElement
            }

        });

}

getLessUsers = () => {
    window.location.reload()
}

const {fetch: origFetch} = window;
window.fetch = async (...args) => {
  const response = await origFetch(...args);
  
  response
    .clone()
    .json()
    .then(body => console.log("intercepted response:", body))
    .catch(err => console.error(err))
  ;
    
  return {
    ok: true,
    status: 200,
    json: async () => ([{
        "id": 7,
        "email": "marco.lopez@reqres.in",
        "first_name": "Marco",
        "last_name": "López",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
    }])
  };
};
