var request = require('request')
var cheerio = require('cheerio')
var safeEval = require('safe-eval')

module.exports = function (cb) {
  request('http://m.daum.net', function (err, res, body) {
    if (err) {
      return cb(err)
    }

    var $ = cheerio.load(body)
    var $items = $('script')

    for (var i = 0; i < $items.length; i++) {
      var src = $($items[i]).text()
      var start = 'var hotissueData = include('
      var pos = src.indexOf('var hotissueData = include(')

      if (pos !== -1) {
        var tmp = src.substring(pos + start.length, src.indexOf(');'))
        var data = normalize(tmp)

        return parse(data['hotissue'], cb)
      }
    }

    return cb(null, {})
  })
}

var normalize = function (str) {
  var data = safeEval(str)
  var map = {}

  for (var i = 0; i < data.length; i++) {
    map[data[i].type] = data[i].list
  }

  return map
}

var parse = function (items, cb) {
  var words = []

  for (var i = 0, item = null; i < items.length; i++) {
    item = items[i]
    words.push({
      title: item.keyword,
      link: item.linkurl.replace(/&amp;/gi, '&'),
      type: item.type, // + - 0 new
      num: parseInt(item.value, 10),
      ctime: 0
    })
  }

  cb(null, words)
}
