import ServiceImageDesign from "../../assets/images/service_1.webp";
import ServiceImageAds from "../../assets/images/service_2.webp";
import ServiceImageSEO from "../../assets/images/service_3.webp";
import {AdditionalServicesType} from "./additionalServices.type.ts"


export const additionalServices: Array<AdditionalServicesType> = [
	{
		id: 0,
		name: "дизайн",
		description: "Смотря какой «фэбрик», смотря сколько «дитэйлс»...\nНо нам в общем то не важно, мы все делаем со вкусом",
		tags: ["Логотип", "Фирменный стиль", "Презентации", "Баннера", "Полиграфия", "3D"],
		image: ServiceImageDesign,
	},
	{
		id: 1,
		name: "Реклама",
		description: "Все мечтают, чтобы об их проекте знали как можно больше людей.\nБабушка знает как это сделать!",
		tags: ["Реклама в Яндекс.Директ", "Реклама в Вконтакте", "Реклама в Telegram", "Яндекс.Бизнес"],
		image: ServiceImageAds,
	},
	{
		id: 2,
		name: "SEO-продвижение",
		description: "Мы знаем как тяжело выделиться в поиске среди множества сайтов и проектов,\nно у нас есть возможности, чтобы решить эту проблему. ",
		tags: ["Техническая SEO оптимизация", "SEO продвижение"],
		image: ServiceImageSEO,
	},
]