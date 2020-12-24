import React from 'react';
import QuestionsStyles from './questionsSyles.module.scss';
import data from '../../data';
import Question from './Question/Question';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
import poster from '../../images/poster.jpeg';

function Questions() {
  const { questions } = data;
  return (
    <div className={QuestionsStyles.container}>
      <div className={QuestionsStyles.videoContainer}>
        <Player
          playsInline
          src="https://www.youtube.com/watch?v=PAu1qN_EzPU"
          poster={poster}
        />
      </div>
      <div className={QuestionsStyles.textContainer}>
        {questions.map((question, id) => (
          <Question {...question} id={id + 1} />
        ))}
      </div>
    </div>
  );
}

export default Questions;
