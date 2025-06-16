import CasePreviewOne from "../../assets/images/cases/case_preview_1.webp";
import CasePreviewTwo from "../../assets/images/cases/case_preview_2.webp";
import CasePreviewThree from "../../assets/images/cases/case_preview_3.webp";
import CasePreviewFour from "../../assets/images/cases/case_preview_4.webp";
import CasePreviewFive from "../../assets/images/cases/case_preview_5.webp";
import CasePreviewSix from "../../assets/images/cases/case_preview_6.webp";

import CaseToucheIntro from "../../assets/images/cases/case_1/intro.png"

import { CaseItemTypes, casePreviewType, CaseType } from "./cases.types.ts"

export const casesPreview: Array<casePreviewType> = [
	{
		icon: CasePreviewOne,
		title: "Touche — Перезапуск сайта\nвинного ресторана",
		link: "touche_relaunch_wine_restaurant_website",
		color: "#1E1E1E",
	},
	{
		icon: CasePreviewTwo,
		title: "ТУТ БАР — создание сайта\nдля доставки вкусного",
		link: "",
		color: "#FFFFFF",
	},
	{
		icon: CasePreviewThree,
		title: "Премия шеф-повар года - обновление дизайна",
		link: "",
		color: "#1E1E1E",
	},
	{
		icon: CasePreviewFour,
		title: "Menu – уникальный кейтеринг с душой ресторана",
		link: "",
		color: "#1E1E1E",
	},
	{
		icon: CasePreviewFive,
		title: "Водка ARAKI – от игры слов до яркого бренда",
		link: "",
		color: "#1E1E1E",
	},
	{
		icon: CasePreviewSix,
		title: "ЗАВТРАк ШЕФА 25 - разработка визуала для форума поваров",
		link: "",
		color: "#FFFFFF",
	},
]

export const cases: Array<CaseType> = [
	{
		link: "touche_relaunch_wine_restaurant_website",
		image: CaseToucheIntro,
		type: "Интернет-магазин",
		title: "Перезапуск сайта винного ресторана Touche",
		task: "Главная задача - создание уникального и узнаваемого стиля, который бы\nвыделял Touche среди конкурентов. Потому что, Существующий сайт на\nплатформе Tilda больше не соответствует современным требованиям. ",
		says: "Когда всё красиво и по делу, клиент останется доволен!",
		items: [
			{
				type: CaseItemTypes.POINT,
				point: {
					number: 1,
					text: "Наша команда провела  брифинг с клиентом, чтобы понять его ожидания и видение будущего сайта. Мы предложили несколько концепций, одной из которых стала идея стилизации сайта под газетную верстку – необычное решение, которое добавило бы аутентичности и шарм"
				}
			},
			{
				type: CaseItemTypes.IMAGE,
				image: CaseToucheIntro
			}
		],
		result: {
			title: "результат",
			description: "Результат превзошел ожидания: новый сайт получил уникальный стиль, который четко отражает атмосферу и философию винного ресторана Touche. Клиенты теперь могут быстро найти интересующую их информацию, будь то информация об акциях, специальных мероприятиях или просто заказать столик онлайн. В итоге, клиент остался доволен результатом нашей совместной работы, и мы планируем продолжить сотрудничество, внедряя новые идеи и улучшая функциональность сайта.",
			link: "https://touchewinebar.ru/"
		}
	}
]