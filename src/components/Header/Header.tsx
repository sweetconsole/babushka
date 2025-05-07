import {Link, useLocation} from "react-router-dom"
import Logo from "../../assets/images/logos/logo.svg"
import styles from "./Header.module.scss"
import {FC, useState} from "react";
import Menu from "./Menu/Menu.tsx";
import {ScrollLink, SocialLink, Container, TelegramIcon, WhatsAppIcon} from "../UI";
import {pageConfig} from "../../config/pages.config.ts";
import {socialConfig} from "../../config/social.config.ts";

const Header: FC = () => {

  const [activeMenu, setActiveMenu] = useState(false)
  const pathname = useLocation().pathname

  const OpenMenu = () => {
    setActiveMenu(true)
    document.body.style.overflow = "hidden"
  }

	return (
    <>
      <Menu active={activeMenu} setActive={setActiveMenu} />

      <header className={styles.header}>
        <Container>
          <div className={styles.block}>
            <nav className={styles.navigation}>
              <Link className={styles.navigation_link} to={pageConfig.projects}>Проекты</Link>
              <Link className={styles.navigation_link} to={pageConfig.blogs}>Блог</Link>

              {pathname == pageConfig.error404 ? (
                  <Link className={styles.navigation_link} to={pageConfig.faq}>Частые Вопросы</Link>
                ) : (
                  <ScrollLink style={styles.navigation_link} link="faq" text="Частые Вопросы" />
                )
              }
            </nav>

            <Link className={styles.logo} to={pageConfig.home} title={"С помощью логотипа Вы можете \nпереместиться на главную страницу"}>
              <img className={styles.logo_icon} src={Logo} alt="BABUSHKA" />
            </Link>

            <div className={styles.links}>
              <a className={styles.link_phone} href={`tel:${socialConfig.phone.replace(/\s/g, '')}`}>{socialConfig.phone}</a>
              <SocialLink link={socialConfig.whatsapp}
                          label={"Ссылка на WhatsApp"}
                          icon={<WhatsAppIcon />}
                          style={styles.link_social} />
              <SocialLink link={socialConfig.telegram}
                          label={"Ссылка на Telegram"}
                          icon={<TelegramIcon />}
                          style={styles.link_social} />

              {pathname == pageConfig.error404 ? (
                  <Link className={styles.button} to={pageConfig.home}>на главную</Link>
                ) : (
                  <ScrollLink style={styles.button} link="feedback" text="написать бабушке" />
                )
              }
            </div>

            <div className={styles.menu__button} onClick={OpenMenu}></div>
          </div>
        </Container>
      </header>
    </>
	)
}

export default Header