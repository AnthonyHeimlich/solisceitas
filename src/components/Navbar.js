import styles from './Navbar.module.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import {useEffect, useRef, useState} from "react"
import {useTranslation} from "react-i18next"
import {Link} from 'react-scroll'
import {BiMenuAltRight} from "react-icons/bi";
import {AiOutlineClose} from "react-icons/ai";
import brasil from "../assets/img/brasil2.png"
import uk from "../assets/img/uk2.png"
import logo from "../assets/img/logoGoldenTransparent.png"


function Navbar(){
    const [t, i18n] = useTranslation("global");

    const handleChangeLanguage = (lang: string) =>{
        i18n.changeLanguage(lang);
        setOpenLanguages(false);
    };

    const [click, setClick] = useState(false)
    const handleClick = () => {
        if (click){
            body.style.overflowY = 'auto';
        } else{
            body.style.overflowY = 'hidden';
        }
        setClick(!click)
    }

    const closeMenu = () => {
        if (click){
            body.style.overflowY = 'auto';
        } else{
            body.style.overflowY = 'hidden';
        }
        setClick(false)
    }

    const [openLanguages, setOpenLanguages] = useState(false)
    let languagesRef = useRef();
    useEffect(() =>{
        let handler = (e)=>{
            if(!languagesRef.current.contains(e.target)){
                setOpenLanguages(false);
            }
        };

        document.addEventListener("mousedown", handler)
    });

    const handleChangeSlide = (slide) => {
        document.getElementById(1).setAttribute("style", "display:none");
        document.getElementById(2).setAttribute("style", "display:none");
        document.getElementById(3).setAttribute("style", "display:none");
        document.getElementById(4).setAttribute("style", "display:none");
        document.getElementById(5).setAttribute("style", "display:none");
        document.getElementById(7).setAttribute("style", "display:none");
        document.getElementById(8).setAttribute("style", "display:none");
        document.getElementById(9).setAttribute("style", "display:none");
        document.getElementById(10).setAttribute("style", "display:none");
        document.getElementById(11).setAttribute("style", "display:none");
        document.getElementById("teste").setAttribute("style", "margin:30px; cursor:pointer; margin-top: 167vh;");
        document.getElementById(slide).setAttribute("style", "display:flex");
        console.log(slide)
    }


    var body = document.getElementsByTagName('body')[0];

    return (
        <div className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.hamburger} onClick={handleClick}>
                    {click ? (<FaTimes size={40} style={{display:"none" }} />) : (<BiMenuAltRight size={40} style={{ color: '#E4C576'}}/>)}
                </div>
                <div className={styles.container}>
                    <a href="https://uniqueconcierge.com.br/" className={styles.logo}>
                        <img src={logo} alt='logo'/>
                    </a>
                </div>
                <ul className={styles.navMenu}>
                    <li className={styles.navItem}>
                        <Link to ="home" spy={true} smooth={true} offset={0} duration={1000}>{t("navBar.home")}</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to ="PE" spy={true} smooth={true} offset={0} duration={1000}>{t("navBar.sp")}</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to ="quem" spy={true} smooth={true} offset={0} duration={1000}>{t("navBar.who")}</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to ="portfolio" spy={true} smooth={true} offset={0} duration={1000}>{t("navBar.portfolio.title")}</Link>
                        <div className={styles.dropdownPortfolio}>
                            <ul className={styles.menuPortfolio}>
                                <li><Link to ="1" spy={true} smooth={true} offset={0} duration={1000} onClick={() => handleChangeSlide(1)}>{t("navBar.portfolio.topic1")}</Link></li>
                                <li><Link to ="2" spy={true} smooth={true} offset={0} duration={1000} onClick={() => handleChangeSlide(2)}>{t("navBar.portfolio.topic2")}</Link></li>
                                <li><Link to ="3" spy={true} smooth={true} offset={0} duration={1000} onClick={() => handleChangeSlide(3)}>{t("navBar.portfolio.topic3")}</Link></li>
                                <li><Link to ="4" spy={true} smooth={true} offset={0} duration={1000} onClick={() => handleChangeSlide(4)}>{t("navBar.portfolio.topic4")}</Link></li>
                                <li><Link to ="5" spy={true} smooth={true} offset={0} duration={1000} onClick={() => handleChangeSlide(5)}>{t("navBar.portfolio.topic5")}</Link></li>
                                <li><Link to ="7" spy={true} smooth={true} offset={0} duration={1000} onClick={() => handleChangeSlide(7)}>{t("navBar.portfolio.topic7")}</Link></li>
                                <li><Link to ="8" spy={true} smooth={true} offset={0} duration={1000} onClick={() => handleChangeSlide(8)}>{t("navBar.portfolio.topic8")}</Link></li>
                                <li><Link to ="9" spy={true} smooth={true} offset={0} duration={1000} onClick={() => handleChangeSlide(9)}>{t("navBar.portfolio.topic9")}</Link></li>
                                <li><Link to ="10" spy={true} smooth={true} offset={0} duration={1000} onClick={() => handleChangeSlide(10)}>{t("navBar.portfolio.topic10")}</Link></li>
                                <li><Link to ="11" spy={true} smooth={true} offset={0} duration={1000} onClick={() => handleChangeSlide(11)}>{t("navBar.portfolio.topic11")}</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li className={styles.navItem}>
                        <Link to ="como" spy={true} smooth={true} offset={0} duration={1000}>{t("navBar.how")}</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to ="contato" spy={true} smooth={true} offset={0} duration={1000}>{t("navBar.contact")}</Link>
                    </li>
                    <div className={styles.dropdown} ref={languagesRef} >
                        <div className={styles.select} onClick={() => setOpenLanguages((prev) => !prev) }>
                            <span className={styles.selected}>{t("navBar.language")}</span>
                            <div className={styles.caret}/>
                        </div>
                        {
                            openLanguages &&  <ul className={styles.menu}>
                                <li onClick={() => handleChangeLanguage("pt")}>Português</li>
                                <li onClick={() => handleChangeLanguage("en")}>English</li>
                            </ul>
                        }
                    </div>
                </ul>



                <ul className={click ? "sideNavMenu active" : "sideNavMenu"}>
                    <div className='hamburger' onClick={handleClick}>
                        {click ? (<AiOutlineClose size={25} style={{ color: '#E4C576', right:"15", top:"33", position:"absolute"}} />) : (<FaBars size={20} style={{ display:"none"}} />)}
                    </div>
                    <div className={styles.languageButtonContainer}>
                        <img src={brasil} className={styles.languageButton} onClick={() => handleChangeLanguage("pt")}/>
                        <img src={uk} className={styles.languageButton} onClick={() => handleChangeLanguage("en")}/>
                    </div>
                    <li className={styles.navItem}>
                        <Link to ="home" spy={true} smooth={true} offset={0} duration={1000} onClick={closeMenu}>{t("navBar.home")}</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to ="PE" spy={true} smooth={true} offset={0} duration={1000} onClick={closeMenu}>{t("navBar.sp")}</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to ="quem" spy={true} smooth={true} offset={0} duration={1000} onClick={closeMenu}>{t("navBar.who")}</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to ="portfolio" spy={true} smooth={true} offset={0} duration={1000} onClick={closeMenu}>{t("navBar.portfolio.title")}</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to ="como" spy={true} smooth={true} offset={0} duration={1000} onClick={closeMenu}>{t("navBar.how")}</Link>
                    </li>
                    <li className={styles.navItem}>
                        <Link to ="contato" spy={true} smooth={true} offset={0} duration={1000} onClick={closeMenu}>{t("navBar.contact")}</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar