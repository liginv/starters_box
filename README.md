# STARTER'S BOX

This is a boilerplate for an easy start on web project(s) with latest technologies.

### Technologies:

* **Webpack 2** (*for tasks & bundling*)
* **Service Worker** (*for [PWA](https://developers.google.com/web/progressive-web-apps/)*)
* **SCSS with hot-reload** (*for easy styling of css*)
* **Babel complier** (*for ES2015 support across browsers*)
* **Production & Development Environment** (*for easy development workflow*)
* **[package-lock.json](https://docs.npmjs.com/files/package-lock.json)** (*to guarantee the dependency tree 
across developers*)

### Prerequisites:

* node version: 5+

```
% node -v
v5.X.X or above
```

* webpack 2

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

*	**To install dependencies**

```
% npm install
```

* **To build the public directory**

```
% npm run build
```

* **To build and serve the site in localhost**

```
% npm run start
```

* **To build production-ready public files & folders**

```
% npm run production
```

* **To see the statistics of the build and other insights**

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
