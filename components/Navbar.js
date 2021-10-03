import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import firebase from '../utils/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Logout from './Auth/Logout'



import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import React from "react";

const RBNavBar = () => {

    const [user, loading] = useAuthState(firebase.auth())

    console.log("Loading:", loading, "|", "Current User:", user)



    let showUser = (user == null) ? null : ` ${user.email}`
    let showLogout = (user == null) ? null : <button className={`${styles.nav_link_LoggedIn_btn}`}> <a>Logout</a> </button>
    const showOrder = (user == null)
        ? null
        : (<Nav.Link href="orderForm" id="myNavItem">Order</Nav.Link>)



    return (

        <Navbar bg="dark" variant="dark" expand="lg" id="myNavbar">
            {/* <Navbar.Brand href="#home"><img src="/logo_lpb_small.png"></img></Navbar.Brand> */}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto" id="myNavItem">
                    <Nav.Link href="/" id="myNavItem">Home</Nav.Link>
                    {showOrder}
                    <Nav.Link href="about" id="myNavItem">About</Nav.Link>
                    {showLogout}
                    <Navbar.Text>
                        Signed in as: <a href="#login">{showUser}</a>
                    </Navbar.Text>
                </Nav>
            </Navbar.Collapse>
        </Navbar>





















        //         <nav className={` navbar navbar-expand-lg navbar-light bg-dark`}>



        //         <div className={styles.nav_container }>


        // <div className={styles.nav_mainLinks}>

        //             <Link href="/">
        //                 <a className={styles.nav_link}>Home</a>
        //             </Link>

        //             <Link href="/about">
        //                 <a className={styles.nav_link}>About</a>
        //             </Link>

        //             {showOrder}
        // </div>


        // <div className={styles.nav_loggedInLinks}>

        //             <div className={styles.nav_link_LoggedIn}>
        //                 {showUser}

        //             </div>
        //             <div className={ styles.nav_link_LoggedIn} onClick={Logout}>



        //                 {showLogout}
        //             </div>
        // </div>



        //         </div>
        //         </nav>
    );
}

export default RBNavBar;
