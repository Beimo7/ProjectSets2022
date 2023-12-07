<template>
  <div id="tree" ref="treeRef">
  </div>
</template>
<script setup lang="ts">
import OrgChart from '@balkangraph/orgchart.js'
import type{ FormInstance } from 'element-plus'
import { onMounted, ref, getCurrentInstance, ComponentInternalInstance  } from 'vue'
const treeRef = ref<FormInstance>()
const nodes = [
  { id: 1, name: "A集团", type: '集团', title: "CEO"},
  { id: 2, pid: 1, name: "A-1公司", type: '公司', title: "Sales Manager"},
  { id: 3, pid: 1, name: "A-2公司", type: '公司', title: "Dev Manager"},
  { id: 7, pid: 2, name: "A-1-1公司", type: '公司', title: "Dev Manager"},
  { id: 4, pid: 2, name: "A-2-1部门", type: '部门', title: "Sales"},
  { id: 5, pid: 2, name: "A-2-2部门", type: '部门', title: "Sales"},
  { id: 6, pid: 3, name: "A-2-2-1部门", type: '部门', title: "Developer"},
  // { id: 6, pid: 5, name: "A-2-2-1部门", type: '部门', title: "Developer"}, // 当多个父节点时，数据不能写在这儿
]

function mytree(domEl: any, x: any){
  OrgChart.templates.base = {
  defs: '',
  size: [250, 120],
  expandCollapseSize: 30,
  linkAdjuster: {
      fromX: 0,
      fromY: 0,
      toX: 0,
      toY: 0
  },
  ripple: {
      radius: 0,
      color: "#e6e6e6",
  }}
  const chart = new OrgChart (domEl, {
    template: 'olivia',
    nodes: x,
    nodeBinding: {
      field_0: "name",
      field_1: "type"
    },
    slinks: [{
      from: 6, to: 7, label: 'xxx', template: 'blue'
    }]
  });
}
onMounted(() => {
  mytree(treeRef.value, nodes)
})
</script>
<style scoped>
#tree {
  width: 100%;
  height: 100%;
}
</style>