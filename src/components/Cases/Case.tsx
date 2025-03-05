import {FC} from "react"
import styles from "./Case.module.scss"

const Case: FC = () => {
	return (
		<div className={styles.case}>
      <p>кейс</p>
      <h4>Touche — Перезапуск сайта винного ресторана</h4>
    </div>
	)
}

export default Case