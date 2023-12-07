<script setup lang="ts">
import { useUsersStore } from '../src/store/user'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
const store = useUsersStore()
// 对象类型会自动变成响应式的数据
// const person = store.person
// 单个值不会变成响应式数据，需要通过ref转化
// const address = ref(store.address)
// 如果有多个数据，使用解构赋值
const { person, address } = storeToRefs(store)
console.log({store})
const funBtn = () => {
  person.value.name += 'xxxx'
  address.value += 'y'
}
const reset = () => {
  // 一开始使用好像有点问题
  store.$reset()
}
const patchChange = () => {
  store.$patch((state) => {
    state.person.name = 'tyu'
    state.address = 'op'
  })
}
const state = () => {
  store.$state = {
    person: {
      name: 'ere',
      age: 89,
      sex: 'female'
    },
    address: 'erty'
  }
}
const saveName = () => {
  store.saveName('p')
}
</script>
<template>
  <!-- <p>{{ person.name }}</p>
  <p>{{ person.age }}</p>
  <p>{{ person.sex }}</p>
  <p>{{ address }}</p>
  <p>新年龄{{ store.getAddAge(40) }}</p>
  <p>新内容{{ store.getNameAndAge }}</p>
  <el-button @click="funBtn">change</el-button>
  <el-button @click="reset">reset</el-button>
  <el-button @click="patchChange">patchChange</el-button>
  <el-button @click="state">state</el-button>
  <el-button @click="saveName">saveName</el-button> -->
  <router-view></router-view>
</template>