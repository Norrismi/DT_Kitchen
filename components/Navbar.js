import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import firebase from '../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Logout from './Auth/Logout'

const Navbar = () => {

    const [user, loading] = useAuthState(firebase.auth())

    console.log("Loading:", loading, "|", "Current User:", user)

 

    let showUser = (user == null) ? null : `Hello ${user.email}`
    let showLogout = (user == null) ? null : <a>Logout</a>
    const showOrder = (user == null) ? null
        : (<Link href="/orderForm">
            <a className={styles.nav_link}>Order</a>
        </Link>
        )



    return (
        <nav className={styles.nav_container}>
            {/* <div className="logo">
                <h1>DTs Kitchen</h1>
            </div> */}
            <Link href="/">
                <a className={styles.nav_link}>Home</a>
            </Link>

            <Link href="/about">
                <a className={styles.nav_link}>About</a>
            </Link>

            {showOrder}



            <div className={styles.nav_link_LoggedIn}>
                {showUser}

            </div>
            <div className={styles.nav_link_LoggedIn_btn} onClick={Logout}>

                {showLogout}
            </div>



        </nav>
    );
}

export default Navbar;
