class Forecast {
    constructor() {
        this.apiKey = "aZqMH5owQTouRyfbbZ6RWNDLK8x0dzbr";
        this.weatherURL = "http://dataservice.accuweather.com/currentconditions/v1/";
        this.cityURL = "http://dataservice.accuweather.com/locations/v1/cities/search";
    }

    getCityKey = async (city) => {
        const url = `${this.cityURL}?apikey=${this.apiKey}&q=${city}`;
        const response = await fetch(url);
        const data = await response.json();
        return data[0];
    }

    getWeatherInfo = async (cityKey) => {
        const url = `${this.weatherURL}${cityKey}?apikey=${this.apiKey}`;
        const response = await fetch(url)
        const data = await response.json();
        return data[0];
    }

    updateUI = async (cityname) => {
        const cityDetail = await this.getCityKey(cityname);
        const weatherDetail = await this.getWeatherInfo(cityDetail.Key);

        return { cityDetail, weatherDetail };
    }
}