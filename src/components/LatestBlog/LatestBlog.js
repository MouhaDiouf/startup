import React from 'react';
import BlogPost from './BlogPost/BlogPost';
import BlogStyles from './styles.module.scss';
import Carousel from 'react-elastic-carousel';
import data from '../../data';
function LatestBlog() {
  const { posts } = data;
  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 700, itemsToShow: 2 },
    { width: 1100, itemsToShow: 3 },
  ];
  return (
    <div className={BlogStyles.container}>
      <div className={BlogStyles.titles}>
        <h2>
          Latest <span>Blog</span>
        </h2>
        <h3>Have A Look To Our Latest Blog</h3>
      </div>

      <div className={BlogStyles.bar}></div>

      <div className={BlogStyles.sliderContainer}>
        <Carousel showArrows={false} breakPoints={breakpoints}>
          {posts.map((post) => (
            <BlogPost {...post} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default LatestBlog;
