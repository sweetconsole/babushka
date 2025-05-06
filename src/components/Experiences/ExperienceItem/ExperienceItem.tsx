import {FC} from "react"
import styles from "./ExperienceItem.module.scss"
import {IExperienceProps} from "../experience.interface.ts";

const ExperienceItem: FC<IExperienceProps> = ({type, name, description}) => {
	return (
		<>
			{type === "block" ?
				<li className={styles.block}>
					<p className={styles.title}>{name}</p>
					<p className={styles.description}>{description}</p>
				</li>
				:
				<li className={styles.empty}></li>}
		</>
	)
}

export default ExperienceItem