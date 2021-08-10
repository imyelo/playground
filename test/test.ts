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
