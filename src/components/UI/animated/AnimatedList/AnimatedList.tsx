import {FC} from "react"
import {motion} from "framer-motion"
import { SlideUp } from "../../../../utility/animation.ts"
import {IListProps} from "./animatedList.interface.ts";
import { ListItem } from "./animatedList.ts"
import styles from "./AnimatedList.module.scss"

const AnimatedList: FC<IListProps> = ({data, definition}) => {
	return (
		<ul className={styles.list}>
      {data.map(({text, delay}: ListItem) => {
        return (
          <motion.li className={styles.list_item} key={text.slice(15)} viewport={{once: true}} variants={SlideUp(delay)} initial="initial" whileInView="animate" >
            {definition ?
              (<>
                  <span className={styles.highlight}>{text.split(" ")[0]} </span>
                  {text.split(' ').slice(1).join(' ')}
                </>
              ) : text}
          </motion.li>
        )
      })}
    </ul>
	)
}

export default AnimatedList