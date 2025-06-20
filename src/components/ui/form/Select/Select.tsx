import {forwardRef} from 'react'
import { ISelect } from "./select.interface.ts"
import styles from "./Select.module.scss"

const Select = forwardRef<HTMLSelectElement, ISelect>(
	({label, options, ...rest}, ref) => {
		return (
			<label className={styles.label}>
				{label}

				<select className={styles.select} ref={ref} {...rest} >
					{options.map((option: string) => {
						return <option className={styles.option} key={option}>{option}</option>
						}
					)}
				</select>
			</label>
		)
	}
)

export default Select