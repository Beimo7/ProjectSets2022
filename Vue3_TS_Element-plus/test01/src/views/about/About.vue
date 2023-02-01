<template>
<div class="main-top">
  <div class="header">
    <div>
      <img class="header-img" src="../../assets/original.svg" />
      <el-button text>首页</el-button>
      <el-button text>团队使用</el-button>
      <el-button text>模板中心</el-button>
      <el-button text>数据安全</el-button>
      <el-button text>公益计划</el-button>
      <el-button text>关于我们</el-button>
      <el-button text>下载</el-button>
      <el-button text @click="turnToPrice">定价</el-button>
      <el-button text @click="turnToHelp">帮助</el-button>
      <el-button @click="turnToLogin" color="rgb(0, 185, 107)" style="margin-left: 5vw">登录/注册</el-button>
    </div>
  </div>
  <h1>用<font>语雀</font>，构建你的数字花园</h1>
  <p>为每一个人，为每一个团队，提供优秀的文档与知识库工具</p>
  <div class="first-btn"></div>
  <el-button id="custom-btn">下载客户端</el-button>
  <el-button color="rgb(0, 185, 107)">体验网页版</el-button>
</div>
  <div class="main-bottom">
  </div>
  <div class="footer-personal">
    <div class="footer-personal-info">
      <h2>每一个人，都能构建知识体系</h2>
      <p>收集与记录是知识管理的起点</p>
      <p>知识管理还需要整理与输出</p>
    </div>
    <div class="footer-personal-img">
      <img src="../../assets/footer-personal-arrow.png" />
    </div>
    <div class="footer-personal-card">
      <p>使用场景</p>
      <el-card></el-card>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { useRouter } from 'vue-router'
  const router = useRouter()
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
</script>
<style scoped>
.main-top {
  text-align: center;
  height: 40vh;
}
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
.main-bottom {
  position: absolute;
  width: 100vw;
  height: 80vh;
  background-image: url('../../assets/background-01.png');
  background-size: 100% 100%;
}
.footer-personal {
  position: absolute;
  width: 100vw;
  height: 40vh;
  top: 130vh;
  text-align: center;
  background: url('../../assets/footer-personal-leaf.png') no-repeat;
  background-position: 65vw 0vh ;
  background-size: 20vw;
}
.footer-personal-info {
  position: absolute;
  width: 30vw;
  text-align: right;
}
.footer-personal-info p {
  color: grey;
}
.footer-personal-img {
  position: absolute;
  left: 30vw;
  top: 10vh;
  width: 5vw;
}
.footer-personal-img img {
  width: 7vw;
}
.footer-personal-card p {
  color: gray;
}
font {
  color:rgb(0, 185, 107);
}
#custom-btn:focus, #custom-btn:hover {
    color: green;
    border-color: green;
    background-color: white;
    outline: 0;
}
</style>