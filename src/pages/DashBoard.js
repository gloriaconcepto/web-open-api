import { memo, useEffect, useState } from "react";
import { geolocated } from "react-geolocated";
import WeatherChart from "../components/WeatherChart";
import SearchBarComponent from "../utilities/SearchBar";
import { getCountryLatitudeCodeService, getWeatherDataService } from "../components/services";
import { getCountryLatapiUrl, getWeatherapiUrl } from "../constants/urlConstants";
const ManageDashBoard = memo((props) => {
    const [weatherData, setWeatherData] = useState([]);
    const [isError, setError] = useState(false);
    const [cityLocation, setCityLocation] = useState("");
    const { isGeolocationEnabled, isGeolocationAvailable, coords } = props;
    const weatherApiKey = process.env.REACT_APP_WEATHER_KEY;

    useEffect(() => {
        //to verify if the browser support geolocation

        if (isGeolocationAvailable) {
            if (isGeolocationEnabled) {
                //get latitude and longitude

                getInstanceWeatherForcast();
            } else {
                alert("Your have to enable your geolocation on the browser setting.Or go ahead and used the search bar ");
            }
        } else {
            alert("Your browser does not support geolocaion.But never mind we got you cover go ahead and used the search bar. ");
        }
    }, [coords, isGeolocationAvailable, isGeolocationEnabled]);

    // function to get the actual weather forcast with combination of two functions
    const getWeatherForcast = (cityName) => {
        getCityLatLon(cityName)
            .then((data) => getCityWeatherData(data[0].lat, data[0].lon))
            .then((weatherResponse) => {
                setWeatherData(weatherResponse);
                setCityLocation(cityName);
            })
            .catch((error) => {
                setError(true);
            });
    };

    // function to get country latitude and longititude
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
    //function to get the weather data
    const getCityWeatherData = async (lat, lon) => {
        let weatherParam = {
            lat: lat,
            lon: lon,
            unit: "metric",
            exclude: "hourly,minutely,alerts",
            appid: weatherApiKey,
        };
        try {
            const weatherDataResponse = await getWeatherDataService(getWeatherapiUrl, weatherParam, "GET");

            if (weatherDataResponse.ok && weatherDataResponse.status === 200) {
                return weatherDataResponse.json();
            }
        } catch (error) {
            setError(true);
        }
    };

    //function to get city name from the weatherForcast api
    const getString = (str) => {
        try {
            let stringToArr = Array.from(String(str), String);
            let city = "";
            let hasPassDash = false;

            for (let i = 0; i < stringToArr.length; i++) {
                if (hasPassDash) {
                    city = city + stringToArr[i];
                }
                if (stringToArr[i] === "/") {
                    hasPassDash = true;
                }
            }
            setCityLocation(city);
        } catch (error) {
            setError(true);
        }
    };

    // function to get the weather forcast for your location
    const getInstanceWeatherForcast = () => {
        if (coords && coords.latitude && coords.longitude) {
            getCityWeatherData(coords.latitude, coords.longitude).then((response) => {
                setWeatherData(response);
                getString(response.timezone);
            });
        }
    };
    return (
        <section className="col-12">
            <h1 className="weather-header" style={{ marginBottom: "3rem" }}>
                Weather Forcast App
            </h1>
            {isError && <h1>Service Unavialable at the moment</h1>}
            <section style={{ marginBottom: "2rem" }}>
                <SearchBarComponent onSearch={getWeatherForcast} />
            </section>
            <section>
                <WeatherChart weatherData={weatherData} city={cityLocation} />
            </section>
        </section>
    );
});

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(ManageDashBoard);
