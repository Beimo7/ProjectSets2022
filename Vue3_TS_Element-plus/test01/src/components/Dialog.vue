<template>
  <el-dialog v-model="dialogVisible" :title="dialogTitle" :width="dialogWidth">
    <slot></slot>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="noFun">{{ noContent }}</el-button>
        <el-button type="primary" @click="yesFun">{{ yesContent }}</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
import { number } from "echarts";

  let props = defineProps({
    dialogTitle: String,
    dialogWidth: Number
  })
</script>