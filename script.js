// Obtener elementos del DOM
var homeDiv = document.querySelector('.home');
var cardDiv = document.querySelector('.estadisticas');
var infoDiv = document.querySelector('.info');
var inicioBtn = document.querySelector('.header .btn:nth-child(1)');
var estadisticasBtn = document.querySelector('.header .btn:nth-child(2)');
var nosotrosBtn = document.querySelector('.header .btn:nth-child(3)');
var accionesBtns = document.querySelectorAll('.estadisticas #acciones .toggle-button');
var opcionesBtns = document.querySelectorAll('.estadisticas #opciones .toggle-button');
var impactoDiv = document.querySelector('.impacto');
var resultadoImpacto = document.getElementById('resultadoImpacto');

// Ocultar los divs de gráfico e información al cargar la página
cardDiv.style.display = 'none';
infoDiv.style.display = 'none';

// Función para desactivar todos los botones
function desactivarBotones(botones) {
    botones.forEach(function(boton) {
        boton.classList.remove('active');
    });
}

// Mostrar el div de inicio al presionar el botón de inicio
inicioBtn.addEventListener('click', function() {
    homeDiv.style.display = 'block';
    cardDiv.style.display = 'none';
    infoDiv.style.display = 'none';
});

// Mostrar el div de gráfico al presionar el botón de estadísticas
estadisticasBtn.addEventListener('click', function() {
    homeDiv.style.display = 'none';
    cardDiv.style.display = 'block';
    infoDiv.style.display = 'none';
});

// Mostrar el div de información al presionar el botón de nosotros
nosotrosBtn.addEventListener('click', function() {
    homeDiv.style.display = 'none';
    cardDiv.style.display = 'none';
    infoDiv.style.display = 'block';
});

// Configurar el comportamiento de los botones en "Acciones estratégicas"
accionesBtns.forEach(function(boton) {
    boton.addEventListener('click', function() {
        desactivarBotones(accionesBtns);
        this.classList.add('active');
    });
});

// Configurar el comportamiento de los botones en "Proceso"
opcionesBtns.forEach(function(boton) {
    boton.addEventListener('click', function() {
        desactivarBotones(opcionesBtns);
        this.classList.add('active');
    });
});

// Función para actualizar el resultado en "Impacto"
function actualizarImpacto() {
    var accionesSeleccionadas = [];
    var opcionesSeleccionadas = [];

    // Obtener las acciones estratégicas seleccionadas
    accionesBtns.forEach(function(boton) {
        if (boton.classList.contains('active')) {
            accionesSeleccionadas.push(boton.textContent);
        }
    });

    // Obtener las opciones del proceso seleccionadas
    opcionesBtns.forEach(function(boton) {
        if (boton.classList.contains('active')) {
            opcionesSeleccionadas.push(boton.textContent);
        }
    });

    // Generar el texto de impacto combinando las selecciones
    var impactoTexto = accionesSeleccionadas.join(' + ') + ' + ' + opcionesSeleccionadas.join(' + ');

    // Actualizar el contenido de "Impacto"
    resultadoImpacto.textContent = impactoTexto;
}

// Asociar event listeners a los botones
accionesBtns.forEach(function(boton) {
    boton.addEventListener('click', function() {
        actualizarImpacto();
    });
});

opcionesBtns.forEach(function(boton) {
    boton.addEventListener('click', function() {
        actualizarImpacto();
    });
});