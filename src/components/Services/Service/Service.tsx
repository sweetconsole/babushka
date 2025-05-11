import {FC} from "react"
import {motion} from "framer-motion";
import Arrow from "../../../assets/images/arrow.svg";
import StrokePanel from "../../../assets/images/stroke_panel.svg"
import {ScrollLink} from "../../ui";
import {IServiceProps} from "../services.interface.ts";
import styles from "./Service.module.scss"

const Service: FC<IServiceProps> = ({name, countPage, time, price, description, styleBlock, styleLink, styleButton, delay, rotate}) => {
	return (
		<motion.div className={[styles.rate, styleBlock].join(" ")} viewport={{once: true}} initial={{opacity: 0, scale: 1.5, rotate: rotate}} whileInView={{opacity: 1, scale: 1}} transition={{duration: 0.4, delay: delay, ease: "easeIn"}}>
			<h3 className={styles.title}>{name}</h3>

			<div className={styles.scopes}>
				<div className={styles.scope}>
					<p className={styles.scope__name}>объем страниц</p>
					<p className={styles.scope__count}>{countPage}</p>
				</div>

				<div className={styles.scope}>
					<p className={[styles.scope__name, styles.scope__time].join(" ")}
						 title="Окончательные определяются в зависимости от объема работы\nи технического задания заказчика">время на разработку*</p>
					<p className={styles.scope__count}>{time}</p>
				</div>
			</div>

			<div className={styles.price__block}>
				<p className={styles.price__count}>от {price}₽</p>
				<img className={styles.price__stroke_panel} src={StrokePanel} alt="Декоративный элемент" loading="lazy" />
			</div>

			<p className={styles.description}>{description}</p>
			<p className={styles.correction}>*Окончательная цена и сроки определяются в зависимости от объема работы и технического задания заказчика.</p>
			<p className={[styles.correction__mobile, styles.correction].join(" ")}>*время разработки может варьироваться в пределах недели</p>
		
			<ScrollLink link="feedback" style={[styles.link__block, styleLink].join(" ")}>
				<p className={styles.link__text}>оставить заявку</p>
				<div className={[styles.link__button, styleButton].join(" ")}>
					<img className={styles.link__arrow} src={Arrow} alt="Ссылка" />
				</div>
			</ScrollLink>
		</motion.div>
	)
}

export default Service