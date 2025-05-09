import {FC, useState} from "react"
import styles from "./FAQ.module.scss"
import {answers} from "./FAQ.data.ts";
import {AnswerType} from "./FAQ.type.ts";
import {MouseEvent} from "react";
import {motion} from "framer-motion";
import {Title, Container} from "../ui"
import {SlideUp} from "../../utility/animation.ts";

const FAQ: FC = () => {
	const [answerActiveId, setAnswerActiveId] = useState(0)
	const [activeAnswer, setActiveAnswer] = useState(false)

	const openAnswer = (event: MouseEvent<HTMLParagraphElement>) => {
		const targetId = Number(event.currentTarget.getAttribute("data-value"))
		setAnswerActiveId(targetId)

		if (activeAnswer && answerActiveId === targetId) setActiveAnswer(false)
		else setActiveAnswer(true)
	}

	return (
		<section className={styles.block} id="faq">
			<Container>
				<div className={styles.content}>
					<Title text="Частые вопросы к Бабушке:" animate />

					{answers.map(({id, question, answer}: AnswerType) => {
						return (
							<motion.div key={id}
													className={activeAnswer && answerActiveId === id ? [styles.faq_active, styles.faq].join(" ") : styles.faq}
													viewport={{once: true}}
													variants={SlideUp(0.2 * (id + 1))}
													initial="initial"
													whileInView={"animate"}>

								<div className={styles.cross__block} onClick={openAnswer} data-value={id} >
									<svg className={styles.cross__icon} width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
										<line x1="14" y1="3" x2="14" y2="25" stroke="currentColor" stroke-width="2"/>
										<line x1="3" y1="14" x2="25" y2="14" stroke="currentColor" stroke-width="2"/>
									</svg>
								</div>

								<div className={styles.info}>
									<p className={styles.question} onClick={openAnswer} data-value={id}>{question}</p>
									<p className={styles.answer}>{answer}</p>
								</div>
							</motion.div>
						)
					})}
				</div>
			</Container>
		</section>
	)
}

export default FAQ