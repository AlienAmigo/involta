# Тестовое задание для involta
---
Обязательно добавьте поддержку [editorconfig](https://editorconfig.org/#download) в ваш редактор кода.

```bash
npm i             # установить зависимости
npm start         # запустить сервер разработки (остановить: Ctrl+C)
npm build         # запустить сборку проекта
npm run bemlint   # проверить html-файлы папки build на соответствие BEM
npm run puglint   # проверить pug-файлы
npm run stylelint # проверить scss-файлы
```

Перед коммитом происходит автопроверка файлов. Если проверка выявила ошибки, они будут показаны в терминале.

---
## О сборке:
### В составе:
- [Sass (SCSS)](https://sass-lang.com)
- [PostCSS](https://postcss.org)
  - [Autoprefixer](https://github.com/postcss/autoprefixer)
  - [PostCSS Flexbugs Fixes](https://github.com/luisrudge/postcss-flexbugs-fixes)
  - [PostCSS animation](https://github.com/zhouwenbin/postcss-animation)
- [Pug (Jade)](https://pugjs.org)
- [Stylelint](https://stylelint.io)
- [ESLint](https://eslint.org)
- [pug-lint](https://github.com/pugjs/pug-lint)
- [Prettier](https://prettier.io)
- [Babel](https://babeljs.io)
- [GitPages](https://pages.github.com)
- [gulp.spritesmith](https://github.com/twolfson/gulp.spritesmith)

### файл config.js

Файл **`config.js`** содержит глобальные настройки проекта в объекте `config`:

> **dir** — переменные директорий проекта
> 
> **addAssets** — дополнительные файлы проекта
> 
> **options** — флаги, если нужно отключить какую-то часть сборки (например, в случае полной ненадобности js или сторонних модулей (Vendors)):
>* **copyAssets** — отключает копирование дополнительных файлов проекта
>* **processJs** — отключает создание `/js/script.min.js` и отслеживание изменений в js-файлах
>* **copyJsVendors** — отключает обработку дополнительных js-модулей и создание `/js/vendors.min.js`
> при **`processJs`**` = false` и **`processJs`**` = false` папка `/js` не создается

### Fonts (Шрифты)
Все шрифты лежат в папке `/fonts`.

Конвертер шрифтов: https://www.fontsquirrel.com/tools/webfont-generator
или google-webfonts-helper: https://google-webfonts-helper.herokuapp.com/fonts

#### Памятка по *font-weight*:

- **100** — Thin (Hairline)
- **200** — Extra Light (Ultra Light)
- **300** — Light
- **400** — Regular (Normal)
- **500** — Medium
- **600** — Semi Bold (Demi Bold)
- **700** — Bold
- **800** — Extra Bold (Ultra Bold)
- **900** — Black (Heavy)

### gh-pages
Модуль `gh-pages` для публикации результатов верстки уже установлен

```bash
npx gulp deploy  # инициализация
npm start deploy # отправка последнего коммита
```
---

## Справочная информация

- [Как работать с CSS-препроцессорами и БЭМ](http://nicothin.github.io/idiomatic-pre-CSS/)
- [Шпаргалка по bash](https://github.com/nicothin/web-development/tree/master/bash)
- [Шпаргалка по консольным командам Git](https://github.com/nicothin/web-development/tree/master/git)
- [Шпаргалка ниндзя Sublime Text 3](http://nicothin.github.io/sublime-text/sublime-text-3-hotkeys.html)
- [Sublime Text 3 для работы с фронтэндом](https://github.com/nicothin/sublime-text)
- [Шпаргалка по подключению gh-pages к проекту](https://nicothin.pro/page/gh-pages)
