import { getCSS, tickConfig } from "./common.js";

async function criarGraficoMeteorologico() {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m';
    
    const res = await fetch(url);
    const dados = await res.json();

    const horas = dados.hourly.time;
    const temperaturas = dados.hourly.temperature_2m;
    const umidade = dados.hourly.relative_humidity_2m;

    const data = [
        {
            x: horas,
            y: temperaturas,
            type: 'line',
            name: 'Temperatura (°C)',
            marker: {
                color: getCSS('--secondary-color')
            }
        },
        {
            x: horas,
            y: umidade,
            type: 'line',
            name: 'Umidade Relativa (%)',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ];

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: 'Previsão Meteorológica',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                size: 30,
                font: getCSS('--font')
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Hora',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: 'Valor',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    };

    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    document.getElementById('graficos-container').appendChild(grafico);
    Plotly.newPlot(grafico, data, layout);
}

criarGraficoMeteorologico();
