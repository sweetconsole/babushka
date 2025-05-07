import {FC} from "react"
import {IListProps} from "./list.interface.ts";
import styles from "./List.module.scss"

const List: FC<IListProps> = ({data, definition}) => {
	return (
		<ul className={styles.list}>
      {data.map((text: string) => {
        return (
          <li className={styles.list_item} key={text.slice(15)}>
            {definition ?
              (<>
                  <span className={styles.highlight}>{text.split(" ")[0]} </span>
                  {text.split(' ').slice(1).join(' ')}
                </>
              ) : text}
          </li>
        )
      })}
    </ul>
	)
}

export default List