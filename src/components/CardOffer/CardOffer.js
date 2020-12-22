import React from 'react';
import './cardStyles.scss';
function CardOffer({ title, description, icon }) {
  const handleHover = (e) => {
    let element = e.target;
    if (e.target.nodeName === 'P' || e.target.nodeName === 'H3') {
      element = e.target.parentElement.parentElement;
    } else if (
      e.target.classList.contains('textContainer') ||
      e.target.classList.contains('imageContainer')
    ) {
      element = e.target.parentElement;
    } else if (e.target.classList.contains('cardOffer-container')) {
      element = e.target;
    }

    element.classList.contains('hovered')
      ? element.classList.remove('hovered')
      : element.classList.add('hovered');
  };
  return (
    <div
      className="cardOffer-container"
      onMouseOver={handleHover}
      onMouseOut={handleHover}
    >
      <div className="imageContainer">{icon}</div>
      <div className="textContainer">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default CardOffer;
