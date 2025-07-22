# Babushka 

Многостраничный сайт на <strong>React.js</strong>. В качестве языка программирования используется <strong>TypeScript</strong>, сборщиком проекта является <strong>Vite</strong>.

## Технологии

<div id="steck">
	<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" width="30" height="30" alt="Vite" />
	<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" width="30" height="30" alt="React"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" width="30" height="30" alt="Type Script"/>
	<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" width="30" height="30" alt="SASS"/>
	<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg" width="30" height="30" alt="React Router" />
	<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg" width="30" height="30" alt="Framer Motion" />
	<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bun/bun-original.svg" width="30" height="30" alt="Bun"  />
</div>

## Тематика сайта 
Разработка сайтов и сервисов для ресторанов и баров, а также их продвижение и SEO оптимизация. Сайт включает в себя главную страницу, страницы проектов, блогов, 4 статьи и 6 кейсов, обработки персональных данных, а также страницу 404.<br>

## Особенности сайта
<strong>Визуальные:</strong><br>
* Анимации появления, сделанные при помощи <strong>Framer Motion</strong>.
* Анимация скроллинга при клике на кнопку ведущая на объект, реализованная при помощи <strong>React Scroll</strong>.
* Полностью адаптивный сайт.
* В подсказке поле имени случайного выбирается имя из конфига.
* Поля <em>Ваше Имя</em> и <em>Ваш номер телефона</em> имеют валидацию.

<b>Технические:</b><br>
* Стили являются модульными <strong>SCSS</strong> файлами. 
* Навигация на сайте сделана при помощи конфига со всеми маршрутами, что помогает не ошибиться в написании url адресов. 
* Если пользователь попадает на несуществующую страницу, то его перебрасывает на страницу 404.
* Все изображения имеют alt свойство, а кнопки-иконки aria-label.
* SEO оптимизация: <strong>Open Graph</strong> теги, описание, заголовок, иконки, автор и ключевые слова.
* Разделен бандл на два чанка: <em>основной</em> и <em>плагины</em>

## Архитектура

```
├── dist - директория билда проекта
├── public - директория для иконок и превью изображений
│ 
├── src - рабочая директория
│   ├── assets
│   │	├── fonts - директория шрифтов
│   │	├── images - директория изображений
│   │   └── styles
│   │       ├── fonts.scss - стили инициализация шрифтов
│   │       ├── reset.scss - файл сброса стилей браузеров
│   │       └── variables.scss - файлы переменных
│   │
│   ├── components
│   │	├── * - компоненты
│   │	├── ui
│   │	│   ├── * - компоненты ui элементов
│   │	│   ├── animated - директория анимированных компонентов
│   │	│   ├── blogs - директория компонентов страниц и блоков блога
│   │	│   ├── cases - директория компонентов страниц и блоков кейсов
│   │   │   ├── form - директория компонентов формы
│   │   │   └── index.ts - файл сокращения импортов
│   │   │
│   │   └── index.ts - файл сокращения импортов
│   │
│   ├── config
│   │   ├── names.config.ts - конфигурация для подсказки имени в форме
│   │   ├── pages.config.ts - конфигурация страни сайта
│   │   ├── social.config.ts - конфигурация ссылком и номеров (телефон, соц.сети, ОГРН, ИНН) 
│   │   └── valid.config.ts - конфигурация паттернов валидации форм
│   │	
│   ├── hooks 
│   │   └── useMediaQuery.ts - хук получения размера экрана
│   │
│   ├── pages - директория страниц сайта
│   │   └── index.ts - файл сокращения импортов
│   │
│   ├── utility 
│   │   ├── animation.ts - описание Framer Motion анимаций
│   │   ├── pickRandomItems.ts - функция, возращающая 
│   │   ├── randomName.ts - функция, возращающая случайное именя из конфига имен 
│   │   └── shuffledArray.ts - функция перемешивания массива
│   │
│   └── vite-env.d.ts - файл определения типов переменных окружения 
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Запуск проекта

Для запуска проекта необходимо выполнить следующие действия:

1. С клонировать проект на ваш компьютер с [Github](https://github.com/sweetconsole/babushka) с помощью команды:
```
git clone https://github.com/sweetconsole/babushka.git
```
2. Установить зависимости:<br>
```
npm install
```
3. Запустить проект:<br>
```
npm start
```