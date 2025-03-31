import {FC} from "react"
import styles from "./Container.module.scss"
import {IContainerProps} from "./container.interface.ts";

const Container: FC<IContainerProps> = ({children}) => {
	return (
		<div className={styles.container}>{children}</div>
	)
}

export default Container