
self.addEventListener("install",(event)=>{
    console.log("SW instalado")
})

self.addEventListener("activate",(event)=>{
    console.log("SW activado")
})

self.addEventListener("fetch",(event)=>{
    
    if(event.request.url.includes('.jpg')){
        let newResponse = fetch('/images/gato.jpg');
        console.log("Es una imagen")

        event.respondWith(newResponse)
    }


    if(event.request.url.includes('page.css')){
        let newResponse = new Response(`
        body{
            background-color:black !important;
            color: red !important;
        }    
        `,
        {
            headers:{
                'Content-Type':'text/css' 
            }
        })
        
        event.respondWith(newResponse)
        
    }
    

})