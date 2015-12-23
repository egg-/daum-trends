# daum-trends

Scrap recent trend words(실시간 이슈) on Daum for Node.js

The unofficial module to crawl the content of the site.
Therefore, whenever it may not be a normal operation, if problems occur, please add the issue.

### Important
* not support trend word's create time.


[![version](https://img.shields.io/npm/v/daum-trends.svg) ![download](https://img.shields.io/npm/dm/daum-trends.svg)](https://www.npmjs.com/package/daum-trends)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)


## Usage

```javascript
var trends = require('daum-trends')

trends.load(['real'], function (err, result) {
  console.log(err, JSON.stringify(result))
})

```

```javascript
// output
{
  "real": [
    {
      "title": "강성",
      "link": "https://m.search.daum.net/search?w=tot&amp;q=%EA%B0%95%EC%84%B1&amp;DA=ATG&amp;nil_mtopsearch=issuekwd&amp;logical=issue&amp;pin=issue",
      "type": "+",
      "num": 244,
      "ctime": 0
    },
    // ...
  ]
}
```

### type list
* `+`, `-`, `0`, `new`

## LICENSE

daum-trends is licensed under the MIT license.
