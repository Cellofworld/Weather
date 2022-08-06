import React, {useContext} from "react";
import ThemeContext from "../context/context";
import { WeatherContext } from "../context/context";

function CardsDay() {
const date = new Date();
const hours = date.getHours(0);
const minutes = date.getMinutes(0,0);
const {theme} = useContext(ThemeContext);
const [state] = useContext(WeatherContext);

console.log(state.dataWeather.cod)
if(state.dataWeather.cod === "404" || state.dataWeather.length === 0 ) return ''
    return (
      <div className={"cardsDay theme_" + theme}>
            <div className="mainInfo">
            <div className="titleDay"> 
            <div className="degrees">{Math.round(state.dataWeather.list[0].main.temp)}°</div>
            <div className={"day theme_" + theme}>Сегодня</div>
            <div className="time mainCard">Время: {hours}:{minutes}</div>
            <div className="city mainCard">Город: {state.dataWeather.city.name}</div>
        </div>
            </div>
            <img className="weatherIcon" 
            src={`http://openweathermap.org/img/wn/${state.dataWeather.list[3].weather[0].icon}@2x.png`}
            alt="iconWeather">
            </img>
        </div>
    );
  }
  
  export default CardsDay;
  