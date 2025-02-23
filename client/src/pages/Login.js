import React from 'react'
import Title from '../components/Title';
import LoginMenu from '../components/LoginMenu';
import styles from "./Login.module.css"
import LoginAbout from '../components/LoginAbout';

const login = () => {
  return (
    <div className={styles.login}>
    <div className={styles.row}>
      <Title />
      <LoginMenu />
    </div>

    <div className={styles.section}>
      <LoginAbout />
    </div>
  </div>
  )
}

export default login
