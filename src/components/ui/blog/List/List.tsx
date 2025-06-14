import { FC } from "react"
import { BlogListType } from "../../../Blog/blogs.types.ts"
import { IListProps } from "./list.interface.ts"
import styles from "./List.module.scss"

const List: FC<IListProps> = ({list}) => {
	return (
		<ul className={styles.list}>
			{list?.map((data: BlogListType) => {
				return (
					<li className={styles.item}>
						<span className={styles.item_highlighting}>{data.highlighting}</span>
						{data.text}
					</li>
					)
			})}
		</ul>
	)
}

export default List