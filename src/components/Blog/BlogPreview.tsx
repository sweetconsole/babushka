import {FC} from "react"
import styles from "./BlogPreview.module.scss"
import Arrow from "../../assets/images/arrow.svg"
import {Link} from "react-router-dom"
import {BlogPreviewType} from "./blogs.ts";

const BlogPreview: FC<BlogPreviewType> = ({link, image, title, description, date}) => {
	return (
		<article className={styles.block}>
			<img className={styles.image} src={image} alt="Изображение" />
			<p className={styles.title}>{title}</p>
			<p className={styles.description}>{description}</p>
			<p className={styles.date}>{date}</p>
			<Link to={`./blog/${link}`}>
				<div className={styles.link}>
					<img className={styles.link__arrow} src={Arrow} alt="Перейти"/>
				</div>
			</Link>
    </article>
	)
}

export default BlogPreview