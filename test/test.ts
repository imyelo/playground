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
