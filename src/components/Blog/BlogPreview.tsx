import {FC} from "react"
import styles from "./BlogPreview.module.scss"
import Title from "../Title/Title.tsx";
import Container from "../Container/Container.tsx";

const BlogPreview: FC = () => {
	return (
		<section className={styles.block}>
      <Container>
        <div className={styles.content}>
          <Title text="Блог" />
        </div>
      </Container>
    </section>
	)
}

export default BlogPreview