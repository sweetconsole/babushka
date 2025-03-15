import styles from "./Service.module.scss";
import {serviceType} from "./services.type.ts";

export const services: Array<serviceType> = [
	{
		name: "Landing page",
		countPage: "1 шт",
		time: "> 21 дней",
		price: "95 000",
		description: "Одностраничный сайт для ресторана, бара или кафе. На нем можно рассказать основную информацию о заведении и сделать форму для брони столов. ",
		styleBlock: styles.rate__landing_page,
		styleLink: styles.link__block_negative_rotate,
		styleButton: styles.link__button_negative_rotate,
	},
	{
		name: "Многостраничный сайт",
		countPage: "от 5 шт",
		time: "от 2 месяцев ",
		price: "180 000",
		description: "Такой формат сайт подходит для заведений, у которых есть банкетные залы, мероприятия, мастер-классы или гастроужины. Многостраничный сайт для ресторана помогает клиенту получить максимально подробную информацию на одном ресурсе. ",
		styleBlock: styles.rate__website,
		styleLink: styles.link__block_positive_rotate,
		styleButton: styles.link__button_positive_rotate,
	},
]