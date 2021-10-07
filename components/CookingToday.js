import styles from '../styles/KitchenClosed.module.css'
import Image from 'next/image'
import closed from '../Assets/closed.png'

const Cookingtoday = () => {


  return (
    <div className={`${styles.closed_Container} card`}>
      <div className={styles.closed_imgContainer}>
        <Image src={closed} className={`${styles.closed_img} `} alt="Closed Sign" />
      </div>

      <h3 className={`${styles.closed_body}`}>
        Text or Call to see when the kitchen is open.

      </h3>
      <h3 className={`${styles.closed_phone}`}>
        843-812-2639

      </h3>

    </div>
  );
}

export default Cookingtoday;
