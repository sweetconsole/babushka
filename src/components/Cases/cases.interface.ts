import { SideBoxCarrots } from "./cases.types.ts"

export interface ICasePreview {
	icon: string,
	title: string,
	link: string,
	color: string,
	delay: number
}

export interface IBoxCarrots {
	side: SideBoxCarrots
}