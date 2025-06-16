import { FC } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import Arrow from "../../../assets/images/arrow.svg"
import { SlideUp } from "../../../utility/animation.ts"
import { IBlogPreviewProps } from "../blogs.interface.ts"
import styles from "./BlogPreview.module.scss"

const BlogPreview: FC<IBlogPreviewProps> = ({link, image, title, description, date, delay}) => {
	const location = useLocation().pathname
	const dateTime = date.replace("/", ".").replace("/", ".")

	return (
		<motion.article className={styles.block}
										viewport={{once: true}}
										variants={SlideUp(delay)}
										initial="initial"
										whileInView="animate" >
			<img className={styles.image} src={image} alt="Изображение" />
			<p className={styles.title}>{title}</p>
			<p className={styles.description}>{description}</p>
			<time className={styles.date} dateTime={dateTime}>{date}</time>
			<Link className={styles.link} to={location == "/" ? `blog/${link}` : `../blog/${link}`}>
					<img className={styles.link__arrow} src={Arrow} alt="Перейти"/>
			</Link>
    </motion.article>
	)
}

export default BlogPreview