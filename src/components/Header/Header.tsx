import { Link, useLocation } from "react-router-dom"
import Logo from "../../assets/images/logos/logo.svg"
import styles from "./Header.module.scss"
import { FC, useState } from "react"
import Menu from "./Menu/Menu.tsx"
import { Container, ScrollLink, SocialLink, TelegramIcon, WhatsAppIcon } from "../UI"
import { pageConfig } from "../../config/pages.config.ts"
import { socialConfig } from "../../config/social.config.ts"
import { motion } from "framer-motion"
import { SlideBottom } from "../../utility/animation.ts"

const Header: FC = () => {

  const [activeMenu, setActiveMenu] = useState(false)
  const pathname = useLocation().pathname

  const OpenMenu = () => {
    setActiveMenu(true)
    document.body.style.overflow = "hidden"
  }

	return (
    <>
      <Menu active={activeMenu} setActive={setActiveMenu} />

      <header className={styles.header}>
        <Container>
          <div className={styles.block}>
            <nav className={styles.navigation}>
              <Link className={styles.navigation_link} to={pageConfig.projects}>
                <motion.div viewport={{once: true}} variants={SlideBottom(0.2)} initial="initial" whileInView={"animate"}>
                  Проекты
                </motion.div>
              </Link>
              <Link className={styles.navigation_link} to={pageConfig.projects}>
                <motion.div viewport={{once: true}} variants={SlideBottom(0.4)} initial="initial" whileInView={"animate"}>
                  Блог
                </motion.div>
              </Link>

              {pathname == pageConfig.error404 ? (
                  <Link className={styles.navigation_link} to={pageConfig.faq}>
                    <motion.div  viewport={{once: true}} variants={SlideBottom(0.6)} initial="initial" whileInView={"animate"}>
                      Частые Вопросы
                    </motion.div>
                  </Link>
                ) : (
                  <ScrollLink style={styles.navigation_link} link="faq">
                    <motion.div viewport={{once: true}} variants={SlideBottom(0.8)} initial="initial" whileInView={"animate"}>
                      Частые Вопросы
                    </motion.div>
                  </ScrollLink>
                )
              }
            </nav>


              <Link className={styles.logo} to={pageConfig.home} title={"С помощью логотипа Вы можете \nпереместиться на главную страницу"}>
                <motion.div viewport={{once: true}} variants={SlideBottom(1.0)} initial="initial" whileInView={"animate"}>
                  <img className={styles.logo_icon} src={Logo} alt="BABUSHKA" />
                </motion.div>
              </Link>


            <div className={styles.links}>
              <a className={styles.link_phone} href={`tel:${socialConfig.phone.replace(/\s/g, '')}`}>
                <motion.div viewport={{once: true}} variants={SlideBottom(1.2)} initial="initial" whileInView={"animate"}>
                  {socialConfig.phone}
                </motion.div>
              </a>

              <SocialLink link={socialConfig.whatsapp} label={"Ссылка на WhatsApp"} style={styles.link_social}>
                <motion.div viewport={{once: true}} variants={SlideBottom(1.4)} initial="initial" whileInView={"animate"}>
                  <WhatsAppIcon />
                </motion.div>
              </SocialLink>

              <SocialLink link={socialConfig.telegram} label={"Ссылка на Telegram"} style={styles.link_social}>
                <motion.div viewport={{once: true}} variants={SlideBottom(1.6)} initial="initial" whileInView={"animate"}>
                  <TelegramIcon />
                </motion.div>
              </SocialLink>

              {pathname == pageConfig.error404 ? (
                  <Link  to={pageConfig.home}>
                    <motion.div className={styles.button} viewport={{once: true}} variants={SlideBottom(1.8)} initial="initial" whileInView={"animate"}>
                      на главную
                    </motion.div>
                  </Link>
                ) : (
                  <ScrollLink link="feedback">
                    <motion.div className={styles.button} viewport={{once: true}} variants={SlideBottom(2.0)} initial="initial" whileInView={"animate"}>
                      написать бабушке
                    </motion.div>
                  </ScrollLink>
                )
              }
            </div>

            <div className={styles.menu__button} onClick={OpenMenu}></div>
          </div>
        </Container>
      </header>
    </>
	)
}

export default Header