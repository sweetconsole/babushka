import { FC } from "react"
import {motion} from "framer-motion"
import CabbageLarge from "../../../assets/images/cases/cabbage_large.png"
import {Container, ScrollLink} from "../../ui"
import { SideBoxCarrots } from "../cases.types.ts"
import BoxCarrots from "./BoxCarrots/BoxCarrots.tsx"
import styles from "./CaseIntro.module.scss"
import Arrow from "../../../assets/images/arrow.svg"

const CaseIntro: FC = () => {
	return (
		<section className={styles.block}>
			<Container>
				<>
					<div className={styles.titles}>
						<h1 className={styles.title}>
							<motion.p className={styles.title_line}
												initial={{opacity: 0, y: 100}}
												animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.2}}}>
								Наши проекты —
							</motion.p>

							<motion.p className={styles.title_line}
												initial={{opacity: 0, y: 100}}
												animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.4}}}>
								это история успеха
							</motion.p>
							<motion.p className={styles.title_line}
												initial={{opacity: 0, y: 100}}
												animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.6}}}>
								наших клиентов
							</motion.p>
						</h1>

						<motion.p className={styles.description}
											viewport={{once: true}}
											initial={{opacity: 0}}
											whileInView={{opacity: 1}}
											transition={{delay: 1.0}}>
							Мы искусно сочетаем красоту<br/>с функциональностью, а идеи —<br/>с измеримым результатом
						</motion.p>
					</div>

					<div className={styles.content}>
						<BoxCarrots side={SideBoxCarrots.LEFT} />

						<motion.div initial={{opacity: 0, y: 100}}
												animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.8}}}
												style={{cursor: "pointer"}}>
							<ScrollLink style={styles.link_feedback} link="feedback">
								<p className={styles.link_feedback_text}>Заказать консультацию</p>
								<button className={styles.link_feedback_button}>
									<img className={styles.link_feedback_button_icon} src={Arrow} alt="Перейти к заявке" />
								</button>
							</ScrollLink>
						</motion.div>

						<BoxCarrots side={SideBoxCarrots.RIGHT} />
					</div>

					<motion.img className={styles.cabbage_large}
											src={CabbageLarge}
											alt="Очень большая капуста"
											viewport={{once: true}}
											initial={{opacity: 0, rotate: 340.76, scale: 0}}
											whileInView={{opacity: 1, rotate: -19.24, scale: 1}}
											transition={{duration: 1.0, delay: 1.2}} />
				</>
			</Container>
		</section>
	)
}

export default CaseIntro