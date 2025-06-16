import { FC } from "react"
import { IImageProps } from "./image.interface.ts"
import styles from "./Image.module.scss"


const Image: FC<IImageProps> = ({image}) => {
	return (
    <img className={styles.image} src={image} alt="Ошибка загрузки изображения" />
	)
}

export default Image