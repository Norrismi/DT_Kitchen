import firebase from 'firebase/app'
import 'firebase/firestore'
import date from 'date-and-time';
import { useForm } from "react-hook-form";
import styles from '../../styles/Home.module.css'
import { useState, useEffect } from 'react'

const GetFormInput = () => {
    const [foodItem, setFoodItem] = useState('');

    const now = new Date();
    let day = date.format(now, 'dddd').toLowerCase();
    //console.log(date.format(now, 'dddd').toLowerCase())

    const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm();



    
//works
    useEffect(() => {

            const response =  firebase.firestore().collection(day).doc('foods').onSnapshot(item => {
                console.log(item.data().protein)
                let foodItem = item.data().protein
                setFoodItem(foodItem)
                
            })

            console.log(response)
        
        
        // let food = item.data
        //  console.log(foodItem)
    }, []);


        


    return (
        <>
            {/* <button onClick={readData}> Get Data</button> */}
            <div className={`${styles.home_selectGroup} input-group mb-3`}>
                <div className="input-group-prepend">
                    <label className={`${styles.homeLabel} input-group-text`} htmlFor="inputGroupSelect01">Dessert</label>
                </div>
                <select {...register("food__dessert", { required: true })} className={`${styles.home_select} custom-select" id="inputGroupSelect01`}>
                    <option className={styles.home_option}>Choose...</option>
                    <option >{foodItem}</option>
                </select>
            </div>
        </>
    )

}

export default GetFormInput;
