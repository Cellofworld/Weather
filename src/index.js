import React, {useState} from 'react';
import useLocalStorage from "use-local-storage";
import ReactDOM from 'react-dom/client';
import './style/App.css'
import App from './components/App';
import ThemeContext from './context/context';
import DataContext from './context/data-context'



function Main () {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
  const [weather, setWeather] = useState({
    loading: false,
    code: null,
    dataWth: [],
  });

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <DataContext.Provider value={{weather, setWeather}}>
          <App />
      </DataContext.Provider>
      </ThemeContext.Provider>
      
    </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Main />
);

