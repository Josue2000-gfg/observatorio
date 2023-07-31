// Datos del backend
var data = {
    "0-18 años": {
        "Hombre": 100,
        "Mujer": 120
    },
    "18-60 años": {
        "Hombre": 200,
        "Mujer": 180
    },
    "Mayores de 60 años": {
        "Hombre": 80,
        "Mujer": 90
    }
};

// Procesar datos para el gráfico
var labels = Object.keys(data);
var datasets = [];
for (var key in data[labels[0]]) {
    var dataset = {
        label: key,
        data: []
    };
    for (var i = 0; i < labels.length; i++) {
        dataset.data.push(data[labels[i]][key]);
    }
    datasets.push(dataset);
}

// Crear gráfico
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: datasets
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Obtener elementos del DOM
var infoDiv = document.querySelector('.home');
var cardDiv = document.querySelector('.card');
var inicioBtn = document.querySelector('.header .btn:nth-child(1)');
var estadisticasBtn = document.querySelector('.header .btn:nth-child(2)');

// Ocultar el div de gráfico al cargar la página
cardDiv.style.display = 'none';

// Mostrar el div de información al presionar el botón de inicio
inicioBtn.addEventListener('click', function() {
    infoDiv.style.display = 'block';
    cardDiv.style.display = 'none';
});

// Mostrar el div de gráfico al presionar el botón de estadísticas
estadisticasBtn.addEventListener('click', function() {
    infoDiv.style.display = 'none';
    cardDiv.style.display = 'block';
});
