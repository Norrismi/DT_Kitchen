import firebase from "firebase/app";
import CarouselPics from '../components/CarouselPics';
import OrderForm from '../components/Form/OrderForm';
import CustomForm from '../components/Form/CustomForm';
import MultiStepForm from "../components/Form/MultiStepForm";
import dt_kitchen_spice from '../Assets/dt_kitchen_spice.png'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'


export default function Home() {


  const customRef = firebase.firestore().collection('custom').doc('custom')

  const [customForm, setCustomForm] = useState(false);


  useEffect(() => {

    customRef.get().then((doc) => {
      if (doc.exists) {
        // console.log('Custom document exists')

        setCustomForm(true)


        // do I need the else clause?
      } else {
        // console.log('Custom doc does not exists')
        setCustomForm(false)
      }
    })

  }, [])



  return (

    <div className={styles.home_bannerContainer}>
      <div className={styles.home_bannerContainer}>

        <Image src={dt_kitchen_spice} className={`${styles.home_banner} `} alt="Intro Banner" />
      </div>

      {/* <CustomForm /> */}

      {/* {(customForm == true)? <CustomForm /> :  <OrderForm />} */}
      <MultiStepForm />

      <CarouselPics />

    </div>

  )
}
