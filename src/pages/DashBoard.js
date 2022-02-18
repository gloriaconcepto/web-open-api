import { memo, useEffect, useMemo, useState } from "react";
import CardDisplay from "../components/CardDisplay";
import WeatherChart from "../components/WeatherChart";
const ManageDashBoard = memo((props) => {
    return (
        <section className="col-12">
            <h1 className="weather-header">Weather Forcast App</h1>
            <section>
                <CardDisplay />
            </section>
            <section>
                <WeatherChart />
            </section>
        </section>
    );
});

export default ManageDashBoard;
