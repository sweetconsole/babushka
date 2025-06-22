import { JSX } from "react"

export interface ILabelProps {
	text: string;
	style?: string
	children: JSX.Element[] | JSX.Element;
}