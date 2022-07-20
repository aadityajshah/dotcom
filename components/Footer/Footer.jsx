import React from 'react';
import styles from '../../styles/Home.module.css'
//import { Test } from './Footer.styles';

const Footer = (props) => (
  <footer className={styles.footer}>
      <p>
        Copyright © 2021 Aaditya Shah.&nbsp;
      </p>
  </footer>
);

Footer.propTypes = {
  // bla: PropTypes.string,
};

Footer.defaultProps = {
  // bla: 'test',
};

export default Footer;
