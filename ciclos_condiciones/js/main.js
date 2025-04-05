for (let i = 0; i < 5; i++) {
    console.log('Número: ' + i);
}

let i = 0;
while (i < 5) {
    console.log('Número: ' + i);
    i++;
}

//let i = 0;
do {
    console.log('Número: ' + i);
    i++;
} while (i < 5);


const password ="1234";

let passwordIngresado = prompt("Ingrese su contraseña : ");

while(passwordIngresado != password){
    passwordIngresado = prompt("Ingrese su contraseña : ");
}
console.log("Ingreso el password correcto !!!");


//validacion de usuarios

const usuarios = [
    {nombre: "Ana", edad: 45, convenio: true},
    {nombre: "Jesus", edad: 25, convenio: false},
    {nombre: "Cesar", edad: 20, convenio: true},
    {nombre: "Javier", edad: 57, convenio: false},
]

for(let i=0; i < usuarios.length; i++){
    if (usuarios[i].edad >=18 && usuarios[i].convenio){
        console.log(usuarios[i].nombre);
    }
}

let edad = 15;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

edad = null;
//let nombre = "Carlos";
let nombre;
if (edad !== null && edad !== undefined) {
  console.log(`Tienes ${edad} años`);
} else {
  if (nombre) {
    console.log(`Bienvenido, ${nombre}`);
  } else {
    console.log("Información incompleta");
  }
}

let valor1 = 0;
let resultadoOR = valor1 || "Valor predeterminado";

console.log(resultadoOR); // "Valor predeterminado"

let valor2 = 0;
let resultadoNullish = valor2 ?? "Valor predeterminado";

console.log(resultadoNullish); // 0