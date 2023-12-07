<template>
  <div class="header">
    <div>
      <img class="header-img" src="@/assets/original.svg" />
      <el-button text @click="turnToAbout">首页</el-button>
      <el-button text>团队使用</el-button>
      <el-button text>模板中心</el-button>
      <el-button text>数据安全</el-button>
      <el-button text>公益计划</el-button>
      <el-button text>关于我们</el-button>
      <el-button text @click="turnToDownload">下载</el-button>
      <el-button text @click="turnToPrice">定价</el-button>
      <el-button text @click="turnToHelp">帮助</el-button>
      <el-button @click="turnToLogin" color="rgb(0, 185, 107)" style="margin-left: 5vw">登录/注册</el-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { useRouter } from 'vue-router'
  const router = useRouter()
  // 跳转到首页
  function turnToAbout() {{
    router.push('/about')
  }}
  // 跳转到定价页面
  function turnToPrice() {
    router.push('/price')
  }
  function turnToLogin() {
    router.push('/login')
  }
  function turnToHelp() {
    router.push('./help')
  }
  function turnToDownload() {
    router.push('./download')
  }
</script>
<style scoped>
.header {
  text-align: center;
}
.header-img {
  display: inline-block;
  height: 32px;
  position: relative;
  top: 1.5vh;
  margin-right: 5vw;
}
</style>