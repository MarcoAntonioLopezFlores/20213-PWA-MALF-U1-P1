let url = window.location.href;
let swDirect = '/PWA-U1-P1/serviceWorker.js'

if(navigator.serviceWorker){

    if(url.includes('localhost')){
        swDirect = '/serviceWorker.js'
    }
    navigator.serviceWorker.register(swDirect)
}else{
    console.log("Ups, cambia de navegador")
}