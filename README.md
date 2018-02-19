# censor-swears
A helper package for censoring swear words in different ways.

## Install
Install with [npm](https://www.npmjs.com/)
```bash
$ npm install --save censor-swears
```

## Usage
### [vowel](index.js#L19)
Converts all vowels inside a swear into asterisks, or any character you supply.  
Takes: `(string, character?)`  
Returns: `string`
```js
var cs = require('censor-swears')
cs('butt') // 'b*tt'
cs('butt', '&') // 'b&tt'
```
`vowel` can also be called with `cs.vowel`.

### [inner](index.js#L23)
Converts all inner characters of a string into asterisks, or any other character you supply.  
Takes: `(string, character?)`  
Returns: `string`
```js
var cs = require('censor-swears')
cs.inner('butt') // 'b**t'
cs.inner('butt', '@') // 'b@@t'
```

### [grawlix](index.js#L35)
Converts all characters in a string into a grawlix pattern, which you can also supply yourself.  
Takes: `(string || number, pattern?)`  
Returns: `string`
```js
var cs = require('cs')
cs.grawlix('butt') // '@#$%'
cs.grawlix('butt', 'nice') // 'nice'
cs.grawlix(6) // '@#$%!&'
cs.grawlix(7, 'verynice') // 'verynic'
```

## License
[MIT](LICENSE)