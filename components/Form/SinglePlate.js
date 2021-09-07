import { db } from '../../utils/firebase'
import firebase from "firebase/app";
import styles from '../../styles/OrderForm.module.css'
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react'


const SinglePlate = ({ formStep, totalPlates, nextForm }) => {



    const { register, formState: { } } = useForm();


    const [proteinItem, setProteinItem] = useState();
    const [dessertItem, setDessertItem] = useState();
    const [starchItem, setStarchItem] = useState();
    const [greenItem, setGreenItem] = useState();
    const [sideItem, setSideItem] = useState();
    const [drinkItem, setDrinkItem] = useState();


    const firestore = firebase.firestore().collection('custom')


    useEffect(() => {

        firestore.doc('custom').collection('protein').onSnapshot(item => { setProteinItem(item.docs.map(a => a.data().item)) })
        firestore.doc('custom').collection('starch').onSnapshot(item => { setStarchItem(item.docs.map(a => a.data().item)) })
        firestore.doc('custom').collection('green').onSnapshot(item => { setGreenItem(item.docs.map(a => a.data().item)) })
        firestore.doc('custom').collection('side').onSnapshot(item => { setSideItem(item.docs.map(a => a.data().item)) })
        firestore.doc('custom').collection('dessert').onSnapshot(item => { setDessertItem(item.docs.map(a => a.data().item)) })
        firestore.doc('custom').collection('drink').onSnapshot(item => { setDrinkItem(item.docs.map(a => a.data().item)) })

        //firestore.doc('custom').collection('protein').onSnapshot(labelName => console.log(labelName.query._delegate._path.segments.pop()))


    }, []);

    const proteins = proteinItem && proteinItem.map(item => <option key={item}>{item} </option>)
    const starches = starchItem && starchItem.map(item => <option key={item}>{item} </option>)
    const greens = greenItem && greenItem.map(item => <option key={item}>{item} </option>)
    const sides = sideItem && sideItem.map(item => <option key={item}>{item} </option>)
    const desserts = dessertItem && dessertItem.map(item => <option key={item}>{item} </option>)
    const drinks = drinkItem && drinkItem.map(item => <option key={item}>{item} </option>)







    return (
        <div className={`${styles.form_card} card form_card `}>
            <div className={`${styles.form_card_body} card-body`}>

                <div className=""> {`${formStep} of ${totalPlates} plates`} </div>

                <h2 className={styles.title}>Pick Your Plate!</h2>


                <div className={`${styles.form_selectGroup} input-group mb-3`}>
                    <div className="input-group-prepend">
                        <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Protein</label>
                    </div>
                    <select {...register("food__protein")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                        <option className={styles.form_option} >Choose...</option>

                        {proteins}


                    </select>
                </div>


                <div className={`${styles.form_selectGroup} input-group mb-3`}>
                    <div className="input-group-prepend">
                        <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Starch</label>
                    </div>
                    <select {...register("food__starch")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                        <option className={styles.form_option} >Choose...</option>

                        {starches}


                    </select>
                </div>

                <div className={`${styles.form_selectGroup} input-group mb-3`}>
                    <div className="input-group-prepend">
                        <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Greens</label>
                    </div>
                    <select {...register("food__green")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                        <option className={styles.form_option} >Choose...</option>

                        {greens}


                    </select>
                </div>

                <div className={`${styles.form_selectGroup} input-group mb-3`}>
                    <div className="input-group-prepend">
                        <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Side</label>
                    </div>
                    <select {...register("food__side")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                        <option className={styles.form_option} >Choose...</option>

                        {sides}


                    </select>
                </div>


                <div className={`${styles.form_selectGroup} input-group mb-3`}>
                    <div className="input-group-prepend">
                        <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupDessert">Dessert</label>
                    </div>
                    <select {...register("food__dessert")} className={`${styles.form_select} custom-select" id="inputGroupDessert`}>
                        <option className={styles.form_option} >Choose...</option>

                        {desserts}


                    </select>
                </div>

                <div className={`${styles.form_selectGroup} input-group mb-3`}>
                    <div className="input-group-prepend">
                        <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Drink</label>
                    </div>
                    <select {...register("food__drink")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                        <option className={styles.form_option} >Choose...</option>

                        {drinks}


                    </select>

                    <div className={styles.form_submitButton_container}>

                        <button className={` btn btn-dark contact-form_button`} onClick={nextForm}>Submit My Order</button>

                        {console.log(formStep)}
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SinglePlate;
