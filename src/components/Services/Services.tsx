import {FC} from "react"
import styles from "./Services.module.scss"
import Container from "../UI/Container/Container.tsx";
import Service from "./Service/Service.tsx";
import {serviceType} from "./services.type.ts";
import {services} from "./services.data.ts";
import Title from "../UI/Title/Title.tsx";

const Services: FC = () => {
	return (
		<section className={styles.block} id="services">
			<Container>
				<div className={styles.content}>
					<Title text="Стоимость разработки сайта для ресторана" />

					<div className={styles.rates}>

						{services.map(
							({name, countPage, time, price, description, styleBlock, styleLink, styleButton}: serviceType) => {
								return <Service key={price}
																name={name}
																countPage={countPage}
																time={time}
																price={price}
																description={description}
																styleBlock={styleBlock}
																styleLink={styleLink}
																styleButton={styleButton} />
							})
						}

					</div>
				</div>
			</Container>
		</section>
	)
}

export default Services