import React,{useState,useContext,useEffect} from "react";
import ThemeContext from "../context/context";
import DataContext from "../context/data-context";


const api ={
  base: 'https://api.openweathermap.org/data/2.5/',
  key: 'd56bdd456bb669797ec7b25916843a4d'
}
 

function Header() {
 
const {theme, setTheme} = useContext(ThemeContext);
const [query, setQuery] = useState('moscow');
const {weather, setWeather} = useContext(DataContext);

const switchTheme = () => {
  const newTheme  = theme === 'light' ? 'dark' : 'light';
  setTheme(newTheme)
};
  const fetchApi = () => {
    setWeather({ loading: true })
    
    fetch(`${api.base}/forecast?q=${query}&units=metric&APPID=${api.key}`)
    
    .then(res => res.json())   
    .then(result => {
      setWeather({ loading: false, dataWth: result, code: result.cod});
      setQuery('');
      
    });
   
  } 
  useEffect(() => {
    fetchApi()
  },[setWeather])

const search = evt => {
    if (evt.key === "Enter") {
     fetchApi();
    }
  };

if(!weather.loading === false || weather.dataWth.length === 0)
return <div></div>
else if (weather.code === "404") {
  return (
    <div className="notFound">
      <div className="cityNotFound">
        <span>Такого города не существует.</span>
        <span>Пожалуйста, введите корректное название</span>
      </div>
      <input 
              type="text"
              className="cityNotFoundInput"
              placeholder="Search..."
              onChange={e => setQuery(e.target.value)}
              value={query}
              onKeyPress={search}
            />
    </div>
  )
}


console.log(weather.code)
    return (
      <div className= 'header'>
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
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
      </div>
    );
  }

  export default Header;