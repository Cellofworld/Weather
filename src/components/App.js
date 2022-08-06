import '../style/App.css'
import Header from './Header-bar';
import DayInfo from './This-day-info-card';
import Cards from './Cards';
import { useContext } from 'react';
import ThemeContext from "../context/context";

function App() {
  const {theme} = useContext(ThemeContext); 
  return (
    <div className={`App theme_` + theme}>
      <Header />
      <DayInfo />
      <Cards />
    </div>
  );
}

export default App;

