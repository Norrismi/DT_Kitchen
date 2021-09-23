import firebase from "firebase/app";
import CarouselPics from '../components/CarouselPics';
import MultiStepForm from "../components/Form/MultiStepForm";
import dt_kitchen_spice from '../Assets/dt_kitchen_spice.png'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import whitePlate from '../Assets/whitePlate.jpeg'
import SmokeElement from "smoke-effect-react";
import Link from 'next/link'
import Footer from '../components/Footer'


export default function Home() {


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





      <div className={`${styles.home_centerContainer} card`}>
        <h3 className={`${styles.home_content}`}>
          Excuse the smoke
          <div>
            {'I\'ve been cooking all day!'}
          </div>

          <Link href="/orderForm" passHref>
            <button className={`${styles.home_button} btn`}>Order your Plate Now!</button>
          </Link>
        </h3>


      </div>



      <CarouselPics />

      <Footer className={styles.home_footer} />

    </div>

  )
}
