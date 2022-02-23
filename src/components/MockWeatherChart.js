import React, { memo, useEffect, useState } from "react";
import BarChart from "../utilities/BarChart";
import DropDownMenus from "../utilities/DropDown";
import { dataextractor } from "../utilities/helperFunctions";

const MockWeatherChart = memo((props) => {
    const { weatherData, city } = props;
    const [dataMode, setDataMode] = useState("humidity");
    const [maxTempData, setMaxTempData] = useState([2,3]);
    const [dataLabel, setDataLabel] = useState(['Day-1','Day-2']);
    const [dataHumidity, setDataHumidity] = useState([1,2]);

    useEffect(() => {
        if (weatherData && weatherData.daily) {
            let result = dataextractor.exctractWeatherData(weatherData);
            setMaxTempData(result.temp);
            setDataLabel(result.labels);
            setDataHumidity(result.humidity);
        }
    }, [weatherData]);

    //function to switch between humidity and temperature
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
                <div>
                    <div style={{ width: "30%", marginLeft: "34%" }} data-testid="drop-menus-id">
                        <DropDownMenus
                            dropDownItems={[
                                { name: "Humidity", id: 0 },
                                { name: "Maximum Temperature", id: 1 },
                            ]}
                            onSelect={changeDataMode}
                        />
                    </div>
                    <BarChart mode={dataMode} city={city} temp={maxTempData} humidity={dataHumidity} labels={dataLabel} />
                </div>
            ) : null}
        </React.Fragment>
    );
});

export default MockWeatherChart;
