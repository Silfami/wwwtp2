//

const VALOR_TICKET = 200; // Valor Ticket
const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

// Expresiones Regulares para validar Input
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.err
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

}

const campos = {
	nombre: false,
	apellido: false,
	mail: false,
	totalP: false
}

// Descuentos por categoría
const ESTUDIANTE= 0.80;
const TRAINEE   = 0.50;
const JUNIOR    = 0.15;
const SINCATEGORIA = 0;

// Botones
btnBorrar.addEventListener('ondbclick', limpiarCampos);

// Validar datos
// Validar Formularios
const validarFormulario = (e) => {


	switch (e.target.name) {
		
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
		case "mail":
			validarCampo(expresiones.mail, e.target, 'mail');
		break;
		
	}
}

//Validar Campo : Valida y muestra mensaje en pantalla. 
const validarCampo = (expresion, input, campo) => {
	
	campos[campo] = expresion.test(input.value)
	if(campos[campo]) {
		
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
			
	} else {
		
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');	
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
	
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	
	if(campos.apellido && campos.nombre && campos.mail  ){

		if (limpiarCampos()){
			
			alert("Datos OK");
			formulario.reset();
				}
		}
	 else {
		alert('Error Datos Ingresados');
		}
	}
	);

//Calcular Descuento y Total a Pagar

function Descuento () {
	let categoria = document.querySelector('#categoriaSelect').value;
	
	switch (categoria) {
		case "0":
			
			return SINCATEGORIA;
		case "1":
			
			return ESTUDIANTE;
		case "2":
			
			return TRAINEE;
		case "3":
			
			return JUNIOR;
		default:
			
			return 1;
			break;

	}

	
}
const calcularTotal = () => {

let	cantidad = document.querySelector('#cantidadTk').value;

document.getElementById('totalPago').innerHTML = 0;
totalPago = (VALOR_TICKET * cantidad) - (VALOR_TICKET * Descuento()) ;
totalP = (totalPago > 0)
if (totalP) {
	document.getElementById('totalPago').innerHTML = totalPago;
}
}

// Inicializar Campos
const inicializarInput =(campo)=>{

	campos[campo] = false;
	document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
	document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');

}

function limpiarCampos() {
	
	inicializarInput('nombre');
	inicializarInput('apellido');
	inicializarInput('mail');
	document.getElementById('totalPago').innerHTML = 0;
	return(true);
	
}

// Canfirmar el ingreso
function confirmarCompra () {
	
	return(true);
	}