import { FC } from "react"
import {Link} from "react-router-dom"
import {motion} from "framer-motion"
import Tangle from "../../assets/images/tangles/tangle_4.svg"
import Arrow from "../../assets/images/arrow.svg"
import { pagesConfig } from "../../config/pages.config.ts"
import { Container } from "../ui"
import styles from "./Thanks.module.scss"

const Thanks: FC = () => {
	return (
		<div className={styles.block}>
			<Container>
				<div className={styles.content}>
					<motion.h1 className={styles.title}
										 initial={{opacity: 0, y: 100}}
										 animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.4}}}>
						спасибо за заявку
					</motion.h1>
					<motion.p className={styles.subtitle}
										initial={{opacity: 0, y: 100}}
										animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.6}}}>
						Наш менеджер свяжется с вами
					</motion.p>

					<motion.div initial={{opacity: 0, y: 100}}
											animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 1.0}}}
											style={{cursor: "pointer"}}>
						<Link className={styles.link} to={pagesConfig.home}>
							<p className={styles.link__text}>на главную</p>
							<button className={styles.link__button}>
								<img className={styles.link__button_arrow} src={Arrow} alt="Перейти к заявке" />
							</button>
						</Link>
					</motion.div>

					<motion.img className={styles.image}
											src={Tangle}
											alt="Декоративный клубок"
											viewport={{once: true}}
											initial={{opacity: 0}}
											whileInView={{opacity: 1}}
											transition={{duration: 0.8, delay: 0.4}} />
				</div>
			</Container>
		</div>
	)
}

export default Thanks