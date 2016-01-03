var trends = require('./')

trends.load(['real', 'video'], function (err, result) {
  console.log(err, JSON.stringify(result))
})
