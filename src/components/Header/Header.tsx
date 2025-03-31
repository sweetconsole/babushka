import {Link} from "react-router-dom"
import WhatsAppIcon from "../UI/WhatsAppIcon/WhatsAppIcon.tsx"
import Logo from "../../assets/images/logos/logo.svg"
import TelegramIcon from "../UI/TelegramIcon/TelegramIcon.tsx"
import styles from "./Header.module.scss"
import {FC, useState} from "react";
import Container from "../UI/Container/Container.tsx"
import Menu from "./Menu/Menu.tsx";

const Header: FC = () => {

  const [activeMenu, setActiveMenu] = useState(false)

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
              <a className={styles.navigation_link} href={"#faq"}>Частые Вопросы</a>
            </nav>

            <Link className={styles.logo} to="babushka/dist/" title="С помощью логотипа вы можете переместиться на главную страницу">
              <img className={styles.logo_icon} src={Logo} alt="BABUSHKA" />
            </Link>

            <div className={styles.links}>
              <a className={styles.link_phone} href="tel:+79629518899">+7 962 951 88 99</a>
              <a className={[styles.link_social, styles.link_social_whatsapp].join(" ")}
                 href="https://telegram.org/"
                 target="_blank"
                 aria-label="Ссылка на Telegram"
                 rel="noreferrer">
                <WhatsAppIcon />
              </a>
              <a className={[styles.link_social, styles.link_social_telegram].join(" ")}
                 href="https://web.whatsapp.com/"
                 target="_blank"
                 aria-label="Ссылка на WhatsApp"
                 rel="noreferrer">
                <TelegramIcon />
              </a>

              <a className={styles.button} href={"#feedback"}>написать бабушке</a>
            </div>

            <div className={styles.menu__button} onClick={OpenMenu}></div>
          </div>
        </Container>
      </header>
    </>
	)
}

export default Header