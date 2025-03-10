import ImageOne from "../../assets/images/blogs/blog_preview_1.png"
import ImageTwo from "../../assets/images/blogs/blog_preview_2.png"
import ImageThree from "../../assets/images/blogs/blog_preview_3.png"
import ImageFour from "../../assets/images/blogs/blog_preview_4.png"

export type BlogPreviewType = {
	id?: number,
	link: string,
	image: string,
	title: string,
	description: string,
	date: string,
}

export const blogs: Array<BlogPreviewType> = [
	{
		id: 0,
		link: "260125",
		image: ImageOne,
		title: "Какой должен быть сайт для ресторана: советы от Бабушки",
		description: "Милок, ресторан — это не просто еда, это атмосфера, эмоции и уют.",
		date: "26.01.25",
	},
	{
		id: 1,
		link: "051224",
		image: ImageTwo,
		title: "Кейс: PIR EXPO 2024 — как Бабушка сделала выставку ярче и привлекла тысячи гостей",
		description: "PIR EXPO — это главная выставка для индустрии HoReCa в России.",
		date: "05.12.24",
	},
	{
		id: 2,
		link: "191024",
		image: ImageThree,
		title: "Где находить клиентов в 2025 году: советы от Бабушки",
		description: "Милок, клиенты — это не иголка в стоге сена, но найти их всё-таки задачка не из лёгких.",
		date: "19.10.24",
	},
	{
		id: 3,
		link: "161124",
		image: ImageFour,
		title: "Тренды веб-дизайна 2024-2025: что говорит Бабушка?",
		description: "Давай-ка разберем, что будет задавать стиль в веб-дизайне в ближайшие годы.",
		date: "16.11.24",
	}
]
