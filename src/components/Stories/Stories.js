import React from 'react';
import Carousel from 'react-elastic-carousel';
import StoriesStyles from './styles.module.scss';
import data from '../../data';
import Story from './Story/Story';
function Stories() {
  const { stories } = data;
  const breakpoints = [{ width: 1, itemsToShow: 1 }];
  return (
    <div className={StoriesStyles.container}>
      <div className={StoriesStyles.imageContainer}></div>
      <div className={StoriesStyles.sliderContainer}>
        <Carousel
          breakPoints={breakpoints}
          showArrows={false}
          enableAutoPlay={true}
          autoPlaySpeed={10000}
        >
          {stories.map((story, idx) => (
            <Story {...story} key={idx} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Stories;
