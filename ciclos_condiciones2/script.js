const mensaje=document.getElementById('mensaje');
const boton=document.getElementById('cambiarDescuento');

let descuentoInicial;
//logica para cambio de descuento

const descuentoPredeterminado =10;
//let descuentoActual = descuentoInicial ?? descuentoPredeterminado;  //obseve cambio cuando se asigna el cero
let descuentoActual = descuentoInicial || descuentoPredeterminado;

mensaje.textContent = `El descuento es del ${descuentoActual}%`;

boton.addEventListener('click',    ()=>{

    let descuentoIngresado = prompt("Ingrese el descuento en porcentaje...:");

    descuentoIngresado = Number(descuentoIngresado);
    
    //descuentoActual = descuentoIngresado ?? descuentoPredeterminado;
    descuentoActual = descuentoIngresado || descuentoPredeterminado;
    mensaje.textContent = `El descuento es del ${descuentoActual}%`;


})