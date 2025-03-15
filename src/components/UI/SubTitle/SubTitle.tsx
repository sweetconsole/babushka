import {FC} from "react"
import styles from "./SubTitle.module.scss"

interface SubTitleProps {
	text: string
}

const SubTitle:FC<SubTitleProps> = ({text}) => {
	return (
		<p className={styles.subtitle}>{text}</p>
	)
}

export default SubTitle