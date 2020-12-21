import React from 'react';
import BoxStyles from './styles.module.scss';
function Box({ title, image, description }) {
  return (
    <div className={BoxStyles.container}>
      <div className={BoxStyles.imageContainer}>
        <img src={image} alt="" />
      </div>
      <div className={BoxStyles.textContainer}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Box;
