import { FC } from "react"
import Tangle from "../../assets/images/tangles/tangle_5.svg"
import TangleMobile from "../../assets/images/tangles/tangle_6.svg"
import { IResultProps } from "./result.interface.ts"
import styles from "./Result.module.scss"

const Result: FC<IResultProps> = ({title, description}) => {
	return (
		<div className={styles.block}>
			<picture>
				<source srcSet={TangleMobile} media="(max-width: 1336px)" />

				<img className={styles.tangle} src={Tangle} alt="" />
			</picture>

			<div className={styles.content}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.description}>{description}</p>
			</div>
		</div>
	)
}

export default Result