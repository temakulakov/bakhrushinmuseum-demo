import styles from './Panel.module.scss';
import {IHeaderColumn} from "../../../types";

interface Props {
    panel: IHeaderColumn
}

const Panel = ({ panel }: Props) => {
    return <div className={styles.container}>{panel.head.title}</div>
};

export default Panel;