import Head from 'next/head'
import Image from 'next/image'
import Select from 'react-select';
import { useForm, Controller } from "react-hook-form";
import styles from '../styles/Home.module.css'
import { proteinArr, starchArr, greensArr, SaturdayArr } from '../utils'
import date from 'date-and-time';

export default function Home() {

  const { register, handleSubmit, control, formState: { errors } } = useForm();

  const dataStarch = [
    { value: 'Mashed Potatoes', label: 'Mashed Potatoes' },
    { value: 'Rice', label: 'Rice' },

  ]



  const now = new Date();
  let day = date.format(now, 'dddd').toLowerCase();

  // console.log(SaturdayArr)
  // console.log(date.format(now, 'dddd').toLowerCase())

  return (


    <form onSubmit={handleSubmit((data) => console.log(data))}>





      <div className={`${styles.home_card} card home_card `}>
        <div className="card-body">
          <h2 className={styles.title}>Pick your plate!</h2>




          <div className={`${styles.home_selectGroup} input-group mb-3`}>
            <div className="input-group-prepend">
              <span className="input-group-text" >Name</span>
            </div>
            <input type="text" className="form-control" {...register("name", { required: true })} placeholder="Order Name" aria-label="Order Name" aria-describedby="basic-addon" />
            {errors.name && <p>Order name is required</p>}
          </div>

          <div className={`${styles.home_selectGroup} input-group mb-3`}>
            <div className="input-group-prepend">
              <span className="input-group-text" >Email</span>
            </div>
            <input type="email" id="email" className="form-control" {...register("email")} placeholder="Email@provider.com" aria-label="Email" aria-describedby="basic-addon" />
          </div>

          <div className={`${styles.home_selectGroup} input-group mb-3`}>
            <div className="input-group-prepend">
              <span className="input-group-text" >Phone Number</span>
            </div>
            <input type="tel" id="phone" className="form-control" {...register("phone", { required: true })} placeholder="111-111-1111" aria-label="Phone Number" aria-describedby="basic-addon" />
          </div>


          {/* selected has been removed, if errors put in VALUE or defaultValue */}

          <div className={`${styles.home_selectGroup} input-group mb-3`}>
            <div className="input-group-prepend">
              <label className={`${styles.homeLabel} input-group-text`} htmlFor="inputGroupSelect01">Protein</label>
            </div>
            <select {...register("protein", { required: true })}
              className={`${styles.home_select} custom-select" id="inputGroupSelect01`}
            >
              <option className={styles.home_option}>Choose...</option>


              {proteinArr && proteinArr.map((item) => <option key={item}>{item}</option>)}


            </select>
            {errors.protein && <p>Protein is required</p>}
          </div>

          <div className={`${styles.home_selectGroup} input-group mb-3`}>
            <div className="input-group-prepend">
              <label className={`${styles.homeLabel} input-group-text`} htmlFor="inputGroupSelect01">Greens</label>
            </div>
            <select

              {...register("greens", { required: 'select an option' })}
              className={`${styles.home_select} custom-select" id="inputGroupSelect01`}>
              <option className={styles.home_option}>Choose...</option>

              {greensArr && greensArr.map((item) => <option key={item}>{item}</option>)}


            </select>

            {errors.greens && <p>Green is required</p>}
          </div>





          <div className={`${styles.home_selectGroup} input-group mb-3`}>
            <div className="input-group-prepend">
              <label className={`${styles.homeLabel} input-group-text`} htmlFor="inputGroupSelect01">Starch</label>
            </div>
            <select {...register("starch", { required: true })} className={`${styles.home_select} custom-select" id="inputGroupSelect01`}>
              <option className={styles.home_option}>Choose...</option>

              {starchArr && starchArr.map((item) => <option key={item}>{item}</option>)}

            </select>
            {errors.starch && <p>Starch is required</p>}



          </div>
          <button className="btn btn-primary contact-form_button " type="submit">Ask a Question</button>


        </div>
      </div>


    </form>
  )
}
