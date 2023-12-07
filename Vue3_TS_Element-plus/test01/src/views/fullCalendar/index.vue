<template>
  <div>
    <el-button @click="showDialog">
      打开日历
    </el-button>
    <Dialog :model="dialog" v-if="dialog" />
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, nextTick } from 'vue'
import Dialog from './components/Dialog.vue'
const dialog= ref(false)
const showDialog = () => {
  dialog.value = true
}
</script>