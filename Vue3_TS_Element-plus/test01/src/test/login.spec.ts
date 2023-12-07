/*
 * @Author: Beimo7 2603343203@qq.com
 * @Date: 2023-02-08 16:37:26
 * @LastEditors: Beimo7 2603343203@qq.com
 * @LastEditTime: 2023-03-01 17:12:13
 * @FilePath: \test01\src\test\login.spec.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { describe, expect, test } from 'vitest'
// import Login from '../views/login'
import { bench } from 'vitest'

describe('Login', () => {
  bench(
    'normal sorting',
    () => {
      const x = [1, 5, 4, 2, 3]
      x.sort((a, b) => {
        return a - b
      })
    },
    { time: 1000}
  )
  
  test('test math', () => {
    expect(Math.sqrt(4)).toBe(2)
  }, 1000)
  test.todo('houlai')
  test('fails test', () => {
    expect(Math.sqrt(4)).toBe(2)
  })
  test.each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3]
  ])('add(%i, %i) -> %i', (a, b, expected) => {
    expect( a + b).toBe(expected)
  })
  test.each([
    {a: 1, b: 1, expected: 2},
    {a: 1, b: 2, expected: 3},
    {a: 2, b: 1, expected: 3}
  ]) ('add($a, $b) -> $expected', ({a, b, expected}) => {
    expect(a + b).toBe(expected)
  })
  test.each `
  a           | b      | expected
  ${{val: 1}} | ${'b'} | ${'1b'}
  ${{val: 2}} | ${'b'} | ${'2b'}
  ${{val: 3}} | ${'b'} | ${'3b'}`
  ('add($a.val, $b => $expected', ({a, b, expected}) => {
    expected(a.val + b).toBe(expected)
  })

})