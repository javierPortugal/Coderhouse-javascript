const mensaje=document.getElementById('mensaje');
const mensaje2=document.getElementById('mensaje2');
const boton =document.getElementById('clickBoton');


mensaje.textContent =`Oprime el boton inferior para imprimir un mensaje la cantidad de veces que ingreses (ingresa un numero) !!`;
mensaje2.textContent =`Mensaje a desplegar !!!`;

boton.addEventListener('click', ()=>{

    let cantidad = prompt('Ingresa la cantidad de repeticiones !');

    

    if (isNaN(cantidad)){
        console.warn('Ingrese un numero');    
        alert('Ingrese un numero')
    }else{
        cantidad = Number(cantidad);
        console.log('la cantidad ingresada es: ', cantidad); 
        for(let i =0; i <(cantidad); i++){
            //mensaje2.innerHTML += '<br>' + 'Eeste es el mensaje : ' + (i+1);
            mensaje2.innerHTML = mensaje2.innerHTML +'<br>' + 'Este es el mensaje dentro del For loop numero =  ' + (i+1);
        }
    }
    



})



/*
const mensaje=document.getElementById('mensaje');
const boton=document.getElementById('cambiarDescuento');

let descuentoInicial;
//logica para cambio de descuento

const descuentoPredeterminado =10;
//let descuentoActual = descuentoInicial ?? descuentoPredeterminado;  //obseve cambio cuando se asigna el cero
let descuentoActual = descuentoInicial || descuentoPredeterminado;

//mensaje.textContent = `El descuento es del ${descuentoActual}%`;

boton.addEventListener('click',    ()=>{

    let descuentoIngresado = prompt("Ingrese el descuento en porcentaje...:");

    descuentoIngresado = Number(descuentoIngresado);
    
    //descuentoActual = descuentoIngresado ?? descuentoPredeterminado;
    descuentoActual = descuentoIngresado || descuentoPredeterminado;
    mensaje.textContent = `El descuento es del ${descuentoActual}%`;


})*/