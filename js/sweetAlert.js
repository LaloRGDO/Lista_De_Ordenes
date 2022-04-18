const botonPagar = document.querySelector(".boton_pagar");

botonPagar.addEventListener("click",()=>{
    Swal.fire({
        title: "Procesando pago...",
        icon: "info",
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
    })

    setTimeout(()=>{
        Swal.fire({
            title: "Pago Realizado!",
            icon: "success",
            showConfirmButton: true,
            allowOutsideClick: true,
            allowEscapeKey: true,
            allowEnterKey: true,
        })
    },2500)    
});

/*setTimeout(Swal.fire({
    title: "Pago Realizado!",
    icon: "success",
    showConfirmButton: true,
    timerProgressBar: true,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
}),3000);*/
