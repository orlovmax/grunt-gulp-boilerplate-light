# ProjectName

## Contents

- [Folder and file structure](#folder-and-file-structure)
- [Requirements:](#requirements)
    - [Editorconfig](#editorconfig)
- [How to start](#how-to-start)
- [Site configuration](#site-configuration)
- [Tasks](#tasks)
    - [Cleanup](#cleanup)
    - [Dev](#dev)
    - [Build](#build)
    - [Rebuild](#rebuild)
    - [Server](#server)
    - [Sprite](#sprite)
- [Live reload](#live-reload)
- [License](#license)

## Folder and file structure

```
./
├── .editorconfig
├── Gruntfile.js
├── package.json
├── README.md
|
├── grunt_tasks/                               * grunt tasks
|   ├── config/                                * grunt tasks config
│   |   ├── paths.js
│   |   └── aliases.js
│   |
|   └── task.js
|
├── screenshots/                               * responsive test screenshots
|
└── theme/                                     * main theme folder
    ├── index.html
    ├── page.html
    └── static/                                * static assets
        ├── css/                               * compiled css
        |
        ├── images/                            * image sources
        |
        ├── pug/                               * templates
        |   ├── blocks/                        * blocks library
        │   |   └── block.pug
        │   ├── helpers/                       * helper mixins
        │   ├── vendor/                        * third-party code
        │   ├── layouts/                       * page layouts
        │   └── pages/                         * main pages templates
        |
        ├── js/                                * scripts
        |   ├── vendor/                        * vendor scripts library
        |   ├── lib/                           * site scripts library
        │   ├── head.js                        * head scripts
        │   └── body.js                        * body scripts
        |
        ├── sass/                              * sass preprocessor styles
        |   ├── blocks/                        * blocks library
        │   |   └── block.sass
        |   ├── helpers/                       * mixins and vars
        │   ├── vendor/                        * third-party code
        |   ├── custom.sass
        |   ├── noscript.sass
        |   └── screen.sass
        |
        ├── stylus/                            * stylus preprocessor styles
        |   ├── blocks/                        * blocks library
        │   |   └── block.styl
        │   ├── helpers/                       * mixins and vars
        │   ├── vendor/                        * third-party code
        │   ├── custom.styl
        │   ├── noscript.styl
        │   └── screen.styl
        |
        ├── helpers/                           * additional resources
        |   ├── favicon.ico
        |   └── .htaccess
        |
        ├── fonts/                             * font sources
        |
        └── data/                              * configs and data for templates

```

## Requirements

- [Node.js](http://nodejs.org/)
- Build sytem: [Grunt](http://gruntjs.com/) or [Gulp](http://gulpjs.com/)
- Optionally:
  * [Editorconfig](http://editorconfig.org/)
  * [Ruby](https://www.ruby-lang.org/en/) and [Ruby Sass](https://sass-lang.com/ruby-sass)

#### Editorconfig

This project has an .editorconfig file at the root. It describes indent style, trailing whitespaces etc. See more details [here](http://editorconfig.org/)

## How to start

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to use [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins.

Before start you need to have installed _npm_, _grunt_, _ruby_, and _ruby-sass_ globallly.

**A few simple steps to start:**
* Install dependencies from `package.json` by running: `npm install`.
* Run tasks from the list below and start devevelopment!
* Edit general settings in `dev/data/config.json` See [Site configuration](#site-configuration) section

## Site configuration

This boilerplate uses Pug templates with external data configs.
Main settings can be found in `dev/data/config.json` file. And they're available for usage in templates with `config.key-name`

## Tasks

Here comes groups of grunt and gulp tasks with some explanations

#### Cleanup

Remove placeholders from work directories.
Grunt: `grunt cleanup`

* Remove gitkeep files

#### Dev

Dev task with static server.
Grunt: `grunt dev`

* Bundle javascripts
* Compile Sass stylesheets
* Compile Stylus stylesheets
* Add vendor prefixes in css
* Combine media queries in css files
* Compile Pug templates
* Sync helpers and other assets
* Sync fonts
* Sync images
* Run BrowserSync static server with live reload using
* Watch for changes and run dev task


#### Build

Build task.
Grunt: `grunt build`

* Minify images
* Minify javascript files
* Minify stylesheets
* Minify html
* Run BrowserSync static server


#### Rebuild

Regenerate and build project by running all tasks.
Grunt: `grunt rebuild`

* Bundle javascripts
* Compile Sass stylesheets
* Compile Stylus stylesheets
* Add vendor prefixes in css
* Combine media queries in css files
* Compile Pug templates
* Sync helpers and other assets
* Sync fonts
* Sync images
* Minify images
* Minify javascript files
* Minify stylesheets
* Minify html


#### Server

Run server without watching for changes.
Grunt: `grunt server`

* Run BrowserSync static server


#### Sprite

Sprite creation task. Should be configured before running.
Grunt: `grunt sprite:sass`

* Create images sprite and related sass files


Grunt: `grunt sprite:stylus`

* Create images sprite and related stylus files


## Live reload

This project uses BrowserSync as static server with enabled and configured live reload option.

## License

[MIT](https://github.com/orlovmax/grunt-gulp-starter-light/blob/master/LICENSE.md)
