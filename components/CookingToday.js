import styles from '../styles/Home.module.css'
import Image from 'next/image'
import closed from '../Assets/closed.png'

const Cookingtoday = () => {


  return (
    <div className={`${styles.home_kitchenClosedConatiner} card`}>
      <div>
        <Image src={closed} className={`${styles.success_qrcode_img} `} alt="Closed Sign" />
      </div>

      <h3 className={`${styles.home_kitchenClosed}`}>
        Text or Call to see when the kitchen is open

      </h3>
      <h3 className={`${styles.home_kitchenClosed}`}>
        843-812-2639

      </h3>

    </div>
  );
}

export default Cookingtoday;
