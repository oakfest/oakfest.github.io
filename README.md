# oakfest.net

[![Build Status](https://travis-ci.org/oakfest/oakfest.github.io.svg?branch=develop)](https://travis-ci.org/oakfest/oakfest.github.io)

## Contributing
Make all pull requests to develop. All changes to develop are automatically built and deployed to master by travisci.
Pull requests containing corrections, typo fixes, rewording, or additional info are greatly appreciated.

### Homepage
Changes to the homepage can be made at [src/index.ejs](https://github.com/oakfest/oakfest.github.io/tree/develop/src/index.ejs).

### Sponsors
The sponsors page is generated from the list of sponsors in [sponsor-list.js](https://github.com/oakfest/oakfest.github.io/blob/develop/sponsor-list.js).
All sponsor images are stored in [src/images/sponsors](https://github.com/oakfest/oakfest.github.io/tree/develop/src/images/sponsors). 
Logos can be updated by just overwriting the images in that directory. Other changes to the sponsor page can be made at
[src/sponsors.ejs](https://github.com/oakfest/oakfest.github.io/tree/develop/src/sponsors.ejs).

## Building Locally
```
$ npm install
$ npm run build
```
