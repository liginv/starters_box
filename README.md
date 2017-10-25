# STARTER'S BOX

This is a boilerplate for a easy start on web project(s) with latest technologies.

### Technologies:
* **Webpack 2** (*for tasks & bundling*)
* **Service Worker** (*for PWA*)
* **SCSS with hot-reload** (*for easy styling of css*)
* **Babel complier** (*for ES2015 support across browsers*)
* **Production & Development Environment** (*for easy development workflow*)
* **package-lock.json** (*for guarantee the dependencies across developer*)

### Prerequisite:
* node version:5+ <br>
```
% node -v
v5.X.X or above
```

* webpack 2 <br>
```
% npm install -g webpack
```

### Folder Structure:
```
├── .babelrc
├── .gitignore
├── README.md
├── package-lock.json
├── package.json
├── src
│   ├── assets
│   │   ├── fonts
│   │   ├── icons
│   │   ├── images
│   │   ├── stylesheets
│   │       └── styles.scss
│   ├── index.html
│   ├── index.js
│   └── sw.js
├── postcss.config.js
└── webpack.config.js
```

### Commands:

*	**To install dependencies** <br>
```
% npm install
```

* **To build the public directory** <br>
```
% npm run build
```

* **To build and serve the site in localhost** <br>
```
% npm run start
```

* **To build production-ready public files & folders** <br>
```
% npm run production
```

* **To see the statistics of the build and other insights** <br>
```
% npm run stat
```

### Notes:
* Create your files in **src** folder & calling upon any of the build process will create a **public** directory that serve the old fashion html folder(*except the service-worker(sw.js) file*).

```
public
├── images
│   └── . . .
├── index.html
├── script.js
├── styles.css
└── sw.js
```