var request = require('request')
var cheerio = require('cheerio')

module.exports = function (cb) {
  request({
    url: 'http://search.daum.net/search?w=vclip&q=video',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.106 Safari/537.36'
    }
  }, function (err, res, body) {
    if (err) {
      return cb(err)
    }

    var $ = cheerio.load(body)
    var $vclip = $('div.wing_issue_vclip')
    var $list = $vclip.find('li')
    var words = []

    for (var i = 0, $item = null, title = null; i < $list.length; i++) {
      $item = $($list[i])
      title = $item.find('a.f_elink').text()

      words.push({
        title: title,
        link: 'http://search.daum.net/search?w=vclip&video&q=' + encodeURIComponent(title),
        type: toType($item.find('span.ico_comm1').attr('class')),
        num: parseInt($item.find('span.num').text(), 10),
        ctime: 0
      })
    }

    cb(null, words)
  })
}

var toType = function (str) {
  if (str.indexOf('ico_up') !== -1) {
    return '+'
  } else if (str.indexOf('ico_down') !== -1) {
    return '-'
  } else if (str.indexOf('ico_stay') !== -1) {
    return '0'
  } else if (str.indexOf('ico_new') !== -1) {
    return 'new'
  }

  return ''
}
