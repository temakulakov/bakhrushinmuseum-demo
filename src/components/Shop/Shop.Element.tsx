import React, { useState } from 'react';
import styles from './Shop.Element.module.scss';
import { motion } from "framer-motion";
import {IShop} from "../../types";

interface IProps {
    item: IShop;
}

const ShopElement = ({ item }: IProps) => {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        // Вычисляем положение курсора относительно центра карточки
        const x = -(e.clientX - (rect.left + rect.width / 2)) / 10; // Изменяем направление наклона по горизонтали
        const y = (e.clientY - (rect.top + rect.height / 2)) / 10; // Изменяем направление наклона по вертикали
        // Устанавливаем углы наклона для анимации
        setRotation({ x: y, y: x }); // Сохраняем изменение направления наклона
    };

    const handleMouseLeave = () => {
        // При выходе курсора за пределы элемента сбрасываем углы наклона
        setRotation({ x: 0, y: 0 });
    };

    return (
        <motion.div
            className={styles.wrapper}
        >
            <motion.div className={styles.body}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{ perspective: 1000 }} // Устанавливаем перспективу для 3D эффекта
                        animate={{
                            rotateX: rotation.x,
                            rotateY: rotation.y,
                        }}
                // transition={{ type: "spring", stiffness: 100, damping: 10 }}
            >
                <img src={item.imageUrl} alt={item.title} />
            </motion.div>
            <h2>{item.title}</h2>
            <p>{item.price}₽</p>
        </motion.div>
    );
};

export default ShopElement;
