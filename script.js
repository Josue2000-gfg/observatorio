// Obtener elementos del DOM
var homeDiv = document.querySelector('.home');
var cardDiv = document.querySelector('.estadisticas');
var infoDiv = document.querySelector('.info');
var inicioBtn = document.querySelector('.header .btn:nth-child(1)');
var estadisticasBtn = document.querySelector('.header .btn:nth-child(2)');
var nosotrosBtn = document.querySelector('.header .btn:nth-child(3)');

// Ocultar los divs de gráfico e información al cargar la página
cardDiv.style.display = 'none';
infoDiv.style.display = 'none';

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
