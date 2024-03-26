import styles from './PE.module.css'
import {useTranslation} from "react-i18next"
import {Link} from 'react-scroll'
import diamond from "../assets/img/diamond.png";
import chess from '../assets/img/chess.png'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";

function PE(){
    const [t, i18n] = useTranslation("global");

    const mission = () => {
        const width = window.innerWidth
        if (width > 1200){
            document.getElementById("mission").setAttribute("style", "border-bottom: none;");
            document.getElementById("vision").setAttribute("style", "border-bottom: none;");
            document.getElementById("values").setAttribute("style", "border-bottom: none;");
            document.getElementById("mission").setAttribute("style", "border-bottom: 2px solid #E4C576;");

            document.getElementById("missionDesc").setAttribute("style", "display:none;");
            document.getElementById("visionDesc").setAttribute("style", "display:none;");
            document.getElementById("valuesDesc").setAttribute("style", "display:none;");
            document.getElementById("missionDesc").setAttribute("style", "display:flex;");
        }
    }

    const vision = () => {
        const width = window.innerWidth
        if (width > 1200){
            document.getElementById("mission").setAttribute("style", "border-bottom: none;");
            document.getElementById("vision").setAttribute("style", "border-bottom: none;");
            document.getElementById("values").setAttribute("style", "border-bottom: none;");
            document.getElementById("vision").setAttribute("style", "border-bottom: 2px solid #E4C576;");

            document.getElementById("missionDesc").setAttribute("style", "display:none;");
            document.getElementById("visionDesc").setAttribute("style", "display:none;");
            document.getElementById("valuesDesc").setAttribute("style", "display:none;");
            document.getElementById("visionDesc").setAttribute("style", "display:flex;");
        }
    }

    const values = () => {
        const width = window.innerWidth
        if (width > 1200){
            document.getElementById("mission").setAttribute("style", "border-bottom: none;");
            document.getElementById("vision").setAttribute("style", "border-bottom: none;");
            document.getElementById("values").setAttribute("style", "border-bottom: none;");
            document.getElementById("values").setAttribute("style", "border-bottom: 2px solid #E4C576;");

            document.getElementById("missionDesc").setAttribute("style", "display:none;");
            document.getElementById("visionDesc").setAttribute("style", "display:none;");
            document.getElementById("valuesDesc").setAttribute("style", "display:none;");
            document.getElementById("valuesDesc").setAttribute("style", "display:flex;");
        }
    }

    return (
        <section id='PE' className={styles.pe}>
            <img className={styles.icon} src={chess} alt="chess"/>
            <h1 className={styles.pageTitle} style={{cursor:"auto"}}>{t("PE.title")}</h1>
            <div className={styles.container}>
                <div className={styles.item} onMouseOver={() => mission()}>
                    <h1 id="mission" className={styles.pageTitleActive}>{t("PE.missao.title")}</h1>
                    <div className={styles.pageTopic}>
                        <h2>{t("PE.missao.desc")}</h2>
                    </div>
                </div>
                <div className={styles.item} onMouseOver={() => vision()}>
                    <h1 id="vision" className={styles.pageTitle}>{t("PE.visao.title")}</h1>
                    <div className={styles.pageTopic}>
                        <h2>{t("PE.visao.desc")}</h2>
                    </div>
                </div>
                <div className={styles.item} onMouseOver={() => values()}>
                    <h1 id="values" className={styles.pageTitle}>{t("PE.valores.title")}</h1>
                    <div className={styles.pageTopic}>
                        <h2>{t("PE.valores.desc")}</h2>
                    </div>
                </div>
            </div>
            <h2 id="missionDesc" className={styles.descriptionActive}>{t("PE.missao.desc")}</h2>
            <h2 id="visionDesc" className={styles.description}>{t("PE.visao.desc")}</h2>
            <h2 id="valuesDesc" className={styles.description}>{t("PE.valores.desc")}</h2>
            <Link to ="quem" spy={true} smooth={true} offset={0} duration={1000} className={styles.containerArrowDown}>
                <FontAwesomeIcon icon={faAngleDown} className={styles.arrowDown}/>
            </Link>
        </section>
    )
}

export default PE