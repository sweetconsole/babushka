import {FC} from "react"
import styles from "./Service.module.scss"
import Arrow from "../../assets/images/arrow.svg";
import StrokePanel from "../../assets/images/stroke_panel.svg"
import {IServiceProps} from "./services.interface.ts";

const Service: FC<IServiceProps> = ({name, countPage, time, price, description, styleBlock, styleLink, styleButton}) => {
	return (
		<div className={[styles.rate, styleBlock].join(" ")}>
			<h3 className={styles.title}>{name}</h3>

			<div className={styles.scopes}>
				<div className={styles.scope}>
					<p className={styles.scope__name}>объем страниц</p>
					<p className={styles.scope__count}>{countPage}</p>
				</div>

				<div className={styles.scope}>
					<p className={styles.scope__name}>время на разработку</p>
					<p className={styles.scope__count}>{time}</p>
				</div>
			</div>

			<div className={styles.price__block}>
				<p className={styles.price__count}>от {price}₽</p>
				<img className={styles.price__stroke_panel} src={StrokePanel} alt="Декоративный элемент" loading="lazy" />
			</div>

			<p className={styles.description}>{description}</p>
			<p className={styles.correction}>*Окончательная цена и сроки определяются в зависимости от объема работы и технического задания заказчика.</p>

			<a className={[styles.link__block, styleLink].join(" ")} href={"#feedback"}>
				<p className={styles.link__text}>оставить заявку</p>
				<div className={[styles.link__button, styleButton].join(" ")}>
					<img className={styles.link__arrow} src={Arrow} alt="Ссылка" />
				</div>
			</a>
		</div>
	)
}

export default Service