<template>
  <div>
    <head-bar></head-bar>
    <grid-layout
            v-model:layout="layout"
            :col-num="12"
            :row-height="30"
            :is-draggable="true"
            :is-resizable="true"
            :is-mirrored="false"
            :vertical-compact="true"
            :prevent-collision="false"
            :margin="[10, 10]"
            :use-css-transforms="true"
            :responsive="true"
    >

        <grid-item v-for="item in layout"
                    class="background-grid-item"
                   :x="item.x"
                   :y="item.y"
                   :w="item.w"
                   :h="item.h"
                   :i="item.i"
                   :is-draggable="false"
                   :is-resizable="false"
                   :key="item.i">
            {{item.i}}
        </grid-item>
        <grid-item v-for="item in layout"
                   :x="item.x"
                   :y="item.y"
                   :w="item.w"
                   :h="item.h"
                   :i="item.i"
                   :key="item.i">
            {{item.i}}
        </grid-item>
    </grid-layout>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
const a = 9
const layout =  reactive([
                {"x":0,"y":0,"w":2,"h":2,"i":"0"},
                {"x":2,"y":0,"w":2,"h":4,"i":"1"},
                {"x":4,"y":0,"w":2,"h":5,"i":"2"},
                {"x":6,"y":0,"w":2,"h":3,"i":"3"},
                {"x":8,"y":0,"w":2,"h":3,"i":"4"},
                {"x":10,"y":0,"w":2,"h":3,"i":"5"},
                {"x":0,"y":5,"w":2,"h":5,"i":"6"},
                {"x":2,"y":5,"w":2,"h":5,"i":"7"},
                {"x":4,"y":5,"w":2,"h":5,"i":"8"},
                {"x":6,"y":3,"w":2,"h":4,"i":"9"},
                {"x":8,"y":4,"w":2,"h":4,"i":"10"},
                {"x":10,"y":4,"w":2,"h":4,"i":"11"},
                {"x":0,"y":10,"w":2,"h":5,"i":"12"},
                {"x":2,"y":10,"w":2,"h":5,"i":"13"},
                {"x":4,"y":8,"w":2,"h":4,"i":"14"},
                {"x":6,"y":8,"w":2,"h":4,"i":"15"},
                {"x":8,"y":10,"w":2,"h":5,"i":"16"},
                {"x":10,"y":4,"w":2,"h":2,"i":"17"},
                {"x":0,"y":9,"w":2,"h":3,"i":"18"},
                {"x":2,"y":6,"w":2,"h":2,"i":"19"}
            ])
watch(layout, (old, newValue) => {
  old.forEach((item, index) => {
    if (old[index] !== newValue[index]) {
      console.log('old', item)
      console.log('new', newValue[index])
    }
  })
})
</script>
<style scoped>
.background-grid-item {
  display: flex;
  align-items: center;
  justify-content: center;
  border:thick white 1px;
  background-color: black;
}
.vue-grid-item {
  display: flex;
  align-items: center;
  justify-content: center;
  border: solid #ccc 1px;
  background-color: #ccc;
}
</style>