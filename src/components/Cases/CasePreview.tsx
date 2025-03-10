import {FC} from "react"
import styles from "./Case.module.scss"
import {Link} from "react-router-dom";

interface CaseProps {
	icon: string,
	title: string,
	link: string,
	color: string,
}

const CasePreview: FC<CaseProps> = ({icon, title, link, color}) => {
	return (
		<Link to={link}>
			<article className={styles.case} style={{backgroundImage: `url(${icon})`, color: color}}>
				<p className={styles.type}>кейс</p>
				<p className={styles.title}>{title}</p>
			</article>
		</Link>
	)
}

export default CasePreview