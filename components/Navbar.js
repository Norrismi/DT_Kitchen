import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import firebase from '../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Logout from './Auth/Logout'





const Navbar = () => {

    const [user, loading] = useAuthState(firebase.auth())

    console.log("Loading:", loading, "|", "Current User:", user)



    let showUser = (user == null) ? null : <div>{user.email}</div>
    let showLogoutBtn = (user == null) ? null : <button className={`${styles.nav_link_LoggedIn_btn}`}> <a>Logout</a> </button>
    const showOrder = (user == null)
        ? null
        : (<Link href="/orderForm">
            <a className={styles.nav_link}>Order</a>
        </Link>)



    return (

        <div className={styles.nav_container}>
            <div className={styles.nav_mainLinks}>

                <Link href="/">
                    <a className={styles.nav_link}>Home</a>
                </Link>

                <Link href="/about">
                    <a className={styles.nav_link}>About</a>
                </Link>

                {showOrder}
            </div>


            <div className={styles.nav_loggedInLinks}>
                <div className={styles.nav_link_LoggedIn}>
                    {showUser}
                </div>
                <div className={styles.nav_link_LoggedIn} onClick={Logout}>
                    {showLogoutBtn}
                </div>
            </div>
        </div>

    );
}

export default Navbar;




