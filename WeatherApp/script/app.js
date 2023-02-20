const form = document.querySelector('form');
const weatherCard = document.querySelector('.weather-card');
const spinner = document.querySelector('.spinner');
const error = document.querySelector('.error');
const forecast = new Forecast();

function update(data) {
    const { cityDetail, weatherDetail } = data;

    spinner.style.display = 'none';
    weatherCard.style.opacity = '1';

    weatherCard.innerHTML =
        `<img class="weather-img" src="./img/${weatherDetail.IsDayTime ? 'day' : 'night'}.svg" alt="">
        <div class="weather-detail">
            <img src="./img/icons/${weatherDetail.WeatherIcon}.svg">
            <div>
                <p class="result-cityName">${cityDetail.EnglishName}</p>
                <div class="weather-text">
                    <div class="weather-condition">${weatherDetail.WeatherText}</div>
                    <div class="temp">
                        <span class="result-temp">${weatherDetail.Temperature.Metric.Value}</span>
                        <span>&deg;C</span>
                    </div>
                </div>
            </div>
        </div>`
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.reset();

    error.style.display = 'none';
    weatherCard.style.opacity = '0.5';
    spinner.style.display = 'block';
    
    forecast.updateUI(form.cityName.value)
        .then(data => update(data))
        .catch(err => {
            console.log(err);
            error.style.display = 'block';
            spinner.style.display = 'none';
        });
})
