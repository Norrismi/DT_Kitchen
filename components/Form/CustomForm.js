// import { db } from '../../utils/firebase'
// import firebase from "firebase/app";
// import styles from '../../styles/OrderForm.module.css'
// import FormSuccess from './FormSuccess';
// import { useForm } from "react-hook-form";
// import { useState, useEffect } from 'react'
// import emailjs from 'emailjs-com'


// const CustomForm = () => {

//     const { register, handleSubmit, formState: { errors, isSubmitSuccessful, isValid } } = useForm({mode: 'all'});

//     const [proteinItem, setProteinItem] = useState();
//     const [dessertItem, setDessertItem] = useState();
//     const [starchItem, setStarchItem] = useState();
//     const [greenItem, setGreenItem] = useState();
//     const [sideItem, setSideItem] = useState();
//     const [drinkItem, setDrinkItem] = useState();



//     const arrTotalPrice = []

//     const firestore = firebase.firestore().collection('custom')


//     useEffect(() => {

//         firestore.doc('custom').collection('protein').onSnapshot(item => { setProteinItem(item.docs.map(a => a.data().item)) })
//         firestore.doc('custom').collection('starch').onSnapshot(item => { setStarchItem(item.docs.map(a => a.data().item)) })
//         firestore.doc('custom').collection('green').onSnapshot(item => { setGreenItem(item.docs.map(a => a.data().item)) })
//         firestore.doc('custom').collection('side').onSnapshot(item => { setSideItem(item.docs.map(a => a.data().item)) })
//         firestore.doc('custom').collection('dessert').onSnapshot(item => { setDessertItem(item.docs.map(a => a.data().item)) })
//         firestore.doc('custom').collection('drink').onSnapshot(item => { setDrinkItem(item.docs.map(a => a.data().item)) })

//         //firestore.doc('custom').collection('protein').onSnapshot(labelName => console.log(labelName.query._delegate._path.segments.pop()))


//     }, []);

//     const proteins = proteinItem && proteinItem.map(item => <option key={item}>{item} </option>)
//     const starches = starchItem && starchItem.map(item => <option key={item}>{item} </option>)
//     const greens = greenItem && greenItem.map(item => <option key={item}>{item} </option>)
//     const sides = sideItem && sideItem.map(item => <option key={item}>{item} </option>)
//     const desserts = dessertItem && dessertItem.map(item => <option key={item}>{item} </option>)
//     const drinks = drinkItem && drinkItem.map(item => <option key={item}>{item} </option>)





//     if (isSubmitSuccessful) return <FormSuccess />

//     // const foodCategory = ['food__protein', 'food__green', 'food__starch', 'food__side', 'food__dessert', 'food__drink',]

//     const onSubmit = (data, e) => {

//         const { email, name, phone, ...newData } = data

//         for (const prop in newData) {
//             (newData[prop] != 'Choose...')
//                 ? arrTotalPrice.push(Number(newData[prop].split('$').pop()))
//                 : arrTotalPrice.push(0);
//         }

//         const total = arrTotalPrice.reduce((arr, ac) => arr + ac).toFixed(2)

//         db.collection('New Order').add({
//             ...data,
//             totalPrice: total,
//             messageSent: firebase.firestore.FieldValue.serverTimestamp()

//         })



//         const { food__dessert, food__protein, food__starch } = data


//         let newProtein = newData.food__protein
//         let newStarch = newData.food__starch
//         let newDessert = newData.food__dessert


//         const YOUR_SERVICE_ID = process.env.NEXT_PUBLIC_EmailJS_YOUR_SERVICE_ID;
//         const YOUR_TEMPLATE_ID = process.env.NEXT_PUBLIC_EmailJS_YOUR_TEMPLATE_ID;
//         const YOUR_USER_ID = process.env.NEXT_PUBLIC_EmailJS_YOUR_USER_ID;

//         let templateParams = {
//             name,
//             email,
//             phone,
//             newProtein,
//             newStarch,
//             newDessert
//         }

//         // emailjs.send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams, YOUR_USER_ID)
//         //     .then((result) => {
//         //         console.log(result.text);
//         //     }, (error) => {
//         //         console.log(error.text);
//         //     });
//     }




//     return (
//         <>

//             <form onSubmit={handleSubmit((onSubmit))}>

//                 <div className={`${styles.form_card} card form_card `}>
//                     <div className={`${styles.form_card_body} card-body`}>
//                         <h2 className={styles.title}>Order Info</h2>

//                         <div className={`${styles.form_selectGroup, styles.form_input} input-group mb-3`}>
//                             <div className="input-group-prepend">
//                                 <span className="input-group-text" >Name</span>
//                             </div>
//                             <input type="text" className={`form-control`} {...register("name", { required: true })} placeholder="Order Name" aria-label="Order Name" aria-describedby="basic-addon" />
//                         </div>
//                         <div className={`${styles.form_messageContainer}`}>

//                             {errors.name && <div className={`${styles.form_message}`}>Order name is required</div>}
//                         </div>

//                         <div className={`${styles.form_selectGroup, styles.form_input} input-group mb-3`}>
//                             <div className="input-group-prepend">
//                                 <span className="input-group-text" >Email</span>
//                             </div>
//                             <input type="email" id="email" className={`form-control`} {...register("email")} placeholder="Email@provider.com" aria-label="Email" aria-describedby="basic-addon" />
//                         </div>

//                         <div className={`${styles.form_selectGroup, styles.form_input} input-group mb-3`}>
//                             <div className="input-group-prepend">
//                                 <span className="input-group-text" >Number</span>
//                             </div>
//                             <input type="tel" id="phone" className={`form-control`} {...register("phone", { required: true })} placeholder="111-111-1111" aria-label="Phone Number" aria-describedby="basic-addon" />


//                         </div>
//                         <div className={`${styles.form_messageContainer}`}>

//                             {errors.phone && <div className={`${styles.form_message}`}>Phone number is required</div>}
//                         </div>


//                         <h2 className={styles.title}>Pick Your Plate!</h2>


//                         <div className={`${styles.form_selectGroup} input-group mb-3`}>
//                             <div className="input-group-prepend">
//                                 <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Protein</label>
//                             </div>
//                             <select {...register("food__protein")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
//                                 <option className={styles.form_option} >Choose...</option>

//                                 {proteins}


//                             </select>
//                         </div>


//                         <div className={`${styles.form_selectGroup} input-group mb-3`}>
//                             <div className="input-group-prepend">
//                                 <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Starch</label>
//                             </div>
//                             <select {...register("food__starch")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
//                                 <option className={styles.form_option} >Choose...</option>

//                                 {starches}


//                             </select>
//                         </div>

//                         <div className={`${styles.form_selectGroup} input-group mb-3`}>
//                             <div className="input-group-prepend">
//                                 <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Greens</label>
//                             </div>
//                             <select {...register("food__green")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
//                                 <option className={styles.form_option} >Choose...</option>

//                                 {greens}


//                             </select>
//                         </div>

//                         <div className={`${styles.form_selectGroup} input-group mb-3`}>
//                             <div className="input-group-prepend">
//                                 <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Side</label>
//                             </div>
//                             <select {...register("food__side")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
//                                 <option className={styles.form_option} >Choose...</option>

//                                 {sides}


//                             </select>
//                         </div>


//                         <div className={`${styles.form_selectGroup} input-group mb-3`}>
//                             <div className="input-group-prepend">
//                                 <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupDessert">Dessert</label>
//                             </div>
//                             <select {...register("food__dessert")} className={`${styles.form_select} custom-select" id="inputGroupDessert`}>
//                                 <option className={styles.form_option} >Choose...</option>

//                                 {desserts}


//                             </select>
//                         </div>

//                         <div className={`${styles.form_selectGroup} input-group mb-3`}>
//                             <div className="input-group-prepend">
//                                 <label className={`${styles.formLabel} input-group-text`} htmlFor="inputGroupProtein">Drink</label>
//                             </div>
//                             <select {...register("food__drink")} className={`${styles.form_select} custom-select" id="inputGroupProtein`}>
//                                 <option className={styles.form_option} >Choose...</option>

//                                 {drinks}


//                             </select>
//                         </div>



//                         <div className={styles.form_submitButton_container}>

//                             <button className={` btn btn-dark contact-form_button`} disabled={!isValid} type="submit">Submit My Order</button>
//                         </div>
//                     </div>
//                 </div>
//             </form>

//         </>
//     );
// }

// export default CustomForm;
