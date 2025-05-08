import GlobeIcon from "../../assets/images/icons/globe.svg";
import ComputerIcon from "../../assets/images/icons/computer.svg";
import AudioIcon from "../../assets/images/icons/audio.svg";
import MeGoBariLogo from "../../assets/images/logos/megobari.svg"
import OjahriLogo from "../../assets/images/logos/ojahri.svg"
import ChiefTomorrowLogo from "../../assets/images/logos/chief_tomorrow.svg"
import ToucheLogo from "../../assets/images/logos/touche.svg"
import LeMenuLogo from "../../assets/images/logos/le_menu_logo.svg"
import {ServiceType, PartnerType} from "./info.type.ts";
import styles from "./Info.module.scss"

export const services: Array<ServiceType> = [
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

export const partners: Array<PartnerType> = [
	{
		logo: MeGoBariLogo,
		style: styles.partners__logo_megobari,
		name: "MeGoBari",
		delay: 0.2
	},
	{
		logo: OjahriLogo,
		style: styles.partners__logo_ojahri,
		name: "Оджахури Грузинская лавка",
		delay: 0.4
	},
	{
		logo: ChiefTomorrowLogo,
		style: styles.partners__logo_chief_tomorrow,
		name: "Завтрак Шефа",
		delay: 0.6
	},
	{
		logo: ToucheLogo,
		style: styles.partners__logo_touche,
		name: "Touche",
		delay: 0.8
	},
	{
		logo: LeMenuLogo,
		style: styles.partners__logo_le_menu,
		name: "le menu",
		delay: 1
	},
]