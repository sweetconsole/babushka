import {FC} from "react"
import styles from "./Features.module.scss"
import Feature from "./Feature.tsx";
import Tangle from "../../assets/images/tangles/tangle_1.svg"
import Thread from "../../assets/images/thread_1.svg"
import GlobeIcon from "../../assets/images/icons/globe.svg"
import ComputerIcon from "../../assets/images/icons/computer.svg"
import AudioIcon from "../../assets/images/icons/audio.svg"
import MeGoBariLogo from "../../assets/images/logos/megobari.svg"
import OjahriLogo from "../../assets/images/logos/ojahri.svg"
import ChiefTomorrowLogo from "../../assets/images/logos/chief_tomorrow.svg"
import ToucheLogo from "../../assets/images/logos/touche.svg"
import LeMenuLogo from "../../assets/images/logos/le_menu_logo.svg"
import Container from "../Container/Container.tsx";


type FeatureType = {
	id: number
	icon: string
	description: string
}

const featuresData: Array<FeatureType> = [
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

const Features: FC = () => {
	return (
		<section className={styles.block}>
			<Container>
				<div className={styles.content}>

					<div className={styles.features}>
						<img className={styles.tangle} src={Tangle} alt="Декоративный элемент" />

						<h2 className={styles.title}>Разработка оригинальных сайтов под ключ для ресторанов, баров, кафе и сервисов доставки</h2>

						<ul className={styles.features__list}>
							{featuresData.map(({id, icon, description}: FeatureType) => {
								return <Feature key={id} icon={icon} description={description} />
							})}
						</ul>

						<img className={styles.thread} src={Thread} alt="Декоративный элемент" />
					</div>

	 				<div className={styles.partners}>
						<img className={styles.partners__logo_megobari} src={MeGoBariLogo} alt="MeGoBari" />
						<img className={styles.partners__logo_ojahri} src={OjahriLogo} alt="Оджахури Грузинская лавка" />
						<img className={styles.partners__logo_chief_tomorrow} src={ChiefTomorrowLogo} alt="Завтрак Шефа" />
						<img className={styles.partners__logo_touche} src={ToucheLogo} alt="Touche" />
						<img className={styles.partners__logo_le_menu} src={LeMenuLogo} alt="le menu" />
					</div>

					<p className={styles.description}>Если тут кого-то нет, это не значит, что мы с ними не работали, это значит мы не понаслышке знаем, что такое NDA</p>
				</div>
			</Container>
		</section>
	)
}

export default Features