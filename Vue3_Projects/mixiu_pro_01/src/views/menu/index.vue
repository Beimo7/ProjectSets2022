<template>
  <div id="menu">
    <p>has published books</p>
    <span>{{ publishedBooksMessage }}</span>
    <Tree v-model:title.capitalize="myText" title="树！！！" @click-function="someFun" />
  </div>
  <button @click="show = !show">切换</button>
    <div>
      <button @click="isShow = true">点我弹窗</button>
      <teleport to="body">
        <div class="mask" v-if="isShow">
            <div class="dialog">
                <h4>我是一个弹窗</h4>
                <h5>内容</h5>
                <h5>内容</h5>
                <h5>内容</h5>
                <button @click="isShow = false">关闭</button>
            </div>
        </div>
      </teleport>
  </div>
<Transition>
  <p v-if="show">HelloWord</p>
</Transition>
</template>
<script setup>
import { ref, reactive, computed } from 'vue'
import Tree from '../../components/Tree.vue'
const emit = defineEmits(['clickFunction'])
const firstName = ref('John')
const lastName = ref('Doe')
const myText = ref('000')
const show = ref(true)
const isShow = ref(false)

const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})
function someFun() {
  alert('点击了')
}
</script>

