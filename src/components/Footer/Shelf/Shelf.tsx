import { FC } from "react"
import {motion} from "framer-motion"
import ShelfImage from "../../../assets/images/shelfs/shelf.png"
import JarOne from "../../../assets/images/shelfs/jar_1.png"
import JarTwo from "../../../assets/images/shelfs/jar_2.png"
import JarThree from "../../../assets/images/shelfs/jar_3.png"
import JarFour from "../../../assets/images/shelfs/jar_4.png"
import JarFive from "../../../assets/images/shelfs/jar_5.png"
import JarSix from "../../../assets/images/shelfs/jar_6.png"
import JarSeven from "../../../assets/images/shelfs/jar_7.png"
import JarEight from "../../../assets/images/shelfs/jar_8.png"
import Jar from "./Jar.tsx"
import { IShelfProps, SideShelf } from "./shelf.interface.ts"
import styles from "./Shelf.module.scss"

const Shelf: FC<IShelfProps> = ({side}) => {

	return (
		<div className={styles.block}>
			<motion.img className={styles.shelf}
									src={ShelfImage}
									alt=""
									viewport={{once: true}}
									initial={{opacity: 0}}
									whileInView={{opacity: 1}}
									transition={{
										duration: 0.4,
										delay: 0.2
									}} />

			{side == SideShelf.LEFT ? (
				<>
					<Jar style={styles.jar_1} image={JarOne} alt="" delay={0.6} />
					<Jar style={styles.jar_2} image={JarTwo} alt="" delay={0.8} />
					<Jar style={styles.jar_3} image={JarThree} alt="" delay={1.0} />
					<Jar style={styles.jar_4} image={JarFour} alt="" delay={1.2} />
				</>
			) : (
				<>
					<Jar style={styles.jar_1} image={JarFive} alt="" delay={2.0} />
					<Jar style={styles.jar_6} image={JarSix} alt="" delay={1.8} />
					<Jar style={styles.jar_3} image={JarSeven} alt="" delay={1.6} />
					<Jar style={styles.jar_4} image={JarEight} alt="" delay={1.4} />
				</>
			)}
		</div>
	)
}

export default Shelf