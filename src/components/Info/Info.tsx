import {FC} from "react"
import styles from "./Info.module.scss"
import InfoItem from "./InfoItem.tsx";
import Tangle from "../../assets/images/svg/tangles/tangle_1.svg"
import Thread from "../../assets/images/svg/thread_1.svg"
import MeGoBariLogo from "../../assets/images/svg/logos/megobari.svg"
import OjahriLogo from "../../assets/images/svg/logos/ojahri.svg"
import ChiefTomorrowLogo from "../../assets/images/svg/logos/chief_tomorrow.svg"
import ToucheLogo from "../../assets/images/svg/logos/touche.svg"
import LeMenuLogo from "../../assets/images/svg/logos/le_menu_logo.svg"
import Container from "../UI/Container/Container.tsx";
import {infoData} from "./infoData.ts";
import {InfoType} from "./info.type.ts";



const Info: FC = () => {
	return (
		<section className={styles.block}>
			<Container>
				<div className={styles.content}>

					<div className={styles.info}>
						<img className={styles.tangle} src={Tangle} alt="Декоративный элемент" />

						<h2 className={styles.title}>Разработка оригинальных сайтов под ключ для ресторанов, баров, кафе и сервисов доставки</h2>

						<ul className={styles.list}>
							{infoData.map(({id, icon, description}: InfoType) => {
								return <InfoItem key={id} icon={icon} description={description} />
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

export default Info