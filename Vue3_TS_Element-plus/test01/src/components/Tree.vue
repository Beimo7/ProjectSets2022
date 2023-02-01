<script setup lang="ts">
import { ref } from "vue";
let count = ref(0);
let isDone: boolean = true
let num: number = 0
let name: string = 'huhu'
let nameF: string = `hello, my name is ${name}`
let testValue = 1

let list: number[] = [1, 2, 3]
let listArray: Array<number> = [1, 2, 3]

let x: [string , number] = ['we', 90]
console.log({x})
console.log({isDone})
function update() {
  count.value += 1;
  // isDone = !isDone
  // testValue += 2
}
function change() {
  isDone = !isDone
  testValue += 2
  console.log({testValue})
}
</script>
<template>
  <div>
    <p>{{ nameF }}</p>
    <p>{{ isDone }}</p>
    <p>{{ testValue }}</p>
    <p class="divElem">{{ count }}</p>
    <el-button class="divElem" @click="update">按钮</el-button>
    <el-button @click="change">按钮按钮</el-button>
  </div>
</template>
<style scoped>
.divElem {
  display: inline-block;
}
p {
  margin-right: 100px;
}
</style>