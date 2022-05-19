import React from 'react';
//@ts-ignore
import styles from './FoodMartApp.module.scss';
import phone from './appImg/phone.svg';
import {ReactComponent as GooglePlay} from './appImg/gplay.svg';
import {ReactComponent as AppStore} from './appImg/appStore.svg';


const FoodMartApp = () => {
  return (
    <div className={'mainContainer'}>
      <div className={styles.container}>
        <img className={styles.phone} src={phone} alt='Phone'/>
        <div className={styles.textContainer}>
          <div className={'heading'}>Shop faster with foodmart App</div>
          <span> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sed ptibus
          liberolectus nonet psryroin. Amet sed lorem posuere sit iaculis amet, ac urna.
          Adipiscing fames semper erat ac in suspendisse iaculis. Amet blandit tortor
          praesent ante vitae. A, enim pretiummi senectus magna. Sagittis sed ptibus liberolectus non et psryroin.
          </span>
          <div className={styles.downloadLinks}>
            <GooglePlay/>
            <AppStore/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodMartApp;