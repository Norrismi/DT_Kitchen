import React from 'react';
import styles from '../styles/Footer.module.css'
import date from 'date-and-time';

import { faFacebookF, faSnapchatGhost, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {


    const now = new Date();
    let year = date.format(now, 'YYYY')




    return (
        <div className={styles.footer_container}>
            <div className={styles.icon_container}>

                <a className={styles.footer_link} href="https://www.facebook.com/davontayt" target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faFacebookF} className={styles.footer_icons} />
                </a>

                <a className={styles.footer_link} href="https://google.com/" target="_blank" rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faInstagram} className={styles.footer_icons} />
                </a>

                <a className={styles.footer_link} href="https://google.com/" target="_blank" rel="noopener noreferrer" >
                    <FontAwesomeIcon icon={faSnapchatGhost} className={styles.footer_icons} />
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
