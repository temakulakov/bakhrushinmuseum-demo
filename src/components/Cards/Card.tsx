import React from 'react';
import styles from "./Card.module.scss";
import dayjs from "dayjs";
import {motion} from "framer-motion";
import {IDuration} from "../../types";

dayjs.locale('ru');

export interface ICardProps {
    duration: IDuration;
    title: string;
    imageUrl: string;
    position: string;
    type?: string;
}

const Card = ({duration, imageUrl, title, position, type}: ICardProps) => {
    const [hover, setHover] = React.useState(false);
    return <motion.div className={styles.wrapper}
                       onMouseEnter={() => setHover(true)}
                       onMouseLeave={() => setHover(false)}
                       animate={{backgroundColor: hover ? "#52565A" : 'white', padding: hover ? "0 15px" : 0, marginRight: hover ? 0 : '30px'}}
    >
        <motion.div
            className={styles.imageWrapper}
        >
            <motion.img
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                className={styles.image}
                src={imageUrl}
                width={515}
                height={375}
                alt={title}/>
            {type && <div className={styles.type}/>}
        </motion.div>
        <motion.p animate={{color: hover ? 'white' : '#52565A'}} className={styles.date}>{`${duration.from.format('D MMMM')} - ${duration.to.format('D MMMM')}`}</motion.p>
        <motion.p animate={{color: hover ? 'white' : '#52565A'}} className={styles.title}>{title}</motion.p>

        <motion.p animate={{color: hover ? 'white' : '#52565A'}} className={styles.position}>
            <motion.svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <motion.circle cx="5" cy="5" r="5"  animate={{fill: !hover ? "#53565A" : 'white'}}/>
                <motion.path d="M5 12L1 8H9L5 12Z"  animate={{fill: !hover ? "#53565A" : 'white'}}/>
                <motion.circle cx="5" cy="5" r="2"  animate={{fill: !hover ? "white" : '#53565A'}}/>
            </motion.svg>

            {position}</motion.p>
    </motion.div>
};

export default Card;