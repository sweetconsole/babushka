
export type casePreviewType = {
	id: number
	icon: string
	title: string
	link: string
	color: string
}

export const SideBoxCarrots = {
	LEFT: "left",
	RIGHT: "right",
} as const;

export type SideBoxCarrots = (typeof SideBoxCarrots)[keyof typeof SideBoxCarrots];

