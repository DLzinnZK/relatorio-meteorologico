const url = 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m';

async function vizualizarInformacoesMeteorologicas() {
    const res = await fetch(url);
    const dados = await res.json();

    const temperaturaAtual = dados.current_weather.temperature;
    const velocidadeVentoAtual = dados.current_weather.windspeed;

    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container__texto');
    paragrafo.innerHTML = `A temperatura atual é <span>${temperaturaAtual}°C</span> e a velocidade do vento é <span>${velocidadeVentoAtual} km/h</span>.`;

    const container = document.getElementById('graficos-container');
    container.appendChild(paragrafo);
}

vizualizarInformacoesMeteorologicas();
