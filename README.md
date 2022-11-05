### Building on Gulp 4

This build is reassigned for a more convenient and most importantly readable code 

---
### Build functionality :
+ Сompression HTML , JavaScript , Sass and Scss preprocessors
+ local server with automatic page update when files change
+ Tracking changes in files and automatically triggering re-processing
+ image compression
+ Tracking new images that have not yet been compressed
+ merge several files into one min
+ compilation of preprocessors Scss, Sass
+ Compressing and optimizing Java Script code
+ Automatically add prefixes to CSS
+ Deleting directories and files

### Input
---
|               |     HTML     |         Styles         |        Images        |JavaScript|
| ------------- |:------------:| :--------------------: | :------------------: |:--------:|
| Catalog       |     app/     |      app/styles/       |     app/imgages/     |  app/js  |
| Extension     | .html, .pug  |   .css, .sass, .scss,  |   .jpg, .png, .gif   |   .js    |

### Output
---
|        |     HTML     |         Styles         |    Images     |     JavaScript     |
| ------ |:------------:| :--------------------: | :----------: |:-------------------:|
| Path   |     dist/    | dist/css/style.min.css |  dist/img/   | dist/js/main.min.js |

### Launch
---
1. Download all project files
2. In the terminal go to the project directory
3. Run the command: npm i (node.js must be installed)
4. Create directories and files
5. Read commands you will need at runtime
6. Execute command: gulp (run default)
7. Write your code and enjoy the automatic building of the project.

### NPM packages in use
---
<a href="https://www.npmjs.com/package/gulp" rel="nofollow">gulp</a> Builder Gulp <br>
<a href="https://www.npmjs.com/package/gulp-sass" rel="nofollow">gulp-sass</a> Compiling Sass and Scss files <br>
<a href="https://www.npmjs.com/package/gulp-imagemin" rel="nofollow">gulp-imagemin</a> Image compression <br>
<a href="https://www.npmjs.com/package/gulp-concat" rel="nofollow">gulp-concat</a> Combining multiple files into one <br>
<a href="https://www.npmjs.com/package/gulp-autoprefixer" rel="nofollow">gulp-autoprefixer</a> Automatically add prefixes to CSS <br>
<a href="https://www.npmjs.com/package/gulp-uglify-es" rel="nofollow">gulp-uglify-es</a> Code compression and optimization <br>
<a href="https://www.npmjs.com/package/del" rel="nofollow">del</a> Deleting directories and files <br>
<a href="https://browsersync.io/docs/gulp" rel="nofollow">browser-sync</a> Browser and Automatic site update when files change <br>
