import {FC} from "react"
import styles from "./Services.module.scss"
import Container from "../Container/Container.tsx";
import Rate from "./Rate.tsx";

const Services: FC = () => {
	return (
		<section className={styles.block} id="services">
			<Container>
				<div className={styles.content}>
					<h2 className={styles.title}>Стоимость разработки сайта для ресторана</h2>

					<div className={styles.rates}>

						<Rate />
						<Rate />

					</div>
				</div>
			</Container>
		</section>
	)
}

export default Services