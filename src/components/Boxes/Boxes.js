import React from 'react';
import Box from './Box/Box';
import BoxesStyles from './styles.module.scss';
import data from '../../data';
function Boxes() {
  const { boxes } = data;
  return (
    <div className={BoxesStyles.container}>
      <div className={BoxesStyles.boxesContainer}>
        {boxes.map((box, idx) => (
          <Box key={idx} {...box} />
        ))}
      </div>
    </div>
  );
}

export default Boxes;
