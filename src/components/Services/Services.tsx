import {FC} from "react"
import styles from "./Services.module.scss"
import Container from "../Container/Container.tsx";
import Rate from "./Rate.tsx";
import {servicesWebsiteType, servicesWebsites} from "./servicesData.ts";

const Services: FC = () => {
	return (
		<section className={styles.block} id="services">
			<Container>
				<div className={styles.content}>
					<h2 className={styles.title}>Стоимость разработки сайта для ресторана</h2>

					<div className={styles.rates}>

						{servicesWebsites.map(
							({name, countPage, time, price, description, styleBlock, styleLink, styleButton}: servicesWebsiteType) => {
								return <Rate key={price}
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