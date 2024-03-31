import React from 'react'
import ReactDOM from 'react-dom/client'
import {createRouter, RouterProvider} from "@tanstack/react-router";
import {routeTree} from "./routeTree.gen";
// import 'antd/dist/reset.css';
import {ConfigProvider, ThemeConfig} from "antd";
import RootGrid from "./ui/RootGrid.tsx";
import {RecoilRoot} from "recoil";
import './main.module.scss';

const router = createRouter({routeTree});

declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}
;

const customTheme: ThemeConfig = {
    token: {
        colorBgBase: '#EEEEEF',
        colorLink: '#EEEEEF',
        colorPrimary: '#9D2135',
        colorTextBase: '#52565A',

    },
};

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RecoilRoot>
            <ConfigProvider theme={customTheme}>
                <RootGrid>
                    <RouterProvider router={router}/>
                </RootGrid>
            </ConfigProvider>
        </RecoilRoot>
    </React.StrictMode>,
)
