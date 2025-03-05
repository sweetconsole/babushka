import {FC} from "react"
import styles from "./AboutUs.module.scss"
import Container from "../Container/Container.tsx";
import Tangle from "../../assets/images/tangles/tangle_3.svg"
import Cup from "../../assets/images/cup.webp"
import Teapot from "../../assets/images/teapot.webp"


const AboutUs: FC = () => {
	return (
		<section className={styles.block}>
      <Container>
        <div className={styles.content}>
          <h2 className={styles.title}>Создание проектов для ресторанов и horeca</h2>
          <p className={styles.description}>BABUSHKA разрабатывает сайты для ресторанов и сервисы с любым функционалом. Команда разработчиков, дизайнеров и менеджеров может реализовать проект с нуля: от бизнес исследования, разработки бренда и фирменного стиля до построения, реализации и поддержки сайта или веб-сервиса.</p>

          <ul className={styles.features}>
            <li className={styles.feature}>
              <p className={styles.feature__title}>Век живу,<br/>век учусь</p>
              <p className={styles.feature__description}>Более 4 лет на рынке и 100+ проектов. Всё, что нужно — Бабушка уже знает и сделает.</p>
            </li>

            <li className={styles.empty}></li>

            <li className={styles.feature}>
              <p className={styles.feature__title}>Помню все,<br/>что обещала</p>
              <p className={styles.feature__description}>Бабушка никогда не перекладывает ответственность
                и всегда доводит работу до конца.</p>
            </li>

            <li className={styles.feature}>
              <p className={styles.feature__title}>Решение здесь<br/>и сейчас</p>
              <p className={styles.feature__description}>Берёмся за срочные задачи, помогаем сразу, даже до оплаты. Дедлайны? Бабушка их не боится.</p>
            </li>

            <li className={styles.empty}></li>

            <li className={styles.feature}>
              <p className={styles.feature__title}>Простой подход<br/>к сложным задачам</p>
              <p className={styles.feature__description}>Мы решаем задачи сразу и без лишних хлопот. Бабушка понимает с полуслова, что вам нужно.</p>
            </li>

            <li className={styles.feature}>
              <p className={styles.feature__title}>Каждая копеечка на счету</p>
              <p className={styles.feature__description}>Бабушка против навязывания ненужных услуг и трат, предлагаем только необходимый пакет инструментов для решения проблем.</p>
            </li>

            <li className={styles.empty}></li>
          </ul>

          <img className={styles.tangle} src={Tangle} alt="Декоративный элемент" loading="lazy" />
          <img className={styles.cup} src={Cup} alt="Декоративный элемент" loading="lazy" />
          <img className={styles.teapot} src={Teapot} alt="Декоративный элемент" loading="lazy" />
        </div>
      </Container>
    </section>
	)
}

export default AboutUs