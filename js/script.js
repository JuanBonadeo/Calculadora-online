class Calculadora {
    constructor(){
    }
sumar(num1,num2){
    return parseInt(num1) + parseInt(num2);
}
restar(num1,num2){
    return parseInt(num1) - parseInt(num2);
}
dividir(num1,num2){
    return parseInt(num1) / parseInt(num2);
}
multiplicar(num1,num2){
    return parseInt(num1) * parseInt(num2);
}
potenciar(num1,num2){
    return parseInt(num1) ** parseInt(num2);
}
raizCuadrada(num){
    return Math.sqrt(num);
}
raizCubica(num){
    return Math.cbrt(num);
}
}

const calculadora = new Calculadora();
     



  
    while (true) {
alert("Que operacion deseas realizar?");
let operacion = prompt("1: Suma, 2: Resta, 3: Division, 4: Multiplicacion, 5: Potenciacion, 6: Raiz Cuadrada, 7: Raiz Cubica");
if (operacion == 1) { 
    let numero1 = prompt("Primer numero para sumar");
    let numero2 = prompt("Segundo numero para sumar");
    resultado = calculadora.sumar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}

else if (operacion == 2) {
    let numero1 = prompt("Primer numero para restar");
    let numero2 = prompt("Segundo numero para restar");
    resultado = calculadora.restar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 3) {
    let numero1 = prompt("Primer numero para dividir");
    let numero2 = prompt("Segundo numero para dividir");
    resultado = calculadora.dividir(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 4) {
    let numero1 = prompt("Primer numero para multiplicar");
    let numero2 = prompt("Segundo numero para multiplicar");
    resultado = calculadora.multiplicar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 5) {
    let numero1 = prompt("Numero Base");
    let numero2 = prompt("Exponente");
    resultado = calculadora.potenciar(numero1,numero2);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 6) {
    let numero1 = prompt("Conocer la raiz cuadrada de...");
    resultado = calculadora.raizCuadrada(numero1);
    alert(`tu resultado es ${resultado}`);
}
else if (operacion == 7) {
    let numero1 = prompt("Conocer la raiz cubica de...");
    resultado = calculadora.raizCubica(numero1);
    alert(`tu resultado es ${resultado}`);
}

else {
    alert("Usted tiene que colocar un numero del 1 al 7 abrazo")
}
}

// para la proxima entrega lo paso a un switch y aniado mas opciones




































