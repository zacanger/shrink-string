# shrink-string

Tiny string compression module for Node.

[![Support with PayPal](https://img.shields.io/badge/paypal-donate-yellow.png)](https://paypal.me/zacanger) [![Patreon](https://img.shields.io/badge/patreon-donate-yellow.svg)](https://www.patreon.com/zacanger) [![ko-fi](https://img.shields.io/badge/donate-KoFi-yellow.svg)](https://ko-fi.com/U7U2110VB)

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

[LICENSE](./LICENSE.md)
