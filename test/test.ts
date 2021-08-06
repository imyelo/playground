import test from 'ava'
import { parseMemoryRequirement } from '..'

test('Parse Requirement with Number', (t) => {
  t.is(parseMemoryRequirement(42), 42)
})

test('Parse Requirement with Ki', (t) => {
  t.is(parseMemoryRequirement('1Ki'), 1024)
  t.is(parseMemoryRequirement('8Ki'), 8192)
})

test('Parse Requirement with Mi', (t) => {
  t.is(parseMemoryRequirement('1Mi'), 1048576)
  t.is(parseMemoryRequirement('8Mi'), 8388608)
})

test('Parse Requirement with Gi', (t) => {
  t.is(parseMemoryRequirement('1Gi'), 1073741824)
  t.is(parseMemoryRequirement('8Gi'), 8589934592)
})

test('Parse Requirement with Ti', (t) => {
  t.is(parseMemoryRequirement('1Ti'), 1099511627776)
  t.is(parseMemoryRequirement('8Ti'), 8796093022208)
})

test('Parse Requirement with Pi', (t) => {
  t.is(parseMemoryRequirement('1Pi'), 1125899906842624)
  t.is(parseMemoryRequirement('8Pi'), 9007199254740992)
})

test('Parse Requirement with Ei', (t) => {
  t.is(parseMemoryRequirement('1Ei'), 1152921504606847000)
  t.is(parseMemoryRequirement('8Ei'), 9223372036854776000)
})
