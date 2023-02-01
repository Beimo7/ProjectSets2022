<template>
<div v-show="showTem">
  <p>{{ num }}</p>
  <button @click="updateNum">updateNum</button>
  <h5>当前点击时鼠标的坐标为 x: {{ point.x }}, y: {{ point.y }}</h5>
</div>
<button @click="showTem = !showTem">隐藏</button>
</template>
<script setup>
import { onBeforeMount, onBeforeUnmount, onMounted, reactive, ref, watch, watchEffect } from 'vue'
import usePoint from '../hooks/usePoint'
let num = ref(0)
let showTem = ref(true)

let point = usePoint()
function updateNum() {
  num.value += 1
}
</script>
