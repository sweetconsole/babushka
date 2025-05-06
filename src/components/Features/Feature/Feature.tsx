import {FC} from "react"
import styles from "./Feature.module.scss"
import {IFeatureProps} from "../features.interface.ts";

const Feature: FC<IFeatureProps> = ({text}) => {
	return (
		<div className={styles.block}>
      <div className={styles.shadow}></div>
      <p className={styles.text}>{text}</p>
    </div>
	)
}

export default Feature