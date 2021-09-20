if(navigator.serviceWorker){
    navigator.serviceWorker.register("serviceWorker.js")
}else{
    console.log("Ups, cambia de navegador")
}