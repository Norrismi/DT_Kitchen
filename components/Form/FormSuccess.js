import { db } from '../../utils/firebase'
import firebase from "firebase/app";
import styles from '../../styles/FormSuccess.module.css'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import cashAppQR from '../../Assets/cashAppQR.jpg'


const FormSuccess = ({ formData, sendTotal }) => {


    // const [totalPrice, setTotalPrice] = useState()
    // const totalFormatted = (totalPrice && totalPrice.toString().includes('.')) ? `$${totalPrice}` : `$${totalPrice}.00`

    const plateOneItems = []
    const plateTwoItems = []


    const { email, name, phone, ...checkOutData } = formData

    const { plates_number, two_food__message, one_food__message, plate2_protein, plate2_starch, plate2_side_one, plate2_side_two, plate2_drink, plate2_dessert, ...plateOne } = checkOutData

    let plateTwo = { plate2_protein, plate2_starch, plate2_side_one, plate2_side_two, plate2_drink, plate2_dessert, }




    for (const prop in plateOne) {
        (plateOne[prop] != 'Choose...')
            ? plateOneItems.push(plateOne[prop])
            : null;
    }

    for (const prop in plateTwo) {
        (plateTwo[prop] != 'Choose...')
            ? plateTwoItems.push(plateTwo[prop])
            : null;
    }




    // console.log(formData)
      //console.log(plateTwoItems)
  

    // console.log(totalFormatted)
    // console.log(totalPrice)


    return (
        <div className={`${styles.success} card`}>
            <div className={styles.success_container}>

                <div className={styles.success_header}>
                    Your order was successfully submitted!
                </div>



                {/* {(plateOneItems.length || one_food__message.length)
                    ? (<div className={styles.ordered_items}>
                        <h4>Plate One</h4>

                        {plateOneItems.map((item, i) => <div key={i}> {item}</div>)}

                        {(one_food__message.length) ? `Message: ${one_food__message}` : null}

                    </div>)
                    : null
                }


                {(plateTwoItems.length || two_food__message)
                    ? (<div className={styles.ordered_items}>
                        <h4>Plate two</h4>

                        {plateTwoItems.map((item, i) => <div key={i}> {item}</div>)}

                        {(two_food__message) ? `Message: ${two_food__message}` : null}

                    </div>)
                    :   <h4>Plate two empty</h4>} */}







                <div className={styles.order_total}>
                    <div>

                        Your order total is  ${sendTotal}
                    </div>
                    <div>
                        Cash or Cashapp accepted
                    </div>



                    <div className={styles.success_qrcode_container}>
                        <a href="https://cash.app/$DRT1992?qr=1" target="_blank" rel="noopener noreferrer" >
                            <Image src={cashAppQR} className={`${styles.success_qrcode_img} `} alt="Intro Banner" />
                        </a>
                    </div>
                    <div>
                        Tips are always appreciated
                    </div>

                </div>
            </div>
        </div>
    );
}

export default FormSuccess;

