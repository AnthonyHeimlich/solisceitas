import styles from './Footer.module.css'
import {useTranslation} from "react-i18next"
import {Link} from 'react-scroll'
import logo from "../assets/img/logoGoldenTransparent.png"

function Footer(){
    const [t, i18n] = useTranslation("global");

    return (
        <section id='footer' className={styles.footer}>
            <div className={styles.line}/>
            <div className={styles.footerContainer}>
                <div className={styles.logoContainer}>
                    <img src={logo} alt='logo'/>
                </div>
                <div className={styles.menuContainer}>
                    <div>
                        <ul className={styles.footerMenu}>
                            <li>
                                <Link to ="home" spy={true} smooth={true} offset={0} duration={1000}>{t("navBar.home")}</Link>
                            </li>
                            <li>
                                <Link to ="PE" spy={true} smooth={true} offset={0} duration={1000}>{t("navBar.sp")}</Link>
                            </li>
                            <li>
                                <Link to ="quem" spy={true} smooth={true} offset={0} duration={1000}>{t("navBar.who")}</Link>
                            </li>
                            <li>
                                <Link to ="portfolio" spy={true} smooth={true} offset={0} duration={1000}>{t("navBar.portfolio.title")}</Link>
                            </li>
                            <li>
                                <Link to ="como" spy={true} smooth={true} offset={0} duration={1000}>{t("navBar.how")}</Link>
                            </li>
                            <li>
                                <Link to ="contato" spy={true} smooth={true} offset={0} duration={1000}>{t("navBar.contact")}</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className={styles.copyright}>
                            <a href="http://uniqueconcierge.com.br">Unique Concierge</a>,{t("footer.copyright")} &copy; </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer