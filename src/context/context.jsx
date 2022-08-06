import React,{useReducer,createContext} from "react";
import useLocalStorage from "use-local-storage";

const ThemeContext = React.createContext();

export default ThemeContext;



const initialState = {
    indexDay: 0,
    reloaded: 1,
    activeDay: false,
    cityName:"Moscow",
    dataWeather: [],
    fiveDayData: null,
    todayData: [],

  };
  
  
  const reducer = (state,action) => {
  
    switch (action.type) {
        case "LOADED_DATA": {
            return {
                ...state,
                dataWeather: action.payload,
                fiveDayData: state.dataWeather.list
            }
        }
        case "UPDATE_CITY": {
          return {
            ...state,
            cityName: action.payload
            
          }
        } 
        case "SWITCH_TAB": {
            return {
                ...state,
                indexDay: action.payload,
                activeDay: true
            }
        }
        case "RELOADED": {
          const normReloaded = state.reloaded + 1
          return {
            ...state,
            reloaded: normReloaded
            
          }
        }
        
        default: {
            return state;
        }
    }
  }
  

export const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const value = useReducer(reducer, initialState);

  return <WeatherContext.Provider value={value}>{children}</WeatherContext.Provider>;
};

