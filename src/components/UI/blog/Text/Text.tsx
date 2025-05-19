import { FC } from "react"
import { ITextProps } from "./text.interface.ts"
import styles from "./Text.module.scss"

const Text: FC<ITextProps> = ({text}) => {
	return (
		<p className={styles.text}>{text}</p>
	)
}

export default Text