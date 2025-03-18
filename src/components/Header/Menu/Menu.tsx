import {FC} from "react"
import styles from "./Menu.module.scss"
import CloseIcon from "../../../assets/images/menu_close.svg"
import {IMenuProps} from "./menu.interface.ts";
import {Link} from "react-router-dom";
import Logo from "../../../assets/images/logos/logo.svg";

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
		</div>
	)
}

export default Menu