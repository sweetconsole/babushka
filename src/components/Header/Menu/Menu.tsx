import {FC} from "react"
import styles from "./Menu.module.scss"
import CloseIcon from "../../../assets/images/menu_close.svg"
import {IMenuProps} from "./menu.interface.ts";
import {Link} from "react-router-dom";
import Logo from "../../../assets/images/logos/logo.svg";
import WhatsAppIcon from "../../UI/WhatsAppIcon/WhatsAppIcon.tsx";
import TelegramIcon from "../../UI/TelegramIcon/TelegramIcon.tsx";

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
				<Link className={styles.link} to="babushka/dist/projects" onClick={CloseMenu}>Проекты</Link>
				<Link className={styles.link} to="babushka/dist/blogs" onClick={CloseMenu}>Блог</Link>
				<a className={styles.link} href={"#faq"} onClick={CloseMenu}>Частые Вопросы</a>

				<Link className={styles.logo} to="babushka/dist/" onClick={CloseMenu}>
					<img className={styles.logo__icon} src={Logo} alt="BABUSHKA" />
				</Link>
			</nav>

			<div className={styles.block}>
				<div className={styles.socials}>
					<a className={styles.link_phone} href="tel:+79629518899">+7 962 951 88 99</a>
					<a className={styles.link_social}
						 href="https://telegram.org/"
						 target="_blank"
						 aria-label="Ссылка на Telegram"
						 rel="noreferrer">
						<WhatsAppIcon />
					</a>
					<a className={styles.link_social}
						 href="https://web.whatsapp.com/"
						 target="_blank"
						 aria-label="Ссылка на WhatsApp"
						 rel="noreferrer">
						<TelegramIcon />
					</a>
				</div>
				<button className={styles.button}>написать бабушке</button>
			</div>
		</div>
	)
}

export default Menu