<template>
  <div class="fullscreen-btn">
    <el-button v-if="isFullcreen" type="primary" @click="fullScreen()" :icon="FullScreen" circle></el-button>
    <el-button v-else @click="exitFullScreen()" :icon="FullScreen" circle></el-button>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { FullScreen, Eleme } from "@element-plus/icons-vue";
const isFullcreen = ref(true)
function fullScreen() {
  var de = document.documentElement
  isFullcreen.value = !isFullcreen.value
  if (de.requestFullscreen) {
    de.requestFullscreen()
  }
  else if(de.mozRequestFullScreen) {
    de.mozRequestFullScreen()
  }
  else if (de.webkitRequestFullScreen) {
    de.webkitRequestFullScreen()
  }
}
function exitFullScreen() {
  isFullcreen.value = !isFullcreen.value
  if (document.exitFullscreen) {
    document.exitFullscreen()
  }
  else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  }
  else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen()
  }
}
</script>
<style scoped>
.fullscreen-btn {
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>