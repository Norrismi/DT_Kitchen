import React from 'react';
import styles from '../styles/Footer.module.css'
import Link from 'next/link';
import date from 'date-and-time';

const Footer = () => {


    const now = new Date();
    let year = date.format(now, 'YYYY')




    return (
        <div className={styles.footer_container}>
            <div className={styles.icon_container}>

                <a className={styles.footer_link} href="https://google.com/" target="_blank" rel="noopener noreferrer" >
                    <i className={`${styles.footer_icons} bi bi-facebook`}></i>
                </a>

                <a className={styles.footer_link} href="https://google.com/" target="_blank" rel="noopener noreferrer" >
                    <i className={`${styles.footer_icons} bi bi-instagram`}></i>
                </a>

                <a className={styles.footer_link} href="https://google.com/" target="_blank" rel="noopener noreferrer" >
                    <i className={`${styles.footer_icons} bi bi-youtube`}></i>
                </a>

                <a className={styles.footer_link} href="https://google.com/" target="_blank" rel="noopener noreferrer" >
                    <i className={`${styles.footer_icons} bi bi-twitter`}></i>
                </a>
            </div>

            <div className={styles.footer_text}>
                843-812-2639
            </div >
            <div className={styles.footer_text}>
                All Rights Reserved {year}
            </div>
        </div>
    );
}

export default Footer;
