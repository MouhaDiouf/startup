import React from 'react';
import PricingStyles from './styles.module.scss';
function Pricing({ type, cost, features, btn }) {
  return (
    <div className={PricingStyles.container}>
      <div className={PricingStyles.pricingDetails}>
        <h4 className={PricingStyles.type}>{type}</h4>
        <h3 className={PricingStyles.cost}>{cost}</h3>
      </div>

      <ul className={PricingStyles.featuresContainer}>
        {features.map((feature) => (
          <li>{feature}</li>
        ))}
      </ul>
      <button>{btn}</button>
    </div>
  );
}

export default Pricing;
