import { FC } from "react"
import styles from "./Footer.module.scss"
import Hatch from "../../assets/images/hatch.webp"
import ShelfLeft from "../../assets/images/shelf_1.webp"
import ShelfRight from "../../assets/images/shelf_2.webp"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Container, ScrollLink, SocialLink, TelegramIcon, WhatsAppIcon } from "../UI"
import { socialConfig } from "../../config/social.config.ts"
import { pageConfig } from "../../config/pages.config.ts"

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<Container>
				<div className={styles.content}>
					<img className={styles.hatch} src={Hatch} alt="" />

					<div className={styles.socials}>
						<p className={styles.copyright}>© BABUSHKA 2025</p>

						<nav className={styles.navigation}>
							<a className={styles.link_phone} href={`tel:${socialConfig.phone.replace(/\s/g, '')}`}>{socialConfig.phone}</a>

							<SocialLink link={socialConfig.telegram}
													label={"Ссылка на Telegram"}
													icon={<TelegramIcon />}
													style={styles.link_social} />
							<SocialLink link={socialConfig.whatsapp}
													label={"Ссылка на WhatsApp"}
													icon={<WhatsAppIcon />}
													style={styles.link_social} />
						</nav>
					</div>

					<div className={styles.block}>
						<nav className={styles.links}>
							<Link className={styles.link} to={pageConfig.projects}>Проекты</Link>
							<Link className={styles.link} to={pageConfig.blog}>Блог</Link>

							<ScrollLink link={"faq"} style={styles.link} text="Частые Вопросы" />
						</nav>

						<div className={styles.info}>
							<p className={styles.text}>ОГРН: {socialConfig.OGRN}</p>
							<p className={styles.text}>ИНН: {socialConfig.INN}</p>
						</div>


						<ScrollLink link={"feedback"} style={styles.link__write} text="написать бабушке" />

						<Link className={styles.processing} to={pageConfig.processing_personal_data}>обработка персональных данных</Link>
					</div>

					<motion.div className={styles.images}
											viewport={{once: true}}
											initial={{opacity: 0}}
											whileInView={{opacity: 1}}
											transition={{delay: 0.4, duration: 0.8}}>
						<img className={styles.image} src={ShelfLeft} alt="Левая полочка с баночками"/>
						<p className={styles.title}>
							здесь о тебе по
							<motion.span className={styles.title__highlighting}
													 viewport={{once: true}}
													 initial={{opacity: 0}}
													 whileInView={{opacity: 1}}
													 transition={{delay: 0.8, duration: 1.6}}>
								заботятся
							</motion.span>
						</p>
						<img className={styles.image} src={ShelfRight} alt="Правая полочка с баночками"/>
					</motion.div>
				</div>
			</Container>
		</footer>
	)
}

export default Footer