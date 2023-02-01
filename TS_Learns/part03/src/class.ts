// 使用class 定义类

// 类中 包含  属性 和 方法
class Person {
  // 定义实例属性
  name: string = 'sunwukong';
  static age: number = 23;

  // 在属性前使用static关键字可以定义类属性/静态属性
}
let per = new Person()
console.log(Person.age)
console.log({per})
// console.log(per.name, per.age) // 打印实例属性
// console.log(Person.age) // 打印静态属性/类属性