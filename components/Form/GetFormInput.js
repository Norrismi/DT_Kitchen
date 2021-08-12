import firebase from 'firebase/app'
import 'firebase/firestore'
import date from 'date-and-time';
import { useForm } from "react-hook-form";
import styles from '../../styles/Home.module.css'
import style from '../../styles/FormInput.module.css'
import { useState, useEffect } from 'react'

const GetFormInput = () => {


    const [foodItem, setFoodItem] = useState();
    const [priceItem, setPriceItem] = useState();
    const now = new Date();
    let day = date.format(now, 'dddd').toLowerCase();
    const { register } = useForm();


    useEffect(() => {
        firebase.firestore().collection('days').doc('monday').collection('dessert').onSnapshot(item => {
            // setFoodItem(item.docs.map(a => a.data().item))
            setPriceItem(item.docs.map(a => a.data().price))
        })
    }, []);

    console.log( priceItem)


    // let food = foodItem && foodItem.map(item => <option className={style.fi_dropdown} key={item}>{item} </option>)
    let price = priceItem && priceItem.map(item => <option className={style.fi_dropdown} key={item}>{item} </option>)


    return (
        <>
            <div className={`${style.home_selectGroup} input-group mb-3`}>
                <div className="input-group-prepend">
                    <label className={`${styles.homeLabel} input-group-text`} htmlFor="inputGroupSelect01">Dessert</label>
                </div>
                <select {...register("food__dessert")} className={`${ style.fi_dropdown} custom-select" id="inputGroupSelect01`}>
                    <option >Choose...</option>
            
                    {/* {food}  */}
                    {price}

                </select>
            </div>
        </>
    )



}

export default GetFormInput;
