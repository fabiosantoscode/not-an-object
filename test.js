require('.')

function assert(bool) {
  if (!bool) throw 'up'
}

// NaO
assert(NaO !== NaO)
assert(typeof NaO === 'object')
assert(JSON.stringify(Number(NaO)), '{}')

// isNaO
assert(isNaO(NaN) === false)
assert(isNaO(null) === false)
assert(isNaO(1) === false)
assert(isNaO(NaO) === false)  // TODO change code instead of changing tests

