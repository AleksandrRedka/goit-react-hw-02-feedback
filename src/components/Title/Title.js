import React from 'react';
import PropTypes from 'prop-types';
import styles from './Title.module.css';

function Title ({ text }) {
  return <h3 className={styles.headerTitle}>{text}</h3>;
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
