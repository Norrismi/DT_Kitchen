import styles from '../styles/About.module.css'
import Image from 'next/image'
import rastaMenu from '../Assets/rastaMenu.JPG'
import salmonMenu from '../Assets/salmonMenu.jpg'
import brownMenu from '../Assets/brownMenu.jpeg'


const About = () => {
    return (
        <div className={styles.about_container}>
            <div className={styles.about_titleContainer}>

                <h1 className={styles.about_title}>{`DT's Kitchen`}</h1>
                <h3 className={styles.about_title}>How we got strated!</h3>
            </div>

            <div className={styles.row}>
                <div className={styles.row_picture}>
                    <Image src={rastaMenu} alt="example dinner menu" />
                </div>
                <div className={styles.row_paragraph}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae blanditiis odit, itaque, reprehenderit porro error doloremque vero doloribus sunt ipsum, repellat nemo? Deleniti culpa id dolores nam sunt, libero quas?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae blanditiis odit, itaque, reprehenderit porro error doloremque vero doloribus sunt ipsum, repellat nemo? Deleniti culpa id dolores nam sunt, libero quas?

                </div>

            </div>


            <div className={styles.row}>
                <div className={styles.row_paragraph}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae blanditiis odit, itaque, reprehenderit porro error doloremque vero doloribus sunt ipsum, repellat nemo? Deleniti culpa id dolores nam sunt, libero quas?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae blanditiis odit, itaque, reprehenderit porro error doloremque vero doloribus sunt ipsum, repellat nemo? Deleniti culpa id dolores nam sunt, libero quas?

                </div>
                <div className={styles.row_picture}>
                    <Image src={salmonMenu} alt="example dinner menu" />
                </div>

            </div>

            <div className={styles.row}>
                <div className={styles.row_picture}>
                    <Image src={brownMenu} alt="example dinner menu" />
                </div>
                <div className={styles.row_paragraph}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae blanditiis odit, itaque, reprehenderit porro error doloremque vero doloribus sunt ipsum, repellat nemo? Deleniti culpa id dolores nam sunt, libero quas?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae blanditiis odit, itaque, reprehenderit porro error doloremque vero doloribus sunt ipsum, repellat nemo? Deleniti culpa id dolores nam sunt, libero quas?

                </div>

            </div>

        </div>
    );
}

export default About;
