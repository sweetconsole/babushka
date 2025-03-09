import {FC, useState} from "react"
import styles from "./AdditionalServices.module.scss"
import Arrow from "../../assets/images/arrow.svg";
import Container from "../Container/Container.tsx";
import {MouseEvent} from "react";
import {additionalServices, additionalServiceType} from "./AdditionalServicesData.ts";
import Title from "../Title/Title.tsx";
import SubTitle from "../SubTitle/SubTitle.tsx";


const AdditionalServices: FC = () => {

	const [service, setService] = useState(0)
	const [active, setActive] = useState(false)

	const selectService = (event: MouseEvent<HTMLDivElement>) => {
		const id: number = Number(event.currentTarget.getAttribute("data-value"))

		if (id != service) {
			setActive(true)
		} else {
			setActive(!active)
		}

		setService(id)
	}

	return (
		<section className={styles.block}>
			<Container>
				<div className={styles.content}>
					<Title text="Дополнительные услуги" />
					<SubTitle text="BABUSHKA делает не только красивые сайты, но дизайн, рекламу и SEO-продвижение для ресторанов, баров. кафе и сервисов доставки." />

					<div className={styles.services}>
						{additionalServices.map(({id, name}: additionalServiceType) => {
							return (
								<div className={active && service === id ? [styles.service, styles.service_active].join(" ") : styles.service} key={id} onClick={selectService} data-value={id}>
									<div className={styles.service__text}>{name}</div>
									<div className={styles.service__link}>
										<img className={styles.service__link_arrow} src={Arrow} alt="Подробнее..." />
									</div>
								</div>
							)
						})}
					</div>

					<div className={active ? [styles.info, styles.info_active].join(" ") : styles.info}>
						<div className={styles.info__content}>
							<p className={styles.info__description}>{additionalServices[service].description}</p>

							<div className={styles.info__tags}>
								{additionalServices[service].tags.map((tag: string) => {
									return <div className={styles.info__tag}>{tag}</div>
								})}
							</div>

							<div className={styles.info__link}>
								<div className={styles.info__link_text}>отправить заявку</div>
								<div className={styles.info__link_button}>
									<img className={styles.info__link_arrow} src={Arrow} alt="Перейти" />
								</div>
							</div>
						</div>

						<img className={styles.info__image} src={additionalServices[service].image} alt="Изображение" loading="lazy" />
					</div>
				</div>
			</Container>
		</section>
	)
}

export default AdditionalServices