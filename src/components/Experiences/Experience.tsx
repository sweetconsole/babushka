import {FC} from "react"
import Tangle from "../../assets/images/tangles/tangle_3.svg"
import Cup from "../../assets/images/cup.webp"
import Teapot from "../../assets/images/teapot.webp"
import {Container, Title, SubTitle} from "../ui";
import ExperienceItem from "./ExperienceItem/ExperienceItem.tsx";
import {experiences} from "./experience.data.ts";
import {ExperienceType} from "./experience.type.ts";
import styles from "./Experience.module.scss"

const Experience: FC = () => {
	return (
		<section className={styles.block}>
      <Container>
        <div className={styles.content}>
					<div className={styles.titles_pc}>
						<Title text="Создание проектов для ресторанов и horeca" animate />
						<SubTitle text="BABUSHKA разрабатывает сайты для ресторанов и сервисы с любым функционалом. Команда разработчиков, дизайнеров и менеджеров может реализовать проект с нуля: от бизнес исследования, разработки бренда и фирменного стиля до построения, реализации и поддержки сайта или веб-сервиса." animate />
					</div>
					<div className={styles.titles_mobile}>
						<h2 className={styles.title_mobile}>
							Почему
							<span className={styles.title_highlighting}> бабушка?</span>
						</h2>
						<SubTitle text="Накрывай на стол, я расскажу какая бабушка классная" />
					</div>

          <ul className={styles.features}>
            {experiences.map((data: ExperienceType) => {
              return <ExperienceItem key={data.name} {...data} />
            })}
          </ul>

          <img className={styles.tangle} src={Tangle} alt="Декоративный элемент" loading="lazy" />
          <img className={styles.cup} src={Cup} alt="Декоративный элемент" loading="lazy" />
          <img className={styles.teapot} src={Teapot} alt="Декоративный элемент" loading="lazy" />
        </div>
      </Container>
    </section>
	)
}

export default Experience