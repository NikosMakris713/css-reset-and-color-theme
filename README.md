# Project short description

This is an opinionated css reset which aims to improve your productivity as well as the consistency and precision of the styling of your projects.
It additionaly includes a fully accessible color theme switcher which can be easily removed or modified according to your needs.

## The purpose of this project

While it's true that in the era of modern web development CSS browser compatibility issues are much less likely than they were in the old IE 6 days, unfortunately inconsistencies between different browsers do still occur occasionally however. In order make my life as a developer a little bit easier, increase my productivity and ensure that all of my projects look the same in different brwosers while also making sure my project follows the important principles of UI / UX design i came up with this project.

## Project structure

In order to separate concerns i created multiple sass files which are then imported to the [main.scss](/scss-files/main.scss) file.
To compile and minify my [main.scss](/scss-files/main.scss) file i used the vscode extension [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass).
This proccess resulted in the [main.css](/css/main.min.css) file.

Below you can find a brief description of each file:

- [main.min.css](/css/main.min.css): This is the compiled file where you can find all the style rules of the project.
- [variables.scss](/scss-files/_variables.scss): In this file you can find all the css variable declarations.
- [reset.scss](/scss-files/_reset.scss): In this file you can find the reset style rules.
- [reduced-motion.scss](/scss-files/_reduced-motion.scss): In this file you can find all the style rules for the users who prefer reduced motion.
- [color-themes.scss](/scss-files/_color-themes.scss): In this file you can find all the style rules for the color themes.
- [theme-switcher.js](/js/theme-switcher.js): In this file you can find the javascript code for the theme switcher.
- [index.html](/index.html): In this file you can find a basic html structured page containing the code necessary for the svg theme switcher icon.

## How to use it

### If you decide that you want to use my stylesheets without any modifications

You can simply copy the contents of the [main.min.css](/css/main.min.css) file and use this stylesheet for your project.

### If you decide you want to make some changes to the stylesheets , you have two options

1.    You can edit the style rules in the [main.min.css](/css/main.min.css) and use the edited file for your project.
2.    You can use the vscode extension [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass) and edit the .scss files or even add / remove them according to your project's needs.
