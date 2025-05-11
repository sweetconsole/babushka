
export const SideShelf = {
	LEFT: "left",
	RIGHT: "right",
} as const;

export type SideShelf = (typeof SideShelf)[keyof typeof SideShelf];

export interface IShelfProps {
	side: SideShelf
}

export interface IJarProps {
	style: string
	image: string
	alt: string
	delay: number
}