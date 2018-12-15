# shrink-string

Tiny string compression module

--------

## Installation

`npm i shrink-string`

## Usage

```javascript
const { compress, decompress } = require('shrink-string')

// `compress` takes a unicode string and returns a base64 string
// `decompress` takes that base64 string and returns the original unicode string

const thing = async (s = '') => {
  const shrunk = await compress(s)
  const expanded = await decompress(shrunk)
  assert(s === expanded)
}
```

## License

[MIT](./LICENSE.md)
