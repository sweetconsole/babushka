import {FC} from "react"
import styles from "./Rate.module.scss"
import Arrow from "../../assets/images/arrow.svg";
import StrokePanel from "../../assets/images/stroke_panel.svg"
import {servicesWebsiteType} from "./servicesData.ts";


const Rate: FC<servicesWebsiteType> = ({name, countPage, time, price, description, styleBlock, styleLink, styleButton}) => {

	return (
		<div className={[styles.rate, styleBlock].join(" ")}>
			<h3 className={styles.rate__name}>{name}</h3>

			<div className={styles.rate__scopes}>
				<div className={styles.rate__scope}>
					<p className={styles.rate__scope_name}>объем страниц</p>
					<p className={styles.rate__scope_count}>{countPage}</p>
				</div>

				<div className={styles.rate__scope}>
					<p className={styles.rate__scope_name}>время на разработку</p>
					<p className={styles.rate__scope_count}>{time}</p>
				</div>
			</div>

			<div className={styles.price__block}>
				<p className={styles.price__count}>от {price}₽</p>
				<img className={styles.price__stroke_panel} src={StrokePanel} alt="Декоративный элемент" loading="lazy" />
			</div>

			<p className={styles.description}>{description}</p>
			<p className={styles.correction}>*Окончательная цена и сроки определяются в зависимости от объема работы и технического задания заказчика.</p>

			<a href="/">
				<div className={[styles.link__block, styleLink].join(" ")}>
					<div className={styles.link__text}>оставить заявку</div>
					<div className={[styles.link__button, styleButton].join(" ")}>
						<img className={styles.link__arrow} src={Arrow} alt="Ссылка" />
					</div>
				</div>
			</a>
		</div>
	)
}

export default Rate