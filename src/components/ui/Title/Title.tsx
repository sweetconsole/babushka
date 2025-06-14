import {FC} from "react"
import {motion} from "framer-motion";
import styles from "./Title.module.scss"

interface TitleProps {
  text: string
	animate?: boolean
}

const Title: FC<TitleProps> = ({text, animate}) => {
	return (
		<>
			{animate ? (
					<motion.h2 className={styles.title}
										 viewport={{once: true}}
										 initial={{opacity: 0, y: 100}}
										 whileInView={{opacity: 1, y:0}}
										 transition={{type: "spring", stiffness: 150, damping: 10, delay: 0.2}}>
						{text}
					</motion.h2>
			) : (
				<h2 className={styles.title}>{text}</h2>
			)}
		</>
	)
}

export default Title