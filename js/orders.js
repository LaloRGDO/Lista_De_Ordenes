import {clientServices} from "../services/bd.js"

const agregarTrOrder = (orderNumber) => {
    const tr = document.createElement("tr");
    const td = `<td class="td_ordenes">${orderNumber}</td>`;
    
    tr.innerHTML = td;
    return tr;
}

const tablaOrdenes = document.querySelector(".tablaOrdenes_cuerpo");

window.addEventListener("onload", clientServices.obtenerBd().then(data => {
    var ordenes = [];
    for(var i=0;i<data.orders.length;i++){
        const nuevaLinea = agregarTrOrder(data.orders[i].number);
        tablaOrdenes.appendChild(nuevaLinea);
    }

    ordenes = data.orders;
    console.log(ordenes);

    if(localStorage != "undefined"){
        localStorage.ordenes = JSON.stringify(ordenes);
    }else{
        alert("Storage no compatible en este navegador");
    }
}));

tablaOrdenes.addEventListener("click", (event)=>{
    localStorage.orden = event.target.textContent;
    location.href="productos.html"
});