import { FC } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import Arrow from "../../../assets/images/arrow.svg"
import { SlideUp } from "../../../utility/animation.ts"
import { IBlogProps } from "../blogs.interface.ts"
import styles from "./BlogPreview.module.scss"

const BlogPreview: FC<IBlogProps> = ({link, image, title, description, date, delay}) => {
	return (
		<motion.article className={styles.block}
										viewport={{once: true}}
										variants={SlideUp(delay)}
										initial="initial"
										whileInView="animate" >
			<img className={styles.image} src={image} alt="Изображение" />
			<p className={styles.title}>{title}</p>
			<p className={styles.description}>{description}</p>
			<p className={styles.date}>{date}</p>
			<Link className={styles.link} to={`./blog/${link}`}>
					<img className={styles.link__arrow} src={Arrow} alt="Перейти"/>
			</Link>
    </motion.article>
	)
}

export default BlogPreview