import React from 'react';
import PricingsStyles from './styles.module.scss';
import data from '../../data';
import Pricing from './Pricing/Pricing';
function Pricings() {
  const { pricings } = data;
  return (
    <div className={PricingsStyles.container}>
      <h2>
        Pricing <span>Plan</span>
      </h2>
      <h3>List Of Our Pricing Packages</h3>
      <div className={PricingsStyles.bar}></div>
      <div className={PricingsStyles.pricesContainer}>
        {pricings.map((pricing) => (
          <Pricing {...pricing} />
        ))}
      </div>
    </div>
  );
}

export default Pricings;
