import { db } from '../../utils/firebase'
import firebase from "firebase/app";
import styles from '../../styles/FormSuccess.module.css'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import cashAppQR from '../../Assets/cashAppQR.jpg'


const FormSuccess = () => {


    const [totalPrice, setTotalPrice] = useState()

    const [protein, setProtein] = useState()
    const [green, setGreen] = useState()
    const [starch, setStarch] = useState()
    const [side, setSide] = useState()
    const [dessert, setDessert] = useState()
    const [drink, setDrink] = useState()

    let menuItems = [protein, green, starch, side, dessert, drink]


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
            .onSnapshot(item => setGreen(item.docs.map(a => a.data().food__green)))

        db.collection("New Order")
            .orderBy('messageSent', 'desc').limit(1)
            .onSnapshot(item => setStarch(item.docs.map(a => a.data().food__starch)))

        db.collection("New Order")
            .orderBy('messageSent', 'desc').limit(1)
            .onSnapshot(item => setSide(item.docs.map(a => a.data().food__side)))

        db.collection("New Order")
            .orderBy('messageSent', 'desc').limit(1)
            .onSnapshot(item => setDrink(item.docs.map(a => a.data().food__drink)))

        db.collection("New Order")
            .orderBy('messageSent', 'desc').limit(1)
            .onSnapshot(item => setDessert(item.docs.map(a => a.data().food__dessert)))
    }, []);



    const totalFormatted = (totalPrice && totalPrice.toString().includes('.')) ? `$${totalPrice}` : `$${totalPrice}.00`

    return (
        <div className={`${styles.success} card`}>
            <div className={styles.success_container}>

                <div className={styles.success_header}>
                    Your order was successfully submitted!
                </div>
         
                {/* <div className={styles.ordered_items}>

               
                    {menuItems.map(item => (item != 'Choose...') ? <li key={item}> {item}</li> : null)}

                </div> */}

                <div className={styles.order_total}>
                    <div>
                        Your order total is {totalFormatted}
                    </div>
                    <div>
                        Cash or Cashapp accepted
                    </div>
                    <div>
                        Tips are always appreciated
                    </div>



                    <div className={styles.success_qrcode_container}>
                        <a href="https://cash.app/$DRT1992?qr=1" target="_blank" rel="noopener noreferrer" >
                            <Image src={cashAppQR} className={`${styles.success_qrcode_img} `} alt="Intro Banner" />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default FormSuccess;
