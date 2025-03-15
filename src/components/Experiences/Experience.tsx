import {FC} from "react"
import styles from "./Experience.module.scss"
import Container from "../UI/Container/Container.tsx";
import Tangle from "../../assets/images/tangles/tangle_3.svg"
import Cup from "../../assets/images/cup.webp"
import Teapot from "../../assets/images/teapot.webp"
import Title from "../UI/Title/Title.tsx";
import SubTitle from "../UI/SubTitle/SubTitle.tsx";
import ExperienceItem from "./ExperienceItem.tsx";
import {experiences} from "./experience.data.ts";
import {ExperienceType} from "./experience.type.ts";


const Experience: FC = () => {
	return (
		<section className={styles.block}>
      <Container>
        <div className={styles.content}>
          <Title text="Создание проектов для ресторанов и horeca" />
          <SubTitle text="BABUSHKA разрабатывает сайты для ресторанов и сервисы с любым функционалом. Команда разработчиков, дизайнеров и менеджеров может реализовать проект с нуля: от бизнес исследования, разработки бренда и фирменного стиля до построения, реализации и поддержки сайта или веб-сервиса." />

          <ul className={styles.features}>
            {experiences.map(({type, name, description}: ExperienceType) => {
              return <ExperienceItem key={name} type={type} name={name} description={description} />
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