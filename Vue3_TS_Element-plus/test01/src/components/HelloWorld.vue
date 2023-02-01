<script setup lang="ts">
import { ref } from 'vue'

// let props = defineProps<{ msg: string }>()
const props = defineProps({
  foo: { type: String, required: true },
  bar: Number,
  msg: String
})
const count = ref(0)
</script>

<template>
  <p>{{ msg }}</p>
  <p>{{ foo }}</p>
  <p>{{ bar }}</p>
</template>

