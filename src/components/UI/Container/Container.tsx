import {FC} from "react"
import {IContainerProps} from "./container.interface.ts";
import styles from "./Container.module.scss"

const Container: FC<IContainerProps> = ({children}) => {
	return (
		<div className={styles.container}>{children}</div>
	)
}

export default Container