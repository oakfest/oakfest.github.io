# oakfest.net

[![Build Status](https://travis-ci.org/oakfest/oakfest.github.io.svg?branch=develop)](https://travis-ci.org/oakfest/oakfest.github.io)

## Contributing
Make all pull requests to develop. All changes to develop are automatically built and deployed to master by travisci.
Pull requests containing corrections, typo fixes, rewording, or additional info are greatly appreciated.

### Site content

All of the site content is generated from [data.js](https://github.com/oakfest/oakfest.github.io/blob/develop/data.js).
You can edit anything on the site by changing it in that file. All of the sponsors are in there too and the list of rules and faqs.

All sponsor images are stored in [src/images/sponsors](https://github.com/oakfest/oakfest.github.io/tree/develop/src/images/sponsors). 
Logos can be updated by just overwriting the images in that directory.

## Building Locally
```
$ yarn install
$ yarn run build
```
