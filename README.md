# STARTER'S BOX
---
This is a boilerplate for easy start on web project with latest technology out-of-the-box.

### Technology includes:
* **Webpack 2** (*for tasks & bundling*)
* **Service Worker** (*for PWA*)
* **SCSS with hot-reload** (*for easy styling of css*)
* **Babel complier** (*for ES2015 support across browsers*)
* **Production & Development Environment** (*for easy development workflow*)
* **package-lock.json** (*for guarantee the dependencies across developer*)


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

* **To build the production-ready public files & folders** <br>
```
% npm run production
```

