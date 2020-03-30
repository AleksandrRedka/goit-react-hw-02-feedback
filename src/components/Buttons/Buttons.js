import React from 'react';
import PropTypes from 'prop-types';
import styles from './Buttons.module.css';

const Buttons = ({ options, leaveFeedback, reset }) => {
  return (
    <div className={styles.boxButton}>
      {options.map(item => (
        <button
          className={styles.button}
          key={item}
          type='button'
          name={item}
          onClick={e => leaveFeedback(e)}
        >
          {item}
        </button>
      ))}
      <button
        className={styles.buttonReset}
        type='button'
        onClick={() => reset()}
      >
        Reset
      </button>
    </div>
  );
};

Buttons.propTypes = {
  options: PropTypes.arrayOf({
    item: PropTypes.string.isRequired,
  }).isRequired,
  leaveFeedback: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default Buttons;
