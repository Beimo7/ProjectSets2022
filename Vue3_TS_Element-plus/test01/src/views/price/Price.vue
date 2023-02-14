<template>
  <head-bar></head-bar>
  <full-screen></full-screen>
  <div class="price">
    <div class="price-head">
      <h1>个人、团队皆可使用</h1>
      <p>让每一位知识工作者，获得优秀的文档与知识库工具</p>
    </div>
    <div class="price-container">
      <div class="price-container-bar">
        <!-- <div class="price-container-bar-personal">
          <b>个人使用</b>
        </div>
        <div class="price-container-bat-team"></div> -->
        <el-button larger><b>个人使用</b></el-button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Vue from "vue";
import Quote from "../../components/Quote.vue";
import FullScreen from "../../components/FullScreen.vue";
import { ref } from 'vue'
const showPersonal = ref(false)
function update() {
  // 获取body，创建一个新的div节点
  let body = document.body;
  let bindPhone = document.createElement("div");
  // 创建的bindPhone设置id为quote
  bindPhone.setAttribute("id", "quote");
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
<style lang="sass" >
.price-head
  text-align: center
  p 
    color: gray
.price-container
  text-align: center
  position: relative
  .price-container-bar 
    width: 300px
    height: 50px
    background-color: rgba(239, 240, 240, 0.9)
    border-radius: 25px   // 圆角矩形
    position: absolute
    left: 50%
    transform: translateX(-50%)
    .price-container-bar-personal
      width: 140px
      height: 42px
      background-color: white
      border-radius: 21px
      position: absolute
      top: 50%
      left: 1%
      transform: translateY(-50%)
      b
        position: absolute
        top: 50%
        left: 30%
        transform: translateY(-50%)
</style>