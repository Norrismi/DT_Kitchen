import Image from 'next/image'
import MultiStepForm from '../components/Form/MultiStepForm';
import CarouselPics from '../components/CarouselPics';
import styles from '../styles/Home.module.css'
import dt_kitchen_spice from '../Assets/dt_kitchen_spice.png'



const OrderForm = () => {
    return (
        <div className={styles.home_bannerContainer}>
        <div className={styles.home_bannerContainer}>
  
          <Image src={dt_kitchen_spice} className={`${styles.home_banner} `} alt="Intro Banner" />
        </div>
  
        <MultiStepForm />
  
        <CarouselPics />
  
      </div>
    );
}

export default OrderForm;
