import { forwardRef } from "react"
import styles from "./Field.module.scss"
import { IField } from "./field.interface.ts"

const Field = forwardRef<HTMLInputElement, IField>(
	({label, placeholder, error, type, ...rest}, ref) => {
		return (
			<label className={styles.label}>
				{label}
				<input className={styles.input} ref={ref} type={type} {...rest} placeholder={placeholder} />

				{error && <p className={styles.error}>{error}</p>}
			</label>
		)
	}
)

export default Field