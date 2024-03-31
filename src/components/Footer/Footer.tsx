import React from 'react';
import styles from './Footer.module.scss';
import  Min  from '../../static/icons/img/min.svg'
import {IFooterColumns} from "../../types";
import Column from "./Column/Column.tsx";



const columns: IFooterColumns[] = [
    { title: "Посетителям", links: [
            {title: 'Здание и час работы', src: "/visitors"},
            {title: 'Купить билет', src: "/visitors"},
            {title: 'Билеты и льготы', src: "/visitors"},
            {title: 'Правила и условия посещения', src: "/visitors"},
            {title: 'Кафе и рестораны', src: "/visitors"},
        ], elements: [<Min/>]},
    { title: "О музее", links: [
            {title: 'Миссия и история', src: "/about"},
            {title: 'Руководство', src: "/about"},
            {title: 'Наука', src: "/about"},
            {title: 'Пресс-центр', src: "/about"},
            {title: 'Правовая информация', src: "/about"},
            {title: 'Контакты', src: "/about"},
            {title: 'Часто заваемые вопросы', src: "/about"},
            {title: 'Отзывы', src: "/about"},
        ]},
    { title: "ВЫСТАВКИ И СОБЫТИЯ", links: [
            {title: 'Выставки', src: "/events"},
            {title: 'Постоянные экспозиции', src: "/events"},
            {title: 'События', src: "/events"},
            {title: 'Экскурсии', src: "/events"},
        ]},

    { title: "", links: [
            {title: 'Сообщить об ошибке', src: "/additional"},
            {title: 'Использование материалов сайта', src: "/additional"},
            {title: 'Купить изображения', src: "/additional"},
            {title: 'Политика конфиденциальности', src: "/additional"},
            {title: 'Пользовательское соглашение', src: "/additional"},
            {title: 'Противодействие коррупиции', src: "/additional"},
            {title: 'Карта сайта', src: "/additional"},
            {title: 'Оценка качества услуг', src: "/additional"},
        ]},
]


const Footer: React.FC = () => {
    return <div className={styles.container}>
        {
            columns.map((column, index) => (<Column key={index} column={column}/>))
        }

    </div>
};

export default Footer;
