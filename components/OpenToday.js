import React from 'react';
import styles from '../styles/OpenToday.module.css'
import firebase from "firebase/app";
import { googleProvider } from '../components/Auth/AuthMethods';
import { facebookProvider } from '../components/Auth/AuthMethods';
import { useAuthState } from 'react-firebase-hooks/auth'
import SocialMediaAuth from '../components/Auth/SocialMediaAuth';

const OpenToday = () => {



    const [user, loading] = useAuthState(firebase.auth())


    const handleClick = async (provider) => {
        const res = await SocialMediaAuth(provider)
        console.log(res)
      }


    return (
        <div className={`${styles.open_centerContainer} card`}>
        <h3 className={`${styles.open_content}`}>
          Excuse the smoke
          <div>
            {'I\'ve been cooking all day!'}
          </div>
    
          {!user ?
    
            <div className={styles.open_buttonContainer}>
    
              <button className={`${styles.open_button} btn`} onClick={() => handleClick(googleProvider)}>Login With Google</button>
              <button className={`${styles.open_button} btn`} onClick={() => handleClick(facebookProvider)}>Login With Facebook</button>
            </div>
    
            : null}
    
    
        </h3>
    
    
      </div>
    );
}

export default OpenToday;
