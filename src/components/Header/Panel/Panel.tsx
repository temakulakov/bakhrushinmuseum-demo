import styles from './Panel.module.scss';
import {IHeaderColumn} from "../../../types";
import {AnimatePresence, motion} from "framer-motion";
import {useEffect, useState} from "react";
import arrow from "../../../static/icons/interface/arrow.svg";
import Line from "../Line/Line.tsx";


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
                    <AnimatePresence>
                    {panel.links.map((item, index) => {
                        return  <motion.a key={index}
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      exit={{ opacity: 0 }}
                                      href={item.head.src}
                                      onMouseEnter={() => {
                                          setActiveElement(item);
                                          setActiveDescription(item)
                                      }}>
                                {item.head.title}{item.links &&
                                <img style={{transform: 'rotate(-90deg)'}} src={arrow}/>}
                            </motion.a>
                    })}
                        </AnimatePresence>
                </div>
                <Line background={'white'}/>
                <div className={styles.columnSecond}>
                    {
                        activeElement && activeElement.links && <AnimatePresence>
                            {
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
                        </AnimatePresence>

                    }
                </div>
                <AnimatePresence> activeDescription &&

            </AnimatePresence>
                <Line background={'white'}/>
                <div className={styles.columnLast}>
                    {
                        activeDescription && <AnimatePresence>
                            <h1>{activeDescription.head.title}</h1>
                            <p>{activeDescription.head.description}</p>
                            <AnimatePresence>
                                {
                                    activeDescription.head.src &&
                                    <img src={activeDescription.head.src} alt={activeDescription.head.title}/>
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