import { FC } from "react"
import styles from "./Menu.module.scss"
import CloseIcon from "../../../assets/images/menu_close.svg"
import { IMenuProps } from "./menu.interface.ts"
import { Link } from "react-router-dom"
import Logo from "../../../assets/images/logos/logo.svg"
import { pageConfig } from "../../../config/pages.config.ts"
import { TelegramIcon, WhatsAppIcon } from "../../ui"
import { socialConfig } from "../../../config/social.config.ts"

const Menu: FC<IMenuProps> = ({active, setActive}) => {

	const CloseMenu = () => {
		setActive(false)
		document.body.style.overflow = "auto"
	}

	return (
		<div className={active ? [styles.menu, styles.menu_active].join(" ") : styles.menu}>
			<button className={styles.button__close} onClick={CloseMenu}>
				<img className={styles.close__icon} src={CloseIcon} alt="Закрыть" />
			</button>

			<nav className={styles.navigation}>
				<Link className={styles.link} to={pageConfig.projects} onClick={CloseMenu}>Проекты</Link>
				<Link className={styles.link} to={pageConfig.blog} onClick={CloseMenu}>Блог</Link>
				<a className={styles.link} href={"#faq"} onClick={CloseMenu}>Частые Вопросы</a>

				<Link className={styles.logo} to={pageConfig.home} onClick={CloseMenu}>
					<img className={styles.logo__icon} src={Logo} alt="BABUSHKA" />
				</Link>
			</nav>

			<div className={styles.block}>
				<div className={styles.socials}>
					<a className={styles.link_phone} href={`tel:${socialConfig.phone.replace(/\s/g, '')}`}>{socialConfig.phone}</a>
					<a className={styles.link_social}
						 href={socialConfig.whatsapp}
						 target="_blank"
						 aria-label="Ссылка на WhatsApp"
						 rel="noreferrer">
						<WhatsAppIcon />
					</a>
					<a className={styles.link_social}
						 href={socialConfig.telegram}
						 target="_blank"
						 aria-label="Ссылка на Telegram"
						 rel="noreferrer">
						<TelegramIcon />
					</a>
				</div>

				<a className={styles.button} href={"#feedback"} onClick={CloseMenu}>написать бабушке</a>
			</div>
		</div>
	)
}

export default Menu