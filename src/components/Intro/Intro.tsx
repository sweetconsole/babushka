import {FC} from "react"
import ArrowTitle from "../../assets/images/arrow_intro_title.webp"
import Arrow from "../../assets/images/arrow.svg"
import Image from "../../assets/images/intro_image.webp"
import styles from "./Intro.module.scss"
import Container from "../UI/Container/Container.tsx";

const Intro: FC = () => {
	return (
    <section className={styles.intro}>
      <Container>
        <div className={styles.block}>
          <h1 className={styles.title}>
            Комплексная разработка сайтов и сервисов
              <img className={styles.title_arrow} src={ArrowTitle} alt="Стрелочка" /> для ресторанов и баров
          </h1>

          <a className={styles.block_application} href={"#feedback"}>
            <p className={styles.block_application_text}>оставить заявку</p>
            <button className={styles.block_application_button}>
              <img className={styles.block_application_button_icon} src={Arrow} alt="Перейти к заявке" />
            </button>
          </a>

          <img className={styles.image} src={Image} alt="Изображение" />
        </div>
      </Container>
    </section>
	)
}

export default Intro