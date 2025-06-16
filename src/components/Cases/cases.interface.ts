import { CaseItemType, CaseResult, SideBoxCarrots } from "./cases.types.ts"

export interface ICasePreview {
	icon: string,
	title: string,
	link: string,
	color: string,
	delay: number
}

export interface ICaseProps {
	title: string,
	link: string,
	image: string,
	type: string,
	task: string,
	says: string,
	items: Array<CaseItemType>,
	result: CaseResult
}

export interface IBoxCarrots {
	side: SideBoxCarrots
}