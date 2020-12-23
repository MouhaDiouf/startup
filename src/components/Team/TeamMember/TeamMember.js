import React from 'react';
import TeamMeberStyles from './styles.module.scss';
import { FaWhatsappSquare, FaFacebook, FaLinkedinIn } from 'react-icons/fa';
function TeamMember({ name, role, img, title, description }) {
  return (
    <div className={TeamMeberStyles.container}>
      <div className={TeamMeberStyles.imgContainer}>
        <div className={TeamMeberStyles.overlay}>
          <div className={TeamMeberStyles.overlayTxt}>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className={TeamMeberStyles.icons}>
              <FaWhatsappSquare className={TeamMeberStyles.icon} />
              <FaLinkedinIn className={TeamMeberStyles.icon} />
              <FaFacebook className={TeamMeberStyles.icon} />
            </div>
          </div>
        </div>
        <img src={img} alt={name} />
      </div>
      <div className={TeamMeberStyles.textContainer}>
        <h4>{name}</h4>
        <h5>{role}</h5>
      </div>
    </div>
  );
}

export default TeamMember;
