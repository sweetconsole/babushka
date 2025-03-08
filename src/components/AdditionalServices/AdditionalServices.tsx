import {FC} from "react"
import styles from "./AdditionalServices.module.scss"
import Arrow from "../../assets/images/arrow.svg";
import Container from "../Container/Container.tsx";

const AdditionalServices: FC = () => {

	const additionalServices: string[] = ["Дизайн", "Реклама", "SEO-Продвижение"]

	return (
		<section className={styles.block}>
			<Container>
				<div className={styles.content}>
					<h2 className={styles.title}>Дополнительные услуги</h2>
					<p className={styles.description}>BABUSHKA делает не только красивые сайты, но дизайн, рекламу и SEO-продвижение для ресторанов, баров. кафе и сервисов доставки. </p>

					<div className={styles.services}>

						{additionalServices.map((name: string) => {
							return (
								<div className={styles.service}>
									<div className={styles.service__text}>{name}</div>
									<div className={styles.service__link}>
										<img className={styles.service__link_arrow} src={Arrow} alt="Перейти" />
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</Container>
		</section>
	)
}

export default AdditionalServices