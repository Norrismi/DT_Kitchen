import { useState } from 'react';
import { useForm } from "react-hook-form";
import styles from '../styles/Home.module.css'
import { proteinArr, starchArr, greensArr } from '../utils'
import date from 'date-and-time';



export default function Home() {

  const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm();


  if (isSubmitSuccessful) return <h2>Your form was submitted</h2>

  const onSubmit = (data, e) => {
    console.log(data)
  }


  const now = new Date();
  let day = date.format(now, 'dddd').toLowerCase();
  // console.log(SaturdayArr)
  // console.log(date.format(now, 'dddd').toLowerCase())


  return (

    <>

      <form onSubmit={handleSubmit((onSubmit))}>

        <div className={`${styles.home_card} card home_card `}>
          <div className={`${styles.home_card_body} card-body`}>
            <h2 className={styles.title}>Order Info</h2>

            <div className={`${styles.home_selectGroup, styles.home_input} input-group mb-3`}>
              <div className="input-group-prepend">
                <span className="input-group-text" >Name</span>
              </div>
              <input type="text" className={`form-control`} {...register("name", { required: true })} placeholder="Order Name" aria-label="Order Name" aria-describedby="basic-addon" />
            </div>
            <div className={`${styles.home_messageContainer}`}>

              {errors.name && <div className={`${styles.home_message}`}>Order name is required</div>}
            </div>

            <div className={`${styles.home_selectGroup, styles.home_input} input-group mb-3`}>
              <div className="input-group-prepend">
                <span className="input-group-text" >Email</span>
              </div>
              <input type="email" id="email" className={`form-control`} {...register("email")} placeholder="Email@provider.com" aria-label="Email" aria-describedby="basic-addon" />
            </div>

            <div className={`${styles.home_selectGroup, styles.home_input} input-group mb-3`}>
              <div className="input-group-prepend">
                <span className="input-group-text" >Number</span>
              </div>
              <input type="tel" id="phone" className={`form-control`} {...register("phone", { required: true })} placeholder="111-111-1111" aria-label="Phone Number" aria-describedby="basic-addon" />


            </div>
            <div className={`${styles.home_messageContainer}`}>

              {errors.phone && <div className={`${styles.home_message}`}>Phone number is required</div>}
            </div>


            <h2 className={styles.title2}>Pick your plate!</h2>

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
              {errors.protein && <p className={`${styles.home_message}`}>Protein is required</p>}
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

            <div className={styles.home_submitButton_container}>

              <button className={` btn btn-success contact-form_button`} type="submit">Submit My Order</button>
            </div>

          </div>
        </div>
      </form>

    </>
  )
}
