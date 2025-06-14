import { FC } from "react"
import {motion} from "framer-motion"
import { IScaleImageProps } from "./scaleImage.interface.ts"

const ScaleImage: FC<IScaleImageProps> = ({image, style, alt, delay}) => {
	return (
		<motion.img className={style}
								src={image}
								alt={alt}
								loading="lazy"
								viewport={{once: true}}
								initial={{opacity: 0, scale: 1.5}}
								whileInView={{opacity: 1, scale: 1}}
								transition={{delay: delay, duration: 0.4}} />
	)
}

export default ScaleImage