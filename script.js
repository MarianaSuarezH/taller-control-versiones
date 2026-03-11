function saludar(){
let nombre = document.getElementById("nombre").value.trim();

if(!nombre){
alert("Por favor ingresa tu nombre");
return;
}

alert("Hola " + nombre);
}