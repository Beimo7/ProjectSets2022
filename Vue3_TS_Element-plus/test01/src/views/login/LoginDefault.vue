<template>
  <div class="header">
    <img class="header-img" src="../../assets/login-original.svg" />
  </div>
  <el-form :model="info" ref="formRef" :rules="rules">
    <div>
      <el-row>
        <el-col :span="10" :offset="7">
          <el-form-item label="" prop="phone">
            <el-input
              v-model="info.phone"
              placeholder="请输入手机号"
              size="large"
            >
              <template #prepend>
                <el-select
                  :key="changeFlag"
                  @change="updateSelect"
                  v-model="area"
                  size="large"
                  style="width: 10vw"
                >
                  <el-option
                    v-for="(item, index) in phoneAreaArray"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </template>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </div>
    <div class="container-isPwd-N">
      <div v-if="info.type === 0" class="isPwd-N">
        <el-row>
          <el-col
            class="verify-btn"
            :span="10"
            :offset="7"
            style="margin-top: 3vh; margin-bottom: 1.5vh"
          >
            <el-form-item label="" prop="verify">
              <el-input
                placeholder="6位短信验证码"
                style="width: 20vw; margin-right: 0.5vw"
                v-model="info.verify"
                size="large"
              ></el-input>
              <el-button size="large" @click="getVerifyCode"
                >获取验证码</el-button
              >
            </el-form-item>
          </el-col>
        </el-row>
      </div>
      <div v-else class="isPwd-Y">
        <el-row>
          <el-col :span="10" :offset="7">
            <el-form-item>
              <el-input
                size="large"
                v-model="info.password"
                placeholder="请输入密码"
                style="margin-top: 3vh"
              >
                <template #append>
                  <el-button round v-if="isView" @click="changeView"
                    ><el-icon size="18"><View /></el-icon
                  ></el-button>
                  <el-button round v-else @click="changeView"
                    ><el-icon size="18"><Hide /></el-icon
                  ></el-button>
                </template>
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col
            class="forget-btn"
            :span="10"
            :offset="7"
            style="margin-top: 0.5vh"
          >
            <el-button text>忘记密码?</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </el-form>
  <div>
    <el-row>
      <el-col class="login-btn" :span="10" :offset="7" style="margin-top: 3vh">
        <el-button
          :disabled="!info.phone || (!info.verify && !info.password)"
          style="width: 100%"
          @click="register"
          size="large"
          >{{ btnContent }}</el-button
        >
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="10" :offset="7">
        <el-checkbox class="checkbox-btn" v-model="agree"></el-checkbox>
        <span
          >{{ " " }}我已阅读并同意<a>《语雀服务协议》</a>和<a
            >《语雀隐私权政策》</a
          ></span
        >
      </el-col>
    </el-row>
  </div>
  <div class="divider">
    <el-row>
      <el-col :span="10" :offset="7" style="margin-top: 3vh">
        <el-divider>其他登录方式</el-divider>
      </el-col>
    </el-row>
  </div>
  <div class="footer">
    <el-row>
      <el-col class="type-btn" :span="10" :offset="7">
        <el-button @click="changeType" round v-if="info.type === 0"
          ><el-icon style="margin-right: 2px"><Key /></el-icon
          >密码登录</el-button
        >
        <el-button @click="changeType" round v-else
          ><el-icon style="margin-right: 2px"><Iphone /></el-icon
          >免密码登录</el-button
        >
        <div class="footer-img first-img"></div>
        <div class="footer-img second-img"></div>
        <div class="footer-img third-img"></div>
        <div class="forth-img"></div>
        <el-button class="info-btn" type="info" :icon="Message"></el-button>
      </el-col>
    </el-row>
  </div>
  <Dialog
    :dialogVisible="dialogVisible"
    dialogTitle="服务协议及隐私保护"
    dialogWidth="50%"
    :dialogShowclose="false"
    noContent="不同意"
    yesContent="同意"
    :noFun="noFun"
    :yesFun="yesFun"
  >
    <span
      >为更好地保护你的合法权益，请阅读并同意
      <a href="">《语雀服务协议》</a>
      和
      <a href="">《语雀隐私权政策》</a>
    </span>
  </Dialog>
  <div v-for="item in item" :key="item" class="background"></div>
</template>
<script setup lang="ts">
import {
  callWithErrorHandling,
  getCurrentInstance,
  onMounted,
  reactive,
  ref,
  watch,
} from "vue";
import { Message, View, Hide } from "@element-plus/icons-vue";
import phoneAreaArray from "../../enum/phone";
import info from "../../enum/info";
import Dialog from "../../components/Dialog.vue";
import router from "../../router";
import { routerKey } from "vue-router";
import { FormInstance } from "element-plus";
let area = ref("+86");
let phone = ref();
let isView = ref(false);
let changeFlag: boolean = false;
let tempStr: string = "";
let btnContent = ref("登录/注册");
let password = ref("");
let agree = ref(false);
let dialogVisible = ref(false);
// 为获取表单元素
const formRef = ref<FormInstance>();
const instance = getCurrentInstance();
// 用于循环生成div块
const item = ref([0])
for (let i = 1; i < 100; i++) {
  item.value.push(i)
}
// 手机号校验
const validatePhone = (rule: any, value: any, callback: any) => {
  let reg = /^1[3|4|5|6|7|8|9][0-9]\d{8}$/;
  value = info.phone;
  if (!value) {
    return callback(new Error("请输入手机号"));
  } else {
    if (value.length <= 10 && !reg.test(value)) {
      return callback(new Error("请输入合理的手机号"));
    } else {
      return callback();
    }
  }
};
// 短信号校验
const validateVerify = (rule: any, value: any, callback: any) => {
  let reg = /^[0-9]\d{6}$/;
  value = info.verify;
  if (info.type === 0) {
    if (!value) {
      return callback(new Error("请输入短信验证码"));
    } else {
      if (value.length < 6 && !reg.test(value)) {
        return callback(new Error("请输入正确的短信验证码"));
      } else {
        return callback();
      }
    }
  }
};
// 密码校验
const validatePassword = (rule: any, value: any, callback: any) => {
  let reg = /^[0-9a-zA-Z]+$/;
  value = info.password;
  if (info.type === 1) {
    if (!value) {
      callback(new Error("请输入密码"));
    } else {
      if (value.length < 6) {
        callback(new Error("请输入多于6位的密码"));
      } else if (reg.test(value)) {
        callback(new Error("密码只能包含字母和数字"));
      } else {
        callback();
      }
    }
  }
};
// 表单校验规则
const rules = reactive({
  phone: [{ validator: validatePhone, trigger: "blur" }],
  verify: [{ validator: validateVerify, trigger: "blur" }],
  password: [{ validator: validatePassword, trigger: "blur" }],
});
function updateSelect(value: any) {
  changeFlag = !changeFlag;
}
function reget() {}
function changeType() {
  if (info.type === 0) {
    info.type = 1; // 切换为密码方式
    btnContent.value = "登录";
  } else {
    info.type = 0; // 切换为短信方式
    btnContent.value = "登录/注册";
  }
}
function changeView() {
  if (!isView.value) {
    password.value = info.password;
  } else {
    password.value = tempStr;
  }
  isView.value = !isView.value;
}
// 登录
function register() {
  // 如果用户没有勾选服务，则弹窗勾选
  if (!agree.value) {
    dialogVisible.value = true;
  } else {
    debugger;
    formRef.value?.validate((valid: Boolean) => {
      // 校验通过
      debugger;
      if (valid) {
        debugger;
        // 将密码存储到locaStorage
        localStorage.setItem("phone", info.phone);
        localStorage.setItem("type", info.type + "");
        localStorage.setItem("password", info.password);
        localStorage.setItem("verify", info.verify);
        router.push("/price");
      }
    });
  }
}
// 关闭弹窗
function noFun() {
  dialogVisible.value = false;
}
function yesFun() {
  dialogVisible.value = false;
  agree.value = true;
  // 进行登陆密码校验
  debugger;
  formRef.value?.validate((valid) => {
    debugger;
    // 校验通过
    if (valid) {
      debugger;
      // 将密码存储到locaStorage
      localStorage.setItem("phone", info.phone);
      localStorage.setItem("type", info.type + "");
      localStorage.setItem("password", info.password);
      localStorage.setItem("verify", info.verify);
      router.push("/price");
    } else {
      debugger;
    }
  });
}
// 监听password 的变化，将其赋值给 info.password
watch(password, (newVal, oldVal) => {
  let strLen = 0;
  if (password.value.includes("●")) {
    for (let i = 0; i < password.value.length; i++) {
      if (password.value.charAt(i) === "●") {
        strLen += 1;
      }
    }
  }
  if (!isView.value && password.value.length !== strLen) {
    tempStr = "";
    for (let i = 0; i < password.value.length; i++) {
      tempStr += "●";
    }
    info.password += password.value.charAt(password.value.length - 1);
    password.value = tempStr;
  }
  if (isView && !password.value.includes("●")) {
    info.password = password.value;
  }
});
</script>
<style scoped>
.header {
  height: 20vh;
}
:deep() .el-input {
  --el-input-hover-border: rgb(0, 185, 107);
  --el-input-focus-border: rgb(0, 185, 107);
  --el-input-hover-border-color: rgb(0, 185, 107);
  --el-input-clear-hover-color: rgb(0, 185, 107);
  --el-input-focus-border-color: rgb(0, 185, 107);
}
.el-select {
  --el-select-border-color-hover: rgb(0, 185, 107);
  --el-select-disabled-border: rgb(0, 185, 107);
  --el-select-font-size: var(--el-font-size-base);
  --el-select-close-hover-color: rgb(0, 185, 107);
  --el-select-input-color: var(--el-text-color-placeholder);
  --el-select-multiple-input-color: var(--el-text-color-regular);
  --el-select-input-focus-border-color: rgb(0, 185, 107);
  --el-select-input-font-size: 14px;
}
.el-input_wrappeer.is-focus {
  box-shadow: green !important;
}
.header-img {
  text-align: center;
  position: relative;
  left: 40vw;
  width: 20vw;
}
.container-isPwd-N el-input {
  position: relative;
  top: 10vh;
}
:deep() .isPwd-Y .el-icon svg:hover {
  color: black;
}
:deep() .isPwd-Y .el-input-group__append,
.el-input-group__prepend {
  background-color: white;
  border-radius: 0 var(--el-input-border-radius) var(--el-input-border-radius) 0;
}
:deep() .isPwd-Y .el-button.is-text {
  color: gray;
}
:deep() .isPwd-Y .el-button.is-text:hover {
  background-color: white;
  color: #909399;
}
:deep() .isPwd-Y .el-button.is-text:active {
  background-color: white;
  color: #909399;
}
:deep() .isPwd-Y .el-button.is-text:focus {
  background-color: white;
}
:deep() .verify-btn .el-button {
  --el-button-divide-border-color: rgba(255, 255, 255, 0.5);
  --el-button-hover-text-color: black;
  --el-button-hover-bg-color: rgb(241, 250, 246);
  --el-button-hover-border-color: rgb(0, 185, 107);
  --el-button-active-text-color: white;
  --el-button-active-border-color: rgb(0, 185, 107);
  --el-button-active-bg-color: rgb(0, 185, 107);
  --el-button-hover-link-text-color: rgb(0, 185, 107);
  --el-button-active-color: white;
}
:deep() .login-btn .el-button {
  --el-button-border-color: rgb(0, 185, 107);
  --el-button-bg-color: rgb(0, 185, 107);
  --el-button-text-color: white;
  --el-button-disabled-text-color: white;
  --el-button-disabled-bg-color: rgb(179, 234, 211);
  --el-button-disabled-border-color: rgb(179, 234, 211);
  --el-button-divide-border-color: rgba(255, 255, 255, 0.5);
  --el-button-hover-text-color: white;
  --el-button-hover-bg-color: #009456;
  --el-button-hover-border-color: #009456;
  --el-button-active-text-color: var(--el-button-hover-text-color);
  --el-button-active-border-color: var(--el-color-primary);
  --el-button-active-bg-color: var(--el-button-hover-bg-color);
  --el-button-outline-color: var(--el-color-primary-light-5);
  --el-button-hover-link-text-color: var(--el-color-info);
  --el-button-active-color: var(--el-text-color-primary);
}
:deep() .el-checkbox span {
  border-color: rgb(0, 185, 107);
  border-radius: 50% !important;
}
:deep() .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: rgb(0, 185, 107);
  border-color: rgb(0, 185, 107);
}
a {
  color: #117cee;
}
:deep() .type-btn :nth-child(1) {
  --el-button-border-color: var(--el-border-color);
  --el-button-bg-color: var(--el-fill-color-blank);
  --el-button-text-color: var(--el-text-color-regular);
  --el-button-hover-text-color: var(--el-text-color-regular);
  --el-button-hover-bg-color: white;
  --el-button-hover-border-color: var(--el-border-color);
  --el-button-active-text-color: var(--el-button-hover-text-color);
  --el-button-active-border-color: rgb(0, 185, 107);
}
:deep() .footer-img {
  width: 30px;
  height: 30px;
  background-image: url("../../assets/icon/wechat.png");
  background-size: 100%;
  margin-left: 5px;
  display: inline-block;
  position: relative;
  top: 10px;
}
:deep() .first-img {
  background-position-y: 59px;
}
:deep() .second-img {
  background-position-y: 91px;
}
:deep() .third-img {
  background-position-y: 0px;
}
:deep() .forth-img {
  width: 30px;
  height: 30px;
  background-image: url("../../assets/icon/third.svg");
  background-size: 100%;
  margin-left: 5px;
  display: inline-block;
  position: relative;
  top: 10px;
}
.info-btn {
  width: 32px;
  border-radius: 50%;
  position: relative;
  margin-left: 5px;
}
/* 设置背景效果 */
.background {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 1px solid black;
}
</style>