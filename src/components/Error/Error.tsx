import {FC} from "react"
import styles from "./Error.module.scss"
import ErrorImage from "../../assets/images/error.webp"

const Error: FC = () => {
	return (
		<section className={styles.block}>
			<div className="container">
				<div className={styles.content}>
					<h1 className={styles.title}>Ой!</h1>
					<img className={styles.image} src={ErrorImage} alt="Декоративный элемент" loading="lazy"/>
					<p className={styles.text}>Не переживай, внучок,<br/>сейчас бабушка уберет</p>
				</div>
			</div>
		</section>
	)
}

export default Error