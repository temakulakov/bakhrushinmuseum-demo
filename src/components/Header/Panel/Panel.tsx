import styles from './Panel.module.scss';
import {IHeaderColumn} from "../../../types";
import {AnimatePresence} from "framer-motion";
import {useEffect, useState} from "react";
import arrow from "../../../static/icons/interface/arrow.svg";


interface Props {
    panel: IHeaderColumn
}

const Panel = ({ panel }: Props) => {
    const [ activeElement, setActiveElement ] = useState<IHeaderColumn>(panel);
    const [ activeDescription, setActiveDescription ] = useState<IHeaderColumn>(panel);
    useEffect(() => {
        setActiveDescription(panel);
        if (panel && panel.links && panel.links.length > 1) {
            setActiveElement(panel.links[0]);
        }
    }, [panel]);
    return <AnimatePresence>
        {
            panel && panel?.links && <div className={styles.container}>
                <div className={styles.columnFirst}>
                    {panel.links.map((item, index) => {
                        return <a key={index}
                                  href={item.head.src}
                                  onMouseEnter={() => {setActiveElement(item); setActiveDescription(item)}}>
                            {item.head.title}{item.links && <img style={{transform: 'rotate(-90deg)'}} src={arrow}/>}
                        </a>
                    })}
                </div>
                <div className={styles.columnSecond}>
                    {
                        activeElement && activeElement.links &&
                        activeElement.links.map((item, index) =>
                            <a href={item.head.src}
                               key={index}
                               onMouseEnter={() => {
                                   // setActiveElement(item);
                                   setActiveDescription(item)
                               }}>
                                {item.head.title}</a>
                        )
                    }
                </div>
                <div className={styles.columnLast}>
                    {
                        activeDescription && <AnimatePresence>
                            <h1>{activeDescription.head.title}</h1>
                            <p>{activeDescription.head.description}</p>
                            <AnimatePresence>
                                {
                                    activeDescription.head.src && <img src={activeDescription.head.src} alt={activeDescription.head.title}/>
                                }
                            </AnimatePresence>
                        </AnimatePresence>
                    }
                </div>
            </div>
        }

    </AnimatePresence>
};

export default Panel;