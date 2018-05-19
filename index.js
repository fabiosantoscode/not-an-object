'don\'t use strict see if I care'

if (Object.defineProperty) {
  Object.defineProperty(global, 'NaO', {
    get: function () {
      return {
        valueOf: function() {
          return {}
        }
      }
    },
    enumerable: true
  })

  global.isNaO = function (isItAnObject) {
    if (isNaN(isItAnObject)) return false
    return isItAnObject !== isItAnObject
  }
}

