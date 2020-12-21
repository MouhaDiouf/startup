import React from 'react';
import BoxStyles from './styles.module.scss';
function Box({ title, icon, description, color }) {
  return (
    <div className={BoxStyles.container}>
      <div className={BoxStyles.imageContainer} style={{ color: color }}>
        {icon}
      </div>
      <div className={BoxStyles.textContainer}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Box;
