import {FC} from "react"
import styles from "./InfoItem.module.scss"
import BracketLeft from "../../../assets/images/square_brackets/square_bracket_left.svg"
import BracketRight from "../../../assets/images/square_brackets/square_bracket_right.svg"
import {IInfoProps} from "../info.interface.ts";


const InfoItem: FC<IInfoProps> = ({icon, description}) => {
	return (
		<li className={styles.info}>
      <img className={[styles.bracket, styles.bracket_left].join(" ")}
           src={BracketLeft}
           alt="Декоративная скобочка"/>

			<img className={styles.icon} src={icon} alt="SEO продвижение"/>
			<p className={styles.description}>{description}</p>

      <img className={[styles.bracket, styles.bracket_right].join(" ")}
           src={BracketRight}
           alt="Декоративная скобочка" />
		</li>
	)
}

export default InfoItem