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
import ClipLoader from 'react-spinners/ClipLoader';
import aslan from './images/aslan.jpeg';
import blog1 from './images/blog1.jpeg';
import blog2 from './images/blog2.jpeg';
import blog3 from './images/blog3.jpeg';
import blog4 from './images/blog4.jpeg';
import craig from './images/craig.jpeg';
import chooseUs from './images/chooseUs.svg';
import BottomHero from './images/bottomHero.png';
import hero from './images/hero.png';
import investors from './images/investors.jpeg';
import manager from './images/manager.jpeg';
import poster from './images/poster.jpeg';
import shams from './images/shams.jpeg';
import working from './images/working.jpeg';
import chairman from './images/chairman.jpeg';
import { useEffect, useState } from 'react';
import FadeIn from './FadeIn';

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
      aslan,
      blog1,
      blog2,
      blog3,
      blog4,
      craig,
      hero,
      investors,
      manager,
      poster,
      shams,
      working,
      chairman,
      BottomHero,
      chooseUs,
    ];
    cacheImages(imgs);
  }, []);
  return (
    <div className="App">
      {isLoading ? (
        <div className="loadingContainer">
          <ClipLoader size={100} color={'#ff5a6e'} loading={true} />
        </div>
      ) : (
        <>
          <FadeIn>
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
          </FadeIn>
        </>
      )}
    </div>
  );
}

export default App;
