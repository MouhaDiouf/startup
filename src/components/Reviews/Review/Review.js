import React from 'react';
import ReviewStyles from './styles.module.scss';
import { GoQuote } from 'react-icons/go';

function Review({ name, job, review, img }) {
  return (
    <div className={ReviewStyles.container}>
      <div className={ReviewStyles.imageContainer}>
        <img src={img} alt={name} />
      </div>
      <div className={ReviewStyles.textContainer}>
        <GoQuote className={ReviewStyles.icon} />
        <p>{review}</p>
        <h3 className={ReviewStyles.name}>{name}</h3>
        <h4 className={ReviewStyles.job}>{job}</h4>
      </div>
    </div>
  );
}

export default Review;
