import React, { memo } from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = memo((props) => {
    const { temp, labels, mode, city, humidity } = props;

    let options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: `${mode === "temp" ? `Max Temperature forcast for ${city} for the following days.NB All unit in Kelvin` : "Humidity measure using metric system"}`,
            },
        },
    };

    return (
        <React.Fragment>
            {temp && humidity && temp.length > 0 && humidity.length > 0 ? (
                <Bar
                    options={options}
                    data={{
                        labels,
                        datasets: [
                            {
                                label: "Data",
                                data: mode === "temp" ? temp : humidity,
                                backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(255, 159, 64, 0.2)"],
                                borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],

                                borderWidth: 0.5,
                            },
                        ],
                        // datasets: [
                        //     {
                        //         label: "Day-1",
                        //         data: { "Day-1": 1000 },
                        //         backgroundColor: "rgba(255, 99, 132, 0.5)",
                        //     },
                        //     {
                        //         label: "Day-2",
                        //         data: { "Day-2": 100 },
                        //         backgroundColor: "rgba(53, 162, 235, 0.5)",
                        //     },
                        // ],
                    }}
                />
            ) : null}
        </React.Fragment>
    );
});

export default BarChart;
