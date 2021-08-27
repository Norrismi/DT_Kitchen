
import { db } from '../../utils/firebase'
import firebase from "firebase/app";
import styles from '../../styles/OrderForm.module.css'
import FormSuccess from './FormSuccess';
import { useForm } from "react-hook-form";
import date from 'date-and-time';
import { useState, useEffect } from 'react'

// scheduled form

const OrderForm = () => {

    const { register, handleSubmit, formState: { errors, isSubmitSuccessful } } = useForm();


    const [proteinItem, setProteinItem] = useState();
    const [dessertItem, setDessertItem] = useState();

    const arrTotalPrice = []


    const now = new Date();
    let day = date.format(now, 'dddd').toLowerCase();

    const firestore = firebase.firestore().collection('days')


    useEffect(() => {


        firestore.doc('monday').collection('protein').onSnapshot(item => { setProteinItem(item.docs.map(a => a.data().item)) })

        firestore.doc('monday').collection('dessert').onSnapshot(item => { setDessertItem(item.docs.map(a => a.data().item)) })


    }, []);

    const proteins = proteinItem && proteinItem.map(item => <option key={item}>{item} </option>)
    const desserts = dessertItem && dessertItem.map(item => <option key={item}>{item} </option>)

    if (isSubmitSuccessful) return <FormSuccess />

    const onSubmit = (data, e) => {

        (data.food__protein && data.food__protein != 'Choose...')
            ? arrTotalPrice.push(Number(data.food__protein.split('$').pop()))
            : arrTotalPrice.push(0);


        (data.food__dessert && data.food__dessert != 'Choose...')
            ? arrTotalPrice.push(Number(data.food__dessert.split('$').pop()))
            : arrTotalPrice.push(0)


        db.collection('New Order').add({
            ...data,
            totalPrice: arrTotalPrice.reduce((arr, ac) => arr + ac),
            messageSent: firebase.firestore.FieldValue.serverTimestamp()

        })
    }


    return (

        <>

            <form onSubmit={handleSubmit((onSubmit))}>

                <div className={`${styles.form_card} card form_card `}>
                    <div className={`${styles.form_card_body} card-body`}>
                        <h2 className={styles.title}>Order Info</h2>

                        <div className={`${styles.form_selectGroup, styles.form_input} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <span className="input-group-text" >Name</span>
                            </div>
                            <input type="text" className={`form-control`} {...register("name", { required: true })} placeholder="Order Name" aria-label="Order Name" aria-describedby="basic-addon" />
                        </div>
                        <div className={`${styles.form_messageContainer}`}>

                            {errors.name && <div className={`${styles.form_message}`}>Order name is required</div>}
                        </div>

                        <div className={`${styles.form_selectGroup, styles.form_input} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <span className="input-group-text" >Email</span>
                            </div>
                            <input type="email" id="email" className={`form-control`} {...register("email")} placeholder="Email@provider.com" aria-label="Email" aria-describedby="basic-addon" />
                        </div>

                        <div className={`${styles.form_selectGroup, styles.form_input} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <span className="input-group-text" >Number</span>
                            </div>
                            <input type="tel" id="phone" className={`form-control`} {...register("phone", { required: true })} placeholder="111-111-1111" aria-label="Phone Number" aria-describedby="basic-addon" />


                        </div>
                        <div className={`${styles.form_messageContainer}`}>

                            {errors.phone && <div className={`${styles.form_message}`}>Phone number is required</div>}
                        </div>





                        <h2 className={styles.title}>Pick Your Plate!</h2>

                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupSelect01">Protein</label>
                            </div>
                            <select {...register("food__protein")} className={`${styles.form_select} custom-select" id="inputGroupSelect01`}>
                                <option className={styles.form_option} >Choose...</option>

                                {proteins}


                            </select>
                        </div>

                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupSelect01">Dessert</label>
                            </div>
                            <select {...register("food__dessert")} className={`${styles.form_select} custom-select" id="inputGroupSelect01`}>
                                <option className={styles.form_option} >Choose...</option>

                                {desserts}


                            </select>
                        </div>



                        <div className={styles.form_submitButton_container}>

                            <button className={` btn btn-dark contact-form_button`} type="submit">Submit My Order</button>
                        </div>
                    </div>
                </div>
            </form>



        </>


);
}

export default OrderForm;

{/* {content.selects.map((select, key) => {
    return (
        <div key={key}
            className={`${styles.form_selectGroup} input-group mb-3`}>
            <div className="input-group-prepend">
                <label
                    className={`${styles.formLabel} input-group-text`}
                    htmlFor="inputGroupSelect01">{select.label}</label>
            </div>
            <select {...register(`${select.registerName}`)}
                className={`${styles.form_select} custom-select" id="inputGroupSelect`}
            >
                <option className={styles.form_option}>{select.placeholder}</option>
                {proteinArr && proteinArr.map((item) => <option key={item}>{item}</option>)}
            </select>
            {errors.protein && <p className={`${styles.form_message}`}>Protein is required</p>}
        </div>
    )
})
} */}