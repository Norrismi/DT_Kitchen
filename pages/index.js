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


export default function Home() {


  return (

    <div className={styles.home_Container}>
      <div className={styles.home_bannerContainer}>

        <Image src={dt_kitchen_spice} className={`${styles.home_banner} `} alt="Intro Banner" />
      </div>
      <SmokeElement
        opacity="1"
        smokeSrc="https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png"
        smokeOpacity="0.3"
      />
      {/* <Image src={whitePlate} className={styles.home_centerContainerPlate} card` alt="Intro Banner">
      
      
      </Image> */}



<div className={`${styles.home_centerContainer} card`}>

      <h3 className={`${styles.home_text}`}>
        Excuse the smoke
        <div>
          I have been cooking all day!
        </div>
        <Link href='/about' passHref>
          <button className={`${styles.home_button} btn`}>TEST</button>
        </Link>

      </h3>
</div>



      {/* <CarouselPics /> */}

    </div>

  )
}
