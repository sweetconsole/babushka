import {FC} from "react"
import styles from "./Cases.module.scss"
import CasePreview from "./CasePreview.tsx";
import Tangle from "../../assets/images/tangles/tangle_2.svg"
import ArrowCasePreview from "../../assets/images/arrow_case_preview.webp"
import {casesPreviewData, casePreviewType} from "./cases.ts";
import {Link} from "react-router-dom";
import Container from "../Container/Container.tsx";
import Title from "../Title/Title.tsx";
import SubTitle from "../SubTitle/SubTitle.tsx";

const CasesPreview: FC = () => {
  const pickRandomItems = <T,> (arr: Iterable<T>, n: number): T[] => {
    const shuffled = Array.from(arr).sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
  };

	return (
    <section className={styles.block}>
      <Container>
        <div className={styles.content}>
          <Title text="Главное — это не только внешний вид, но и удобство" />
          <SubTitle text="Мы делаем фокус не просто на красоте, а на сайтах, которые «живут» и приносят пользу. Бабушка знает, как это важно, и заботится о каждом сайте, как о своем доме." />

          <div className={styles.cases}>
            {pickRandomItems(casesPreviewData, 2).map(({id, icon, title, link, color}: casePreviewType) => {
              return <CasePreview key={id} icon={icon} title={title} link={link} color={color} />
            })}

            <Link to="">
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