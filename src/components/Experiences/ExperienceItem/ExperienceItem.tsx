import {FC} from "react"
import styles from "./ExperienceItem.module.scss"
import {IExperienceProps} from "../experience.interface.ts";
import {motion} from "framer-motion";

const ExperienceItem: FC<IExperienceProps> = ({type, name, description, delay}) => {
	return (
		<>
			{type === "block" ?
				<motion.li className={styles.block}
									 viewport={{once: true}}
									 initial={{opacity: 0, scale: 1.25}}
									 whileInView={{opacity: 1, scale: 1}}
									 transition={{duration: 0.6, delay: delay}}>
					<p className={styles.title}>{name}</p>
					<p className={styles.description}>{description}</p>
				</motion.li>
				:
				<li className={styles.empty}></li>}
		</>
	)
}

export default ExperienceItem