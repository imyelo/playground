import test from 'ava'
import { parseMemoryRequirement } from '..'

test('Parse Requirement with Number', (t) => {
  t.is(parseMemoryRequirement(42), 42)
})

test('Parse Requirement with Ki, Mi, Gi, Ti, Pi, Ei', (t) => {
  t.is(parseMemoryRequirement('1Ki'), 1024)
  t.is(parseMemoryRequirement('8Ki'), 8192)
  t.is(parseMemoryRequirement('1Mi'), 1048576)
  t.is(parseMemoryRequirement('8Mi'), 8388608)
  t.is(parseMemoryRequirement('1Gi'), 1073741824)
  t.is(parseMemoryRequirement('8Gi'), 8589934592)
  t.is(parseMemoryRequirement('1Ti'), 1099511627776)
  t.is(parseMemoryRequirement('8Ti'), 8796093022208)
  t.is(parseMemoryRequirement('1Pi'), 1125899906842624)
  t.is(parseMemoryRequirement('8Pi'), 9007199254740992)
  t.is(parseMemoryRequirement('1Ei'), 1152921504606847000)
  t.is(parseMemoryRequirement('8Ei'), 9223372036854776000)
})

test('Parse Requirement with K, M, G, T, P, E', (t) => {
  t.is(parseMemoryRequirement('1K'), 1000)
  t.is(parseMemoryRequirement('8K'), 8000)
  t.is(parseMemoryRequirement('1M'), 1000000)
  t.is(parseMemoryRequirement('8M'), 8000000)
  t.is(parseMemoryRequirement('1G'), 1000000000)
  t.is(parseMemoryRequirement('8G'), 8000000000)
  t.is(parseMemoryRequirement('1T'), 1000000000000)
  t.is(parseMemoryRequirement('8T'), 8000000000000)
  t.is(parseMemoryRequirement('1P'), 1000000000000000)
  t.is(parseMemoryRequirement('8P'), 8000000000000000)
  t.is(parseMemoryRequirement('1E'), 1000000000000000000)
  t.is(parseMemoryRequirement('8E'), 8000000000000000000)
})

test('Parse Requirement with dot', (t) => {
  t.is(parseMemoryRequirement('2.5Ki'), 2560)
  t.is(parseMemoryRequirement('2.5Mi'), 2621440)
  t.is(parseMemoryRequirement('2.5Gi'), 2684354560)
  t.is(parseMemoryRequirement('2.5Ti'), 2748779069440)
  t.is(parseMemoryRequirement('2.5Pi'), 2814749767106560)
  t.is(parseMemoryRequirement('2.5Ei'), 2882303761517117400)
  t.is(parseMemoryRequirement('2.5K'), 2500)
  t.is(parseMemoryRequirement('2.5M'), 2500000)
  t.is(parseMemoryRequirement('2.5G'), 2500000000)
  t.is(parseMemoryRequirement('2.5T'), 2500000000000)
  t.is(parseMemoryRequirement('2.5P'), 2500000000000000)
  t.is(parseMemoryRequirement('2.5E'), 2500000000000000000)
})

test('Parse Requirement with e', (t) => {
  t.is(parseMemoryRequirement('2.4e3Ki'), 2457600)
  t.is(parseMemoryRequirement('2.4e3Mi'), 2516582400)
  t.is(parseMemoryRequirement('2.4e3Gi'), 2576980377600)
  t.is(parseMemoryRequirement('2.4e3Ti'), 2638827906662400)
  t.is(parseMemoryRequirement('2.4e3Pi'), 2702159776422297600)
  t.is(parseMemoryRequirement('2.4e3Ei'), 2.767011611056433e+21)
  t.is(parseMemoryRequirement('2.4e3K'), 2400000)
  t.is(parseMemoryRequirement('2.4e3M'), 2400000000)
  t.is(parseMemoryRequirement('2.4e3G'), 2400000000000)
  t.is(parseMemoryRequirement('2.4e3T'), 2400000000000000)
  t.is(parseMemoryRequirement('2.4e3P'), 2400000000000000000)
  t.is(parseMemoryRequirement('2.4e3E'), 2400000000000000000000)
})
