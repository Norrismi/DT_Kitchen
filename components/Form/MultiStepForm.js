import { db } from '../../utils/firebase'
import firebase from "firebase/app";
import styles from '../../styles/OrderForm.module.css'
import FormSuccess from './FormSuccess';
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react'
import emailjs from 'emailjs-com'
import SinglePlate from './SinglePlate';
import StepOneForm from './StepOneForm';

const MultiStepForm = () => {

    const { register, getValues, handleSubmit, formState: { errors, isSubmitSuccessful, isValid } } = useForm({ mode: 'all' });

    const [formStep, setFormStep] = useState(0)


    const totalPlates = getValues("plates_number")

    const nextForm = (formStep) => {
        setFormStep(current => current + 1)
    }



    const [proteinItem, setProteinItem] = useState();
    const [dessertItem, setDessertItem] = useState();
    const [starchItem, setStarchItem] = useState();
    const [greenItem, setGreenItem] = useState();
    const [sideItem, setSideItem] = useState();
    const [drinkItem, setDrinkItem] = useState();

    const [formData, setFormData] = useState();
    const [sendTotal, setSendTotal] = useState();


    const firestore = firebase.firestore().collection('custom')
    const arrTotalPrice = []


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




    if (isSubmitSuccessful) return <FormSuccess formData={formData} sendTotal={sendTotal} />

    // let newData

    const onSubmit = (data, e) => {


        const { email, name, phone, plates_number, one_food__message, two_food__message, ...newData } = data

        setFormData(data)

        for (const prop in newData) {
            (newData[prop] != 'Choose...')
                ? arrTotalPrice.push(Number(newData[prop].split('$').pop()))
                : arrTotalPrice.push(0);

            // console.log(prop)
            console.log('data:', data)
            console.log('newData:', newData)
        }
        const total = arrTotalPrice.reduce((arr, ac) => arr + ac).toFixed(2)
        setSendTotal(total)


        firebase.firestore().collection("New Order").add({
            data,
            totalPrice: total,
            messageSent: firebase.firestore.FieldValue.serverTimestamp()
        })





        // const { food__dessert, food__protein, food__starch } = data


        // let msgProtein = newData.plate1_protein
        // let msgStarch = newData.food__starch
        // let msgDessert = newData.food__dessert


        const p1_Protein = newData.plate1_protein
        const p1_Starch = newData.plate1_starch
        const p1_SideOne = newData.plate1_side_one
        const p1_SideTwo = newData.plate1_side_two
        const p1_Drink = newData.plate1_drink
        const p1_Dessert = newData.plate1_dessert
        const p1_Comment = data.one_food__message

        const p2_Protein = newData.plate2_protein
        const p2_Starch = newData.plate2_starch
        const p2_SideOne = newData.plate2_side_one
        const p2_SideTwo = newData.plate2_side_two
        const p2_Drink = newData.plate2_drink
        const p2_Dessert = newData.plate2_dessert
        const p2_Comment = data.two_food__message


        const YOUR_SERVICE_ID = process.env.NEXT_PUBLIC_EmailJS_YOUR_SERVICE_ID;
        const YOUR_TEMPLATE_ID = process.env.NEXT_PUBLIC_EmailJS_YOUR_TEMPLATE_ID;
        const YOUR_USER_ID = process.env.NEXT_PUBLIC_EmailJS_YOUR_USER_ID;

        // test multiple foods in form 1 
        // make variables for messages and test both
        // does form two work? 

        let templateParams = {
            name,
            email,
            phone,

            p1_Protein,
            p1_Starch,
            p1_SideOne,
            p1_SideTwo,
            p1_Drink,
            p1_Dessert,
            p1_Comment,

            p2_Protein,
            p2_Starch,
            p2_SideOne,
            p2_SideTwo,
            p2_Drink,
            p2_Dessert,
            p2_Comment,



        }

        // emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams, YOUR_USER_ID)
        //     .then((result) => {
        //         console.log(result.text);
        //     }, (error) => {
        //         console.log(error.text);
        //     });
    }








    const showNext = (
        <div className={styles.form_submitButton_container}>
            <button className={` btn btn-dark contact-form_button`} disabled={!isValid} onClick={nextForm}>Next</button>
        </div>
    )

    const submitted = (
        <div className={styles.form_submitButton_container}>
            <button className={` btn btn-dark contact-form_button`} onClick={() => onSubmit}>Submit My Order</button>
        </div>
    )

    const button = (formStep < totalPlates) ? showNext : submitted



    return (



        <form
            onSubmit={handleSubmit((onSubmit))}
        >
            {formStep == 0 && <section>
                <div className={`${styles.form_card} card form_card `}>
                    <div className={`${styles.form_card_body} card-body`}>
                        <h2 className={styles.title}>Order Info</h2>

                        <div className={`${styles.form_selectGroup, styles.form_input} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <span className="input-group-text" >Plate #</span>
                            </div>
                            <input type="number" min="1" max="2" className={`form-control`} {...register("plates_number", { required: true })} placeholder="Number of Plates" aria-label="Order Name" aria-describedby="basic-addon" />
                        </div>



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


                        {showNext}


                    </div>
                </div>

            </section>}

            {formStep == 1 && <section>

                {/* <SinglePlate totalPlates={totalPlates} formStep={formStep} nextForm={nextForm} button={button} /> */}

                <div className={`${styles.form_card} card form_card `}>
                    <div className={`${styles.form_card_body} card-body`}>



                        <div className=""> {`${formStep} of ${totalPlates} plates`} </div>
                        <h2 className={styles.title}>Pick Your Plate!</h2>


                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Protein</label>
                            </div>
                            <select {...register("plate1_protein")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {proteins}


                            </select>
                        </div>


                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Starch</label>
                            </div>
                            <select {...register("plate1_starch")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {starches}


                            </select>
                        </div>

                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Side 1</label>
                            </div>
                            <select {...register("plate1_side_one")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {sides}


                            </select>
                        </div>



                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Side 2</label>
                            </div>
                            <select {...register("plate1_side_two")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {sides}


                            </select>
                        </div>


                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupDessert">Dessert</label>
                            </div>
                            <select {...register("plate1_dessert")} className={`${styles.form_select} custom-select" id="inputGroupDessert`}>
                                <option className={styles.form_option} >Choose...</option>

                                {desserts}


                            </select>
                        </div>

                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Drink</label>
                            </div>
                            <select {...register("plate1_drink")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {drinks}


                            </select>
                        </div>

                        <div className="form-group">
                            <label className={`${styles.formTextAreaLabel} input-group-text`} htmlFor="customPlateMessage">Custom Plate</label>
                            <textarea {...register("one_food__message")} className="form-control" placeholder="Add notes here to modify this plate. Additional charges apply for modifications. " rows="3"></textarea>
                        </div>

                        <div className={styles.form_submitButton_container}>
                            {button}
                        </div>
                    </div>
                </div>



            </section>}

            {formStep == 2 && <section>

                {/* <SinglePlate totalPlates={totalPlates} formStep={formStep} nextForm={nextForm} button={button} /> */}

                <div className={`${styles.form_card} card form_card `}>
                    <div className={`${styles.form_card_body} card-body`}>


                        <div className=""> {`${formStep} of ${totalPlates} plates`} </div>
                        <h2 className={styles.title}>Pick Your Plate!</h2>


                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Protein</label>
                            </div>
                            <select {...register("plate2_protein")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {proteins}


                            </select>
                        </div>


                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Starch</label>
                            </div>
                            <select {...register("plate2_starch")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {starches}


                            </select>
                        </div>

                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Side 1</label>
                            </div>
                            <select {...register("plate2_side_one")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {sides}


                            </select>
                        </div>



                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Side 2</label>
                            </div>
                            <select {...register("plate2_side_two")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {sides}


                            </select>
                        </div>


                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupDessert">Dessert</label>
                            </div>
                            <select {...register("plate2_dessert")} className={`${styles.form_select} custom-select" id="inputGroupDessert`}>
                                <option className={styles.form_option} >Choose...</option>

                                {desserts}


                            </select>
                        </div>

                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Drink</label>
                            </div>
                            <select {...register("plate2_drink")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {drinks}


                            </select>
                        </div>

                        <div className="form-group">
                            <label className={`${styles.formTextAreaLabel} input-group-text`} htmlFor="customPlateMessage">Custom Plate</label>
                            <textarea {...register("two_food__message")} className="form-control" placeholder="Add notes here to modify this plate. Additional charges apply for modifications " rows="3"></textarea>
                        </div>



                        <div className={styles.form_submitButton_container}>

                            {button}

                        </div>
                    </div>
                </div>

            </section>}




        </form>

    );
}

export default MultiStepForm;
