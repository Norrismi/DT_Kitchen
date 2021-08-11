import firebase from 'firebase/app'
import 'firebase/firestore'
import date from 'date-and-time';
import { useForm } from "react-hook-form";
import styles from '../../styles/Home.module.css'
import { useState, useEffect } from 'react'

const GetFormInput = () => {


    const [foodItem, setFoodItem] = useState([]);
    const now = new Date();
    let day = date.format(now, 'dddd').toLowerCase();
    const { register } = useForm();


    useEffect(() => {
        firebase.firestore().collection('days').doc('monday').collection('dessert').onSnapshot(item => {
            setFoodItem(item.docs.map(a => a.data().item))
        })
    }, []);


    return (
        <>
            <div className={`${styles.home_selectGroup} input-group mb-3`}>
                <div className="input-group-prepend">
                    <label className={`${styles.homeLabel} input-group-text`} htmlFor="inputGroupSelect01">Dessert</label>
                </div>
                <select {...register("food__dessert", { required: true })} className={`${styles.home_select} custom-select" id="inputGroupSelect01`}>
                    <option className={styles.home_option}>Choose...</option>
                    {foodItem && foodItem.map(item => <option key={item}>{item}</option>)}
                </select>
            </div>
        </>
    )



}

export default GetFormInput;
