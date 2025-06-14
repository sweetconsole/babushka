import { SelectHTMLAttributes } from "react"

export interface ISelectProps {
	label: string
	options: string[]
}

type TypeSelectProps = SelectHTMLAttributes<HTMLSelectElement> & ISelectProps

export interface ISelect extends TypeSelectProps {}