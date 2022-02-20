import React, { memo, useEffect, useMemo, useState } from "react";
import BarChart from "../utilities/BarChart";
import DropDownMenus from "../utilities/DropDown";
const WeatherChart = memo((props) => {
    const { weatherData, city } = props;
    const [dataMode, setDataMode] = useState("humidity");
    const [maxTempData, setMaxTempData] = useState([]);
    const [dataLabel, setDataLabel] = useState([]);
    const [dataHumidity, setDataHumidity] = useState([]);

    useEffect(() => {
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

    const changeDataMode = (mode) => {
        if (mode === "Humidity") {
            setDataMode("humidity");
        } else {
            setDataMode("temp");
        }
    };
    return (
        <React.Fragment>
            {maxTempData && dataHumidity && maxTempData.length > 0 && dataHumidity.length > 0 ? (
                <div style={{ width: "30%", marginLeft: "34%" }}>
                    <DropDownMenus
                        dropDownItems={[
                            { name: "Humidity", id: 0 },
                            { name: "Maximum Temperature", id: 1 },
                        ]}
                        onSelect={changeDataMode}
                    />
                </div>
            ) : null}
            <BarChart mode={dataMode} city={city} temp={maxTempData} humidity={dataHumidity} labels={dataLabel} />
        </React.Fragment>
    );
});

export default WeatherChart;
