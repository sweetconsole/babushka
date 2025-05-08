import {ChangeEvent, FC, useState} from "react"
import styles from  "./Feedback.module.scss"
import {SubmitHandler, useForm} from "react-hook-form"
import {Container, SubTitle} from "../UI"
import Arrow from "../../assets/images/arrow.svg"
import ArrowSmall from "../../assets/images/arrow_small.svg"
import {IFeedbackForm} from "./feedback.interface.ts"
import {motion} from "framer-motion";

const Feedback: FC = () => {
	const [fileName, setFileName] = useState("")
	const {register, handleSubmit, formState} = useForm<IFeedbackForm>({mode: "onChange"})

	const nameError = formState.errors["name"]?.message
	const phoneError = formState.errors["phone"]?.message

	const onChangeFile = (event: ChangeEvent<HTMLInputElement>) => {
		if (!event.target.files) return

		setFileName(event.target.files[0].name)
	}

	const onSubmit: SubmitHandler<IFeedbackForm> = data => {
		console.log(data)
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
								<label className={styles.form__label}>
									ваше имя
									<input className={styles.form__input}
												 type="text"
												 {...register("name", {
													 required: "Это поле обязательное",
													 pattern: {value: /^[A-Za-zА-Яа-яЁё\s]{1,15}$/, message: "Можно использовать только пробелы, русские и латинские символы"}
												 })}/>
									{nameError && <p className={styles.form__error}>{nameError}</p>}
								</label>

								<label className={styles.form__label}>
									ваш номер телефона
									<input className={styles.form__input}
												 placeholder="+7"
												 type="tel"
												 {...register("phone", {
													 required: "Это поле обязательное",
													 pattern: {value: /^[+]7[0-9]{10}$/, message: "Можно использовать только цифры и номер должен начинаться с +7"}
												 })} />
									{phoneError && <p className={styles.form__error}>{phoneError}</p>}
								</label>

								<label className={styles.form__label}>
									Услуга
									<select className={styles.form__select} {...register("service")}>
										<option className={styles.form__select_value} value="лендинг">Лендинг</option>
										<option className={styles.form__select_value} value="многостраничный сайт">Многостраничный сайт</option>
										<option className={styles.form__select_value} value="дизайн">Дизайн</option>
										<option className={styles.form__select_value} value="реклама">Реклама</option>
										<option className={styles.form__select_value} value="seo-продвижение">SEO-продвижение</option>
									</select>
								</label>

								<label className={styles.form__label}>
									способ связи
									<select className={styles.form__select} {...register("connection")}>
										<option className={styles.form__select_value} value="звонок">Звонок</option>
										<option className={styles.form__select_value} value="сообщение">сообщение</option>
									</select>
								</label>
							</div>

							<label className={[styles.form__label, styles.form__label_block].join(" ")}>
								Опиши задачу, ну или не пиши
								<textarea className={styles.form__textarea} rows={3} placeholder="Мы специализируемся на создании уникального контента для социальных сетей, рекламы, e-commerce и брендов, включая предметную, рекламную и lifestyle-фотографию, а также видеосъемку различной сложности. Наша команда экспертов воплощает идеи в жизнь, от разработки концепции до финальной ретуши и монтажа." />
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