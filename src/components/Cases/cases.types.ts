
export type casePreviewType = {
	icon: string
	title: string
	link: string
	color: string
}

export type CaseType = {
	title: string,
	link: string,
	image: string,
	type: string,
	task: string,
	says: string,
	items: Array<CaseItemType>,
	result: CaseResult
}

export const CaseItemTypes = {
	POINT: "point",
	IMAGE: "image",
}

export type CaseItemTypes = (typeof CaseItemTypes)[keyof typeof CaseItemTypes]

export type CaseItemType = {
	type: CaseItemTypes,
	point?: CasePointType,
	image?: string,
}

export type CasePointType = {
	number: number,
	text: string,
}

export type CaseResult = {
	title: string,
	subtitle?: string,
	description: string,
	link?: string
}

export const SideBoxCarrots = {
	LEFT: "left",
	RIGHT: "right",
} as const;

export type SideBoxCarrots = (typeof SideBoxCarrots)[keyof typeof SideBoxCarrots];

