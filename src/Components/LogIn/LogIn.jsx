/* eslint-disable react/prop-types */
import styles from './LogIn.module.css';
import { useNavigate } from 'react-router-dom';
import  React, {useState} from 'react';
import GoogleIcon from '../../assets/images/google.svg';
import User from '../../assets/images/user.svg';
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
  const [name, setName] = useState('');  // Local state for the name input
  const [nameError, setNameError] = useState('');
  const navigate = useNavigate();

  // Name validation logic
  const validateName = (name) => {
    const namePattern = /^[A-Z][a-zA-Z\s]*$/;
    if (name.trim() === '') {
      setNameError('Name is required.');
      return false;
    } else if (name.length < 2) {
      setNameError('Name must be at least 2 characters.');
      return false;
    } else if (!namePattern.test(name)) {
      setNameError('Name must start with an uppercase letter and only contain letters and spaces.');
      return false;
    }
    setNameError('');
    return true;
  };

  // Form validation 
  const validateForm = () => {
    const validateEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const validatePassword = /^.{6,}$/;
    let isValid = true;

    // Email validation
    if (!validateEmail.test(email)) {
      setEmailError('Please enter a valid email.');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Password validation
    if (!validatePassword.test(password)) {
      setPasswordError('Password must be at least 6 characters.');
      isValid = false;
    } else {
      setPasswordError('');
    }

    // Name validation
    if (!validateName(name)) {
      isValid = false;
    }

    return isValid;
  };

  // Handle normal form submission
 const handleSubmit = (e) => {
  e.preventDefault();
  if (validateForm()) {
    navigate('/dashboard');  // This should be the correct route
  }
}

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.container}>
      <div className={styles.login_form}>
        <p className={styles.app_subheader}>Log in to <span className='app_name'>Budget Track</span> </p>
        
        {/* Google Login Button */}
        <Button type="button" backgroundColor='#000758'>
          <img src={GoogleIcon} className={styles.logIn_icon} alt='google' />
          Log in with Google
        </Button>

        {/* Main Login Form */}
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputWrapper}>
            <img src={User} className={styles.username} alt="user-icon" />
            <input
              type='text'
              value={name}
              className={styles.name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter your Name'
            />
            {nameError && <p className={styles.error}>{nameError}</p>}
          </div>

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

          {/* Submit Button */}
          <Button type="submit" backgroundColor='#12f3e0' textColor='#000758'>
            <img src={Arrow} className={styles.logIn_icon} alt='right-arrow' />
            Log In
          </Button>
        </form>

        {/* Additional Links */}
        <p className={styles.password_paraghrap}>Forgot Password?</p>
        <p className={styles.account}>Don’t have an account? <span className={styles.sign_up}>Sign up</span></p>
      </div>
    </div>
  );
};

export default LogInForm;


