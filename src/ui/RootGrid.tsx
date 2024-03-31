import {ReactNode} from 'react';
import {Col, Row} from "antd";
import Footer from "../components/Footer/Footer.tsx";
import Header from "../components/Header/Header.tsx";
import styles from "./RootGrid.module.scss"
import Slider from "../components/Slider/Slider.tsx";

interface RootGridProps {
    children: ReactNode;
}

const RootGrid = ({children}: RootGridProps) => {
    return (
        <>
            <Row justify="center" className={styles.header}>
                    <Header/>
                <Slider/>
            </Row>
            <Row justify="center">
                <Col xs={24} sm={23} md={23} lg={22} xl={21} xxl={21}>
                    {children}
                </Col>
            </Row>
            <Row justify="center" className={styles.footer}>
                <Col xs={24} sm={23} md={23} lg={22} xl={21} xxl={21}>
                    <Footer/>
                </Col>
            </Row>
        </>

    );
};

export default RootGrid;