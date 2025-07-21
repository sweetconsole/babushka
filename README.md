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