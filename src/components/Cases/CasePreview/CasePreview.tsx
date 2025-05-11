import {FC} from "react"
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import {SlideUp} from "../../../utility/animation.ts";
import {ICasePreview} from "../cases.interface.ts";
import styles from "./CasePreview.module.scss"

const CasePreview: FC<ICasePreview> = ({icon, title, link, color, delay}) => {
	return (
		<Link to={link}>
			<motion.article className={styles.case}
											style={{backgroundImage: `url(${icon})`, color: color}}
											viewport={{once: true}}
											variants={SlideUp(delay)}
											initial="initial"
											whileInView="animate">
				<p className={styles.type}>кейс</p>
				<p className={styles.title}>{title}</p>
			</motion.article>
		</Link>
	)
}

export default CasePreview