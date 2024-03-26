import styles from './UR.module.css'
import {useTranslation} from "react-i18next"
import {Link} from 'react-scroll'
import diamond from "../assets/img/diamond.png";
import chess from '../assets/img/chess.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

function UR(){
    const [t, i18n] = useTranslation("global");

    return (
        <section id='UR' className={styles.ur}>
            <img className={styles.icon} src={chess} alt="chess"/>
            <h1 className={styles.pageTitle} style={{cursor:"auto"}}>{t("UR.title")}</h1>
            <div className={styles.container}>
                <div className={styles.item} >
                    <h1 id="mission" className={styles.pageTitleActive}>{t("UR.missao.title")}</h1>
                    <div className={styles.pageTopic}>
                        <h2>{t("UR.missao.desc")}</h2>
                    </div>
                </div>
                <div className={styles.item} >
                    <h1 id="vision" className={styles.pageTitle}>{t("UR.visao.title")}</h1>
                    <div className={styles.pageTopic}>
                        <h2>{t("UR.visao.desc")}</h2>
                    </div>
                </div>
                <div className={styles.item}>
                    <h1 id="values" className={styles.pageTitle}>{t("UR.valores.title")}</h1>
                    <div className={styles.pageTopic}>
                        <h2>{t("UR.valores.desc")}</h2>
                    </div>
                </div>
            </div>
            <h2 id="missionDesc" className={styles.descriptionActive}>{t("UR.missao.desc")}</h2>
            <h2 id="visionDesc" className={styles.description}>{t("UR.visao.desc")}</h2>
            <h2 id="valuesDesc" className={styles.description}>{t("UR.valores.desc")}</h2>
            <Link to ="quem" spy={true} smooth={true} offset={0} duration={1000} className={styles.containerArrowDown}>
                <FontAwesomeIcon icon={faAngleDown} className={styles.arrowDown}/>
            </Link>
        </section>
    )
}

export default UR