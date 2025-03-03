import {FC} from "react"
import ArrowTitle from "../../assets/images/arrow_intro_title.png"
import Arrow from "../../assets/images/arrow.svg"
import Image from "../../assets/images/intro_image.png"
import styles from "./Intro.module.scss"

const Intro: FC = () => {
	return (
    <section className={styles.intro}>
      <div className="container">
        <div className={styles.block}>
          <h1 className={styles.title}>
            Комплексная разработка сайтов и сервисов
              <img className={styles.title_arrow} src={ArrowTitle} alt="Стрелочка" /> для ресторанов и баров
          </h1>

          <div className={styles.block_application}>
            <div className={styles.block_application_text}>оставить заявку</div>
            <a className={styles.block_application_button} type="submit">
              <img className={styles.block_application_button_icon} src={Arrow} alt="Перейти к заявке" />
            </a>
          </div>

          <img className={styles.image} src={Image} alt="Изображение" />
        </div>
      </div>
    </section>
	)
}

export default Intro