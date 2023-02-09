<template>
  <h2>这是定价页面</h2>
  <el-button @click="update">添加高亮块</el-button>
  <full-screen></full-screen>
</template>
<script setup lang="ts">
import Vue from 'vue'
import Quote from '../../components/Quote.vue'
import FullScreen from '../../components/FullScreen.vue'
function update() {
  // 获取body，创建一个新的div节点
  let body = document.body
  let bindPhone = document.createElement('div')
  // 创建的bindPhone设置id为quote
  bindPhone.setAttribute('id', 'quote')
  // 将创建的div添加到body后
  // body.appendChild(bindPhone)
  // return 一个新的vue实例并且将实例挂载到刚创建的DOM节点上
}
interface rightType {
  type: number;
  value: personOrTeam;
}
interface personOrTeam {
  type: number;
  value: string;
  rights: Array<string>;
  price: number;
}
</script>