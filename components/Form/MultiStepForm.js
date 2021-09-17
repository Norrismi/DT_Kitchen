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

    const onSubmit = (data, e) => {


        const { email,
            name,
            phone,
            plates_number,
            one_food__message,
            two_food__message,
            three_food__message,
            four_food__message,
            five_food__message,
            six_food__message,
            seven_food__message,
            eight_food__message,
            nine_food__message,
            ten_food__message,
            ...newData
        } = data

        setFormData(data)

        for (const prop in newData) {
            (newData[prop] != 'Choose...')
                ? arrTotalPrice.push(Number(newData[prop].split('$').pop()))
                : arrTotalPrice.push(0);

            // console.log(prop)
           // console.log('data:', data)
            //console.log('newData:', newData)
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

        const p3_Protein = newData.plate3_protein
        const p3_Starch = newData.plate3_starch
        const p3_SideOne = newData.plate3_side_one
        const p3_SideTwo = newData.plate3_side_two
        const p3_Drink = newData.plate3_drink
        const p3_Dessert = newData.plate3_dessert
        const p3_Comment = data.three_food__message

        const p4_Protein = newData.plate4_protein
        const p4_Starch = newData.plate4_starch
        const p4_SideOne = newData.plate4_side_one
        const p4_SideTwo = newData.plate4_side_two
        const p4_Drink = newData.plate4_drink
        const p4_Dessert = newData.plate4_dessert
        const p4_Comment = data.four_food__message

        const p5_Protein = newData.plate5_protein
        const p5_Starch = newData.plate5_starch
        const p5_SideOne = newData.plate5_side_one
        const p5_SideTwo = newData.plate5_side_two
        const p5_Drink = newData.plate5_drink
        const p5_Dessert = newData.plate5_dessert
        const p5_Comment = data.five_food__message

        const p6_Protein = newData.plate6_protein
        const p6_Starch = newData.plate6_starch
        const p6_SideOne = newData.plate6_side_one
        const p6_SideTwo = newData.plate6_side_two
        const p6_Drink = newData.plate6_drink
        const p6_Dessert = newData.plate6_dessert
        const p6_Comment = data.six_food__message

        const p7_Protein = newData.plate7_protein
        const p7_Starch = newData.plate7_starch
        const p7_SideOne = newData.plate7_side_one
        const p7_SideTwo = newData.plate7_side_two
        const p7_Drink = newData.plate7_drink
        const p7_Dessert = newData.plate7_dessert
        const p7_Comment = data.seven_food__message

        const p8_Protein = newData.plate8_protein
        const p8_Starch = newData.plate8_starch
        const p8_SideOne = newData.plate8_side_one
        const p8_SideTwo = newData.plate8_side_two
        const p8_Drink = newData.plate8_drink
        const p8_Dessert = newData.plate8_dessert
        const p8_Comment = data.eight_food__message

        const p9_Protein = newData.plate9_protein
        const p9_Starch = newData.plate9_starch
        const p9_SideOne = newData.plate9_side_one
        const p9_SideTwo = newData.plate9_side_two
        const p9_Drink = newData.plate9_drink
        const p9_Dessert = newData.plate9_dessert
        const p9_Comment = data.nine_food__message

        const p10_Protein = newData.plate10_protein
        const p10_Starch = newData.plate10_starch
        const p10_SideOne = newData.plate10_side_one
        const p10_SideTwo = newData.plate10_side_two
        const p10_Drink = newData.plate10_drink
        const p10_Dessert = newData.plate10_dessert
        const p10_Comment = data.ten_food__message

        
        


        const YOUR_SERVICE_ID = process.env.NEXT_PUBLIC_EmailJS_YOUR_SERVICE_ID;
        const YOUR_TEMPLATE_ID = process.env.NEXT_PUBLIC_EmailJS_YOUR_TEMPLATE_ID;
        const YOUR_USER_ID = process.env.NEXT_PUBLIC_EmailJS_YOUR_USER_ID;


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

            p3_Protein,
            p3_Starch,
            p3_SideOne,
            p3_SideTwo,
            p3_Drink,
            p3_Dessert,
            p3_Comment,

            p4_Protein,
            p4_Starch,
            p4_SideOne,
            p4_SideTwo,
            p4_Drink,
            p4_Dessert,
            p4_Comment,

            p5_Protein,
            p5_Starch,
            p5_SideOne,
            p5_SideTwo,
            p5_Drink,
            p5_Dessert,
            p5_Comment,

            p6_Protein,
            p6_Starch,
            p6_SideOne,
            p6_SideTwo,
            p6_Drink,
            p6_Dessert,
            p6_Comment,

            p7_Protein,
            p7_Starch,
            p7_SideOne,
            p7_SideTwo,
            p7_Drink,
            p7_Dessert,
            p7_Comment,

            p8_Protein,
            p8_Starch,
            p8_SideOne,
            p8_SideTwo,
            p8_Drink,
            p8_Dessert,
            p8_Comment,

            p9_Protein,
            p9_Starch,
            p9_SideOne,
            p9_SideTwo,
            p9_Drink,
            p9_Dessert,
            p9_Comment,

            p10_Protein,
            p10_Starch,
            p10_SideOne,
            p10_SideTwo,
            p10_Drink,
            p10_Dessert,
            p10_Comment,



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

                        {/* <div className={`${styles.form_selectGroup, styles.form_input} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <span className="input-group-text" >Plate #</span>
                            </div>
                            <input type="number" min="1" max="2" className={`form-control`} {...register("plates_number", { required: true })} placeholder="Number of Plates" aria-label="Order Name" aria-describedby="basic-addon" />
                        </div> */}

                        <div className={`${styles.form_selectGroup, styles.form_input} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Plate #</label>
                            </div>
                            <select {...register("plates_number")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Number of Plates</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
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

            {formStep == 3 && <section>

                <div className={`${styles.form_card} card form_card `}>
                    <div className={`${styles.form_card_body} card-body`}>



                        <div className=""> {`${formStep} of ${totalPlates} plates`} </div>
                        <h2 className={styles.title}>Pick Your Plate!</h2>


                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Protein</label>
                            </div>
                            <select {...register("plate3_protein")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {proteins}


                            </select>
                        </div>


                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Starch</label>
                            </div>
                            <select {...register("plate3_starch")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {starches}


                            </select>
                        </div>

                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Side 1</label>
                            </div>
                            <select {...register("plate3_side_one")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {sides}


                            </select>
                        </div>



                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Side 2</label>
                            </div>
                            <select {...register("plate3_side_two")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {sides}


                            </select>
                        </div>


                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupDessert">Dessert</label>
                            </div>
                            <select {...register("plate3_dessert")} className={`${styles.form_select} custom-select" id="inputGroupDessert`}>
                                <option className={styles.form_option} >Choose...</option>

                                {desserts}


                            </select>
                        </div>

                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Drink</label>
                            </div>
                            <select {...register("plate3_drink")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {drinks}


                            </select>
                        </div>

                        <div className="form-group">
                            <label className={`${styles.formTextAreaLabel} input-group-text`} htmlFor="customPlateMessage">Custom Plate</label>
                            <textarea {...register("three_food__message")} className="form-control" placeholder="Add notes here to modify this plate. Additional charges apply for modifications. " rows="3"></textarea>
                        </div>

                        <div className={styles.form_submitButton_container}>
                            {button}
                        </div>
                    </div>
                </div>



            </section>}

            {formStep == 4 && <section>

                <div className={`${styles.form_card} card form_card `}>
                    <div className={`${styles.form_card_body} card-body`}>



                        <div className=""> {`${formStep} of ${totalPlates} plates`} </div>
                        <h2 className={styles.title}>Pick Your Plate!</h2>


                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Protein</label>
                            </div>
                            <select {...register("plate4_protein")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {proteins}


                            </select>
                        </div>


                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Starch</label>
                            </div>
                            <select {...register("plate4_starch")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {starches}


                            </select>
                        </div>

                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Side 1</label>
                            </div>
                            <select {...register("plate4_side_one")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {sides}


                            </select>
                        </div>



                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Side 2</label>
                            </div>
                            <select {...register("plate4_side_two")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {sides}


                            </select>
                        </div>


                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupDessert">Dessert</label>
                            </div>
                            <select {...register("plate4_dessert")} className={`${styles.form_select} custom-select" id="inputGroupDessert`}>
                                <option className={styles.form_option} >Choose...</option>

                                {desserts}


                            </select>
                        </div>

                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Drink</label>
                            </div>
                            <select {...register("plate4_drink")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {drinks}


                            </select>
                        </div>

                        <div className="form-group">
                            <label className={`${styles.formTextAreaLabel} input-group-text`} htmlFor="customPlateMessage">Custom Plate</label>
                            <textarea {...register("four_food__message")} className="form-control" placeholder="Add notes here to modify this plate. Additional charges apply for modifications. " rows="3"></textarea>
                        </div>

                        <div className={styles.form_submitButton_container}>
                            {button}
                        </div>
                    </div>
                </div>



            </section>}

            {formStep == 5 && <section>

                <div className={`${styles.form_card} card form_card `}>
                    <div className={`${styles.form_card_body} card-body`}>



                        <div className=""> {`${formStep} of ${totalPlates} plates`} </div>
                        <h2 className={styles.title}>Pick Your Plate!</h2>


                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Protein</label>
                            </div>
                            <select {...register("plate5_protein")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {proteins}


                            </select>
                        </div>


                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Starch</label>
                            </div>
                            <select {...register("plate5_starch")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {starches}


                            </select>
                        </div>

                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Side 1</label>
                            </div>
                            <select {...register("plate5_side_one")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {sides}


                            </select>
                        </div>



                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Side 2</label>
                            </div>
                            <select {...register("plate5_side_two")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {sides}


                            </select>
                        </div>


                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupDessert">Dessert</label>
                            </div>
                            <select {...register("plate5_dessert")} className={`${styles.form_select} custom-select" id="inputGroupDessert`}>
                                <option className={styles.form_option} >Choose...</option>

                                {desserts}


                            </select>
                        </div>

                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Drink</label>
                            </div>
                            <select {...register("plate5_drink")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {drinks}


                            </select>
                        </div>

                        <div className="form-group">
                            <label className={`${styles.formTextAreaLabel} input-group-text`} htmlFor="customPlateMessage">Custom Plate</label>
                            <textarea {...register("five_food__message")} className="form-control" placeholder="Add notes here to modify this plate. Additional charges apply for modifications. " rows="3"></textarea>
                        </div>

                        <div className={styles.form_submitButton_container}>
                            {button}
                        </div>
                    </div>
                </div>



            </section>}

            {formStep == 6 && <section>

                <div className={`${styles.form_card} card form_card `}>
                    <div className={`${styles.form_card_body} card-body`}>



                        <div className=""> {`${formStep} of ${totalPlates} plates`} </div>
                        <h2 className={styles.title}>Pick Your Plate!</h2>


                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Protein</label>
                            </div>
                            <select {...register("plate6_protein")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {proteins}


                            </select>
                        </div>


                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Starch</label>
                            </div>
                            <select {...register("plate6_starch")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {starches}


                            </select>
                        </div>

                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Side 1</label>
                            </div>
                            <select {...register("plate6_side_one")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {sides}


                            </select>
                        </div>



                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Side 2</label>
                            </div>
                            <select {...register("plate6_side_two")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {sides}


                            </select>
                        </div>


                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupDessert">Dessert</label>
                            </div>
                            <select {...register("plate6_dessert")} className={`${styles.form_select} custom-select" id="inputGroupDessert`}>
                                <option className={styles.form_option} >Choose...</option>

                                {desserts}


                            </select>
                        </div>

                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Drink</label>
                            </div>
                            <select {...register("plate6_drink")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {drinks}


                            </select>
                        </div>

                        <div className="form-group">
                            <label className={`${styles.formTextAreaLabel} input-group-text`} htmlFor="customPlateMessage">Custom Plate</label>
                            <textarea {...register("six_food__message")} className="form-control" placeholder="Add notes here to modify this plate. Additional charges apply for modifications. " rows="3"></textarea>
                        </div>

                        <div className={styles.form_submitButton_container}>
                            {button}
                        </div>
                    </div>
                </div>



            </section>}

            {formStep == 7 && <section>

                <div className={`${styles.form_card} card form_card `}>
                    <div className={`${styles.form_card_body} card-body`}>



                        <div className=""> {`${formStep} of ${totalPlates} plates`} </div>
                        <h2 className={styles.title}>Pick Your Plate!</h2>


                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Protein</label>
                            </div>
                            <select {...register("plate7_protein")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {proteins}


                            </select>
                        </div>


                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Starch</label>
                            </div>
                            <select {...register("plate7_starch")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {starches}


                            </select>
                        </div>

                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Side 1</label>
                            </div>
                            <select {...register("plate7_side_one")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {sides}


                            </select>
                        </div>



                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Side 2</label>
                            </div>
                            <select {...register("plate7_side_two")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {sides}


                            </select>
                        </div>


                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupDessert">Dessert</label>
                            </div>
                            <select {...register("plate7_dessert")} className={`${styles.form_select} custom-select" id="inputGroupDessert`}>
                                <option className={styles.form_option} >Choose...</option>

                                {desserts}


                            </select>
                        </div>

                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Drink</label>
                            </div>
                            <select {...register("plate7_drink")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {drinks}


                            </select>
                        </div>

                        <div className="form-group">
                            <label className={`${styles.formTextAreaLabel} input-group-text`} htmlFor="customPlateMessage">Custom Plate</label>
                            <textarea {...register("seven_food__message")} className="form-control" placeholder="Add notes here to modify this plate. Additional charges apply for modifications. " rows="3"></textarea>
                        </div>

                        <div className={styles.form_submitButton_container}>
                            {button}
                        </div>
                    </div>
                </div>



            </section>}

            {formStep == 8 && <section>

                <div className={`${styles.form_card} card form_card `}>
                    <div className={`${styles.form_card_body} card-body`}>



                        <div className=""> {`${formStep} of ${totalPlates} plates`} </div>
                        <h2 className={styles.title}>Pick Your Plate!</h2>


                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Protein</label>
                            </div>
                            <select {...register("plate8_protein")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {proteins}


                            </select>
                        </div>


                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Starch</label>
                            </div>
                            <select {...register("plate8_starch")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {starches}


                            </select>
                        </div>

                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Side 1</label>
                            </div>
                            <select {...register("plate8_side_one")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {sides}


                            </select>
                        </div>



                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Side 2</label>
                            </div>
                            <select {...register("plate8_side_two")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {sides}


                            </select>
                        </div>


                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupDessert">Dessert</label>
                            </div>
                            <select {...register("plate8_dessert")} className={`${styles.form_select} custom-select" id="inputGroupDessert`}>
                                <option className={styles.form_option} >Choose...</option>

                                {desserts}


                            </select>
                        </div>

                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Drink</label>
                            </div>
                            <select {...register("plate8_drink")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {drinks}


                            </select>
                        </div>

                        <div className="form-group">
                            <label className={`${styles.formTextAreaLabel} input-group-text`} htmlFor="customPlateMessage">Custom Plate</label>
                            <textarea {...register("eight_food__message")} className="form-control" placeholder="Add notes here to modify this plate. Additional charges apply for modifications. " rows="3"></textarea>
                        </div>

                        <div className={styles.form_submitButton_container}>
                            {button}
                        </div>
                    </div>
                </div>



            </section>}

            {formStep == 9 && <section>

                <div className={`${styles.form_card} card form_card `}>
                    <div className={`${styles.form_card_body} card-body`}>



                        <div className=""> {`${formStep} of ${totalPlates} plates`} </div>
                        <h2 className={styles.title}>Pick Your Plate!</h2>


                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Protein</label>
                            </div>
                            <select {...register("plate9_protein")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {proteins}


                            </select>
                        </div>


                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Starch</label>
                            </div>
                            <select {...register("plate9_starch")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {starches}


                            </select>
                        </div>

                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Side 1</label>
                            </div>
                            <select {...register("plate9_side_one")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {sides}


                            </select>
                        </div>



                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Side 2</label>
                            </div>
                            <select {...register("plate9_side_two")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {sides}


                            </select>
                        </div>


                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupDessert">Dessert</label>
                            </div>
                            <select {...register("plate9_dessert")} className={`${styles.form_select} custom-select" id="inputGroupDessert`}>
                                <option className={styles.form_option} >Choose...</option>

                                {desserts}


                            </select>
                        </div>

                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Drink</label>
                            </div>
                            <select {...register("plate9_drink")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {drinks}


                            </select>
                        </div>

                        <div className="form-group">
                            <label className={`${styles.formTextAreaLabel} input-group-text`} htmlFor="customPlateMessage">Custom Plate</label>
                            <textarea {...register("nine_food__message")} className="form-control" placeholder="Add notes here to modify this plate. Additional charges apply for modifications. " rows="3"></textarea>
                        </div>

                        <div className={styles.form_submitButton_container}>
                            {button}
                        </div>
                    </div>
                </div>



            </section>}

            {formStep == 10 && <section>

                <div className={`${styles.form_card} card form_card `}>
                    <div className={`${styles.form_card_body} card-body`}>



                        <div className=""> {`${formStep} of ${totalPlates} plates`} </div>
                        <h2 className={styles.title}>Pick Your Plate!</h2>


                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Protein</label>
                            </div>
                            <select {...register("plate10_protein")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {proteins}


                            </select>
                        </div>


                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Starch</label>
                            </div>
                            <select {...register("plate10_starch")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {starches}


                            </select>
                        </div>

                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Side 1</label>
                            </div>
                            <select {...register("plate10_side_one")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {sides}


                            </select>
                        </div>



                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Side 2</label>
                            </div>
                            <select {...register("plate10_side_two")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {sides}


                            </select>
                        </div>


                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupDessert">Dessert</label>
                            </div>
                            <select {...register("plate10_dessert")} className={`${styles.form_select} custom-select" id="inputGroupDessert`}>
                                <option className={styles.form_option} >Choose...</option>

                                {desserts}


                            </select>
                        </div>

                        <div className={`${styles.form_selectGroup} input-group mb-3`}>
                            <div className="input-group-prepend">
                                <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Drink</label>
                            </div>
                            <select {...register("plate10_drink")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
                                <option className={styles.form_option} >Choose...</option>

                                {drinks}


                            </select>
                        </div>

                        <div className="form-group">
                            <label className={`${styles.formTextAreaLabel} input-group-text`} htmlFor="customPlateMessage">Custom Plate</label>
                            <textarea {...register("ten_food__message")} className="form-control" placeholder="Add notes here to modify this plate. Additional charges apply for modifications. " rows="3"></textarea>
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
