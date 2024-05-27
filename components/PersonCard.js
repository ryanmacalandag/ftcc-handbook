// components/PersonCard.js
import React from 'react';
import styles from './PersonCard.module.css';

const PersonCard = ({ firstName, lastName, position, photo, linkedin }) => {
  return (
    <div className={styles.card}>
      <img src={photo} alt={`${firstName} ${lastName}`} className={styles.photo} />
      <h2>{firstName} {lastName}</h2>
      <p className={styles.position}>{position}</p>
      <a href={linkedin} target="_blank" rel="noopener noreferrer" className={styles.link}>
        LinkedIn Profile
      </a>
    </div>
  );
};

export default PersonCard;
