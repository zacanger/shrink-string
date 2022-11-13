const test = require('tape-async')
const { compress, decompress } = require('./lib')

test('shrink', async (t) => {
  const s = 'asdfλ'.repeat(16)
  const shrunk = await compress(s)
  const expanded = await decompress(shrunk)
  t.equal(s, expanded)
  t.true(shrunk.length < expanded.length)
})
