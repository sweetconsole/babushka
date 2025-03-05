import {Link} from "react-router-dom"
import WhatsAppIcon from "./WhatsAppIcon.tsx"
import Logo from "../../assets/images/logos/logo.svg"
import TelegramIcon from "./TelegramIcon.tsx"
import styles from "./Header.module.scss"
import {FC} from "react";
import Container from "../Container/Container.tsx"

const Header: FC = () => {
	return (
    <header className={styles.header}>
      <Container>
        <div className={styles.block}>
          <nav className={styles.navigation}>
            <Link className={styles.navigation_link} to="babushka/dist/">Кейсы</Link>
            <Link className={styles.navigation_link} to="babushka/dist/">Услуги</Link>
            <Link className={styles.navigation_link} to="babushka/dist/">Процесс</Link>
            <Link className={styles.navigation_link} to="babushka/dist/">Блог</Link>
          </nav>

          <Link className={styles.logo} to="babushka/dist/">
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

            <a className={styles.button} href="/">написать бабушке</a>
          </div>
        </div>
      </Container>
    </header>
	)
}

export default Header