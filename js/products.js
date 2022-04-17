import {clientServices} from "../services/bd.js";

var orden = JSON.parse(localStorage.orden);
var ordenes = JSON.parse(localStorage.ordenes);
var titulo = document.querySelector("h2");
const tablaProductos = document.querySelector(".tablaProductos_cuerpo");
const formulario = document.querySelector("#form");
var productosAnadidos = [];
var total = document.querySelector("#total");
var totalPagar = document.querySelector("#totalPagar");
var suma = 0;
titulo.textContent = `Orden Número: ${orden}`;

formulario.addEventListener("submit", function(event){
    event.preventDefault();

    var inputSku = document.querySelector("#sku");
    var inputName = document.querySelector("#name");
    var inputQuantity = document.querySelector("#quantity");
    var inputPrice = document.querySelector("#price");
    const noerror = document.querySelector("#mensajeError");

    var nuevoProducto = {
        "orden" : orden,
        "sku" : inputSku.value,
        "name" : inputName.value,
        "quantity" : inputQuantity.value,
        "price" : inputPrice.value
    }

    if(inputSku.value == "" || inputName.value == "" || inputQuantity.value == "" || inputPrice.value == ""){
        noerror.classList.add("error");

        const mensajeSku = document.querySelector(".mensajeSku");
        const mensajeNombre =  document.querySelector(".mensajeNombre");
        const mensajeCantidad = document.querySelector(".mensajeCantidad");
        const mensajePrice = document.querySelector(".mensajePrice");

        if(inputSku.value == ""){
            mensajeSku.classList.add("error");
            inputSku.classList.add("redBorder");
        }else{
            mensajeSku.classList.remove("error");
            inputSku.classList.remove("redBorder");
        }

        if(inputName.value == ""){
            mensajeNombre.classList.add("error");
            inputName.classList.add("redBorder");
        }else{
            mensajeNombre.classList.remove("error");
            inputName.classList.remove("redBorder");
        }

        if(inputQuantity.value == ""){
            mensajeCantidad.classList.add("error");
            inputQuantity.classList.add("redBorder");
        }else{
            mensajeCantidad.classList.remove("error");
            inputQuantity.classList.remove("redBorder");
        }

        if(inputPrice.value == ""){
            mensajePrice.classList.add("error");
            inputPrice.classList.add("redBorder");
        }else{
            mensajePrice.classList.remove("error");
            inputPrice.classList.remove("redBorder");
        }

    }else{
        noerror.classList.remove("error");
        const nuevaLineaDeForm = agregarTrOrder(nuevoProducto.sku, nuevoProducto.name, nuevoProducto.quantity, nuevoProducto.price);
        tablaProductos.appendChild(nuevaLineaDeForm);
        localStorage.setItem("productos", JSON.stringify(nuevoProducto));
        
        productosAnadidos.push(JSON.parse(localStorage.getItem("productos")));
        
        localStorage.setItem("productosGlobales", JSON.stringify(productosAnadidos));
        
        console.log(productosAnadidos);
        
        localStorage.setItem(`${orden}`,JSON.stringify(nuevoProducto));
        
        suma+= nuevoProducto.quantity * nuevoProducto.price;
        
        total.innerHTML = `$${suma.toFixed(2)}`;

        inputSku.value = "";
        inputName.value = "";
        inputQuantity.value = "";
        inputPrice.value = "";
    }

});

const agregarTrOrder = (sku, nombre, quantity, price) => {
    const tr = document.createElement("tr");
    const td = `<td>${sku}</td>
    <td>${nombre}</td>
    <td>${quantity}</td>
    <td>$ ${price}</td>
    <td>$ ${(quantity * price).toFixed(2)}</td>`;
    
    tr.innerHTML = td;
    return tr;
}

window.addEventListener("onload", clientServices.obtenerBd().then(data => {
    for(var i = 0; i<ordenes.length;i++){
        if(orden == ordenes[i].number){
            const nuevaLinea = agregarTrOrder(ordenes[i].items[0].sku, ordenes[i].items[0].name, ordenes[i].items[0].quantity, ordenes[i].items[0].price);
            tablaProductos.appendChild(nuevaLinea);
            suma+=(ordenes[i].items[0].quantity * ordenes[i].items[0].price);
            break;
        }
    }
    if(!localStorage.getItem("productosGlobales")==""){
        productosAnadidos = JSON.parse(localStorage.getItem("productosGlobales"));
    }
    for(var i = 0; i<productosAnadidos.length; i++){
        if(productosAnadidos[i].orden == orden){
            const nuevaLinea = agregarTrOrder(productosAnadidos[i].sku, productosAnadidos[i].name, productosAnadidos[i].quantity, productosAnadidos[i].price);
            tablaProductos.appendChild(nuevaLinea);
            suma+=(productosAnadidos[i].quantity * productosAnadidos[i].price);
        }
    }

    total.innerHTML = `$ ${suma.toFixed(2)}`;
    totalPagar.innerHTML = `Total: $ ${suma.toFixed(2)}`;

}));

function crearSuma(suma, suma2, suma3){
    var sumaTotal = suma + suma2 + suma3;
    const th = `<th colspan="1">${sumaTotal.toFixed(2)}<th>`;
    return th;
};


