import { BlogItemType, BlogResultType } from "./blogs.types.ts"

export interface IBlogPreviewProps {
	link: string,
	image: string,
	title: string,
	description: string,
	date: string,
	delay: number,
}

export interface IBlogProps {
	image: string
	title: string
	description: string
	date: string
	result: BlogResultType
	items: Array<BlogItemType>
}