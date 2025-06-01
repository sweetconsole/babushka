import { FC } from "react"
import { motion } from "framer-motion"
import Newspaper from "../../../assets/images/blogs/newspaper.png"
import { Container } from "../../ui"
import styles from "./BlogIntro.module.scss"


const BlogIntro: FC = () => {
	const title: string[] = ["Инсайты,", "советы", "и кейсы"]

	return (
		<div className={styles.block}>
      <Container>
				<div className={styles.content}>
          <h1 className={styles.title}>
						{title.map((line, index) => (
							<motion.p key={index}
												className={styles.title_line}
												viewport={{once: true}}
												initial={{opacity: 0, y: 100}}
												whileInView={{opacity: 1, y: 0}}
												transition={{ duration: 0.5 , delay: 0.2 * (index + 1)}}>
								{line}
							</motion.p>
						))}
					</h1>

					<motion.img className={styles.newspaper}
											src={Newspaper} alt="Газетка"
											viewport={{once: true}}
											initial={{opacity: 0}}
											whileInView={{opacity: 1}}
											transition={{duration: 0.2, delay: 1.0}} />

					<motion.h2 className={[styles.title_line, styles.line].join(" ")}
										 viewport={{once: true}}
										 initial={{opacity: 0, y: 100}}
										 whileInView={{opacity: 1, y: 0}}
										 transition={{ duration: 0.5 , delay: 0.8}}>
						от Бабушки
					</motion.h2>

					<motion.p className={styles.description}
						 viewport={{once: true}}
						 initial={{opacity: 0}}
						 whileInView={{opacity: 1}}
						 transition={{duration: 0.2, delay: 1.2}}>
						Здесь мы делимся опытом, рассказываем о трендах и показываем, как бизнес может расти.
					</motion.p>
				</div>
			</Container>
		</div>
	)
}

export default BlogIntro