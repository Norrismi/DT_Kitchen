import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {proteinArr, starchArr, greensArr} from '../utils'

export default function Home() {
  {console.log(proteinArr[0])}
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
              <option selected className={styles.home_option}>Choose...</option>
            
       
              {proteinArr && proteinArr.map((item) => <option key={item}>{item}</option>)}
       

            </select>
          </div>

          <div className={`${styles.home_selectGroup} input-group mb-3`}>
            <div className="input-group-prepend">
              <label className={`${styles.homeLabel} input-group-text`} htmlFor="inputGroupSelect01">Greens</label>
            </div>
            <select className={`${styles.home_select} custom-select" id="inputGroupSelect01`}>
              <option selected className={styles.home_option}>Choose...</option>
             
              {greensArr && greensArr.map((item) => <option key={item}>{item}</option>)}


            </select>
          </div>


          <div className={`${styles.home_selectGroup} input-group mb-3`}>
            <div className="input-group-prepend">
              <label className={`${styles.homeLabel} input-group-text`} htmlFor="inputGroupSelect01">Starch</label>
            </div>
            <select className={`${styles.home_select} custom-select" id="inputGroupSelect01`}>
              <option selected className={styles.home_option}>Choose...</option>
             
              {starchArr && starchArr.map((item) => <option key={item}>{item}</option>)}

            </select>
          </div>

        </div>
      </div>








    </>


  )
}
