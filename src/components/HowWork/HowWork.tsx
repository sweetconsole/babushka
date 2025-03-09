import {FC, useState} from "react"
import styles from "./HowWork.module.scss"
import Container from "../Container/Container.tsx";
import Title from "../Title/Title.tsx";
import SubTitle from "../SubTitle/SubTitle.tsx";
import {MouseEvent} from "react";
import {howWorkList, howWorkType} from "./howWorkData.ts";

const HowWork: FC = () => {

  const [active, setActive] = useState(false)
  const [descriptionId, setDescriptionId] = useState(0)

  const viewDescription = (event: MouseEvent<HTMLDivElement>) => {
    const id: number =Number(event.currentTarget.getAttribute("data-value"))

    if (id != descriptionId) {
      setActive(true)
    } else {
      setActive(!active)
    }

    setDescriptionId(id)
  }

	return (
    <section className={styles.block}>
      <Container>
        <div className={styles.content}>
          <Title text="Как мы работаем" />
          <SubTitle text="С Бабушкой всё понятно и без лишних сложностей." />

          <div className={active && descriptionId > 3 ? [styles.how_works, styles.how_works_active].join(" ") : styles.how_works}>
            {howWorkList.map(({id, name, description}: howWorkType) => {
              return (
                <div className={active && descriptionId === id ? [styles.how_work, styles.how_work_active].join(" ") : styles.how_work}
                     onClick={viewDescription}
                     data-value={id}>
                  <div className={styles.how_work__content}>
                    <div className={styles.how_work__info}>
                      <p className={styles.how_work__name}>{name}</p>
                      <p className={styles.how_work__number}>/0{id}</p>
                    </div>
                    <div className={styles.how_work__line}></div>
                  </div>
                  <p className={active && descriptionId === id
                    ?
                      [styles.how_work__description, styles.how_work__description_active].join(" ")
                    :
                      styles.how_work__description}>{description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
	)
}

export default HowWork