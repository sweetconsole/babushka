import {forwardRef} from 'react'
import Label from "../Label/Label.tsx"
import { ISelect } from "./select.interface.ts"
import styles from "./Select.module.scss"

const Select = forwardRef<HTMLSelectElement, ISelect>(
	({label, options, ...rest}, ref) => {
		return (
			<Label text={label}>
				<select className={styles.select} ref={ref} {...rest} >
					{options.map((option: string) => {
						return <option className={styles.option} key={option}>{option}</option>
						}
					)}
				</select>
			</Label>
		)
	}
)

export default Select