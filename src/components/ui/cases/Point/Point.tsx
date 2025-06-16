import { FC } from "react"
import styles from "./Point.module.scss"
import { IPointProps } from "./point.interface.ts"

const Point: FC<IPointProps> = ({number, text}) => {
	return (
		<div className={styles.block}>
      <p className={styles.number}>/0{number}</p>
			<p className={styles.text}>{text}</p>
		</div>
	)
}

export default Point