import { ChangeEvent, FC, useState } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router"
import { SubmitHandler, useForm } from "react-hook-form"
import Arrow from "../../assets/images/arrow.svg"
import ArrowSmall from "../../assets/images/arrow_small.svg"
import { Container, Field, Select, SubTitle } from "../ui"
import { pageConfig } from "../../config/pages.config.ts"
import { validName, validPhone } from "../../config/valid.config.ts"
import { randomName } from "../../utility/randomName.ts"
import { connections, services } from "./feedback.data.ts"
import { IFeedbackForm } from "./feedback.interface.ts"
import styles from "./Feedback.module.scss"

const Feedback: FC = () => {
	const [fileName, setFileName] = useState("")
	const {register, handleSubmit, formState} = useForm<IFeedbackForm>({mode: "onChange"})

	const navigate = useNavigate()

	const nameError = formState.errors["name"]?.message
	const phoneError = formState.errors["phone"]?.message

	const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
		if (!event.target.files) return

		setFileName(event.target.files[0].name)
	}

	const onSubmit: SubmitHandler<IFeedbackForm> = data => {
		console.log(data)

		navigate(pageConfig.thanks)
	}

	return (
		<section className={styles.block} id="feedback">
			<Container>
				<div className={styles.content}>
					<motion.h2 className={styles.title}
							viewport={{once: true}}
							initial={{opacity: 0, y: 100}}
							whileInView={{opacity: 1, y: 0}}
							transition={{type: "spring", stiffness: 150, damping: 10, delay: 0.2}}>
						Напиши <span className={styles.title__highlighting}>бабушке</span>
					</motion.h2>
					<SubTitle text="Бабушка всегда на связи, заварим чая, обкашляем вопросики!" animate />

					<motion.form className={styles.form}
											 onSubmit={handleSubmit(onSubmit)}
											 viewport={{once: true}}
											 initial={{opacity: 0, y: 100}}
											 whileInView={{opacity: 1, y: 0}}
											 transition={{type: "spring", stiffness: 150, damping: 10, delay: 0.6}}>
						<div className={styles.form__block}>
							<div className={styles.from__inputs}>
								<Field  label="ваше имя"
												placeholder={randomName()}
												type="text"
												error={nameError}
												{...register("name", {
													required: "Это поле обязательное",
													pattern: {
														value: validName,
														message: "Можно использовать только пробелы, русские и латинские символы",
													}, })} />

								<Field label="ваш номер телефона"
											 placeholder="+7"
											 type="tel"
											 error={phoneError}
											 {...register("phone", {
												 required: "Это поле обязательное",
												 pattern: {
													 value: validPhone,
													 message: "Можно использовать только цифры и номер должен начинаться с +7",
												 }, })} />
								
								<Select label="Услуга" options={services} />
								<Select label="способ связи" options={connections} />
							</div>

							<label className={[styles.form__label, styles.form__label_block].join(" ")}>
								Опиши задачу, ну или не пиши
								<textarea className={styles.form__textarea} rows={3}
													placeholder="Мы специализируемся на создании уникального контента для социальных сетей, рекламы, e-commerce и брендов, включая предметную, рекламную и lifestyle-фотографию, а также видеосъемку различной сложности. Наша команда экспертов воплощает идеи в жизнь, от разработки концепции до финальной ретуши и монтажа." />
							</label>

							<label className={[styles.form__label, styles.form__label_block].join(" ")}>
								прикрепить файлы
								<div className={styles.form__block_file}>
									<div className={styles.form__input_file_button}>
										загрузить
										<img className={styles.form__input_file_button_icon} src={ArrowSmall} alt="" />
									</div>
									<input className={styles.form__input_file}
												 type="file" {...register("files")}
												 onChange={onChangeFile} />
									<span className={styles.form__input_file_name}>{fileName}</span>
								</div>
							</label>

							<button className={styles.button} type="submit">
								<div className={styles.button__text}>Получить консультацию</div>
								<div className={styles.button__arrow_block}>
									<img className={styles.button__arrow} src={Arrow} alt="Перейти" />
								</div>
							</button>
						</div>
					</motion.form>
				</div>
			</Container>
		</section>
	)
}

export default Feedback