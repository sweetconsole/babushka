import { FC } from "react"
import styles from "./Label.module.scss"
import { ILabelProps } from "./label.interface.ts"

const Label: FC<ILabelProps> = ({text, style, children}) => {
	return (
		<label className={[styles.label, style].join(" ")}>
			{text}
			{children}
		</label>
	)
}

export default Label