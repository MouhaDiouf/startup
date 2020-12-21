import React from 'react';
import HeroStyles from './styles.module.scss';
import HeroImage from '../../images/hero.png';
import BottomHeroImg from '../../images/bottomHero.png';

function Hero() {
  return (
    <>
      <div className={HeroStyles.container}>
        <div className={HeroStyles.imageTextContainer}>
          <div className={HeroStyles.textContainer}>
            <h2>It's Time To Create Your</h2>
            <h1>Own Business Scheme</h1>
            <div className={HeroStyles.description}>
              <p>
                Celebrated delightful and especially increasing instrument am.
              </p>
              <p>Indulgence contrasted sufficent.</p>
            </div>
            <button>Get Started</button>
          </div>
          <div className={HeroStyles.imageContainer}>
            <img src={HeroImage} alt="hero" />
          </div>
        </div>
      </div>
      <div className={HeroStyles.bottomHero}>
        <img src={BottomHeroImg} alt="bottom hero" />
      </div>
    </>
  );
}

export default Hero;
