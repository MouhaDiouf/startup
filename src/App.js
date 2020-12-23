import './App.css';
import Boxes from './components/Boxes/Boxes';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Offers from './components/Offers/Offers';
import Pricings from './components/Pricings/Pricings';
import Reviews from './components/Reviews/Reviews';
import Stories from './components/Stories/Stories';
import Team from './components/Team/Team';

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
      <Reviews />
      <Team />
    </div>
  );
}

export default App;
