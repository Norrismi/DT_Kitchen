import Link from 'next/link'
import styles from '../styles/404.module.css'


const NotFound = () => {
    return (
        <div className={styles.NotFound_container}>
            <div className={styles.NotFound_text}>404 Page: Food Missing</div>
            <Link href='/' passHref>
                <button className={`${styles.NotFound_button} btn`}>Homepage</button>
            </Link>


        </div>
    );
}

export default NotFound;