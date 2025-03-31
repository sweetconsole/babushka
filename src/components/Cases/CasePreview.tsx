import {FC} from "react"
import styles from "./CasePreview.module.scss"
import {Link} from "react-router-dom";
import {ICasePreview} from "./cases.interface.ts";


const CasePreview: FC<ICasePreview> = ({icon, title, link, color}) => {
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