var async = require('async')

module.exports = {
  load: function (targets, cb) {
    if (targets instanceof Array === false) {
      targets = [targets]
    }

    var tasks = {}

    for (var i = 0, name = null; i < targets.length; i++) {
      name = targets[i]

      if (crawler[name]) {
        tasks[name] = crawler[name]
      }
    }

    async.parallel(tasks, cb)
  }
}

var crawler = {
  real: require('./real'),
  video: require('./video'),
  kakaotv: require('./kakaotv')
}
