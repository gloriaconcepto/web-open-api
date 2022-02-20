import { memo, useEffect, useState } from "react";
import CardDisplay from "../components/CardDisplay";
import WeatherChart from "../components/WeatherChart";
import SearchBarComponent from "../utilities/SearchBar";
import { getCountryLatitudeCodeService, getWeatherDataService } from "../components/services";
import { getCountryLatapiUrl, getWeatherapiUrl } from "../constants/urlConstants";
const ManageDashBoard = memo((props) => {
    const [weatherData, setWeatherData] = useState([]);
    const [isError, setError] = useState(false);
    const weatherApiKey = process.env.REACT_APP_WEATHER_KEY;
    const getWeatherForcast = (cityName) => {
        getCityLatLon(cityName)
            .then((data) => getCityWeatherData(data[0].lat, data[0].lon))
            .then((weatherResponse) => {
                setWeatherData(weatherResponse);
            })
            .catch((error) => {
                setError(true);
            });
    };

    // get country latitude and longititude
    const getCityLatLon = async (city) => {
        let cityParam = {
            q: city,
            appid: weatherApiKey,
        };
        try {
            const countryDataResponse = await getCountryLatitudeCodeService(getCountryLatapiUrl, cityParam, "GET");
            if (countryDataResponse.ok && countryDataResponse.status === 200) {
                return countryDataResponse.json();
            }
        } catch (error) {
            setError(true);
        }
    };
    //get the weather data
    const getCityWeatherData = async (lat, lon) => {
        let weatherParam = {
            lat: lat,
            lon: lon,
            unit: "metric",
            appid: weatherApiKey,
        };
        try {
            const weatherDataResponse = await getWeatherDataService(getWeatherapiUrl, weatherParam, "GET");
            console.log(weatherDataResponse);
            if (weatherDataResponse.ok && weatherDataResponse.status === 200) {
                //console.log({ countryDataResponse });
                return weatherDataResponse.json();
            }
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {}, []);
    return (
        <section className="col-12">
            <h1 className="weather-header" style={{ marginBottom: "3rem" }}>
                Weather Forcast App
            </h1>
            <section>
                <SearchBarComponent onSearch={getWeatherForcast} />
            </section>
              <section>
                <WeatherChart weatherData={weatherData} />
            </section>
        </section>
    );
});

export default ManageDashBoard;
