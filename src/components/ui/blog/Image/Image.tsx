import { FC } from "react"
import { IImageProps } from "./image.interface.ts"
import styles from "./Image.module.scss"

const Image: FC<IImageProps> = ({image, alt}) => {
	return (
		<img className={styles.image} src={image} alt={alt} loading="lazy" />
	)
}

export default Image