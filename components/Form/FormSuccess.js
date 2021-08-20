import { db } from '../../utils/firebase'
import firebase from "firebase/app";
import { useState, useEffect } from 'react'


const FormSuccess = () => {


    const [totalPrice, setTotalPrice] = useState()

    const [protein, setProtein] = useState()
    const [dessert, setDessert] = useState()

    let firestore = firebase.firestore()

    useEffect(() => {

        db.collection("New Order")
            .orderBy('messageSent', 'desc').limit(1)
            .onSnapshot(item => setTotalPrice(item.docs.map(a => a.data().totalPrice)))

        db.collection("New Order")
            .orderBy('messageSent', 'desc').limit(1)
            .onSnapshot(item => setProtein(item.docs.map(a => a.data().food__protein)))

        db.collection("New Order")
            .orderBy('messageSent', 'desc').limit(1)
            .onSnapshot(item => setDessert(item.docs.map(a => a.data().food__dessert)))




    }, []);



    const totalFormatted = (totalPrice && totalPrice.toString().includes('.')) ? `$${totalPrice}0` : `$${totalPrice}.00`

    return (
        <>
            <h3>
                Your order was successfully submitted!
            </h3>
            <div>Your ordered</div>
            {(protein && protein != 'Choose...')
                ? <p> {protein}</p>
                : null}

            {(dessert && dessert != 'Choose...')
                ? <p> {dessert}</p>
                : null}
            <p>
                Your order total is {totalFormatted}

            </p>
        </>
    );
}

export default FormSuccess;
