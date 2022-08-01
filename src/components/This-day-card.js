import React, {useContext,useEffect} from "react";
import ThemeContext from "../context/context";
import DataContext from "../context/data-context";

function CardsDay() {
const date = new Date();
const hours = date.getHours();
const minutes = date.getMinutes(0);
const {theme} = useContext(ThemeContext);
const {weather} = useContext(DataContext);

useEffect(()  => {
    document.body.classList.add('theme_' + theme);
    return () => {
        document.body.classList.remove('theme_' + theme);
    };
});

if(!weather.loading === false || weather.dataWth.length === 0 || weather.code === "404" ) return ''
    return (
     
      <div className={"cardsDay theme_" + theme}>
            <div className="mainInfo">
            <div className="titleDay"> 
            <div className="degrees">{Math.round(weather.dataWth.list[0].main.temp)}°</div>
            <div className={"day theme_" + theme}>Сегодня</div>
            <div className="time mainCard">Время: {hours}:{minutes}</div>
            <div className="city mainCard">Город: {weather.dataWth.city.name}</div>
        </div>
            </div>
            <img className="weatherIcon" 
            src={`http://openweathermap.org/img/wn/${weather.dataWth.list[3].weather[0].icon}@2x.png`}
            alt="iconWeather">
            </img>
        </div>
    );
  }
  
  export default CardsDay;
  