import React, {useContext,useState} from "react";
import ThemeContext from "../context/context";
import DataContext from "../context/data-context";


function Cards() {
    const {weather} = useContext(DataContext);
    const {theme} = useContext(ThemeContext);
   
    function sliceWeatherDay(weatherDay) {
        const size = 8; 
        const daySlice = [];
        for (let i = 0; i <Math.ceil(weatherDay.length/size); i++){
            daySlice[i] = weatherDay.slice((i*size), (i*size) + size);
        }
       return daySlice
    }

    const [ indexDay, setIndexDay ] = useState(0);
    const [active,setActive] = useState(false)
    const openTab = e => {
        setIndexDay(e.target.dataset.index)
        setActive(true)
    };
    
    function rendDay(daySlice) {
      daySlice = sliceWeatherDay(weather.dataWth.list)
        const itemSliceDay = daySlice.map((el,i) => 
            
           
               <div className={`dayCardMain theme_` + theme} key={el[0].dt}   >
                <div className={"dayCardAct theme_" + theme}>{el[0].dt_txt.slice(0,10)} </div>
                <img className="dayCardIcon" 
                src={`http://openweathermap.org/img/wn/${el[0].weather[0].icon}@2x.png`}
                alt="iconWeather"></img>
                <div className={"dayCardTemp theme_" + theme}> + {Math.round(el[0].main.temp)}°</div>
                <div className="dayCardFeelTemp"> + {Math.round(el[0].main.feels_like)}°</div>
                <div className="dayCardDiscription">{el[0].weather[0].main}</div>
                <button className={`moreInfoTab`} onClick={openTab} data-index={i}>Подробнее</button>
            </div>     
         
        )
        return itemSliceDay
    }

    function dayTab(daytabSlice) {
        daytabSlice = sliceWeatherDay(weather.dataWth.list)[indexDay];
        const itemsSliceWeek = daytabSlice.map((el) => 
            <div className={`tabContainer`} key={el.dt} >        
                <div className={"dayTab dayCardAct theme_" + theme}>{el.dt_txt.slice(10,16)}</div>
                <img className="weatherIconTab" 
                src={`http://openweathermap.org/img/wn/${el.weather[0].icon}@2x.png`} 
                alt="weatherIcon"></img>
                <div className={"degreesTab dayCardTemp theme_" +theme }>+{Math.round(el.main.temp)}°</div>
                <div className="tabFeelTemp"> + {Math.round(el.main.feels_like)}°</div>
                <div className="humidityTab">{Math.round(el.main.humidity)}%</div>              
            </div>  
 );

 return itemsSliceWeek
};

    if(!weather.loading === false || weather.dataWth.length === 0 || weather.code === "404" ) return ''
  
    return (
        <div className="cards">  
        <div className={`descriptionPanel theme_` +theme}>Погода на пять дней</div>         
            <div className={"card theme_" + theme}>
                {rendDay()}
            </div>
            
        <div className="mainTabContainer"> 
                {dayTab()}
            </div>
        </div>
    )
}
export default Cards