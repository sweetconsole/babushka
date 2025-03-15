import {FC, JSX} from "react"
import styles from "./Container.module.scss"

interface IContainerProps {
  children: JSX.Element
}

const Container: FC<IContainerProps> = ({children}) => {
	return (
		<div className={styles.container}>{children}</div>
	)
}

export default Container