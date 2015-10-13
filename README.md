# HTML-Presentation-Framework
Create with your knowledge of HTML and CSS beautiful presentations in one single HTML file with embedded images, styles and scripts for easy sharing.

## Demo
Take a look: [Demo presentation](http://www.ammann.cc/GitHub/HTML-Presentation-Framework/)

Jump to the next slide with one of the following keystrokes:<br>
<kbd>&rarr;</kbd>, <kbd>&darr;</kbd>, <kbd>&Darr;</kbd> or <kbd>Enter</kbd>

And go back with:<br>
<kbd>&larr;</kbd>, <kbd>&uarr;</kbd>, <kbd>&Uarr;</kbd> or <kbd>Backspace</kbd>

Restart the presentation with:<br>
<kbd>&nwarr;</kbd>

## Dependencies
You must have installed [Node.js](https://nodejs.org/) and [Grunt](http://gruntjs.com/).

The generated presentation is a single HTML file, based on [jQuery](https://jquery.com/) and styled with CSS in the generated folder `~/HTML-Presentation-Framework/dist`.

## How to use
Install the local grunt project in your folder `~/HTML-Presentation-Framework/grunt`:

`npm install grunt`

Install all required addons for our amazing workflow:
```
npm install grunt-contrib-watch --save-dev
npm install grunt-contrib-clean --save-dev
npm install grunt-contrib-copy --save-dev
npm install grunt-contrib-rename --save-dev
npm install grunt-contrib-sass --save-dev
npm install grunt-contrib-cssmin --save-dev
npm install grunt-contrib-uglify --save-dev
npm install grunt-includes --save-dev
npm install grunt-autoprefixer --save-dev
npm install grunt-css-url-embed --save-dev
```

Start the workflow in your terminal:

`grunt`

Now, we've got a complete listener on the folder `~/HTML-Presentation-Framework/src`.<br>
*Amazing!*

## Usage
Here is a short overview about the project structure:

##### css/
The CSS files written in SASS.

You should only modifiy `_var.scss` for the colors and `layout.scss` for the rest.

##### img/
All images you wish to embed in your presentation. For correct embedding use always a style class:
```css
section.thats-all-folks {
	background-image: url(../src/img/thats-all-folks.jpg);
}
```

Use always this relative path: `../src/img/your_image.jpg`

##### js/
The JavaScript files. You don’t have to modifiy them.

##### layout.html
This is the main view for the presentation.

You can change the `<title>` tag or modifiy what you like, but don’t delete the includes.

##### slides/
Yeah, the slides!

Create and rename as many files as you want, but include each in the main file `_slides.html`. Set the order from up to down.
