import React from 'react';
import styles from '../styles/PickPlate.module.css'

const PickPlate = () => {
    return (
        <div className={styles.pickPlate_container}>
            <div>Continue to pick your food items.</div>
            <div>Select &quot;Choose...&quot; if you don&#39;t want a food option.</div>
        </div>
    );
}

export default PickPlate;
