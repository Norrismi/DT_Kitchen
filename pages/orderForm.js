import Image from 'next/image'
import MultiStepForm from '../components/Form/MultiStepForm';
import CarouselPics from '../components/CarouselPics';
import styles from '../styles/Home.module.css'
import dt_kitchen_spice from '../Assets/dt_kitchen_spice.png'
import SmokeElement from "smoke-effect-react";



const OrderForm = () => {
  return (
    <div className={styles.home_bannerContainer}>
      <div className={styles.home_bannerContainer}>

        <Image src={dt_kitchen_spice} className={`${styles.home_banner} `} alt="Intro Banner" />
      </div>

      <MultiStepForm />

      <SmokeElement
        className={styles.home_smokeBackground}
        opacity="1"
        smokeSrc="https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png"
        smokeOpacity="0.5"
        width="1000"
      />

      <CarouselPics />

    </div>
  );
}

export default OrderForm;
