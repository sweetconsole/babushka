import { FC } from "react"
import { motion } from "framer-motion"
import Tangle from "../../../assets/images/tangles/tangle_5.svg"
import { Feedback, FAQ, Footer } from "../../../components/"
import { Container } from "../../ui"
import { Image, List, Point, Subtitle, Text } from "../../ui/blog"
import { IBlogProps } from "../blogs.interface.ts"
import { BlogItemType, BlogItemTypes } from "../blogs.types.ts"
import styles from "./Blog.module.scss"
import { SlideLeft } from "../../../utility/animation.ts"

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

					<img className={styles.image} src={image} alt="Превью Блога" loading="lazy"/>


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

						</aside>
					</div>
				</Container>

				<div className={styles.result_block}>
					<img className={styles.result_tangle} src={Tangle} alt="" />

					<div className={styles.result}>
						<h3 className={styles.result_title}>{result.title}</h3>
						<p className={styles.result_description}>{result.description}</p>
					</div>
				</div>

			</article>

			<Feedback />
			<FAQ />
			<Footer />
		</>
	)
}

export default Blog