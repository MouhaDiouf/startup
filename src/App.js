import './App.css';
import Boxes from './components/Boxes/Boxes';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Offers from './components/Offers/Offers';
import Pricing from './components/Pricing/Pricing';
// https://webhunt.store/themeforest/dostart/index-8.html
//webhunt.store/themeforest/dostart/index-4.html
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />

      <Boxes />
      <Offers />
      <Pricing />
    </div>
  );
}

export default App;
