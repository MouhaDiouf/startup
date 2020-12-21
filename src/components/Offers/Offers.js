import React from 'react';
import Carousel from 'react-elastic-carousel';
import data from '../../data';
import CardOffer from '../CardOffer/CardOffer';
function Offers() {
  const { offers } = data;
  return (
    <div>
      <h2>
        What we <span></span> offer
      </h2>
      <h3>Understanding The Easy To Use Process</h3>
      <div>
        <Carousel>
          {offers.map((offer) => (
            <CardOffer {...offer} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Offers;
