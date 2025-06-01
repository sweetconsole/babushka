import { FC } from "react"
import { motion } from "framer-motion"
import Arrow from "../../../assets/images/arrow.svg"
import { Feedback, FAQ, Footer, Result } from "../../../components/"
import { Container, ScrollLink } from "../../ui"
import { SlideLeft } from "../../../utility/animation.ts"
import { Image, List, Point, Subtitle, Text } from "../../ui/blog"
import { IBlogProps } from "../blogs.interface.ts"
import { BlogItemType, BlogItemTypes } from "../blogs.types.ts"
import styles from "./Blog.module.scss"


const Blog: FC<IBlogProps> = ({title, image, description, date, result, items}) => {
	const getElementType = (data: BlogItemType) => {
		if (data.type == BlogItemTypes.SUBTITLE) {
			return <Subtitle text={data.text} />
		} else if (data.type == BlogItemTypes.TEXT) {
			return <Text text={data.text} />
		} else if (data.type == BlogItemTypes.LIST) {
			return <List list={data.list}/>
		} else if (data.type == BlogItemTypes.IMAGE) {
			return <Image image={data.image} alt="Изображение" />
		} else if (data.type == BlogItemTypes.POINT) {
			return <Point number={data.point?.number} text={data.point?.text} />
		}
	}

	return (
		<>
			<article className={styles.article}>
				<Container>
					<motion.p className={styles.date}
										viewport={{once: true}}
										variants={SlideLeft(0.4)}
										initial="initial"
										whileInView="animate">
						{date}
					</motion.p>

					<img className={styles.image} src={image} alt="Превью Блога"/>
					<h1 className={styles.title}>{title}</h1>
					<p className={styles.description}>{description}</p>
					<div className={styles.line}></div>

					<div className={styles.container}>
						<div className={styles.content}>
							{items.map((data: BlogItemType) => {
								return <> {getElementType(data)} </>
							})}
						</div>

						<aside className={styles.send}>
							<ScrollLink link="feedback">
								<div className={styles.send__block}>
									<div className={styles.service__text}>остались вопросы?</div>
									<div className={styles.service__link}>
										<img className={styles.service__link_arrow} src={Arrow} alt="Подробнее..."/>
									</div>
								</div>
							</ScrollLink>

							<p className={styles.send_text}>Бабушка всегда на связи, заварим чая, обкашляем вопросики!</p>
						</aside>
					</div>
				</Container>

				<Result {...result} />

			</article>

			<Feedback />
			<FAQ />
			<Footer />
		</>
	)
}

export default Blog