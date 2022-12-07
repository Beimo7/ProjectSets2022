let a: number = 90
let b: string = '90'

// 字面量
let c: 12

let d: any
if (typeof d === 'string') {
  d = '12'
}

let aa: (a: number, b: number) => number
aa = function (n1, n2): number {
  return n1 + n2
}

let isDone: boolean = false
let dicLiteral: number = 6
let hexLiteral: number = 0xf00d
let binaryLiteral: number = 0b1010
let octalLiteral: number = 0o744

let nam: string = 'bob'
nam = 'smith'

let age: number = 89
let sentence: string = `hello, my name is ${nam}. i will be ${age + 1} years old next month`

// let list: number[] = [1, 2, 3]
let list: Array<number> = [1, 2, 3]
let x: [string, number]
x = ['bob', 10]
let notStore: any = 5

function warnUser(): void {
  console.log('xxx')
}

let aaa: void = undefined
let bbb: void = null

let o = {
  oname: 'atina',
  oage: 90,
  osex: 'female'
}

let { oa, oage} = o



