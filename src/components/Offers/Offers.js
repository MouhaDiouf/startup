import React from 'react';
import Carousel from 'react-elastic-carousel';
import data from '../../data';
import CardOffer from '../CardOffer/CardOffer';
import OffersStyles from './styles.module.scss';
function Offers() {
  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
  ];
  const { offers } = data;
  return (
    <div className={OffersStyles.container}>
      <h2>
        What we <span>Offer</span>
      </h2>
      <h3>Understanding The Easy To Use Process</h3>
      <div className={OffersStyles.bar}></div>

      <div className={OffersStyles.carouselContainer}>
        <Carousel
          breakPoints={breakpoints}
          showArrows={false}
          enableAutoPlay={true}
        >
          {offers.map((offer, idx) => (
            <CardOffer key={idx} {...offer} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Offers;
