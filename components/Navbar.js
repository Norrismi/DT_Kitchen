import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
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
            <Link href="/orderForm">
                <a className={styles.nav_link}>Order</a>
            </Link>


        </nav>
    );
}

export default Navbar;
