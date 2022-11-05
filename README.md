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
- Download all project files
- In the terminal go to the project directory
- Run the command: npm i (node.js must be installed)
- Create directories and files
- Execute command: gulp (run default)
- Write your code and enjoy the automatic building of the project.
