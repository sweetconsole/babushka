# Babushka (В разработке)

Многостраничный сайт на <b>React.js</b>. В качестве языка программирования используется <b>TypeScript</b>, сборщиком проекта является <b>Vite</b>, а <b>Bun</b> используется в качестве пакетного менеджера.<br>

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
<b>Визуальные:</b><br>
* Анимации появления, сделанные при помощи <b>Framer Motion</b>.
* Анимация скроллинга при клике на кнопку ведущая на объект, реализованная при помощи <b>React Scroll</b>.

<b>Технические:</b><br>
* Стили являются модульными SCSS файлами. 
* Навигация на сайте сделана при помощи конфига со всеми маршрутами, что помогает не ошибиться в написании url адресов. 
* Если пользователь попадает на несуществующую страницу, то его перебрасывает на страницу 404.
* Все изображения имеют alt свойство, а кнопки с иконками aria-label

## Запуск проекта

Для запуска проекта необходимо выполнить следующие действия:

1. С клонировать проект на ваш компьютер с [Github](https://github.com/sweetconsole/babushka) с помощью команды:
```
1. git clone https://github.com/sweetconsole/babushka.git
```
2. Установить зависимости:<br>
```npm install```
```yarn install```
```bun install```

3. Запустить проект:<br>
```npm start```
```yarn start```
```bun run dev```