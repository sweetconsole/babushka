import {FC} from "react"
import {motion} from "framer-motion"
import styles from "./SubTitle.module.scss"


interface SubTitleProps {
	text: string
	animate?: boolean
}

const SubTitle: FC<SubTitleProps> = ({text, animate}) => {
	return (
		<>
			{animate ? (
				<motion.p className={styles.subtitle}
									viewport={{once: true}}
									initial={{opacity: 0, y: 100}}
									whileInView={{opacity: 1, y:0}}
									transition={{type: "spring", stiffness: 150, damping: 10, delay: 0.4}}>
					{text}
				</motion.p>
			)	: (
				<p className={styles.subtitle}>{text}</p>
			)}
		</>
	)
}

export default SubTitle