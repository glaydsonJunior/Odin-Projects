
const btSearch = document.querySelector("#searcher")
const locationInput = document.querySelector("#location-field")

btSearch.addEventListener("click", async () => {
    const location = locationInput.value
    const result = await getWeather(location).then( (r) => { createWeatherHTML(r) })
})

function createWeatherHTML(data) {

    const icons = JSON.parse(localStorage.getItem("icons"))

    const container = document.querySelector("#weather-container")
    container.innerHTML = ''

    const head = document.createElement('div');
    head.className = 'weather-head';

    const headImg = document.createElement('img');
    headImg.src = icons[data.days[0].icon];
    headImg.alt = data.days[0].icon;

    console.log("./assets/"+data.days[0].icon+".svg")

    const headInfo = document.createElement('div');
    headInfo.className = 'weather-head-info';

    headInfo.innerHTML = `
        <p>Temperatura: ${Math.round((data.days[0].feelslike-32)/1.8)}</p>
        <p>Humidade: ${data.days[0].humidity}%</p>
        <p>Precipitação: ${data.days[0].precipprob}%</p>
        <p>Vento: ${data.days[0].windspeed} m/s</p>
    `;

    const headDescription = document.createElement('h4');
    headDescription.textContent = data.description;

    head.appendChild(headImg);
    head.appendChild(headInfo);
    head.appendChild(headDescription);


    const foot = document.createElement('div');
    foot.className = 'weather-foot';

    data.days.slice(1, 16).forEach((day, index) => {
        if (index === 8) foot.appendChild(document.createElement('br'));

        const footElement = document.createElement('div');
        footElement.className = 'weather-foot-element';

        footElement.innerHTML = `
            <img src="${icons[day.icon]}" alt="${day.icon}">
            <p>${day.datetime}</p>
            <p>Temperature: ${Math.round((day.feelslike-32)/1.8)}</p>
            <p>Precipitação: ${day.precipprob}%</p>
            <p>Vento: ${day.windspeed} m/s</p>
        `;

        foot.appendChild(footElement);
    });

    container.appendChild(head);
    container.appendChild(foot);

    return container;
}


