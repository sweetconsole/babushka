import { FC } from "react"
import { motion } from "framer-motion"
import { FAQ, Feedback, Footer, Result } from "../../../components"
import { Container } from "../../ui"
import { Image, Point } from "../../ui/cases"
import { ICaseProps } from "../cases.interface.ts"
import { CaseItemType, CaseItemTypes } from "../cases.types.ts"
import styles from "./Case.module.scss"

const Case: FC<ICaseProps> = ({title, image, type, task, says, items, result}) => {

	const getElementType = (data: CaseItemType) => {
		if (data.type === CaseItemTypes.POINT) {
      return <Point {...data.point} />
	  } else if (data.type === CaseItemTypes.IMAGE) {
      return <Image image={data.image} />
	  }
	}

	return (
		<>
      <article>
				<Container>
					<div className={styles.info}>
						<motion.p className={styles.type}
											viewport={{once: true}}
											initial={{y: -100, opacity: 0}}
											whileInView={{y: 0, opacity: 1}}
											transition={{duration: 0.6, delay: 0.6}}>
							{type}
						</motion.p>
						<motion.h1 className={styles.title}
											 viewport={{once: true}}
											 initial={{y: -100, opacity: 0}}
											 whileInView={{y: 0, opacity: 1}}
											 transition={{duration: 0.6, delay: 0.2}}>
							{title}
						</motion.h1>
					</div>
          <img className={styles.image} src={image} alt="Превью" />
					<p className={styles.grandmother_title}>Как Бабушка говорит:</p>
					<p className={styles.grandmother_text}>«{says}»</p>

					<div className={styles.task}>
						<h2 className={styles.task_title}>Задача</h2>
						<div className={styles.task_text}>{task}</div>
					</div>

					<h3 className={styles.have_done_title}>Что мы сделали:</h3>
          <>
            {items.map((data: CaseItemType) => {
              return <> {getElementType(data)} </>
            })}
					</>
				</Container>

				<Result {...result} />
			</article>

			<Feedback />
			<FAQ />
			<Footer />
		</>
	)
}

export default Case