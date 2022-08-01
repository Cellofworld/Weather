import '../style/App.css'
import CardsDay from './This-day-card';
import Header from './Header-bar';
import DayInfo from './This-day-info-card';
import Cards from './Cards';


function App() {
  return (
    <div className="App">
      <Header />
      <CardsDay />
      <DayInfo />
      <Cards />
    </div>
  );
}

export default App;
