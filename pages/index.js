
import CarouselPics from '../components/CarouselPics';
import OrderForm from '../components/Form/OrderForm';
import CustomForm from '../components/Form/CustomForm';
import dt_kitchen_spice from '../Assets/dt_kitchen_spice.png'
import Image from 'next/image'
import styles from '../styles/Home.module.css'




export default function Home() {



  return (

    <div  className={styles.home_bannerContainer}>
    <div className={styles.home_bannerContainer}>

    <Image src={dt_kitchen_spice} className={`${styles.home_banner} `} alt="Intro Banner" />
    </div>
      <OrderForm />
      <CustomForm/>
      <CarouselPics />

    </div>

  )
}
