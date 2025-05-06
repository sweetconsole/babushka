import {FC} from "react"
import ArrowTitle from "../../assets/images/arrow_intro_title.webp"
import Arrow from "../../assets/images/arrow.svg"
import Image from "../../assets/images/intro_image.webp"
import styles from "./Intro.module.scss"
import Container from "../UI/Container/Container.tsx";
import {motion} from "framer-motion";
import {Link as ScrollLink} from "react-scroll";

const Intro: FC = () => {
	return (
    <section className={styles.intro}>
      <Container>
        <div className={styles.block}>
          <motion.h1 className={styles.title}
                     initial={{opacity: 0, y: 100}}
                     animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.4}}}>
            Комплексная
            <span className={styles.title__decoration_one}></span>
            разработка сайтов и сервисов
            <img className={styles.title_arrow} src={ArrowTitle} alt="Стрелочка" />
            <span className={styles.title__decoration_two}></span>
            для ресторанов и баров
          </motion.h1>


          <motion.div initial={{opacity: 0, y: 100}}
                      animate={{opacity: 1, y: 0, transition: {duration: 0.5, delay: 0.6}}}
                      style={{cursor: "pointer"}}>
            <ScrollLink className={styles.block_application} to="feedback" smooth={true} duration={1000}>
              <p className={styles.block_application_text}>Заказать консультацию</p>
              <button className={styles.block_application_button}>
                <img className={styles.block_application_button_icon} src={Arrow} alt="Перейти к заявке" />
              </button>
            </ScrollLink>
          </motion.div>

          <motion.img className={styles.image}
                      src={Image}
                      viewport={{once: true}}
                      initial={{opacity: 0, scale: 0.5}}
                      whileInView={{opacity: 1, scale: 1}}
                      transition={{duration: 0.2}}
                      alt="Изображение" />
        </div>
      </Container>
    </section>
	)
}

export default Intro