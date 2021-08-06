/** 解析内存规格 */
export const parseMemoryRequirement = (valueRaw: string | number): number => {
  if (typeof valueRaw === 'number') {
    return valueRaw;
  }
  if (typeof valueRaw === 'string') {
    let matched;
    matched = valueRaw.match(/^(\d+)Ki$/)
    if (matched) {
      return matched[1] * 1024
    }
    matched = valueRaw.match(/^(\d+)Mi$/)
    if (matched) {
      return matched[1] * 1024 * 1024
    }
    matched = valueRaw.match(/^(\d+)Gi$/)
    if (matched) {
      return matched[1] * 1024 * 1024 * 1024
    }
    matched = valueRaw.match(/^(\d+)Ti$/)
    if (matched) {
      return matched[1] * 1024 * 1024 * 1024 * 1024
    }
    matched = valueRaw.match(/^(\d+)Pi$/)
    if (matched) {
      return matched[1] * 1024 * 1024 * 1024 * 1024 * 1024
    }
    matched = valueRaw.match(/^(\d+)Ei$/)
    if (matched) {
      return matched[1] * 1024 * 1024 * 1024 * 1024 * 1024 * 1024
    }
  }
  throw new Error('Invalid requirement format.')
}
