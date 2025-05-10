import { FC } from "react"
import { motion } from "framer-motion"
import { SlideUp } from "../../../../utility/animation.ts"
import { IAnimatedTextProps } from "./animatedText.interface.ts"

const AnimatedText: FC<IAnimatedTextProps> = ({style, delay, children}) => {
	return (
		<motion.p className={style} viewport={{once: true}} variants={SlideUp(delay)} initial="initial" whileInView={"animate"} >{children}</motion.p>
	)
}

export default AnimatedText