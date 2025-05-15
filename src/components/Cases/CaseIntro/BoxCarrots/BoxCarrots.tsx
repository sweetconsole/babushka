import { FC } from "react"
import {motion} from "framer-motion"
import BoxCarrotsImage from "../../../../assets/images/cases/box_carrots.png"
import IllustratorLogo from "../../../../assets/images/cases/illustrator.png"
import PhotoshopLogo from "../../../../assets/images/cases/photoshop.png"
import CabbageMedium from "../../../../assets/images/cases/cabbage_medium.png"
import CabbageSmall from "../../../../assets/images/cases/cabbage_small.png"
import FigmaLogo from "../../../../assets/images/cases/figma.png"
import { useMediaQuery } from "../../../../hooks/useMediaQuery.ts"
import {ScaleImage} from "../../../ui"
import { IBoxCarrots } from "../../cases.interface.ts"
import { SideBoxCarrots } from "../../cases.types.ts"
import styles from "./BoxCarrots.module.scss"

const BoxCarrots: FC<IBoxCarrots> = ({side}) => {
	const mobile = useMediaQuery("(max-width: 1336px)")

	const getDelay = () => {
		if (side == SideBoxCarrots.LEFT) return 1.2
		else return 2.4
	}

	const viewLastBox = () => {
		if (mobile && side == SideBoxCarrots.RIGHT) return {display: "none"}
		else return {display: "block"};
	}

	return (
		<div className={styles.box_carrots} style={viewLastBox()}>
      <motion.img className={styles.image}
									src={BoxCarrotsImage}
									alt="Коробка с морковками"
									loading="lazy"
									viewport={{once: true}}
									initial={{opacity: 0}}
									whileInView={{opacity: 1}}
									transition={{duration: 1.2, delay: getDelay()}} />

			{side == SideBoxCarrots.LEFT ? (
				<>
					<ScaleImage style={styles.illustrator}
											image={IllustratorLogo}
											alt="Adobe Illustrator"
											delay={1.6} />
					<ScaleImage style={styles.photoshop}
											image={PhotoshopLogo}
											alt="Adobe Photoshop"
											delay={1.8} />
					<ScaleImage style={styles.cabbage_small}
											image={CabbageSmall}
											alt="Мини капустка"
											delay={2.0} />
					<ScaleImage style={styles.cabbage_medium}
											image={CabbageMedium}
											alt="Свежая капустка"
											delay={2.2} />
				</>
			) : (
				<ScaleImage style={styles.figma}
										image={FigmaLogo}
										alt="Figma"
										delay={2.8} />
			)}
		</div>
	)
}

export default BoxCarrots