import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>`;

console.log("Ejemplo sin definir el Tipo de dato (string, boolean, number");

let numero1 = 3;
let numero2 = 4;
let resultado1 = numero1 + numero2;

console.log(resultado1);

console.log("Ejemplo definiendo tipo de dato como number");

let a: number = 3;
let b: number = 1;
let resultado2: number = a + b;

console.log(resultado2);

console.log("Ejemplo definiendo tipo de dato como stringr");

let a: string = "ca";
let b: string = "sa";
let resultado3: string = a + b;

console.log(resultado3);
