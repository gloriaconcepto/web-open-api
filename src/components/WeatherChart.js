import React, { memo, useEffect, useMemo, useState } from "react";
import BarChart from "../utilities/BarChart";
const WeatherChart = memo((props) => {
    const { weatherData, city } = props;
    const [dataMode, setDataMode] = useState("humidity");
    const [maxTempData, setMaxTempData] = useState([]);
    const [dataLabel, setDataLabel] = useState([]);
    const [dataHumidity, setDataHumidity] = useState([]);
    useEffect(() => {
        console.log({ weatherData });
        if (weatherData && weatherData.daily) {
            let temp = [];
            let humidity = [];
            let labels = [];
            for (let index = 0; index < weatherData.daily.length; index++) {
                temp.push(weatherData.daily[index].temp.max);
                humidity.push(weatherData.daily[index].humidity);
                labels.push(`Day-${index + 1}`);
            }
            setMaxTempData(temp);
            setDataLabel(labels);
            setDataHumidity(humidity);
        }
    }, [weatherData]);
    return (
        <React.Fragment>
        
            <BarChart mode={dataMode} city={city} temp={maxTempData} humidity={dataHumidity} labels={dataLabel} />
        </React.Fragment>
    );
});

export default WeatherChart;
