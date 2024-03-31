import React, {ReactNode} from 'react';
import {Col, Row} from "antd";
import Footer from "../components/Footer/Footer.tsx";
import Header from "../components/Header/Header.tsx";
import styles from "./RootGrid.module.scss"

interface RootGridProps {
    children: ReactNode;
}

const RootGrid = ({children}: RootGridProps) => {
    return (
        <>
            <Row justify="center" className={styles.header}>
                <Col xs={24} sm={23} md={23} lg={20} xl={20} xxl={20}>
                    <Header/>
                </Col>
            </Row>
            <Row justify="center">
                <Col xs={24} sm={23} md={23} lg={20} xl={20} xxl={20}>
                    {children}
                </Col>
            </Row>
            <Row justify="center" className={styles.footer}>
                <Col xs={24} sm={23} md={23} lg={20} xl={20} xxl={20}>
                    <Footer/>
                </Col>
            </Row>
        </>

    );
};

export default RootGrid;