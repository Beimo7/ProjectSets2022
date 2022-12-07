<template>
  <div class="tree-container">
    <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
  </div>
</template>
<script lang="ts" setup>
// import '../mock/index'
// import Ajax from '../api/ajax'
// export default {
//   name: 'Tree',
//   components: {},
//   data() {
//     return {
//       data: {},
//       // 为树节点的渲染属性,label显示树节点，此时值为name
//       defaultProps: {
//         children: 'children',
//         label: 'name'
//       }
//     }
//   },
//   mounted() {
//     let self = this
//     Ajax.getTree().then((res) =>{
//       if (res.status === 0) {
//         self.data = res.data
//       }
//     })
//     .catch((err) => {
//       console.log(err)
//     })
//   },
//   methods: {
//     handleNodeClick() {
//       debugger
//     }
//   }
// }
</script>