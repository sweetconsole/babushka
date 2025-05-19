import { FC } from "react"
import { ISubtitleProps } from "./subtitle.interface.ts"
import styles from "./Subtitle.module.scss"

const Subtitle: FC<ISubtitleProps> = ({text}) => {
	return (
		<h2 className={styles.subtitle}>{text}</h2>
	)
}

export default Subtitle