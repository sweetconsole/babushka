import { InputHTMLAttributes } from "react"

export interface IFieldProps {
	label: string
	placeholder: string
	type: string
	error?: string | undefined
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

export interface IField extends TypeInputPropsField {}