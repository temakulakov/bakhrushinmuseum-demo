import React from 'react';
import styles from './Footer.module.scss';
import min from '../../static/icons/img/min.svg'
import gosuslug from '../../static/icons/interface/gosuslug.svg';
import cultura from '../../static/icons/interface/cultura.svg';
import yt from '../../static/icons/interface/yt.svg';
import rt from '../../static/icons/interface/rt.svg';
import vk from '../../static/icons/interface/vk.svg';
import tg from '../../static/icons/interface/tg.svg';
import {IFooterColumns} from "../../types";
import Column from "./Column/Column.tsx";



const columns: IFooterColumns[] = [
    { title: "Посетителям", links: [
            {title: 'Здание и час работы', src: "/visitors"},
            {title: 'Купить билет', src: "/visitors"},
            {title: 'Билеты и льготы', src: "/visitors"},
            {title: 'Правила и условия посещения', src: "/visitors"},
            {title: 'Кафе и рестораны', src: "/visitors"},
        ], elements: [<a href={'https://culture.gov.ru/'}><img src={min} alt={min}/></a>]},
    { title: "О музее", links: [
            {title: 'Миссия и история', src: "/about"},
            {title: 'Руководство', src: "/about"},
            {title: 'Наука', src: "/about"},
            {title: 'Пресс-центр', src: "/about"},
            {title: 'Правовая информация', src: "/about"},
            {title: 'Контакты', src: "/about"},
            {title: 'Часто заваемые вопросы', src: "/about"},
            {title: 'Отзывы', src: "/about"},
        ], elements: [<a href={'https://quality.mkrf.ru/mark/?orgid=0373100001472'}><img src={gosuslug} alt={gosuslug}/></a>]},
    { title: "Выставки и события", links: [
            {title: 'Выставки', src: "/events"},
            {title: 'Постоянные экспозиции', src: "/events"},
            {title: 'События', src: "/events"},
            {title: 'Экскурсии', src: "/events"},
        ], elements: [<a href={'https://www.culture.ru/'}><img src={cultura} alt={cultura}/></a>]},

    { title: "", links: [
            {title: 'Сообщить об ошибке', src: "/additional"},
            {title: 'Использование материалов сайта', src: "/additional"},
            {title: 'Купить изображения', src: "/additional"},
            {title: 'Политика конфиденциальности', src: "/additional"},
            {title: 'Пользовательское соглашение', src: "/additional"},
            {title: 'Противодействие коррупиции', src: "/additional"},
            {title: 'Карта сайта', src: "/additional"},
            {title: 'Оценка качества услуг', src: "/additional"},
        ], elements: [<a href={'https://www.youtube.com/@bakhrushinmuseum'}><img src={yt} alt={yt}/></a>,
            <a href={'https://rutube.ru/channel/23745556/'}><img src={rt} alt={rt}/></a>,
            <a href={'https://vk.com/bahrushinmuseum'}><img src={vk} alt={vk}/></a>,
            <a href={'https://t.me/bakhrushinmuseum'}><img src={tg} alt={tg}/></a>,]},
]


const Footer: React.FC = () => {
    return <>
        <div className={styles.container}>
            {
                columns.map((column, index) => (<Column key={index} column={column}/>))
            }

        </div>
        <div className={styles.footer}>
            <p>{'© Бахрушинский музей, 2023'}</p>
            <div>
                <a href={'»tel:+74994847777″'}>+7 499 484 77 77</a>
                <a href={'https://yandex.ru/maps/-/CDRfbF8C'}>{'ул.Бахрушина 31/12, Москва, 115054'}</a>
            </div>
        </div>
    </>
};

export default Footer;
