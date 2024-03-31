import styles from "./Column.module.scss";
import {IFooterColumns} from "../../../types";
// import {Link} from "@tanstack/react-router";

interface ColumnProps {
    column: IFooterColumns;
}

const Column = ({ column }: ColumnProps) => {
    return (
        <div className={styles.container}>
            <h1>{column.title}</h1>
            <div className={styles.body}>
                {column.links.map((link, index) => <a href={`/${link.src}`} key={index}>{link.title}</a>)}
            </div>
            <div className={styles.footer}>
                {/*{column.elements && column.elements?.map((element, index) => <div key={index}></div>)}*/}
            </div>
        </div>
    )
};

export default Column;