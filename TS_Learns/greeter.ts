let a: number = 90
let b: string = '90'

// 字面量
let c: 12

let d: any
if (typeof d === 'string') {
  d = '12'
}

let aa: (a: number, b: number) => number
aa = function(n1, n2):number {
  return n1 + n2
}