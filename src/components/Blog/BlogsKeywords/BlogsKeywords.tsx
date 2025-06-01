import { FC } from "react"
import { motion } from "framer-motion"
import { Container } from "../../ui"
import { keywords } from "../blogs.data.ts"
import styles from "./BlogsKeywords.module.scss"
import { SlideLeft } from "../../../utility/animation.ts"

const BlogsKeywords: FC = () => {
	return (
		<div className={styles.block}>
			<Container>
				<ul className={styles.keywords}>
          {keywords.map((keyword, index) => (
            <motion.li className={styles.keyword}
											 key={index}
											 viewport={{once: true}}
											 variants={SlideLeft(0.2 * (index + 1))}
											 initial="initial"
											 whileInView="animate" >
							{keyword}
						</motion.li>
          ))}
				</ul>
			</Container>
		</div>
	)
}

export default BlogsKeywords