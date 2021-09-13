// import { db } from '../../utils/firebase'
// import firebase from "firebase/app";
// import styles from '../../styles/OrderForm.module.css'
// import FormSuccess from './FormSuccess';
// import { useForm } from "react-hook-form";
// import { useState, useEffect } from 'react';





// const StepOneForm = ({showNext}) => {
    
//     const { register, getValues, handleSubmit, formState: { errors, isSubmitSuccessful, isValid } } = useForm({ mode: 'all' });
    
//     const totalPlates = getValues("plates_number")


//     return (
//         <div className={`${styles.form_card} card form_card `}>
//             <div className={`${styles.form_card_body} card-body`}>
//                 <h2 className={styles.title}>Order Info</h2>

//                 <div className={`${styles.form_selectGroup, styles.form_input} input-group mb-3`}>
//                     <div className="input-group-prepend">
//                         <span className="input-group-text" >Plate #</span>
//                     </div>
//                     <input type="number" min="2" max="10" className={`form-control`} {...register("plates_number", { required: true })} placeholder="Number of Plates" aria-label="Order Name" aria-describedby="basic-addon" />
//                 </div>



//                 <div className={`${styles.form_selectGroup, styles.form_input} input-group mb-3`}>
//                     <div className="input-group-prepend">
//                         <span className="input-group-text" >Name</span>
//                     </div>
//                     <input type="text" className={`form-control`} {...register("name", { required: true })} placeholder="Order Name" aria-label="Order Name" aria-describedby="basic-addon" />
//                 </div>
//                 <div className={`${styles.form_messageContainer}`}>

//                     {errors.name && <div className={`${styles.form_message}`}>Order name is required</div>}
//                 </div>

//                 <div className={`${styles.form_selectGroup, styles.form_input} input-group mb-3`}>
//                     <div className="input-group-prepend">
//                         <span className="input-group-text" >Email</span>
//                     </div>
//                     <input type="email" id="email" className={`form-control`} {...register("email")} placeholder="Email@provider.com" aria-label="Email" aria-describedby="basic-addon" />
//                 </div>

//                 <div className={`${styles.form_selectGroup, styles.form_input} input-group mb-3`}>
//                     <div className="input-group-prepend">
//                         <span className="input-group-text" >Number</span>
//                     </div>
//                     <input type="tel" id="phone" className={`form-control`} {...register("phone", { required: true })} placeholder="111-111-1111" aria-label="Phone Number" aria-describedby="basic-addon" />


//                 </div>
//                 <div className={`${styles.form_messageContainer}`}>

//                     {errors.phone && <div className={`${styles.form_message}`}>Phone number is required</div>}
//                 </div>

//                 {showNext}

//             </div>
//         </div>
//     );
// }

// export default StepOneForm;
