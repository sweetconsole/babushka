import {FC} from "react"
import {motion} from "framer-motion"
import BracketLeft from "../../../assets/images/square_brackets/square_bracket_left.svg"
import BracketRight from "../../../assets/images/square_brackets/square_bracket_right.svg"
import {IInfoProps} from "../info.interface.ts"
import styles from "./InfoItem.module.scss"

const InfoItem: FC<IInfoProps> = ({icon, description, id}) => {
	return (
		<motion.li className={styles.info} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.4, delay: 0.4 * (id + 1)}}>
      <img className={[styles.bracket, styles.bracket_left].join(" ")}
           src={BracketLeft}
           alt="Декоративная скобочка"/>

			<img className={styles.icon} src={icon} alt="SEO продвижение"/>
			<p className={styles.description}>{description}</p>

      <img className={[styles.bracket, styles.bracket_right].join(" ")}
           src={BracketRight}
           alt="Декоративная скобочка" />
		</motion.li>
	)
}

export default InfoItem