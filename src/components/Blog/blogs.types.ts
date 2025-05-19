
export type BlogPreviewType = {
	id: number,
	link: string,
	image: string,
	title: string,
	description: string,
	date: string,
}

export const BlogItemTypes = {
	SUBTITLE: "subtitle",
	TEXT: "text",
	POINT: "point",
	LIST: "list",
	IMAGE: "image",
	JSX: "jsx"
}

export type BlogItemTypes = (typeof BlogItemTypes)[keyof typeof BlogItemTypes]

export type BlogType = {
	link: string
	image: string
	title: string
	description: string
	date: string
	result: BlogResultType
	items: Array<BlogItemType>
}

export type BlogItemType = {
	type: BlogItemTypes
	text?: string
	point?: BlogPointType
	list?: Array<BlogListType>
	image?: string
}

export type BlogListType = {
	highlighting?: string,
	text: string,
}

export type BlogPointType = {
	number: number,
	text: string,
}

export type BlogResultType = {
	title: string
	description: string
}