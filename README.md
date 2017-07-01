# semistandard-prettier-eslint

Formats your JavaScript using [`prettier`](https://github.com/jlongster/prettier) followed by [`semistandard --fix`][semistandard]

[![npm version](https://badge.fury.io/js/semistandard-prettier-eslint.svg)](https://badge.fury.io/js/semistandard-prettier-eslint)
[![npm downloads](https://img.shields.io/npm/dm/semistandard-prettier-eslint.svg?style=flat-square)](https://www.npmjs.com/package/semistandard-prettier-eslint)

*  [prettier](https://github.com/prettier/prettier) is a wonderful tool for code prettify.
*  [semistandard][semistandard] is `zero configuration pain` tool based on ESLint.

The two packages are great and very well designed, that can be used together with a minimum effort


## Installation
    $ npm install semistandard-prettier-eslint --save-dev

## Usage
Ex: package.json
```json
"scripts": {
  ...
  "lint": "semistandard --fix --verbose | snazzy",
  "format": "prettier-eslint --write '**/*.js' --eslint-path=node_modules/semistandard-prettier-eslint"
}
```

### If you don't like `semicolons` use **standard** version
* [standard-prettier-eslint](https://github.com/bySabi/standard-prettier-eslint)

## Contributing

* Documentation improvement
* Feel free to send any PR

## License

[MIT][mit-license]

[mit-license]:./LICENSE

[semistandard]: https://github.com/Flet/semistandard