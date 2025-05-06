import {FC} from "react"
import styles from "./Title.module.scss"
import {motion} from "framer-motion";

interface TitleProps {
  text: string
}

const Title: FC<TitleProps> = ({text}) => {
	return (
		<motion.h2 className={styles.title}
							 viewport={{once: true}}
							 initial={{opacity: 0, y: 100}}
							 whileInView={{opacity: 1, y:0}}
							 transition={{type: "spring", stiffness: 150, damping: 10, delay: 0.2}}>
			{text}
		</motion.h2>
	)
}

export default Title