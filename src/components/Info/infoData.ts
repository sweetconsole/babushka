import GlobeIcon from "../../assets/images/icons/globe.svg";
import ComputerIcon from "../../assets/images/icons/computer.svg";
import AudioIcon from "../../assets/images/icons/audio.svg";
import {InfoType} from "./info.type.ts";


export const infoData: Array<InfoType> = [
	{
		id: 1,
		icon: GlobeIcon,
		description: "Создаем сайты с упором на SEO продвижение."
	},
	{
		id: 2,
		icon: ComputerIcon,
		description: "Интегрируем внешние системы и разрабатываем собственные."
	},
	{
		id: 3,
		icon: AudioIcon,
		description: "30 минут — бесплатная консультация. Внучек, только дельные советы!"
	},
]