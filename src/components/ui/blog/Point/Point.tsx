import { FC } from "react"
import { IPointProps } from "./point.interface.ts"
import styles from "./Point.module.scss"

const Point: FC<IPointProps> = ({number, text}) => {
	return (
		<h3 className={styles.point}>
			<span className={styles.point_number}>/0{number}</span>
			{text}
		</h3>
	)
}

export default Point