import React from 'react';
import styles from './RegisterForm.module.scss';
import {ReactComponent as Email} from './formSvg/email.svg';
import {ReactComponent as Password} from './formSvg/password.svg';
import leavesTop from '../../images/leaves1.png';
import leavesBottom from '../../images/leaves2.png';

const RegisterForm = () => {
  return (
    <div>
    <div className={'mainContainer'}>
      <div className={styles.wrapperContainer}>
      <div className={styles.container}>
        <img src={leavesTop} className={styles.leavesTop}/>
        <img src={leavesBottom} className={styles.leavesBottom}/>
       <div className={styles.textContainer}>
        <span> Get
          <span> 20% discount</span> on your first purchase</span>
         <span>Just Sign Up & Register it now to become member of Templates Jungle.</span>
       </div>
        <form>
          <label>Email address</label>
          <div className={styles.formInput}>
            <Email/>
            <input placeholder='Enter your email...'/>
          </div>
          <label>Password</label>
          <div className={styles.formInput}>
            <Password/>
            <input placeholder='Create a password...'/>
          </div>
          <label>Repeat password</label>
          <div className={styles.formInput}>
            <Password/>
            <input placeholder='Repeat password...'/>
          </div>
          <button className={`blackBtn ${styles.registerBtn}`}>Register it now</button>
        </form>
      </div>
      </div>
    </div>
    </div>
  );
};

export default RegisterForm;