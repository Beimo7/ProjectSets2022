<template>
  <p>xx</p>
  <div id="container">
    <div id="form">
      <el-form v-model="loginForm" ref="loginForm" :rules="rules">
        <el-form-item label="account" prop="account">
          <el-input v-model="loginFrom.account"/>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<style scoped>
#container {
  position: relative;
}
#form {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>