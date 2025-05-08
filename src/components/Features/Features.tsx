import {FC} from "react"
import styles from "./Features.module.scss"
import {Container, Title, SubTitle} from "../UI";
import {features} from "./features.data.ts";
import {FeatureType} from "./features.type.ts";
import Feature from "./Feature/Feature.tsx";

const Features: FC = () => {
	return (
		<section className={styles.block}>
      <Container>
        <div className={styles.content}>
          <Title text="преимущества разработки сайта с babuska" animate />
          <SubTitle text="Заказывайте создание и продвижение сайта  для ресторана по разумной цене в web-студии Babushka. Мы умеем найти эффективные решения даже для нестандартных идей." animate />

					<div className={styles.features}>
						{features.map((data: FeatureType) => {
							return <Feature key={data.delay} {...data} />
						})}
					</div>
        </div>
      </Container>
    </section>
	)
}

export default Features