import {FC} from "react"
import styles from "./Footer.module.scss"
import Container from "../UI/Container/Container.tsx";
import Hatch from "../../assets/images/hatch.webp"
import WhatsAppIcon from "../UI/WhatsAppIcon/WhatsAppIcon.tsx";
import TelegramIcon from "../UI/TelegramIcon/TelegramIcon.tsx";
import ShelfLeft from "../../assets/images/shelf_1.webp"
import ShelfRight from "../../assets/images/shelf_2.webp"
import {Link} from "react-router-dom";

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<Container>
				<div className={styles.content}>
					<img className={styles.hatch} src={Hatch} alt="" />

					<div className={styles.socials}>
						<p className={styles.copyright}>© BABUSHKA 2025</p>

						<nav className={styles.navigation}>
							<a className={styles.link_phone} href="tel:+79629518899">+7 962 951 88 99</a>
							<a className={styles.link_social} href="https://telegram.org/" target="_blank" rel="noreferrer">
								<WhatsAppIcon />
							</a>
							<a className={styles.link_social} href="https://web.whatsapp.com/" target="_blank" rel="noreferrer">
								<TelegramIcon />
							</a>
						</nav>
					</div>

					<div className={styles.block}>
						<nav className={styles.links}>
							<Link className={styles.link} to="babushka/dist/projects">Проекты</Link>
							<Link className={styles.link} to="babushka/dist/blogs">Блог</Link>
							<a className={styles.link} href={"#faq"}>Частые Вопросы</a>
						</nav>

						<div className={styles.info}>
							<p className={styles.text}>ОГРН: 273482278</p>
							<p className={styles.text}>ИНН: 327842422</p>
						</div>

						<a className={styles.link__write} href={"#feedback"}>написать бабушке</a>

						<a className={styles.processing} href="#">обработка персональных данных</a>
					</div>

					<div className={styles.images}>
						<img className={styles.image} src={ShelfLeft} alt="Левая полочка с баночками"/>
						<p className={styles.title}>
							здесь о тебе по
							<span className={styles.title__highlighting}>заботятся</span>
						</p>
						<img className={styles.image} src={ShelfRight} alt="Правая полочка с баночками"/>
					</div>
				</div>
			</Container>
		</footer>
	)
}

export default Footer