import {FC} from "react"
import styles from "./Cases.module.scss"
import CasePreview from "./CasePreview/CasePreview.tsx";
import Tangle from "../../assets/images/tangles/tangle_2.svg"
import ArrowCasePreview from "../../assets/images/arrow_case_preview.webp"
import {Title, Container, SubTitle} from "../UI";
import {casesPreview} from "./cases.data.ts";
import {Link} from "react-router-dom";
import {pickRandomItems} from "../../services/pickRandomItems.ts";

const CasesPreview: FC = () => {
	return (
    <section className={styles.block}>
      <Container>
        <div className={styles.content}>
          <Title text="Главное — это не только внешний вид, но и удобство" animate />
          <SubTitle text="Мы делаем фокус не просто на красоте, а на сайтах, которые «живут» и приносят пользу. Бабушка знает, как это важно, и заботится о каждом сайте, как о своем доме." animate />

          <div className={styles.cases}>
            {pickRandomItems(casesPreview, 2).map((data) => { return <CasePreview key={data.id} {...data} /> }) }

            <Link to="projects/">
              <div className={styles.link}>
                <h3 className={styles.link__title}>смотреть<br/>еще кейсы</h3>
                <img className={styles.link__image} src={Tangle} alt="Декоративный элемент" loading="lazy" />
                <img className={styles.link__button} src={ArrowCasePreview} alt="Ссылка на все статьи" loading="lazy" />
              </div>
            </Link>
          </div>
        </div>
      </Container>
    </section>
	)
}

export default CasesPreview