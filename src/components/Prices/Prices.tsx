import {FC} from "react"
import styles from "./Prices.module.scss"
import Container from "../Container/Container.tsx";
import Arrow from "../../assets/images/arrow.svg"

const Prices: FC = () => {
	return (
    <section className={styles.block}>
      <Container>
        <div className={styles.content}>
          <h2 className={styles.title}>Стоимость разработки сайта для ресторана</h2>

          <div className={styles.rates}>
						<div className={styles.rate_landing}>
							<h3 className={styles.rate__name}></h3>

							<div className={styles.rate__scopes}>
								<div className={styles.rate__scrope}>
									<p className={styles.rate__scrope_name}></p>
									<p className={styles.rate__scrope_count}></p>
								</div>

								<div className={styles.rate__scrope}>
									<p className={styles.rate__scrope_name}></p>
									<p className={styles.rate__scrope_count}></p>
								</div>
							</div>

							<div className={styles.price__block}></div>

							<p className={styles.description}></p>
							<p className={styles.correction}></p>

							<a href="/">
								<div className={styles.link__block}>
									<div className={styles.link__text}></div>
									<div className={styles.link__button}>
										<img className={styles.link__arrow} src={Arrow} alt="Ссылка" />
									</div>
								</div>
							</a>
						</div>

						<div className={styles.price_website}>

						</div>
          </div>
        </div>
      </Container>
    </section>
	)
}

export default Prices