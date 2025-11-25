export function encode(values: number[]): number[] {
  const out: number[] = []
  for (const val of values) {
    if (!Number.isInteger(val) || val < 0 || val > 0xffffffff) {
      throw new Error('Value out of range')
    }
    if (val === 0) {
      out.push(0)
      continue
    }

    const parts: number[] = []
    let v = val >>> 0
    while (v > 0) {
      parts.push(v & 0x7f)
      v = v >>> 7
    }
    // most-significant first
    for (let i = parts.length - 1; i >= 0; --i) {
      const isLast = i === 0
      const byte = parts[i] | (isLast ? 0x00 : 0x80)
      out.push(byte)
    }
  }
  return out
}

export function decode(bytes: number[]): number[] {
  const out: number[] = []
  let cur = 0
  let inContinuation = false

  for (const b of bytes) {
    if (!Number.isInteger(b) || b < 0 || b > 0xff) {
      throw new Error('Byte out of range')
    }
    const hasMore = (b & 0x80) !== 0
    const data = b & 0x7f
    cur = (cur << 7) | data
    if (!hasMore) {
      // finished value
      out.push(cur >>> 0)
      cur = 0
      inContinuation = false
    } else {
      inContinuation = true
    }
  }

  if (inContinuation) {
    throw new Error('Incomplete sequence')
  }

  return out
}
