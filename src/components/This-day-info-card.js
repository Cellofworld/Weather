import React, {useContext} from "react";
import ThemeContext from "../context/context";
import CardsDay from "./This-day-card";
import { WeatherContext } from "../context/context";

function DayInfo() {
  const {theme} = useContext(ThemeContext);
  const [state, dispatch] = useContext(WeatherContext);

function createweatherList () {
  const items = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: ` ${Math.round(state.dataWeather.list[0].main.temp)}° - ощущается как  ${Math.round(state.dataWeather.list[0].main.feels_like)}°`,
    },
    {
      icon_id: 'pressure',
      name: 'Давление',
      value: `${Math.round(state.dataWeather.list[0].main.pressure)} мм ртутного столба `,
    },
    {
      icon_id: 'precipitation',
      name: 'Влажность',
      value: `${state.dataWeather.list[0].main.humidity} %`,
    },
    {
      icon_id: 'wind',
      name: 'Ветер',
      value: `${Math.round(state.dataWeather.list[0].wind.speed)} м/с `,
    },
  ];
const itemCom = items.map((el) => 
<div className="cardDayInfo" key={el.icon_id}>
<div className={el.icon_id} ></div>
<div className="nameDayInfo">{el.name}</div>
<div className="valueDayInfo">{el.value}</div>
</div>

)  
return itemCom  
}

    
    
if(state.dataWeather.cod === "404" || state.dataWeather.length === 0 ) return ''

    return (
      <div className="containerMainInfo">
        <CardsDay />
       <div className={"mainDayInfo theme_" + theme}>
        {createweatherList()}
       </div>
      </div>
    );
  }
  
  export default DayInfo;
  

     