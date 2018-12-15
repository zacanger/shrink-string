const test = require('tape-async')
const { encode, decode } = require('.')

test('shrink', async (t) => {
  const s = 'asdf'.repeat(16)
  const shrunk = await encode(s)
  const expanded = await decode(shrunk)
  t.equal(s, expanded)
  t.true(shrunk.length < expanded.length)
})
