var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector(".paciente");

var tdPeso = paciente.querySelector(".info-peso");
var peso =  tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;


var imcPaciente = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValido = true;


if (peso <= 10 || peso >= 200) {
    imcPaciente.textContent = "Peso inválido!";
    pesoEhValido = false;
} if (altura <= 0 || altura >= 3.00 ) {
    imcPaciente.textContent = "Altura inválida!";
    alturaEhValido = false;
}

if(alturaEhValido == true && pesoEhValido == true) {
    var imc = peso / (altura * altura);
    imcPaciente.textContent = imc;
}

