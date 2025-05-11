import { FC } from "react"
import { motion } from "framer-motion"
import { IJarProps } from "./shelf.interface.ts"

const Jar: FC<IJarProps> = ({style, image, delay}) => {
	return (
		<motion.img className={style}
								src={image}
								alt="Баночка"
								loading="lazy"
								viewport={{once: true}}
								initial={{opacity:0, y: -100}}
								whileInView={{opacity: 1, y: 0}}
								transition={{
									type: "spring",
									stiffness: 150,
									damping: 10,
									delay: delay
								}} />
	)
}

export default Jar