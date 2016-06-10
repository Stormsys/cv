[![Build Status](https://travis-ci.org/Stormsys/cv.svg?branch=master)](https://travis-ci.org/Stormsys/cv)

# My CV - Diogo Moura

Source code for my CV, live version available at [Github Pages](https://stormsys.github.io/cv).

## Development

The web app requires Node.js and uses Bower and Gulp to build and fetch dependencies. Once you have installed node,
run the following commands to install bower and gulp on your system.

``` sh
npm install -g bower
npm install -g gulp-cli
```


With these tools installed, we can now fetch our dependencies

``` sh
npm install
bower install
```

at this stage we can operate a development environment, by either serving this folder with an external tool or running
the gulp serve command. this runs a development version of the app which parses the less source in real time.

``` sh
gulp serve
```

## Deployment

Once we are happy with the development version of the CV we can create a dist package.

``` sh
gulp build
```

For convenience we can also run the browser automatically which will also trigger a full build.

``` sh
gulp view
```

