require('.')

function assert(bool) {
  if (!bool) throw 'up'
}

assert(NaO !== NaO)
assert(typeof NaO === 'object')
assert(JSON.stringify(Number(NaO)), '{}')

