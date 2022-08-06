import { type } from "@testing-library/user-event/dist/type";
import React,{useContext,useEffect,useState} from "react";
import ThemeContext from "../context/context";
import { WeatherContext } from "../context/context";



const api ={
  base: 'https://api.openweathermap.org/data/2.5/',
  key: 'd56bdd456bb669797ec7b25916843a4d'
}
 

function Header() {
  const [state, dispatch] = useContext(WeatherContext);
const {theme, setTheme} = useContext(ThemeContext);


const switchTheme = () => {

  const newTheme  = theme === 'light' ? 'dark' : 'light';
  setTheme(newTheme)
};
useEffect(() => {
  document.body.classList.add(`${theme}`);

  return function cleanup() {
    document.body.classList.remove(`${theme}`);
  };
}, [theme]);

  useEffect(() => {
    console.log("on initialize");
  
    fetch(`${api.base}/forecast?q=${state.cityName}&units=metric&APPID=${api.key}`)
    
    .then(res => res.json())   
    .then(result => {
      dispatch({type:"LOADED_DATA", payload: result})
    });

  
  },[state.reloaded]);


const search = evt => {
    if (evt.key === "Enter") {
dispatch({type:"RELOADED"})
    }
  };


  

if (state.dataWeather.cod === "404")
return (
  <div className="notFound">
    <div className="cityNotFound">
      <span>
        Такого города не существует.
        </span>
      <span>
        Пожалуйста, введите корректное название
        </span>
    </div>
    <input 
            type="text"
            className="cityNotFoundInput"
            placeholder="Search..."
            onChange={e => 
            dispatch({type:"UPDATE_CITY", payload: e.target.value})}
            value={state.cityName}
            onKeyPress={search}
          />
  </div>)

else 
return (<div className= 'header'>
<div className="firstWrapper">
  <div className="logo">
  </div>
  <div className="title">React weather</div>
</div>
<div className="secondWrapper">
  <div className="selectTheme" onClick={switchTheme}></div>
  <input 
  type="text"
  className="search-bar"
  placeholder="Search..."
  onChange={e => 
  dispatch({type:"UPDATE_CITY", payload: e.target.value})}
  value={state.cityName}
  onKeyPress={search}
/>
</div>
</div>)
      
  
  }

  export default Header;