import styles from './LogIn.module.css';
import React from 'react';
import GoogleIcon from '../../assets/images/google.svg';
import Arrow from '../../assets/images/right-arrow.svg';
import Envelope from '../../assets/images/envelope.svg';
import Password from '../../assets/images/password.svg';

function Button ({ children, backgroundColor, onClick, textColor }) {
  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        color: textColor
      }}
      onClick={onClick}
    >
      {children} 
    </button>
  );
};
const LogInForm = () => {
  return (
    <div className={styles.login_form}>
      <p className={styles.app_subheader}>Login to <span>Budget Track</span> </p>
      <Button backgroundColor='#000758'>
        <img src={GoogleIcon} className={styles.logIn_icon} alt='google'/>
        Login with Google
      </Button>
       <div className={styles.inputWrapper}>
  <img src={Envelope} className={styles.envelope} alt="envelope-icon" />
  <input type="email" className={styles.email} placeholder="Your email" />
      </div>
      <div className={styles.passwordWrapper}>
      <img src={Password} className={styles.password} alt='password-icon' />
      <input type='text' className={styles.user} placeholder='Your password' />
      </div>
      <Button backgroundColor='#12f3e0' textColor='#000758'>
        <img src={Arrow} className={styles.logIn_icon} alt='right-arrow'/>Log In</Button>
    </div>
  );
};

export default LogInForm;
