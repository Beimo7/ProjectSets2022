<template>
  <el-dialog v-model="props.dialogVisible" :title="props.dialogTitle" :width="props.dialogWidth" :show-close="dialogShowclose">
    <slot></slot>
    <template #footer>
      <span>
        <el-button @click="props.noFun">{{ props.noContent }}</el-button>
        <el-button @click="props.yesFun">{{ props.yesContent }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
import { number } from "echarts";

let props = defineProps({
  dialogShowclose: Boolean,
  dialogVisible: Boolean,
  dialogTitle: String,
  dialogWidth: String,
  noContent: String,
  yesContent: String,
  noFun: Function,
  yesFun: Function
});

</script>
<style scoped>
:deep() {
  --el-dialog-border-radius: var(--el-border-radius-round);
}
:deep() :nth-child(2) {
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
:deep() :nth-child(1) {
  --el-button-border-color: var(--el-border-color);
  --el-button-bg-color: var(--el-fill-color-blank);
  --el-button-text-color: var(--el-text-color-regular);
  --el-button-hover-text-color: #009456;
  --el-button-hover-bg-color: white;
  --el-button-hover-border-color: #009456;
  --el-button-active-text-color: var(--el-button-hover-text-color);
  --el-button-active-border-color: rgb(0, 185, 107);
}
</style>