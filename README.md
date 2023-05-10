# shrink-string

Tiny string compression module for Node.

[Donate](https://ko-fi.com/zacanger)

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

Thanks to [MrlolDev](https://github.com/MrlolDev) for adding TypeScript support.

[LICENSE](./LICENSE.md)
