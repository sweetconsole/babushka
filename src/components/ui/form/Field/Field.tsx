import { forwardRef } from "react"
import Label from "../Label/Label.tsx"
import { IField } from "./field.interface.ts"
import styles from "./Field.module.scss"

const Field = forwardRef<HTMLInputElement, IField>(
	({label, placeholder, error, type, ...rest}, ref) => {
		return (
			<Label text={label}>
				<input className={styles.input} ref={ref} type={type} {...rest} placeholder={placeholder} />

				<>
					{error && <p className={styles.error}>{error}</p>}
				</>
			</Label>
		)
	}
)

export default Field