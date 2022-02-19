import { memo, useEffect, useMemo, useState } from "react";
import CardDisplay from "../components/CardDisplay";
import WeatherChart from "../components/WeatherChart";
import SearchBarComponent from "../utilities/SearchBar";
const ManageDashBoard = memo((props) => {
    const getWeatherForcast = (cityName) => {
        console.log({ cityName });
    };
    return (
        <section className="col-12">
            <h1 className="weather-header" style={{ marginBottom: "3rem" }}>
                Weather Forcast App
            </h1>
            <section>
                <SearchBarComponent onSearch={getWeatherForcast} />
            </section>
            {/* <section>
                <CardDisplay />
            </section> */}
            <section>
                <WeatherChart />
            </section>
        </section>
    );
});

export default ManageDashBoard;
