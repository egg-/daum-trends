var request = require('request')
var cheerio = require('cheerio')

module.exports = function (cb) {
  request('https://tv.kakao.com/', function (err, res, body) {
    if (err) {
      return cb(err)
    }

    var $ = cheerio.load(body)
    var $items = $('ol.list_realtime li')
    var $item
    var $anchor
    var $state
    var num
    var type
    var items = []

    for (var i = 0; i < $items.length; i++) {
      $item = $($items[i])
      $anchor = $($item.find('> a'))
      $state = $($item.find('span.state_g > span'))

      if ($state.length > 1) {
        num = parseInt($($state[0]).text(), 10)
        type = toType($($state[1]).attr('class'))
      } else {
        type = toType($($state[0]).attr('class'))
        num = 0
      }

      items.push({
        title: $($anchor.find('strong')).text(),
        link: 'https://tv.kakao.com' + $anchor.attr('href'),
        type: type,
        num: num,
        ctime: 0
      })
    }

    return cb(null, items)
  })
}

var toType = function (str) {
  if (str.indexOf('ico_up') !== -1) {
    return '+'
  } else if (str.indexOf('ico_down') !== -1) {
    return '-'
  } else if (str.indexOf('ico_stay') !== -1) {
    return '0'
  } else if (str.indexOf('txt_new') !== -1) {
    return 'new'
  }

  return ''
}
