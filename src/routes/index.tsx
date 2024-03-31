import { createFileRoute } from "@tanstack/react-router";
import CardList from "../components/Cards/CardList.tsx";
import Widget from "../components/Widget/Widget.tsx";
import News from "../components/News/News.tsx";
import Shop from "../components/Shop/Shop.tsx";
import Filials from "../components/Filials/Filials.tsx";

export const Route = createFileRoute("/")({
    component: Index,
});

function Index() {
    return <div>;
            <CardList/>
            <Widget/>
            <News/>
            <Widget/>
            <Shop/>
            <Filials/>
    </div>

}