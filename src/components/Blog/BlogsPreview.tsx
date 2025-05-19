import { FC, useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import ArrowDark from "../../assets/images/arrow_dark.svg"
import Arrow from "../../assets/images/arrow.svg"
import { pageConfig } from "../../config/pages.config.ts"
import { Container, Title } from "../ui"
import { SlideUp } from "../../utility/animation.ts"
import BlogPreview from "./BlogPreview/BlogPreview.tsx"
import { blogsPreview } from "./blogs.data.ts"
import styles from "./BlogsPreview.module.scss"

const BlogsPreview: FC = () => {
	const [numberBlog, setNumberBlog] = useState([1, 2])

	const nextBlog = () => {
		const blogId: number = numberBlog[1] + 1

		if (blogId < 4) setNumberBlog([numberBlog[1], blogId])
		else setNumberBlog([numberBlog[1], 0])
	}

	const backBlog = () => {
		const blogId: number = numberBlog[0] - 1

		if (blogId >= 0) setNumberBlog([blogId, numberBlog[0]])
		else setNumberBlog([3, numberBlog[0]])
	}

	return (
		<section className={styles.block}>
      <Container>
        <div className={styles.content}>
          <Title text="Блог" animate />

					<div className={styles.blogs}>
						<motion.button className={styles.button}
													 onClick={backBlog}
													 viewport={{once: true}}
													 initial={{opacity: 0}}
													 whileInView={{opacity: 1}}
													 transition={{duration: 1, delay: 0.6}}>
							<img className={styles.button_arrow} src={ArrowDark} alt="Назад" />
						</motion.button>

						<BlogPreview {...blogsPreview[numberBlog[0]]} delay={0.2} />
						<BlogPreview {...blogsPreview[numberBlog[1]]} delay={0.4} />

						<motion.button className={[styles.button, styles.button_turn].join(" ")}
													 onClick={nextBlog}
													 viewport={{once: true}}
													 initial={{opacity: 0}}
													 whileInView={{opacity: 1}}
													 transition={{duration: 1, delay: 0.6}}>
							<img className={styles.button_arrow} src={ArrowDark} alt="Назад" />
						</motion.button>
					</div>

					<Link to={pageConfig.blogs}>
						<motion.div className={styles.link}
												viewport={{once: true}}
												variants={SlideUp(0.8)}
												initial="initial"
												whileInView="animate">
							<p className={styles.link__text}>смотреть все статьи</p>
							<button className={styles.link__button}>
								<img className={styles.link__arrow} src={Arrow} alt="Перейти" />
							</button>

						</motion.div>
					</Link>

        </div>
      </Container>
    </section>
	)
}

export default BlogsPreview