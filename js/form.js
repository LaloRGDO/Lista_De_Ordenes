const formButton = document.querySelector("#formButton");
const form = document.querySelector("#form");
const inputSku = document.querySelector("#sku");
const inputName = document.querySelector("#name");
const inputQuantity = document.querySelector("#quantity");
const inputPrice = document.querySelector("#price");

inputSku.addEventListener("blur", function(){
    const mensajeSku = document.querySelector(".mensajeSku");
    if(this.value == ""){
        this.classList.add("redBorder");
        console.log("funcionó vacio");
        mensajeSku.classList.add("error");
    }else{
        this.classList.remove("redBorder");
        console.log("funcionó lleno");
        mensajeSku.classList.remove("error");
    }
});

inputName.addEventListener("blur", function(){
    const mensajeNombre =  document.querySelector(".mensajeNombre");
    if(this.value == ""){
        this.classList.add("redBorder");
        console.log("funcionó vacio");
        mensajeNombre.classList.add("error");
    }else{
        this.classList.remove("redBorder");
        console.log("funcionó lleno");
        mensajeNombre.classList.remove("error");
    }
});

inputQuantity.addEventListener("blur", function(){
    const mensajeCantidad = document.querySelector(".mensajeCantidad");
    if(this.value == ""){
        this.classList.add("redBorder");
        console.log("funcionó vacio");
        mensajeCantidad.classList.add("error");
    }else{
        this.classList.remove("redBorder");
        console.log("funcionó lleno");
        mensajeCantidad.classList.remove("error");
    }
});

inputPrice.addEventListener("blur", function(){
    const mensajePrice = document.querySelector(".mensajePrice");
    if(this.value == ""){
        this.classList.add("redBorder");
        console.log("funcionó vacio");
        mensajePrice.classList.add("error");
    }else{
        this.classList.remove("redBorder");
        console.log("funcionó lleno");
        mensajePrice.classList.remove("error");
    }
});
