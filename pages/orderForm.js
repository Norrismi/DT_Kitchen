import Image from 'next/image'
import MultiStepForm from '../components/Form/MultiStepForm';
import CarouselPics from '../components/CarouselPics';
import styles from '../styles/OrderForm.module.css'
import dt_kitchen_spice from '../Assets/dt_kitchen_spice.png'
import SmokeElement from "smoke-effect-react";




const OrderForm = () => {
  return (
    <div className={styles.orderForm_Container}>
      <div className={styles.orderForm_bannerContainer}>

        <Image src={dt_kitchen_spice} className={`${styles.home_banner} `} alt="Intro Banner" />
      </div>

      <MultiStepForm />

      <CarouselPics />
    </div>
  );
}

export default OrderForm;
