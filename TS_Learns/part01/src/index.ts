// import { hi } from '../m1'


// console.log(Promise)
let sumFn = (a: number, b: number): number => {
  return a + b
} 
sumFn(1, 2)
function fn(a: number, b: number): number {
  return a + b
}

console.log(fn(1, 2))

console.log('重新编译')

// console.log(hi)

const obj = { name: '孙悟空', age: 33};
console.log({obj})
obj.age = 18
console.log({obj})






// // export const hi =  '你好'
// // let afg: string = '78'
// //  afg = '90'

// // function printLabel(labelledObj: { label: string }) {
// //   console.log(labelledObj.label)
// // }

// // let myObj = { size: 10, label: 'Size'}
// // printLabel(myObj)

// interface labelledValue {
//   label: string
// }
// function printLabel(labelledObj: labelledValue) {
//   console.log(labelledObj.label)
// }
// let myObj = { size: 10, label: 'Size'}
// printLabel(myObj)

// interface SquareConfig {
//   color?: string;
//   width?: number;
//   [propName: string]: any;
// }
// function createSquare(config: SquareConfig): { color: string ; area: number } {
//   let newSquare = {color: 'white', area: 100};
//   if (config.color) {
//     newSquare.color = config.color
//   }
//   if (config.width) {
//     newSquare.area = config.width * config.width
//   }
//   return newSquare
// }
// let mySquare = createSquare({opacity: 0.5, width: 90} as SquareConfig)

// interface Point {
//   readonly x: number;
//   readonly y: number;
// }

// let mvalue: Point = {x: 1, y: 7}
// // mvalue.x = 9

// let mvalue001: number[] = [1, 2, 3];
// let mvalue002: ReadonlyArray<number> = mvalue001;
// // mvalue002[0] = 3

// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }

// interface PointFun {
//   (arg01: string ): string
// }
// let mySearch: SearchFunc
// mySearch = function(source: string, subString: string) {
//   let result = source.search(subString)
//   return result > -1
// }

// interface StringArray {
//   [index: number]: string
// }

// let myArray: StringArray = ["Bob", "Fred"]
// // myArray = ["Bob", "Fred"]
// let myStr: string = myArray[0]

// // class Animal {
// //   name: string;
// // }

// // class Dog {
// //   breed: string;
// // }

// // interface NotOkay {
// //   [x: string]: Animal;
// //   [x: string]: Dog;
// // }

// interface ReadonlyStringArray {
//   readonly [index: number]: string;
// }
// // let myArr: ReadonlyStringArray = ["AMY", "Boh"]
// // myArr[2] = "Marry"  // ERROR

// // interface ClockInterface {
// //   currentTime: Date;
// // }
// // class Clock implements ClockInterface {
// //   currentTime: Date;
// //   constructor(h: number, m: number) { }
// // }

// interface ClockInterfaceFirst {
//   currentTime: Date;
//   setTime(d: Date): void;
// }

// // interface ClockFirst implements ClockInterfaceFirst {
// //   currentTime: Date;
// //   setTime(d: Date): void {
// //     // this.currentTime = d;
// //   }
// //   constructor(h: number, m: number) { }
// // }

// function fn2(this: Window) {
//   alert(this)
// }

// // ?.可选链操作符
// let box1 = document.getElementById('box1')
// box1?.addEventListener('click', function() {
//   alert('hello')
// })