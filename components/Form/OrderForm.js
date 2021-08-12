import content from "./FormHelper";
import styles from '../../styles/Home.module.css'
import { useState } from 'react';
import { useForm } from "react-hook-form";


import date from 'date-and-time';

import firebase from "firebase/app";



const OrderForm = () => {

    const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm();

    if (isSubmitSuccessful) return <h2>Your form was submitted</h2>

    const onSubmit = (data, e) => {
        console.log(data)
    
        db.collection('New Order').add({
          ...data,
          messageSent: firebase.firestore.FieldValue.serverTimestamp()
        })
      }


    return (

        <>

            <form onSubmit={handleSubmit((onSubmit))}>

                <div className={`${styles.home_card} card home_card `}>
                    <div className={`${styles.home_card_body} card-body`}>
                        <h2 className={styles.title}>Order Info</h2>
                        {content.inputs.map((input, key) => {
                            return (
                                <div key={key}>
                                    <div className={`${styles.home_selectGroup, styles.home_input} input-group mb-3`}>
                                        <div className={` $input-group-prepend`}>
                                            <span className={` input-group-text`} >{input.name}</span>
                                        </div>
                                        <input
                                            type={input.text}
                                            className={`form-control`}
                                            {...register(`${input.registerName}`, { required: true })}
                                            placeholder={input.placeholder}
                                            aria-label={input.ariaLabel} />
                                    </div>

                                    <div className={`${styles.home_messageContainer}`}>
                                        {input.error && <div className={`${styles.home_message}`}>{input.errorMessage}</div>}
                                        {/* { if (errors){
                                            <div className={`${styles.home_message}`}>{input.errorMessage}</div>
                                            }} */}
                                    </div>
                                </div>
                            )
                        })}

                        <h2 className={styles.title}>Pick Your Plate!</h2>
                        {content.selects.map((select, key) => {
                            return (
                                <div key={key}
                                    className={`${styles.home_selectGroup} input-group mb-3`}>
                                    <div className="input-group-prepend">
                                        <label
                                            className={`${styles.homeLabel} input-group-text`}
                                            htmlFor="inputGroupSelect01">{select.label}</label>
                                    </div>
                                    <select {...register(`${select.registerName}`)}
                                        className={`${styles.home_select} custom-select" id="inputGroupSelect`}
                                    >
                                        <option className={styles.home_option}>{select.placeholder}</option>
                                        {/* {proteinArr && proteinArr.map((item) => <option key={item}>{item}</option>)} */}
                                    </select>
                                    {/* {errors.protein && <p className={`${styles.home_message}`}>Protein is required</p>} */}
                                </div>
                            )
                        })
                        }

                        <div className={styles.home_submitButton_container}>

                            <button className={` btn btn-success contact-form_button`} type="submit">Submit My Order</button>
                        </div>
                    </div>
                </div>
            </form>



        </>


    );
}

export default OrderForm;
