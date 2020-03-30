import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statictics.module.css';
import Title from '../Title/Title';

const Statistics = ({ good, neutral, bad, total }) => {
  const positiveFeedback = () => Math.round((good / total) * 100);
  return (
    <div>
      <Title text='Statistics' />
      <ul className={styles.statList}>
        <li className={styles.statItem}>
          <span>Good: </span>
          <span>{good}</span>
        </li>
        <li className={styles.statItem}>
          <span>Neutral: </span>
          <span>{neutral}</span>
        </li>
        <li className={styles.statItem}>
          <span>Bad: </span>
          <span>{bad}</span>
        </li>
      </ul>
      <p className={styles.statTotal}>
        Positive feedback :<span>{positiveFeedback()}%</span>
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Statistics;
