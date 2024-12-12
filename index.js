// Definir opciones del gráfico
const chartOptions = {
    chart: {
        type: 'area',
        height: 180,
        toolbar: { show: false }, // Ocultar barra de herramientas del gráfico
        zoom: { enabled: false } // Deshabilitar el zoom del gráfico
    },
    colors: ['#3498db'], // Establecer el color del gráfico
    series: [{ name: 'Vistas', data: [18, 50, 42, 94, 41, 65] }], // Establecer los datos del gráfico
    dataLabels: { enabled: false }, // Ocultar etiquetas de datos del gráfico
    stroke: { width: 3, curve: 'smooth' }, // Establecer propiedades del trazo del gráfico
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0,
            stops: [0, 90, 100] // Establecer los puntos de gradiente de relleno del gráfico
        }
    },
    xaxis: {
        categories: ['Feb', 'Abr', 'Jun', 'Ago', 'Oct', 'Dic'], // Establecer categorías del eje x
        axisBorder: { show: false }, // Ocultar el borde del eje x
        labels: { style: { colors: '#a7a7a7', fontFamily: 'Times New Roman' } } // Establecer propiedades de las etiquetas del eje x
    },
    yaxis: { show: false }, // Ocultar el eje y
    grid: {
        borderColor: 'rgba(0, 0, 0, 0)', // Establecer el color del borde de la cuadrícula
        padding: { top: -30, bottom: -8, left: 12, right: 12 } // Establecer el relleno de la cuadrícula
    },
    tooltip: {
        enabled: true, // Habilitar las herramientas emergentes del gráfico
        y: { formatter: value => `${value}K` }, // Formatear la etiqueta del eje y en las herramientas emergentes
        style: { fontFamily: 'Times New Roman' } // Establecer la fuente de las herramientas emergentes
    },
    markers: { show: false } // Ocultar los marcadores del gráfico
};

// Crear una nueva instancia de ApexCharts con las opciones del gráfico y renderizarla
const chart = new ApexCharts(document.querySelector('.chart-area'), chartOptions);
chart.render();