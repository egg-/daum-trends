var trends = require('./')

trends.load(['real'], function (err, result) {
  console.log(err, JSON.stringify(result))
})
