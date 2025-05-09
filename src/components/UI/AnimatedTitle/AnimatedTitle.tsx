import { FC } from "react"
import { motion } from "framer-motion"
import { SlideUp } from "../../../utility/animation.ts"
import { IAnimatedTitleProps } from "./animatedTitle.interface.ts"

const AnimatedTitle: FC<IAnimatedTitleProps> = ({style, delay, text}) => {
	return (
		<motion.h2 className={style} viewport={{once: true}} variants={SlideUp(delay)} initial="initial" whileInView={"animate"}>{text}</motion.h2>
	)
}

export default AnimatedTitle