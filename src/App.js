import './App.css';
import Boxes from './components/Boxes/Boxes';
import ContactUs from './components/ContactUs/ContactUs';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import LatestBlog from './components/LatestBlog/LatestBlog';
import Offers from './components/Offers/Offers';
import Pricings from './components/Pricings/Pricings';
import Questions from './components/Questions/Questions';
import Reviews from './components/Reviews/Reviews';
import Stories from './components/Stories/Stories';
import Team from './components/Team/Team';
import Map from './components/Map/Map';
import BottomLinks from './components/BottomLinks/BottomLinks';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';

// https://webhunt.store/themeforest/dostart/index-8.html
//webhunt.store/themeforest/dostart/index-4.html
function App() {
  const [isLoading, setIsLoading] = useState(true);

  const cacheImages = async (srcArray) => {
    const promises = await srcArray.map((src) => {
      return new Promise(function (resolve, reject) {
        const img = new Image();
        img.src = src;
        img.onload = resolve();
        img.onerror = reject();
      });
    });
    await Promise.all(promises);
    setIsLoading(false);
  };
  useEffect(() => {
    const imgs = [
      'https://images.unsplash.com/photo-1602526211905-6adc54adb8d2?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1062&q=80',
    ];
    cacheImages(imgs);
  }, []);
  return (
    <div className="App">
      <div className="headerHero">
        <Header />
        <Hero />
      </div>

      <Boxes />
      <Offers />
      <Stories />

      <Pricings />
      <Reviews />
      <Team />
      <Questions />
      <LatestBlog />
      <ContactUs />
      <Map />
      <BottomLinks />
      <Footer />
    </div>
  );
}

export default App;
