import { FC } from "react"
import styles from "./ProcessingPersonalData.module.scss"
import {Container, Title, AnimatedList, AnimatedTitle, AnimatedText} from "../ui";
import { personalDataProcessingConditions, principlesPersonalDataProcessing, recommendedAbbreviationsPublications } from "./processingPersonalData.data.ts";

const ProcessingPersonalData: FC = () => {
	return (
		<section className={styles.block}>
      <Container>
        <div className={styles.content}>
          <Title text="Обработка персональных данных" animate />

          <AnimatedText style={styles.text} delay={0.2}><><span className={styles.text_highlight}>Обработка персональных данных</span> — совокупность действий (операций), совершаемых с использованием средств автоматизации или без использования таких средств с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передачу (распространение, предоставление, доступ), обезличивание, блокирование, удаление, уничтожение персональных данных.</></AnimatedText>

          <AnimatedTitle style={styles.title} delay={0.4} text={"Рекомендуемые сокращения для публикаций"}/>
          <AnimatedList data={recommendedAbbreviationsPublications} definition />

          <AnimatedTitle style={styles.title} delay={1.4} text={"Обработка персональных данных в России"}/>
          <AnimatedText style={styles.text} delay={1.6}><>В 1990-х годах в России персональные данные сотрудников и клиентов организаций продавались на дисках. Их можно было купить на рынке или в подземном переходе. В те годы законодательство РФ не предполагало какой-либо ответственности за разглашение конфиденциальной информации. Впервые понятие «персональные данные» упоминается в российском законодательстве в указе Президента «Об утверждении перечня сведений конфиденциального характера» от 6 марта 1997 года. В этом указе лишь перечисляется то, что относится к конфиденциальной информации, но там ничего не сказано ни об обработке персональных данных, ни о видах ответственности за неправомерную обработку.</></AnimatedText>
          <AnimatedText style={styles.text} delay={1.8}><>В 2001 году Государственной Думой был принят <span className={styles.text_highlight}>Трудовой Кодекс РФ</span>, в котором глава 14 посвящена защите персональных данных работников. В этой главе было определено понятие «обработка персональных данных работника» следующим образом: «Обработка персональных данных работника — получение, хранение, комбинирование, передача или любое другое использование персональных данных работника». Согласно Трудовому кодексу РФ, работодатель не имеет права на обработку персональных данных без ведома и согласия работника, не может получать данные о его религиозных, политических и иных убеждениях, а также несёт ответственность за потерю, искажение и неправомерную обработку персональных данных.</></AnimatedText>
          <AnimatedText style={styles.text} delay={2.0}><>Следующим важным шагом было принятие <span className={styles.text_highlight}>Федерального закона № 152-ФЗ от 27 июля 2006 года «О персональных данных»</span>. Цель этого закона — обеспечение защиты прав и свобод человека, при обработке его персональных данных.</></AnimatedText>

          <AnimatedTitle style={styles.title} delay={0.2} text={"Принципы обработки персональных данных"}/>
          <AnimatedList data={principlesPersonalDataProcessing} />

          <AnimatedTitle style={styles.title} delay={0.2} text={"Условия обработки персональных данных"}/>
          <AnimatedList data={personalDataProcessingConditions} />

          <AnimatedTitle style={styles.title} delay={0.2} text={"Изменения"}/>
          <AnimatedText style={styles.text} delay={0.4}><>С 1 марта 2021 года для компаний установлено обязательное требование получения согласия на обработку и распространение общедоступных персональных данных.</></AnimatedText>
          <AnimatedText style={styles.text} delay={0.6}><>К таковым относятся, содержащиеся в социальных сетях фамилия, имя, отчество, город, телефон, адрес электронной почты. Теперь операторам этих данных необходимо получать отдельное согласие пользователя на их распространение, которым в данном случае является и публичный показ.</></AnimatedText>
          <AnimatedText style={styles.text} delay={0.8}><>Форма такого согласия утверждена <span className={styles.text_highlight}>приказом Роскомнадзора от 24.02.2021 № 18</span>.</></AnimatedText>
          <AnimatedText style={styles.text} delay={1.0}><>В соответствии с приказом, в согласии необходимо указание фамилии, имени и отчества субъекта персональных данных, цель обработки данных, перечень данных, которые будут обработаны, перечень данных, в отношении которых имеются условия и запреты, а также срок, на который дано согласие.</></AnimatedText>
        </div>
      </Container>
    </section>
	)
}

export default ProcessingPersonalData