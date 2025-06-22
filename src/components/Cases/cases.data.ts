import CasePreviewOne from "../../assets/images/cases/case_preview_1.webp";
import CasePreviewTwo from "../../assets/images/cases/case_preview_2.webp";
import CasePreviewThree from "../../assets/images/cases/case_preview_3.webp";
import CasePreviewFour from "../../assets/images/cases/case_preview_4.webp";
import CasePreviewFive from "../../assets/images/cases/case_preview_5.webp";
import CasePreviewSix from "../../assets/images/cases/case_preview_6.webp";

import CaseToucheIntro from "../../assets/images/cases/touche/intro.png"
import CaseToucheImageOne from "../../assets/images/cases/touche/image_1.png"
import CaseToucheImageTwo from "../../assets/images/cases/touche/image_2.png"
import CaseToucheImageThree from "../../assets/images/cases/touche/image_3.png"

import CaseTutBarIntro from "../../assets/images/cases/tut_bar/intro.png"
import CaseTutBarImageOne from "../../assets/images/cases/tut_bar/image_1.png"
import CaseTutBarImageTwo from "../../assets/images/cases/tut_bar/image_2.png"
import CaseTutBarImageThree from "../../assets/images/cases/tut_bar/image_3.png"

import CaseChefIntro from "../../assets/images/cases/chef/intro.png"
import CaseChefImageOne from "../../assets/images/cases/chef/image_1.png"
import CaseChefImageTwo from "../../assets/images/cases/chef/image_2.png"
import CaseChefImageThree from "../../assets/images/cases/chef/image_3.png"
import CaseChefImageFour from "../../assets/images/cases/chef/image_4.png"

import CaseMenuIntro from "../../assets/images/cases/menu/intro.png"
import CaseMenuImageOne from "../../assets/images/cases/menu/image_1.png"
import CaseMenuImageTwo from "../../assets/images/cases/menu/image_2.png"
import CaseMenuImageThree from "../../assets/images/cases/menu/image_3.png"

import CaseArakiIntro from "../../assets/images/cases/araki/intro.png"
import CaseArakiImageOne from "../../assets/images/cases/araki/image_1.png"
import CaseArakiImageTwo from "../../assets/images/cases/araki/image_2.png"
import CaseArakiImageThree from "../../assets/images/cases/araki/image_3.png"
import CaseArakiImageFour from "../../assets/images/cases/araki/image_4.png"

import CaseBreakfastIntro from "../../assets/images/cases/breakfast/intro.png"
import CaseBreakfastImageOne from  "../../assets/images/cases/breakfast/image_1.png"
import CaseBreakfastImageTwo from "../../assets/images/cases/breakfast/image_2.png"
import CaseBreakfastImageThree from "../../assets/images/cases/breakfast/image_3.png"

import { CaseItemTypes, casePreviewType, CaseType } from "./cases.types.ts"

export const casesPreview: Array<casePreviewType> = [
	{
		icon: CasePreviewOne,
		title: "Touche — Перезапуск сайта\nвинного ресторана",
		link: "touche_relaunch_wine_restaurant_website",
		color: "#1E1E1E",
	},
	{
		icon: CasePreviewTwo,
		title: "ТУТ БАР — создание сайта\nдля доставки вкусного",
		link: "tut_bar_creating_website_delivering_delicious_food",
		color: "#FFFFFF",
	},
	{
		icon: CasePreviewThree,
		title: "Премия шеф-повар года - обновление дизайна",
		link: "chef_year_award_design_update",
		color: "#1E1E1E",
	},
	{
		icon: CasePreviewFour,
		title: "Menu – уникальный кейтеринг с душой ресторана",
		link: "menu_unique_catering_soul_restaurant",
		color: "#1E1E1E",
	},
	{
		icon: CasePreviewFive,
		title: "Водка ARAKI – от игры слов до яркого бренда",
		link: "araki_vodka_pun_bright_brand",
		color: "#1E1E1E",
	},
	{
		icon: CasePreviewSix,
		title: "ЗАВТРАк ШЕФА 25 - разработка визуала для форума поваров",
		link: "chefs_breakfast_visual_development_chefs_forum",
		color: "#FFFFFF",
	},
]

export const cases: Array<CaseType> = [
	{
		link: "touche_relaunch_wine_restaurant_website",
		image: CaseToucheIntro,
		type: "Интернет-магазин",
		title: "Перезапуск сайта винного ресторана Touche",
		task: "Главная задача - создание уникального и узнаваемого стиля, который бы\nвыделял Touche среди конкурентов. Потому что, Существующий сайт на\nплатформе Tilda больше не соответствует современным требованиям. ",
		says: "Когда всё красиво и по делу, клиент останется доволен!",
		items: [
			{
				type: CaseItemTypes.POINT,
				point: {
					number: 1,
					text: "Наша команда провела  брифинг с клиентом, чтобы понять его ожидания и видение будущего сайта. Мы предложили несколько концепций, одной из которых стала идея стилизации сайта под газетную верстку – необычное решение, которое добавило бы аутентичности и шарм."
				}
			},
			{
				type: CaseItemTypes.IMAGE,
				image: CaseToucheImageOne
			},
			{
				type: CaseItemTypes.POINT,
				point: {
					number: 2,
					text: "После утверждения концепции, мы приступили к разработке прототипа на Figma, где учли все пожелания клиента относительно новых и старых страниц, а также добавили новые функциональные элементы. Особое внимание уделили проработке всех необходимых сервисных блоков, чтобы пользователи могли легко ориентироваться на сайте и получать доступ ко всей информации."
				}
			},
			{
				type: CaseItemTypes.IMAGE,
				image: CaseToucheImageTwo
			},
			{
				type: CaseItemTypes.POINT,
				point: {
					number: 3,
					text: "Следующим этапом стал перенос готового макета на платформу Tilda. Помимо этого, мы провели техническую SEO-оптимизацию, интегрировали необходимые аналитические инструменты и настроили сервисы для отслеживания эффективности работы сайта."
				}
			},
			{
				type: CaseItemTypes.IMAGE,
				image: CaseToucheImageThree
			}
		],
		result: {
			title: "результат",
			description: "Результат превзошел ожидания: новый сайт получил уникальный стиль, который четко отражает атмосферу и философию винного ресторана Touche. Клиенты теперь могут быстро найти интересующую их информацию, будь то информация об акциях, специальных мероприятиях или просто заказать столик онлайн. В итоге, клиент остался доволен результатом нашей совместной работы, и мы планируем продолжить сотрудничество, внедряя новые идеи и улучшая функциональность сайта.",
			link: "https://touchewinebar.ru/"
		}
	},
	{
		link: "tut_bar_creating_website_delivering_delicious_food",
		image: CaseTutBarIntro,
		type: "Интернет-магазин",
		title: "ТУТ БАР – создание сайта для бара с уникальной философией",
		task: "ТУТ БАР – уникальное заведение с собственной философией. Перед нами стояла задача создать удобный и функциональный ресурс, на котором посетители смогут ознакомиться с информацией о заведении и оформить заказ доставки.",
		says: "Когда всё красиво и по делу, клиент останется доволен!",
		items: [
			{
				type: CaseItemTypes.POINT,
				point: {
					number: 1,
					text: "Первым шагом стало проведение брифа с владельцем бара. Нам нужно было уловить суть философии заведения и отразить её в дизайне сайта. Главная фишка ТУТ БАР – игра со словом «тут», поэтому мы решили использовать эту идею при создании элементов сайта."
				}
			},
			{
				type: CaseItemTypes.IMAGE,
				image: CaseTutBarImageOne
			},
			{
				type: CaseItemTypes.POINT,
				point: {
					number: 2,
					text: "После обсуждения нескольких концепций, вместе с владельцами бара мы выбрали одну из них и доработали до совершенства. Этот дизайн лег в основу дальнейшего проектирования."
				}
			},
			{
				type: CaseItemTypes.IMAGE,
				image: CaseTutBarImageTwo
			},
			{
				type: CaseItemTypes.POINT,
				point: {
					number: 3,
					text: "Прототип сайта был создан на Figma, после чего мы перешли к верстке на платформе WordPress. Эта система идеально подошла для реализации нужных функций, включая простую и понятную административную панель. Но самым важным моментом была интеграция сайта с системой Iiko, установленной в самом баре. Это позволило автоматизировать процесс обработки заказов и значительно упростить работу персонала."
				}
			},
			{
				type: CaseItemTypes.IMAGE,
				image: CaseTutBarImageThree
			},
			{
				type: CaseItemTypes.POINT,
				point: {
					number: 4,
					text: "После завершения программирования и тщательного тестирования, мы передали готовый продукт клиенту. Сайт прошел техническую SEO-оптимизацию, были подключены все необходимые сервисы и метрики. Владелец бара остался доволен результатом!"
				}
			},
		],
		result: {
			title: "результат",
			description: "Теперь мы продолжаем сотрудничать с ТУТ БАР не только\n" +
				"по поддержке сайта, но и по его дальнейшему продвижению через SEO. Ведь, как говорится, «ТУТ» всегда есть куда расти!",
			link: "https://tut-bar.ru/"
		}
	},
	{
		link: "chef_year_award_design_update",
		image: CaseChefIntro,
		type: "Дизайн",
		title: "Премия шеф-повар года – обновление дизайна",
		task: "В этом году наша команда получила интересный вызов – создать key visual для престижной премии ЗАВТРА’ка ШЕФА 2024 года, а также провести редизайн её официального сайта и оформить само мероприятие. Мы подошли к задаче с максимальной креативностью и вниманием к деталям.",
		says: "Хочется раздать стиля!",
		items: [
			{
				type: CaseItemTypes.POINT,
				point: {
					number: 1,
					text: "Создание уникального стиля. Для начала разработали минималистичный фирменный стиль, который стал основой всего проекта. Ключевым элементом дизайна стали акцентные фоны с эффектом жидкого металла и золотыми бликами. Этот эффект создаёт ощущение роскоши и эксклюзивности, идеально соответствуя духу премии. В качестве главного шрифта выбрали строгий и элегантный Syncopate Cyr, который подчеркивает серьёзность события."
				}
			},
			{
				type: CaseItemTypes.IMAGE,
				image: CaseChefImageOne
			},
			{
				type: CaseItemTypes.POINT,
				point: {
					number: 2,
					text: "Разнообразие элементов. Чтобы поддерживать интерес аудитории на всех этапах взаимодействия с премией, создали несколько вариаций фонов для использования в социальных сетях, рассылках и других маркетинговых материалах. Эти дополнительные элементы помогают сохранить целостность бренда и делают продвижение более динамичным."
				}
			},
			{
				type: CaseItemTypes.IMAGE,
				image: CaseChefImageTwo
			},
			{
				type: CaseItemTypes.POINT,
				point: {
					number: 3,
					text: "Редизайн сайта. Перед нами стояла задача обновить внешний вид сайта без значительных изменений кода. Мы сосредоточились на главном баннере, полностью обновив его под новый стиль. Также заменили все шрифты на сайте и добавили акценты с использованием новых фонов. Благодаря этим изменениям сайт приобрел свежий и современный облик, соответствующий высокому статусу премии."
				}
			},
			{
				type: CaseItemTypes.IMAGE,
				image: CaseChefImageThree
			},
			{
				type: CaseItemTypes.POINT,
				point: {
					number: 4,
					text: "Оформление мероприятия. Наша работа не ограничилась онлайн-средой. Мы участвовали в оформлении самой церемонии награждения. Подготовили пресс-волл, который станет отличным фоном для фотографий гостей и лауреатов. Кроме того, создали серию уникальных заставок для каждого номинанта, подчеркивающих их достижения. Одной из наших идей стало создание 3D-фона из жидкого металла, который добавит мероприятию дополнительную атмосферу премиальности. Мы также сняли оригинальные видеоролики о номинантах, которые гармонично вписываются в общий стиль оформления."
				}
			},
			{
				type: CaseItemTypes.IMAGE,
				image: CaseChefImageFour
			},
		],
		result: {
			title: "результат",
			description: "И, знаете, что сказала бы бабушка? «Ну вот, наконец-то я попала на такое\nмероприятие, где даже моя шляпа с перьями не выглядит слишком экстравагантно!»",
			link: "https://awards.bestchefs.ru/"
		}
	},
	{
		link: "menu_unique_catering_soul_restaurant",
		image: CaseMenuIntro,
		type: "Дизайн",
		title: "Menu – Уникальный кейтеринг с душой ресторана",
		task: "Когда к нам обратился клиент с проектом Menu, перед нами стояла интересная задача: создать не просто стильный лендинг, а масштабируемую платформу , которая сможет расти вместе с бизнесом. Идеология бренда заключалась в том, чтобы предложить пользователям уникальный гастрономическый экспиренс.",
		says: "Такие вкусности мне нравятся!",
		items: [
			{
				type: CaseItemTypes.POINT,
				point: {
					number: 1,
					text: "Мы начали с того, что внимательно изучили фирменный стиль и предоставленные клиентом фотографии. Наша цель была проста: сохранить атмосферу, но при этом адаптировать её под онлайн-пространство. Мы подготовили несколько концептуальных решений, среди которых клиент выбрал наиболее подходящий вариант. Совместная работа над дизайном позволила довести концепцию до совершенства."
				}
			},
			{
				type: CaseItemTypes.IMAGE,
				image: CaseMenuImageOne
			},
			{
				type: CaseItemTypes.POINT,
				point: {
					number: 2,
					text: "Для удобства дальнейшего развития проекта мы создали детальные прототипы в Figma. Важно было учесть возможность расширения функционала сайта без потери качества интерфейса. Мы продумали структуру таким образом, чтобы добавлять новые разделы и страницы было легко и быстро."
				}
			},
			{
				type: CaseItemTypes.IMAGE,
				image: CaseMenuImageTwo
			},
			{
				type: CaseItemTypes.POINT,
				point: {
					number: 3,
					text: "После утверждения прототипа приступили к переносу дизайна на CMS Tilda. Этот этап включал программирование, тестирование и отладку всех технических аспектов. Особое внимание уделили технической SEO оптимизации, интеграции необходимых сервисов и настройке аналитики."
				}
			},
			{
				type: CaseItemTypes.IMAGE,
				image: CaseMenuImageThree
			},
		],
		result: {
			title: "результат",
			description: "Теперь мы продолжаем сотрудничать с ТУТ БАР не только\n" +
				"по поддержке сайта, но и по его дальнейшему продвижению через SEO. Ведь, как говорится, «ТУТ» всегда есть куда расти!",
			link: "https://menucatering.ru/"
		}
	},
	{
		link: "araki_vodka_pun_bright_brand",
		image: CaseArakiIntro,
		type: "Интернет-магазин",
		title: "Водка ARAKI – От игры слов до яркого бренда",
		task: "Наш клиент из Грузии обратился к нам с амбициозной задачей: создать бренд для уникального продукта – собственной водки. Перед нами стояли сразу три задачи: придумать запоминающееся название, разработать этикетки для разных вкусов напитка и создать имиджевый лендинг, который передаст дух нового бренда.",
		says: "Да минздрав предупреждает, но посмотрите как же красиво!",
		items: [
			{
				type: CaseItemTypes.POINT,
				point: {
					number: 1,
					text: "Первым шагом стало создание названия. Мы решили поиграть с грузинским языком и нашли интересное сочетание: «ARAKI». В переводе с грузинского «араки» означает «водка», но само слово состоит из двух частей: «ara» («нет») и «ki» («да»). Добавив к этому названию вопросительный и восклицательный знаки, мы получили интригующий эффект: «Нет?» – «Да!» Это название идеально подошло для водки, вызывая любопытство и улыбку одновременно."
				}
			},
			{
				type: CaseItemTypes.IMAGE,
				image: CaseArakiImageOne
			},
			{
				type: CaseItemTypes.POINT,
				point: {
					number: 2,
					text: "Следующим этапом стали этикетки. Для каждого вкуса водки мы разработали уникальные дизайны, подчеркивающие натуральность и аутентичность продукта. Клиент был в восторге от наших предложений, и вскоре этикетки были утверждены."
				}
			},
			{
				type: CaseItemTypes.IMAGE,
				image: CaseArakiImageTwo
			},
			{
				type: CaseItemTypes.POINT,
				point: {
					number: 3,
					text: "Теперь пришло время создать фирменный лендинг. Задача состояла в том, чтобы сделать сайт запоминающимся, привлекательным и информативным. Благодаря тому, что мы уже хорошо поняли потребности клиента, нам не пришлось создавать множество концепций. Мы сразу перешли к созданию полного прототипа в Figma, добавив яркие анимации и интерактивные элементы."
				}
			},
			{
				type: CaseItemTypes.IMAGE,
				image: CaseArakiImageThree
			},
			{
				type: CaseItemTypes.POINT,
				point: {
					number: 4,
					text: "После утверждения прототипа мы аккуратно перенесли дизайн на CMS, убедившись, что все анимации работают корректно на любых устройствах и экранах. Результат превзошел ожидания: сайт получился живым, динамичным и полностью отражающим дух бренда ARAKI."
				}
			},
			{
				type: CaseItemTypes.IMAGE,
				image: CaseArakiImageFour
			},
		],
		result: {
			title: "результат",
			description: "Проект завершился успешно: клиент остался доволен, а мы получили удовольствие от создания уникального бренда. Теперь водка ARAKI готова покорять сердца любителей качественного алкоголя своим необычным названием и яркими этикетками.",
		}
	},
	{
		link: "chefs_breakfast_visual_development_chefs_forum",
		image: CaseBreakfastIntro,
		type: "Дизайн",
		title: "ЗАВТРА’К ШЕФА 25 – разработка визуала для форума поваров",
		task: "Проект «ЗАВТРА’К ШЕФА», который давно стал нашим добрым другом, вновь обратился к нам с новой задачей – разработать фирменный стиль для форума 2025 года. Основной вызов заключался в смене курса: привычный темный и строгий стиль нужно было преобразовать в яркий и контрастный образ.",
		says: "Масштабно и со вкусом!",
		items: [
			{
				type: CaseItemTypes.POINT,
				point: {
					number: 1,
					text: "Первым шагом стало изменение настроения всего форума, связанное со сменой его локации. Клиент хотел ассоциировать «ЗАВТРА’К ШЕФА» с современным театром, а потому главным элементом визуального стиля стал театральный билет. Современность подчеркивалась модным шрифтом и яркими нестандартными сочетаниями цветов. Нам также удалось уйти от прямых ассоциаций с кухней и кулинарией, заменив их абстрактными линиями и геометрическими формами."
				}
			},
			{
				type: CaseItemTypes.IMAGE,
				image: CaseBreakfastImageOne
			},
			{
				type: CaseItemTypes.POINT,
				point: {
					number: 2,
					text: "Это был настоящий старт нового этапа развития бренда «ЗАВТРА’К ШЕФА». Новое место – новый взгляд на бренд! После утверждения основного визуала, мы разработали шаблоны для социальных сетей и оформленные карточки спикеров. Наши рекомендации стали основой для дальнейшей работы дизайнеров клиента над контентом для мероприятия."
				}
			},
			{
				type: CaseItemTypes.IMAGE,
				image: CaseBreakfastImageTwo
			},
			{
				type: CaseItemTypes.POINT,
				point: {
					number: 3,
					text: "Вторая часть проекта включала в себя создание нового веб-сайта. Мы полностью изменили дизайн, сделав его ярким, привлекательным и легко узнаваемым. После разработки фирменного стиля сайт привлекает внимание своей современностью и уникальностью."
				}
			},
			{
				type: CaseItemTypes.IMAGE,
				image: CaseBreakfastImageThree
			},
		],
		result: {
			title: "результат",
			description: "Как бы сказала бабушка: Ну вот, теперь у них даже билеты на форум такие, что хоть на стенку вешай! Правда, внучок, всё-таки лучше на сам форум сходить.",
			link: "https://bestchefs.ru/"
		}
	},
]