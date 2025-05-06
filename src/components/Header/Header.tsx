import {Link, useLocation} from "react-router-dom"
import Logo from "../../assets/images/logos/logo.svg"
import styles from "./Header.module.scss"
import {FC, useState} from "react";
import Menu from "./Menu/Menu.tsx";
import {ScrollLink, SocialLink, Container, TelegramIcon, WhatsAppIcon} from "../UI";

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
              <Link className={styles.navigation_link} to="babushka/dist/projects/">Проекты</Link>
              <Link className={styles.navigation_link} to="babushka/dist/blogs/">Блог</Link>

              {pathname == "/babushka/dist/404/" ? (
                  <Link className={styles.navigation_link} to={"babushka/dist/faq/"}>Частые Вопросы</Link>
                ) : (
                  <ScrollLink style={styles.navigation_link} link="faq" text="Частые Вопросы" />
                )

              }
            </nav>

            <Link className={styles.logo} to="babushka/dist/" title={"С помощью логотипа вы можете \nпереместиться на главную страницу"}>
              <img className={styles.logo_icon} src={Logo} alt="BABUSHKA" />
            </Link>

            <div className={styles.links}>
              <a className={styles.link_phone} href="tel:+79629518899">+7 962 951 88 99</a>
              <SocialLink link={"https://telegram.org/"}
                          label={"Ссылка на Telegram"}
                          icon={<WhatsAppIcon />}
                          style={styles.link_social} />
              <SocialLink link={"https://web.whatsapp.com/"}
                          label={"Ссылка на WhatsApp"}
                          icon={<TelegramIcon />}
                          style={styles.link_social} />

              {pathname == "/babushka/dist/404/" ? (
                  <Link className={styles.button} to="babushka/dist/">на главную</Link>
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