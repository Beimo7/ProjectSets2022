import { test, expect } from "vitest"
import { add } from "../src/add";
// import HelloWorld from "../src/components/HelloWorld.vue"

test('first test', () => {
  expect(1 + 1).toBe(2)
})

test("second test", () => {
  expect(add(1, 2)).toBe(3)
})

test('snap', () => {
  const result = Math.sqrt(4)
  expect(result).toMatchInlineSnapshot('2')
})

// test("hello", () => {
//   console.log(HelloWorld)
// })