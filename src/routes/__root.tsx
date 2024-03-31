import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import {Button} from "antd";
import Header from "../components/Header/Header.tsx";


export const Route = createRootRoute({
    component: () => (
        <>
            <Outlet/>
            <TanStackRouterDevtools/>
        </>
    )

})