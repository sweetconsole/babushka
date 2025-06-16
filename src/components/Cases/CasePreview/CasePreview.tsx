import {FC} from "react"
import {motion} from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {SlideUp} from "../../../utility/animation.ts";
import {ICasePreview} from "../cases.interface.ts";
import styles from "./CasePreview.module.scss"

const CasePreview: FC<ICasePreview> = ({icon, title, link, color, delay}) => {
	const location = useLocation().pathname;

	return (
		<Link to={location == "/" ? `case/${link}` : `../case/${link}`} >
			<motion.article className={styles.case}
											style={{backgroundImage: `url(${icon})`, color: color}}
											viewport={{once: true}}
											variants={SlideUp(delay)}
											initial="initial"
											whileInView="animate">
				<div className={styles.info}>
					<p className={styles.type}>кейс</p>
					<p className={styles.title}>{title}</p>
				</div>

			</motion.article>
		</Link>
	)
}

export default CasePreview