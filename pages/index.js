import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (


    <>


      <div className={`${styles.home_card} card home_card `}>
        <div className="card-body">
          <h2 className={styles.title}>Pick your plate!</h2>


          <div className={`${styles.home_selectGroup} input-group mb-3`}>
            <div className="input-group-prepend">
              <label className={`${styles.homeLabel} input-group-text`} htmlFor="inputGroupSelect01">Protein</label>
            </div>
            <select className={`${styles.home_select} custom-select" id="inputGroupSelect01`}>
              <option selected>Choose...</option>
              <option value="1">Chicken</option>
              <option value="2">Fried Fish</option>
            </select>
          </div>

          <div className={`${styles.home_selectGroup} input-group mb-3`}>
            <div className="input-group-prepend">
              <label className={`${styles.homeLabel} input-group-text`} htmlFor="inputGroupSelect01">Greens</label>
            </div>
            <select className={`${styles.home_select} custom-select" id="inputGroupSelect01`}>
              <option selected>Choose...</option>
              <option value="1">Green Beans</option>
              <option value="2">Collard Greens</option>
            </select>
          </div>


          <div className={`${styles.home_selectGroup} input-group mb-3`}>
            <div className="input-group-prepend">
              <label className={`${styles.homeLabel} input-group-text`} htmlFor="inputGroupSelect01">Starch</label>
            </div>
            <select className={`${styles.home_select} custom-select" id="inputGroupSelect01`}>
              <option selected>Choose...</option>
              <option value="1">Mashed Potatoes</option>
              <option value="2">Bread</option>
            </select>
          </div>

        </div>
      </div>








    </>


  )
}
