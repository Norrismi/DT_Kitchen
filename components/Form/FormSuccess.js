import { db } from '../../utils/firebase'
import firebase from "firebase/app";
import { useState, useEffect } from 'react'


const FormSuccess = () => {


    const [totalPrice, setTotalPrice] = useState()

    let firestore = firebase.firestore()

    useEffect(() => {

        db.collection("New Order")
            .orderBy('messageSent', 'desc').limit(1)
            .onSnapshot(item => setTotalPrice(item.docs.map(a => a.data().totalPrice)))


        console.log(totalPrice)


    }, []);

    //IF price is 9.5 add a zero

    //else add two zeros

    let dbPrice = totalPrice.split('')




    //   if(dbPrice.length >= 2){
    //     dbPrice.push('0')
    //     return (dbPrice.join(''))
    //   }else{
    //       dbPrice.push('.','0', '0')
    //     return (dbPrice.join(''))
    //   }

    return (
        <>
            <h3>
                Your order was successfully submitted!
            </h3>
            <p>
                Your order total is {
                    (dbPrice && dbPrice.length >= 2)
                        ? dbPrice.push('0') && dbPrice.join('')
                        : dbPrice.push('.', '0', '0') && dbPrice.join('')
                }
            </p>
        </>
    );
}

export default FormSuccess;
