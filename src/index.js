import React from 'react';
import useLocalStorage from "use-local-storage";
import ReactDOM from 'react-dom/client';
import './style/App.css'
import App from './components/App';
import ThemeContext from './context/context';
import { WeatherProvider } from './context/context';

import Cards from './components/Cards';
function Main () {
  const [theme, setTheme] = useLocalStorage('theme' ? 'dark' : 'light')
  

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={{theme, setTheme}}>
      <WeatherProvider >
      <App />

      </WeatherProvider>
      </ThemeContext.Provider>
    </React.StrictMode>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Main />
);

