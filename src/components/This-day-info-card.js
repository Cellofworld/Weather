import React, {useContext} from "react";
import ThemeContext from "../context/context";
import DataContext from "../context/data-context";


function DayInfo() {
  const {theme} = useContext(ThemeContext);
  const {weather} = useContext(DataContext);

function createweatherList () {
  const items = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: ` ${Math.round(weather.dataWth.list[0].main.temp)}° - ощущается как  ${Math.round(weather.dataWth.list[0].main.feels_like)}°`,
    },
    {
      icon_id: 'pressure',
      name: 'Давление',
      value: `${Math.round(weather.dataWth.list[0].main.pressure)} мм ртутного столба `,
    },
    {
      icon_id: 'precipitation',
      name: 'Влажность',
      value: `${weather.dataWth.list[0].main.humidity} %`,
    },
    {
      icon_id: 'wind',
      name: 'Ветер',
      value: `${Math.round(weather.dataWth.list[0].wind.speed)} м/с `,
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

    
    
if(!weather.loading === false || weather.dataWth.length === 0 || weather.code === "404"  ) return ''

    return (
       <div className={"mainDayInfo theme_" + theme}>{
        createweatherList()
       }</div>
    );
  }
  
  export default DayInfo;
  

     