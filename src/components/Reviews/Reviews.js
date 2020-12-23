import React from 'react';
import ReviewsStyles from './styles.module.scss';
import data from '../../data';
import Review from './Review/Review';
import Carousel from 'react-elastic-carousel';
function Reviews() {
  const { reviews } = data;
  return (
    <div className={ReviewsStyles.container}>
      <div className={ReviewsStyles.titles}>
        <h2>
          Customer <span>Reviews</span>
        </h2>
        <h3>What People Say About Us</h3>
      </div>

      <div className={ReviewsStyles.bars}></div>
      <div className={ReviewsStyles.reviewsContainer}>
        <Carousel showArrows={false} autoPlaySpeed={5000} enableAutoPlay={true}>
          {reviews.map((review) => (
            <Review {...review} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Reviews;
