import { gzip, gunzip } from 'zlib'
import { promisify } from 'util'
import { Buffer } from 'buffer'

const gz = promisify(gzip)
const ugz = promisify(gunzip)

const compress = async (s: string = ''): Promise<string> => {
  const compressed = await gz(s)
  return Buffer.from(compressed).toString('base64')
}

const decompress = async (s: string = ''): Promise<string> => {
  const decompressed = await ugz(Buffer.from(Buffer.from(s, 'base64')))
  return decompressed.toString()
}

export = {
  compress,
  decompress
}
