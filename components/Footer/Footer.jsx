import React from 'react';
import styles from '../../styles/Home.module.css'
//import { Test } from './Footer.styles';

const Footer = (props) => (
  <footer className={styles.footer}>
      <p>
        Copyright 2021 Aaditya Shah.&nbsp;
      </p>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{' '}
        <img src="/vercel-light.svg" alt="Vercel Logo" className={styles.logo} />
      </a>
  </footer>
);

Footer.propTypes = {
  // bla: PropTypes.string,
};

Footer.defaultProps = {
  // bla: 'test',
};

export default Footer;
