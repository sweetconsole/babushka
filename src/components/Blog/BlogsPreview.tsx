import {FC, useState} from "react"
import styles from "./BlogsPreview.module.scss"
import Title from "../Title/Title.tsx";
import Container from "../Container/Container.tsx";
import ArrowDark from "../../assets/images/arrow_dark.svg"
import Arrow from "../../assets/images/arrow.svg"
import BlogPreview from "./BlogPreview.tsx";
import {blogs} from "./blogs.ts";
import {Link} from "react-router-dom";

const BlogsPreview: FC = () => {
	const [numberBlog, setNumberBlog] = useState([1, 2])

	const nextBlog = () => {
		const blogId: number = numberBlog[1] + 1

		if (blogId < 4) {
			setNumberBlog([numberBlog[1], blogId])
		} else {
			setNumberBlog([numberBlog[1], 0])
		}
	}

	const backBlog = () => {
		const blogId: number = numberBlog[0] - 1

		if (blogId >= 0) {
			setNumberBlog([blogId, numberBlog[0]])
		} else {
			setNumberBlog([3, numberBlog[0]])
		}
	}

	return (
		<section className={styles.block}>
      <Container>
        <div className={styles.content}>
          <Title text="Блог" />

					<div className={styles.blogs}>
						<button className={styles.button} onClick={backBlog}>
							<img className={styles.button_arrow} src={ArrowDark} alt="Назад" />
						</button>

						<BlogPreview link={blogs[numberBlog[0]].link}
												 image={blogs[numberBlog[0]].image}
												 title={blogs[numberBlog[0]].title}
												 description={blogs[numberBlog[0]].description}
												 date={blogs[numberBlog[0]].date} />

						<BlogPreview link={blogs[numberBlog[1]].link}
												 image={blogs[numberBlog[1]].image}
												 title={blogs[numberBlog[1]].title}
												 description={blogs[numberBlog[1]].description}
												 date={blogs[numberBlog[1]].date} />

						<button className={[styles.button, styles.button_turn].join(" ")} onClick={nextBlog}>
							<img className={styles.button_arrow} src={ArrowDark} alt="Назад" />
						</button>
					</div>

					<Link to="./blogs/">
						<div className={styles.link__block}>
							<div className={styles.link__text}>смотреть все статьи</div>
							<button className={styles.link__button}>
								<img className={styles.link__arrow} src={Arrow} alt="Перейти" />
							</button>
						</div>

					</Link>
        </div>
      </Container>
    </section>
	)
}

export default BlogsPreview