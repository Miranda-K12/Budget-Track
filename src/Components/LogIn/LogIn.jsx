/* eslint-disable react/prop-types */
import styles from './LogIn.module.css';
import { useNavigate } from 'react-router-dom';
import  React, {useState} from 'react';
import GoogleIcon from '../../assets/images/google.svg';
import Arrow from '../../assets/images/right-arrow.svg';
import Envelope from '../../assets/images/envelope.svg';
import Password from '../../assets/images/password.svg';
import ClosedEye from '../../assets/images/eye-closed.svg';
import OpenedEye from '../../assets/images/eye-open.svg';
function Button({ children, backgroundColor, onClick, textColor }) {
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  // Form validation
  const validateForm = () => {
    const validateEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const validatePassword = /^.{6,}$/;
    let isValid = true;

    if (!validateEmail.test(email)) {
      setEmailError('Please enter a valid email.');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (!validatePassword.test(password)) {
      setPasswordError('Password must be at least 6 characters.');
      isValid = false;
    } else {
      setPasswordError('');
    }
    return isValid;
  };

  // Handle normal form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form
    if (validateForm()) {
      navigate('/Budget');
    }
  };

  // Handle Google login
  const handleGoogleLogin = () => {
    navigate('/Budget'); 
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.login_form}>
      <p className={styles.app_subheader}>Login to <span>Budget Track</span> </p>

      <Button
        type="button" 
        backgroundColor='#000758'
        onClick={handleGoogleLogin}
      >
        <img src={GoogleIcon} className={styles.logIn_icon} alt='google'/>
        Login with Google
      </Button>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputWrapper}>
          <img src={Envelope} className={styles.envelope} alt="envelope-icon" />
          <input
            type="email"
            className={styles.email}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
          />
          {emailError && <p className={styles.error}>{emailError}</p>}
        </div>

        <div className={styles.passwordWrapper}>
          <img src={Password} className={styles.password} alt='password-icon' />
          <input
            type={showPassword ? 'text' : 'password'}
            className={styles.user}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
          />
           {!passwordError && (
    <img 
      src={showPassword ? OpenedEye : ClosedEye} 
      className={styles.eye_icon}
      alt="eye-icon"
      onClick={togglePasswordVisibility}
    />
  )}
          {passwordError && <p className={styles.error}>{passwordError}</p>}
        </div>

        <Button
          type="submit"
          backgroundColor='#12f3e0'
          textColor='#000758'
        >
          <img src={Arrow} className={styles.logIn_icon} alt='right-arrow'/>Log In
        </Button>
      </form>
      <p className={styles.password_paraghrap}>Forgot Password?</p>
      <p className={ styles.account}>Don’t have an account? <span className={styles.sign_up}>Sign up</span></p>
    </div>
  );
};


export default LogInForm;
