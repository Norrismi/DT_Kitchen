import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'
import breakfastSkillet from '../Assets/breakfastSkillet2.JPG'
import friedOreos from '../Assets/friedOreos.jpg'
import philly from '../Assets/philly.png'
import chickenWaffles from '../Assets/chickenWaffles.jpg'
import styles from '../styles/Carousel.module.css'

const CarouselPics = () => {
    return (
        <Carousel
            showThumbs={false}
            autoPlay={true}
            infiniteLoop={true}
            interval={5000}

// used preview and zoomed into pictures to 1100

            className={`${styles.carousel_container}  `}>
            <div className={`${styles.carousel_picture}`}>
                <Image src={friedOreos} alt="breakfast skillet" />
            </div>
            <div className={`${styles.carousel_picture}`}>
                <Image src={breakfastSkillet} alt="breakfast skillet" />
            </div>
            <div className={`${styles.carousel_picture}`}>
                <Image src={chickenWaffles} alt="breakfast skillet" />
            </div>      
            <div className={`${styles.carousel_picture}`}>
                <Image src={philly} alt="breakfast skillet" />
            </div>

        </Carousel>
    );
}

export default CarouselPics;
