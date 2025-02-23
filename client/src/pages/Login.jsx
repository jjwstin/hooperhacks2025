// src/pages/Login.jsx
import React from 'react';
import styles from './Login.module.css';
import LoginMenu from '../components/LoginMenu';
import Slideshow from '../components/slideshow';

const Login = () => {
  return (
    <div className={styles.container}>
      {/* Left Column: Login Card */}
      <div className={styles.leftColumn}>
        <div className={styles.loginCard}>
          <h1 className={styles.brandTitle}>Pair 2 Spare</h1>
          <LoginMenu />
        </div>
      </div>

      {/* Right Column: Slideshow */}
      <div className={styles.rightColumn}>
        <Slideshow />
      </div>
    </div>
  );
};

export default Login;
