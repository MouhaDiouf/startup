import React from 'react';
import ChooseUsStyles from './styles.module.scss';
import people from '../../images/chooseUs.svg';
import { TiTick } from 'react-icons/ti';
function ChooseUs() {
  return (
    <div className={ChooseUsStyles.container}>
      <div className={ChooseUsStyles.imageText}>
        <div className={ChooseUsStyles.imageContainer}>
          <img src={people} alt="people" />
        </div>
        <div className={ChooseUsStyles.textContainer}>
          <h2>Why Choose Us</h2>
          <h3>Designed for startups with expert developer</h3>
          <p>
            Both rest of know draw fond post as. It agreement defective to
            excellent. Feebly do engage of narrow. Extensive repulsive belonging
            depending if promotion be zealously as. Preference inquietude ask
            now are dispatched led appearance. Small meant in so doubt hopes.
          </p>
          <div className={ChooseUsStyles.list}>
            <div>
              <h4>
                <span>
                  <TiTick />
                </span>{' '}
                ROCKET FAST
              </h4>
              <ul>
                <li>Elderly is detract tedious assured private</li>
              </ul>
            </div>
            <div>
              <h4>
                {' '}
                <span>
                  <TiTick />
                </span>{' '}
                CUSTOM FRAMEWORK
              </h4>
              <ul>
                <li>Do travelling companions contrasted</li>
              </ul>
            </div>
            <div>
              <h4>
                {' '}
                <span>
                  <TiTick />
                </span>{' '}
                MINIMAL DESIGN
              </h4>
              <ul>
                <li>Mistress strongly remember up</li>
              </ul>
            </div>
          </div>
          <button>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
