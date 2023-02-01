<template>
  <div contenteditable="true" id="quote" class="quote default">
    <el-input
      show-word-limit
      v-model="content"
      @change="update"
      type="textarea"
      suffix-icon="none"
      autosize="true"
    ></el-input>
  </div>
  <div class="select">
    <el-button
      @click="changeTheme(item.label)"
      class="button"
      v-for="item in theme"
      :key="item.value"
      :color="item.value"
      circle
    ></el-button>
  </div>
</template>
<script setup lang="ts">
import theme from "../enum/theme";
import { reactive, ref } from "vue";
let content = ref("");
let mytheme = ref("default");
const emits = defineEmits(["update"]);
function update() {
  emits("update", content);
}
function changeTheme(value: string) {
  console.log({ value });
  let tempTheme: string;
  tempTheme = document.getElementById("quote")?.classList[1] as string;
  document.getElementById("quote")?.classList.remove(tempTheme);
  document.getElementById("quote")?.classList.add(value);
}
</script>
<style scoped>
/* 使输入框适应高亮 */
.el-textarea {
  --el-input-hover-border: none;
  --el-input-border-color: none;
  --el-input-icon-color: none;
  --el-input-placeholder-color: var(--el-text-color-placeholder);
  --el-input-hover-border-color: none;
  --el-input-clear-hover-color: none;
  --el-input-focus-border-color: none;
}
/* 输入框的样式 */
:deep().el-textarea__inner {
  min-height: 30vh !important;
  background-color: rgba(0, 0, 0, 0);
}
/* 高亮块公共样式 */
.quote {
  width: 50vw;
  min-height: 30vh;
  display: inline-block;
  border-radius: 4%;
}
/* 默认主题配置样式 */
.default {
  background-color: lightgray;
  border-left: 10px solid gray;
  border-top: 2px solid gray;
  border-right: 2px solid gray;
  border-bottom: 2px solid gray;
}
/* 其他主题样式 */
.red {
  background-color: rgb(247, 226, 226);
  border-left: 10px solid rgb(248, 115, 115);
  border-top: 2px solid rgb(248, 115, 115);
  border-right: 2px solid rgb(248, 115, 115);
  border-bottom: 2px solid rgb(248, 115, 115);
}
.orange {
  background-color: rgb(250, 234, 206);
  border-left: 10px solid rgb(252, 192, 82);
  border-top: 2px solid rgb(252, 192, 82);
  border-right: 2px solid rgb(252, 192, 82);
  border-bottom: 2px solid rgb(252, 192, 82);
}
.yellow {
  background-color: lightyellow;
  border-left: 10px solid yellow;
  border-top: 2px solid yellow;
  border-right: 2px solid yellow;
  border-bottom: 2px solid yellow;
}
.blue {
  background-color: rgb(181, 233, 250);
  border-left: 10px solid rgb(91, 143, 240);
  border-top: 2px solid rgb(91, 143, 240);
  border-right: 2px solid rgb(91, 143, 240);
  border-bottom: 2px solid rgb(91, 143, 240);
}
.green {
  background-color: rgb(191, 250, 191);
  border-left: 10px solid rgb(85, 141, 85);
  border-top: 2px solid rgb(85, 141, 85);
  border-right: 2px solid rgb(85, 141, 85);
  border-bottom: 2px solid rgb(85, 141, 85);
}
.pink {
  background-color: rgb(252, 237, 239);
  border-left: 10px solid pink;
  border-top: 2px solid pink;
  border-right: 2px solid pink;
  border-bottom: 2px solid pink;
}
/* 下拉框样式 */
.select {
  display: inline-block;
  opacity: 0%;
}
.select:hover {
  opacity: 100%;
}
/* 按钮样式 */
.button {
  display: table-column;
  position: relative;
  margin-left: 5px;
}
:deep().el-button.is-circle {
  border-radius: 50%;
  padding: 14px;
}
:deep().el-button + .el-button {
  margin-left: 5px;
}
</style>

