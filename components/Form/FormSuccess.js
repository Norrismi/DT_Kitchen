import { db } from '../../utils/firebase'
import firebase from "firebase/app";
import styles from '../../styles/FormSuccess.module.css'
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
        <div className={`${styles.success} card`}>
            <div className={styles.success_container}>

                <div className={styles.success_header}>
                    Your order was successfully submitted!
                </div>
                {/* <p>Your order was...</p> */}
                <div className={styles.ordered_items}>

                    {(protein && protein != 'Choose...')
                        ? <li> {protein}</li>
                        : null}

                    {(dessert && dessert != 'Choose...')
                        ? <li> {dessert}</li>
                        : null}
                </div>

                <div className={styles.order_total}>
                    <div>
                        Your order total is {totalFormatted}
                    </div>
                    <div>
                        Cash or Cashapp accepted!
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FormSuccess;
