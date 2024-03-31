// import styles from './Slider.module.scss';
import {ISlide} from "../../types";
import video from '../../static/icons/img/promo.mp4';
import img from '../../static/icons/img/img.png';
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

const slides: ISlide[] = [
    { id: 1, type: 'video', src: video },
    { id: 2, type: 'image', src: img },

];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    const handleNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const handlePrev = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

    const current = slides[currentSlide];

    return <div style={{width: '100vw', height: '80vh', overflow: 'hidden', position: 'relative'}}>
        <AnimatePresence>
            <motion.div key={current.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
                        transition={{duration: 1}}>
                {current.type === 'video' ? (
                    <video style={{width: '100%', height: '100%'}} autoPlay muted loop playsInline>
                        <source src={current.src} type="video/mp4"/>
                    </video>
                ) : (
                    <img src={current.src} style={{width: '100%', height: '100%', objectFit: 'cover'}}
                         draggable="false"/>
                )}
            </motion.div>
        </AnimatePresence>

        <button onClick={handlePrev} style={{position: 'absolute', top: '50%', left: 0}}>Prev</button>
        <button onClick={handleNext} style={{position: 'absolute', top: '50%', right: 0}}>Next</button>
    </div>
};

export default Slider;