import {FC} from "react"
import styles from "./Cases.module.scss"
import Case from "./Case.tsx";
import Tangle from "../../assets/images/tangle_2.svg"
import ArrowCasePreview from "../../assets/images/arrow_case_preview.webp"

const CasesPreview: FC = () => {
	return (
    <section className={styles.block}>
      <div className="container">
        <div className={styles.content}>
          <h2 className={styles.title}>Главное — это не только внешний вид, но и удобство</h2>
          <p className={styles.description}>Мы делаем фокус не просто на красоте, а на сайтах, которые «живут» и приносят пользу. Бабушка знает, как это важно, и заботится о каждом сайте, как о своем доме.</p>

          <div className={styles.cases}>
            <Case />
            <Case />

            <div>
              <h3>смотреть еще кейсы</h3>
              <img src={Tangle} alt="Декоративный элемент" loading="lazy" />
              <img src={ArrowCasePreview} alt="Ссылка на все статьи" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
	)
}

export default CasesPreview