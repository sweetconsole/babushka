import {FC} from "react"
import styles from "./Features.module.scss"
import Container from "../UI/Container/Container.tsx";
import Title from "../UI/Title/Title.tsx";
import SubTitle from "../UI/SubTitle/SubTitle.tsx";
import {features} from "./features.data.ts";
import {FeatureType} from "./features.type.ts";
import Feature from "./Feature.tsx";

const Features: FC = () => {
	return (
		<section className={styles.block}>
      <Container>
        <div className={styles.content}>
          <Title text="преимущества разработки сайта с babuska" />
          <SubTitle text="Заказывайте создание и продвижение сайта  для ресторана по разумной цене в web-студии Babushka. Мы умеем найти эффективные решения даже для нестандартных идей." />

					<div className={styles.features}>
						{features.map(({text}: FeatureType) => {
							return <Feature key={text} text={text} />
						})}
					</div>
        </div>
      </Container>
    </section>
	)
}

export default Features