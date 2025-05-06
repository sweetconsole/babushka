import {FC} from "react"
import styles from "./CasePreview.module.scss"
import {Link} from "react-router-dom";
import {ICasePreview} from "../cases.interface.ts";
import {motion} from "framer-motion";

const CasePreview: FC<ICasePreview> = ({icon, title, link, color}) => {
	return (
		<Link to={link}>
			<motion.article className={styles.case} style={{backgroundImage: `url(${icon})`, color: color}}>
				<p className={styles.type}>кейс</p>
				<p className={styles.title}>{title}</p>
			</motion.article>
		</Link>
	)
}

export default CasePreview