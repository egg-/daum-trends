var trends = require('./')

trends.load([
  'real',
  'video',
  'kakaotv'
], function (err, result) {
  console.log(err, JSON.stringify(result))
})
