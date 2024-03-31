import { useState } from 'react';
import styles from './Widget.module.scss';
import {IWidget} from "../../types";

const slides: IWidget[] = [
    { id: 0, title: "Виджет 1", imageUrl: "https://placehold.jp/916x860.png", links: "/", type: "Про", description: "Сегодня в фондах музея представлено более 1,5 млн. экспонатов. Это эскизы декораций, фотографии, костюмы актёров и многое другое", backgroundColor: "#F5E9BC", buttonText: "Расмотреть далее"},
    { id: 1, title: "Виджет 2", imageUrl: "https://placehold.jp/816x860.png", links: "/", type: "Про", description: "Историческое здание флигеля стало детским досуговым центром с театральной студией. Здесь дети разных возрастов смогут получить навыки по актерскому мастер- ству, вокалу, танцу, игре на музыкальных инструментах.", backgroundColor: "#8a65b6", buttonText: "Расмотреть далее"},
    { id: 2, title: "Виджет 3", imageUrl: "https://placehold.jp/816x860.png", links: "/", type: "Про", description: "Описание виджета 3", backgroundColor: "#52c2cc", buttonText: "Расмотреть далее"},
    { id: 3, title: "Виджет 4", imageUrl: "https://placehold.jp/816x860.png", links: "/", type: "Про", description: "Описание виджета 4", backgroundColor: "#60de6b", buttonText: "Расмотреть далее"},
    { id: 4, title: "Виджет 5", imageUrl: "https://placehold.jp/816x860.png", links: "/", type: "Про", description: "Описание виджета 5", backgroundColor: "#ea953d", buttonText: "Расмотреть далее"},
    { id: 5, title: "Виджет 6", imageUrl: "https://placehold.jp/816x860.png", links: "/", type: "Про", description: "Описание виджета 6", backgroundColor: "#cbe032", buttonText: "Расмотреть далее"},
    { id: 6, title: "Виджет 7", imageUrl: "https://placehold.jp/816x860.png", links: "/", type: "Про", description: "Описание виджета 7", backgroundColor: "#c2ac59", buttonText: "Расмотреть далее"},
];

const Widget = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // Состояние для текущего индекса
    const [ button1, setButton1 ] = useState(false);
    const [ button2, setButton2 ] = useState(false);

    const sliderJSX = slides.map((slide) => (
        <div
            className={styles.slide}
            style={{backgroundColor: slide.backgroundColor}}
            key={slide.id}
        >
            <div>
                <p>{slide.description}</p>
                <div>
                    <h1 className={styles.title}>{slide.title}</h1>
                    <div className={styles.buttonGroup}>
                        <button >{slide.buttonText}</button>
                        <button onClick={() => setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)} onMouseEnter={() => setButton1(true)} onMouseLeave={() => setButton1(false)}>
                            <svg width="10" height="11" viewBox="0 0 12 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M-3.49691e-07 7L12 0.0717978L12 13.9282L-3.49691e-07 7Z" fill={button2 ? 'white' : '#53565A'} style={{ fill: button1 ? 'white' : '#53565A'}}/>
                            </svg>

                        </button>
                        <button onClick={() => setCurrentIndex((currentIndex + 1) % slides.length)} onMouseEnter={() => setButton2(true)} onMouseLeave={() => setButton2(false)}>
                            <svg width="10" height="11" viewBox="0 0 13 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0773 7.01951L0.0596635 13.9171L0.0949643 0.0607533L12.0773 7.01951Z"
                                      fill={button2 ? 'white' : '#53565A'} style={{ fill: button2 ? 'white' : '#53565A'}}/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <img alt={slide.title} src={slide.imageUrl}/>
        </div>
    ));

    // Использование currentIndex для выбора текущего слайда
    const slide = sliderJSX[currentIndex];

    return <div className={styles.wrapper}>
        {slide}
    </div>;
};

export default Widget;
