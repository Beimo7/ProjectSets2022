/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function() {

eval("// import { hi } from '../m1'\n// console.log(Promise)\nvar sumFn = function sumFn(a, b) {\n  return a + b;\n};\nsumFn(1, 2);\nfunction fn(a, b) {\n  return a + b;\n}\nconsole.log(fn(1, 2));\nconsole.log('重新编译');\n// console.log(hi)\nvar obj = {\n  name: '孙悟空',\n  age: 33\n};\nconsole.log({\n  obj: obj\n});\nobj.age = 18;\nconsole.log({\n  obj: obj\n});\n// // export const hi =  '你好'\n// // let afg: string = '78'\n// //  afg = '90'\n// // function printLabel(labelledObj: { label: string }) {\n// //   console.log(labelledObj.label)\n// // }\n// // let myObj = { size: 10, label: 'Size'}\n// // printLabel(myObj)\n// interface labelledValue {\n//   label: string\n// }\n// function printLabel(labelledObj: labelledValue) {\n//   console.log(labelledObj.label)\n// }\n// let myObj = { size: 10, label: 'Size'}\n// printLabel(myObj)\n// interface SquareConfig {\n//   color?: string;\n//   width?: number;\n//   [propName: string]: any;\n// }\n// function createSquare(config: SquareConfig): { color: string ; area: number } {\n//   let newSquare = {color: 'white', area: 100};\n//   if (config.color) {\n//     newSquare.color = config.color\n//   }\n//   if (config.width) {\n//     newSquare.area = config.width * config.width\n//   }\n//   return newSquare\n// }\n// let mySquare = createSquare({opacity: 0.5, width: 90} as SquareConfig)\n// interface Point {\n//   readonly x: number;\n//   readonly y: number;\n// }\n// let mvalue: Point = {x: 1, y: 7}\n// // mvalue.x = 9\n// let mvalue001: number[] = [1, 2, 3];\n// let mvalue002: ReadonlyArray<number> = mvalue001;\n// // mvalue002[0] = 3\n// interface SearchFunc {\n//   (source: string, subString: string): boolean;\n// }\n// interface PointFun {\n//   (arg01: string ): string\n// }\n// let mySearch: SearchFunc\n// mySearch = function(source: string, subString: string) {\n//   let result = source.search(subString)\n//   return result > -1\n// }\n// interface StringArray {\n//   [index: number]: string\n// }\n// let myArray: StringArray = [\"Bob\", \"Fred\"]\n// // myArray = [\"Bob\", \"Fred\"]\n// let myStr: string = myArray[0]\n// // class Animal {\n// //   name: string;\n// // }\n// // class Dog {\n// //   breed: string;\n// // }\n// // interface NotOkay {\n// //   [x: string]: Animal;\n// //   [x: string]: Dog;\n// // }\n// interface ReadonlyStringArray {\n//   readonly [index: number]: string;\n// }\n// // let myArr: ReadonlyStringArray = [\"AMY\", \"Boh\"]\n// // myArr[2] = \"Marry\"  // ERROR\n// // interface ClockInterface {\n// //   currentTime: Date;\n// // }\n// // class Clock implements ClockInterface {\n// //   currentTime: Date;\n// //   constructor(h: number, m: number) { }\n// // }\n// interface ClockInterfaceFirst {\n//   currentTime: Date;\n//   setTime(d: Date): void;\n// }\n// // interface ClockFirst implements ClockInterfaceFirst {\n// //   currentTime: Date;\n// //   setTime(d: Date): void {\n// //     // this.currentTime = d;\n// //   }\n// //   constructor(h: number, m: number) { }\n// // }\n// function fn2(this: Window) {\n//   alert(this)\n// }\n// // ?.可选链操作符\n// let box1 = document.getElementById('box1')\n// box1?.addEventListener('click', function() {\n//   alert('hello')\n// })\n\n//# sourceURL=webpack://part01/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;