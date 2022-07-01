import React from 'react';
import styles from './login.module.scss';
import img from '../../assets/image2.jpg';

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginForm}>
        <h2>Welcome Back</h2>
        <form>
          <label htmlFor='email'>Email</label>
          <input type='text' id='email' />

          <label htmlFor='password'>Password</label>
          <input type='password' id='password' />

          <button type='submit' className={styles.loginButton}>
            Login
          </button>
        </form>
      </div>
      <div>
        <img src={img} alt='error' />
      </div>
    </div>
  );
};
export default Login;
