import React from 'react';
import StoryStyles from './styles.module.scss';
function Story({ title, description }) {
  return (
    <div className={StoryStyles.container}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Know more</button>
    </div>
  );
}

export default Story;
