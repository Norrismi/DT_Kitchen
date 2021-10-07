import CarouselPics from '../components/CarouselPics';
import dt_kitchen_spice from '../Assets/dt_kitchen_spice.png'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SmokeElement from "smoke-effect-react";
import Footer from '../components/Footer'
import { googleProvider } from '../components/Auth/AuthMethods';
import { facebookProvider } from '../components/Auth/AuthMethods';
import SocialMediaAuth from '../components/Auth/SocialMediaAuth';
import Cookingtoday from '../components/CookingToday'
import firebase from "firebase/app";
import { useState, useEffect } from 'react'




export default function Home() {




  const [cooking, setCooking] = useState()

  const firestore = firebase.firestore().collection('cooking')



  useEffect(() => {
    firestore.doc('johRDOIaSwJHhnIVLGzs').onSnapshot(item => setCooking(item.data().cooking))
  }, [])

  console.log(cooking)




  const handleClick = async (provider) => {
    const res = await SocialMediaAuth(provider)
    console.log(res)
  }




  let showLogin = (<div className={`${styles.home_centerContainer} card`}>
    <h3 className={`${styles.home_content}`}>
      Excuse the smoke
      <div>
        {'I\'ve been cooking all day!'}
      </div>

      <div className={styles.home_buttonContainer}>

        <button className={`${styles.home_button} btn`} onClick={() => handleClick(googleProvider)}>Login With Google</button>
        <button className={`${styles.home_button} btn`} onClick={() => handleClick(facebookProvider)}>Login With Facebook</button>
      </div>

    </h3>


  </div>)


  return (

    <div className={styles.home_Container}>
      <div className={styles.home_bannerContainer}>

        <Image src={dt_kitchen_spice} className={`${styles.home_banner} `} alt="Intro Banner" />
      </div>
      <SmokeElement
        className={styles.home_smokeBackground}
        opacity="1"
        smokeSrc="https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png"
        smokeOpacity="0.5"
        width="1000"
      />



      {( cooking == true) ? showLogin : <Cookingtoday />}


      <CarouselPics />
      <Footer className={styles.home_footer} />

    </div>

  )
}
