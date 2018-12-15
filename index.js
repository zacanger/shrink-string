const { gzip, gunzip } = require('zlib')
const { promisify } = require('util')
const { Buffer } = require('buffer')

const gz = promisify(gzip)
const ugz = promisify(gunzip)

const encode = async (s = '') => {
  const compressed = await gz(s)
  return Buffer.from(compressed).toString('base64')
}

const decode = async (s = '') => {
  const decompressed = await ugz(Buffer.from(Buffer.from(s, 'base64')))
  return decompressed.toString()
}

module.exports = {
  encode, decode
}
