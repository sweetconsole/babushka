import { FC } from "react"
import { Container, Title } from "../../ui"
import BlogPreview from "../BlogPreview/BlogPreview.tsx"
import { blogsPreview } from "../blogs.data.ts"
import styles from "./Blogs.module.scss"

const Blogs: FC = () => {
	return (
		<section className={styles.block}>
      <Container>
				<div className={styles.container}>
        <Title text="Блог" />

          <div className={styles.blogs}>
            {blogsPreview.map((data) => (
              <BlogPreview key={data.id} {...data} delay={0.2 * (data.id + 1)}  />
            ))}
          </div>
				</div>
			</Container>
		</section>
	)
}

export default Blogs