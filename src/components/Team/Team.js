import React from 'react';
import TeamStyles from './styles.module.scss';
import data from '../../data';
import TeamMember from './TeamMember/TeamMember';
function Team() {
  const { team } = data;
  return (
    <div className={TeamStyles.container}>
      <div className={TeamStyles.textContainer}>
        <h2>
          {' '}
          Innovative <span>Team</span>
        </h2>
        <h3>Meet Our Awesome And Expert Team Members</h3>
        <div className={TeamStyles.bars}></div>
      </div>
      <div className={TeamStyles.teamMembersContainer}>
        {team.map((teamMember, idx) => (
          <TeamMember {...teamMember} key={idx} />
        ))}
      </div>
    </div>
  );
}

export default Team;
