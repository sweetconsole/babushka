import { FC } from "react"
import Tangle from "../../assets/images/tangles/tangle_5.svg"
import TangleMobile from "../../assets/images/tangles/tangle_6.svg"
import Arrow from "../../assets/images/arrow.svg"
import { IResultProps } from "./result.interface.ts"
import styles from "./Result.module.scss"

const Result: FC<IResultProps> = ({title, subtitle, description, link}) => {
	return (
		<div className={styles.block}>
			<picture>
				<source srcSet={TangleMobile} media="(max-width: 1336px)" />

				<img className={styles.tangle} src={Tangle} alt="" />
			</picture>

			<div className={styles.content}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.subtitle}>{subtitle}</p>
				<p className={styles.description}>{description}</p>

				<>
					{link != undefined ? (
						<a className={styles.link} href={link} target="_blank" rel="noopener noreferrer">
							<div className={styles.link_text}>открыть сайт</div>
							<div className={styles.link_arrow}>
								<img className={styles.link_arrow_icon} src={Arrow} alt="^" />
							</div>
						</a>
					) : (
						<></>)
					}
				</>
			</div>
		</div>
	)
}

export default Result