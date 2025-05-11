import {FC} from "react"
import {Container, Title} from "../ui";
import Service from "./Service/Service.tsx";
import {services} from "./services.data.ts";
import styles from "./Services.module.scss"

const Services: FC = () => {
	return (
		<section className={styles.block} id="services">
			<Container>
				<div className={styles.content}>
					<Title text="Стоимость разработки сайта для ресторана" animate />

					<div className={styles.rates}>
						{services.map((data) => {return <Service key={data.price} {...data} />})}
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Services