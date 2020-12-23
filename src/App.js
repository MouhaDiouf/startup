import './App.css';
import Boxes from './components/Boxes/Boxes';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Offers from './components/Offers/Offers';
import Pricings from './components/Pricings/Pricings';
import Stories from './components/Stories/Stories';
// https://webhunt.store/themeforest/dostart/index-8.html
//webhunt.store/themeforest/dostart/index-4.html
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />

      <Boxes />
      <Offers />
      <Stories />

      <Pricings />
    </div>
  );
}

export default App;
