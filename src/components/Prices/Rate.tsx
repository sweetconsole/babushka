import {FC} from "react"
import styles from "./Rate.module.scss"
import Arrow from "../../assets/images/arrow.svg";

const Rate: FC = () => {
	return (
		<div className={styles.rate}>
			<h3 className={styles.rate__name}>Landing page</h3>

			<div className={styles.rate__scopes}>
				<div className={styles.rate__scrope}>
					<p className={styles.rate__scrope_name}>объем страниц</p>
					<p className={styles.rate__scrope_count}>1 шт</p>
				</div>

				<div className={styles.rate__scrope}>
					<p className={styles.rate__scrope_name}>время на разработку</p>
					<p className={styles.rate__scrope_count}>&gt; 21 дней</p>
				</div>
			</div>

			<div className={styles.price__block}>от 95 000₽</div>

			<p className={styles.description}>Одностраничный сайт для ресторана, бара или кафе. На нем можно рассказать основную информацию о заведении и сделать форму для брони столов. </p>
			<p className={styles.correction}>*Окончательная цена и сроки определяются в зависимости от объема работы и технического задания заказчика.</p>

			<a href="/">
				<div className={styles.link__block}>
					<div className={styles.link__text}>оставить заявку</div>
					<div className={styles.link__button}>
						<img className={styles.link__arrow} src={Arrow} alt="Ссылка" />
					</div>
				</div>
			</a>
		</div>
	)
}

export default Rate