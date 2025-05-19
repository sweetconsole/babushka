import {FC} from "react"
import {motion} from "framer-motion";
import Tangle from "../../assets/images/tangles/tangle_1.svg"
import Thread from "../../assets/images/thread_1.svg"
import {Container} from "../ui";
import {SlideLeft} from "../../utility/animation.ts";
import {services, partners} from "./info.data.ts";
import {ServiceType, PartnerType} from "./info.type.ts";
import InfoItem from "./InfoItem/InfoItem.tsx";
import styles from "./Info.module.scss"

const Info: FC = () => {
	return (
		<section className={styles.block}>
			<Container>
				<div className={styles.content}>
					<div className={styles.info}>
						<img className={styles.tangle} src={Tangle} alt="Декоративный элемент" />

						<h2 className={styles.title}>Разработка оригинальных сайтов под ключ для ресторанов, баров, кафе и сервисов доставки</h2>

						<ul className={styles.list}>
							{services.map((data: ServiceType) => {
								return <InfoItem key={data.id} {...data} />
							})}
						</ul>

						<img className={styles.thread} src={Thread} alt="Декоративный элемент" />
					</div>

	 				<div className={styles.partners}>
						{partners.map(({logo, style, name, delay}: PartnerType) => {
							return <motion.img key={name}
																 className={style}
																 src={logo}
																 viewport={{once: true}}
																 variants={SlideLeft(delay)}
																 initial="initial"
																 whileInView="animate"
																 alt={name} />
						})}
					</div>

					<p className={styles.description}>Если тут кого-то нет, это не значит, что мы с ними не работали, это значит мы не понаслышке знаем, что такое NDA</p>
				</div>
			</Container>
		</section>
	)
}

export default Info