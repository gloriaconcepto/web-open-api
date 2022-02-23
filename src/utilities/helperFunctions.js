export const dataextractor={
    exctractWeatherData: (weatherData)=> {
        let temp = [];
        let humidity = [];
        let labels = [];
        for (let index = 0; index < weatherData.daily.length; index++) {
            temp.push(weatherData.daily[index].temp.max);
            humidity.push(weatherData.daily[index].humidity);
            labels.push(`Day-${index + 1}`);
        }
        return { temp, humidity, labels };
    }
} 
