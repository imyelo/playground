/** 二指数单位 */
const POWER_OF_TWO = { '': 0, Ki: 10, Mi: 20, Gi: 30, Ti: 40, Pi: 50, Ei: 60 };

/** 解析内存规格 */
export const parseMemoryRequirement = (valueRaw: string | number): number => {
  if (typeof valueRaw === 'number') {
    return valueRaw;
  }
  if (typeof valueRaw === 'string') {
    let matched;
    matched = valueRaw.match(/^(\d+)(|Ki|Mi|Gi|Ti|Pi|Ei)$/);
    if (matched) {
      return matched[1] * 2 ** POWER_OF_TWO[matched[2]];
    }
  }
  return;
}
