import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherInfo() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Bengaluru",
        feels_like: 28.34,
        humidity: 66,
        temp: 26.87,
        tempMax: 26.87,
        tempMin: 26.87,
        weather: "overcast clouds",
    });

    let upDateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

        return (
        <div style={{textAlign: "center"}}>
            <h2>Weather App</h2>
            <SearchBox upDateInfo={upDateInfo}/>
            <InfoBox info={weatherInfo} />
        </div>
    )
}