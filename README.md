# daum-trends

Scrap recent trend words(실시간 이슈, 실시간 동영상) on Daum for Node.js

The unofficial module to crawl the content of the site.
Therefore, whenever it may not be a normal operation, if problems occur, please add the issue.

### Important
* not support trend word's create time.


[![version](https://img.shields.io/npm/v/daum-trends.svg) ![download](https://img.shields.io/npm/dm/daum-trends.svg)](https://www.npmjs.com/package/daum-trends)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)


## Usage

```javascript
var trends = require('daum-trends')

trends.load(['real', 'video', 'kakaotv'], function (err, result) {
  console.log(err, JSON.stringify(result))
})

```

```javascript
// output
{
  "real": [
    {
      "title": "강성",
      "link": "https://m.search.daum.net/search?w=tot&q=%EA%B0%95%EC%84%B1&DA=ATG&nil_mtopsearch=issuekwd&logical=issue&pin=issue",
      "type": "+",
      "num": 244,
      "ctime": 0
    },
    // ...
  ],
  "video": [
    {
      "title": "내딸 금사월",
      "link": "http://search.daum.net/search?w=vclip&video&q=%EB%82%B4%EB%94%B8%20%EA%B8%88%EC%82%AC%EC%9B%94",
      "type": "+",
      "num": 96,
      "ctime": 0
    },
  ],
    // ...
  "kakaotv": [
    {
      "title": "황희찬 드리블",
      "link": "https://tv.kakao.com/search?q=%ED%99%A9%ED%9D%AC%EC%B0%AC+%EB%93%9C%EB%A6%AC%EB%B8%94",
      "type": "+",
      "num": 78,
      "ctime": 0
    },
    // ...
  ]
}
```

## crawler types
* `real`, `video`, `kakaotv`

### type list
* `+`, `-`, `0`, `new`

## LICENSE

daum-trends is licensed under the MIT license.
