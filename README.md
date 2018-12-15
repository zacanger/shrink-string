# shrink-string

Tiny string compression module

--------

## Installation

`npm i shrink-string`

## Usage

```javascript
const { encode, decode } = require('shrink-string')

const thing = async (s = '') => {
  const shrunk = await encode(s)
  const expanded = await decode(shrunk)
  assert(s === expanded)
}
```

## License

[MIT](./LICENSE.md)
