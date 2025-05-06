import {FC} from "react"
import styles from "./Footer.module.scss"
import Hatch from "../../assets/images/hatch.webp"
import ShelfLeft from "../../assets/images/shelf_1.webp"
import ShelfRight from "../../assets/images/shelf_2.webp"
import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {ScrollLink, SocialLink, Container, WhatsAppIcon, TelegramIcon} from "../UI";

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

							<SocialLink link={"https://telegram.org/"}
													label={"Ссылка на Telegram"}
													icon={<WhatsAppIcon />}
													style={styles.link_social} />
							<SocialLink link={"https://web.whatsapp.com/"}
													label={"Ссылка на WhatsApp"}
													icon={<TelegramIcon />}
													style={styles.link_social} />
						</nav>
					</div>

					<div className={styles.block}>
						<nav className={styles.links}>
							<Link className={styles.link} to="babushka/dist/projects">Проекты</Link>
							<Link className={styles.link} to="babushka/dist/blogs">Блог</Link>

							<ScrollLink link={"faq"} style={styles.link} text="Частые Вопросы" />
						</nav>

						<div className={styles.info}>
							<p className={styles.text}>ОГРН: 273482278</p>
							<p className={styles.text}>ИНН: 327842422</p>
						</div>


						<ScrollLink link={"feedback"} style={styles.link__write} text="написать бабушке" />

						<a className={styles.processing} href="#">обработка персональных данных</a>
					</div>

					<motion.div className={styles.images}
											viewport={{once: true}}
											initial={{opacity: 0}}
											whileInView={{opacity: 1}}
											transition={{delay: 0.4}}>
						<img className={styles.image} src={ShelfLeft} alt="Левая полочка с баночками"/>
						<p className={styles.title}>
							здесь о тебе по
							<span className={styles.title__highlighting}>заботятся</span>
						</p>
						<img className={styles.image} src={ShelfRight} alt="Правая полочка с баночками"/>
					</motion.div>
				</div>
			</Container>
		</footer>
	)
}

export default Footer