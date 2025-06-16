import { FC } from "react"
import { Container, SubTitle, Title } from "../../ui"
import {shuffledArray} from "../../../utility/shuffledArray.ts"
import CasePreview from "../CasePreview/CasePreview.tsx"
import { casesPreview } from "../cases.data.ts"
import styles from "./Cases.module.scss"

const Cases: FC = () => {
	return (
		<section className={styles.block}>
      <Container>
        <div className={styles.content}>
					<Title text="кейсы" animate />
					<SubTitle text="Каждый проект — это результат заботы и опыта. Наши кейсы говорят за нас: от идеи до успешного результата. Мы расскажем, как подходили к задачам, и покажем результаты." animate />

					<div className={styles.cases}>
						{shuffledArray(casesPreview).map((data) => { return <CasePreview key={data.link} {...data} delay={0.2 * (casesPreview.indexOf(data) + 1)} /> }) }
					</div>
				</div>
			</Container>
		</section>
	)
}

export default Cases