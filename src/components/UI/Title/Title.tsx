import {FC} from "react"
import styles from "./Title.module.scss"

interface TitleProps {
  text: string
}

const Title: FC<TitleProps> = ({text}) => {
	return (
		<h2 className={styles.title}>{text}</h2>
	)
}

export default Title