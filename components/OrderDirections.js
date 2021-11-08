import React from 'react';
import styles from '../styles/OrderDirections.module.css'

const OrderDirections = () => {
    return (
        <div className={styles.directions_container}>
            <div>Please provide your order information.</div>
            <div>In the next form you can select food options.</div>
        </div>
    );
}

export default OrderDirections;
