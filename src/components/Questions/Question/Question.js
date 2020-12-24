import React, { useState } from 'react';
import QuestionStyles from './styles.module.scss';
import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';
function Question({ question, answer, id }) {
  const [showResponse, setshowResponse] = useState(false);
  return (
    <div
      className={QuestionStyles.container}
      onClick={() => setshowResponse(!showResponse)}
    >
      <div className={QuestionStyles.questionContainer}>
        <h3>
          <span>{id}</span>
          {question}
        </h3>
        {showResponse ? (
          <IoIosArrowDown className={QuestionStyles.icon} />
        ) : (
          <IoIosArrowForward className={QuestionStyles.icon} />
        )}
      </div>
      <div className={QuestionStyles.answer}>
        {showResponse && <p>{answer}</p>}
      </div>
    </div>
  );
}

export default Question;
