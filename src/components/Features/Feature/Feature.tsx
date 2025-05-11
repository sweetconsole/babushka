import {FC} from "react"
import {motion} from "framer-motion"
import {IFeatureProps} from "../features.interface.ts"
import styles from "./Feature.module.scss"

const Feature: FC<IFeatureProps> = ({text, delay}) => {
	return (
		<motion.div className={styles.block}
								viewport={{once: true}}
								initial={{opacity: 0}}
								whileInView={{opacity: 1}}
								transition={{duration: 0.4, delay: delay}}>
      <p className={styles.text}>{text}</p>
    </motion.div>
	)
}

export default Feature