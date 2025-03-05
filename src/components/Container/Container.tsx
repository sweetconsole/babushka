import {FC, JSX} from "react"
import styles from "./Container.module.scss"

interface ContainerProps {
  children: JSX.Element
}

const Container: FC<ContainerProps> = ({children}) => {
	return (
		<div className={styles.container}>{children}</div>
	)
}

export default Container