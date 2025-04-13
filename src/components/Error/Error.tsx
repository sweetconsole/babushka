import {FC} from "react"
import styles from "./Error.module.scss"

import ErrorDesktopAvif from "../../assets/images/avif/error/error_desktop.avif"
import ErrorDesktopWebp from "../../assets/images/webp/error/error_desktop.webp"
import ErrorDesktopDefault from "../../assets/images/default/error/error_desktop.png"

import ErrorTabletAvif from "../../assets/images/avif/error/error_tablet.avif"
import ErrorTabletWebp from "../../assets/images/webp/error/error_tablet.webp"
import ErrorTabletDefault from "../../assets/images/default/error/error_tablet.png"

import ErrorMobileAvif from "../../assets/images/avif/error/error_mobile.avif"
import ErrorMobileWebp from "../../assets/images/webp/error/error_mobile.webp"
import ErrorMobileDefault from "../../assets/images/default/error/error_mobile.png"

const Error: FC = () => {
	return (
		<section className={styles.block}>
			<div className="container">
				<div className={styles.content}>
					<h1 className={styles.title}>Ой!</h1>

					<picture className={styles.image}>
						<source  srcSet={ErrorDesktopAvif} media={"(min-width: 1800px)"} type={"image/avif"}/>
						<source srcSet={ErrorDesktopWebp} media={"(min-width: 1800px)"} type={"image/webp"}/>
						<source srcSet={ErrorDesktopDefault} media={"(min-width: 1800px)"}/>

						<source  srcSet={ErrorMobileAvif} media={"(max-width: 1250px)"} type={"image/avif"}/>
						<source srcSet={ErrorMobileWebp} media={"(max-width: 1250px)"} type={"image/webp"}/>
						<source srcSet={ErrorMobileDefault} media={"(max-width: 1250px)"}/>

						<source  srcSet={ErrorTabletAvif} media={"(max-width: 1800px)"} type={"image/avif"}/>
						<source srcSet={ErrorTabletWebp} media={"(max-width: 1800px)"} type={"image/webp"}/>
						<source srcSet={ErrorTabletDefault} media={"(max-width: 1800px)"}/>



						<img src={ErrorTabletDefault} alt={"Декоративный элемент"} loading={"lazy"} />
					</picture>

					<p className={styles.text}>Не переживай, внучок,<br/>сейчас бабушка уберет</p>
				</div>
			</div>
		</section>
	)
}

export default Error