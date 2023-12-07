<template>
  <div>
    <el-tree :data="tree" :props="defaultProps" class="my-el-tree"></el-tree>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const defaultProps = {
  id: 'id',
  children: 'children',
  label: 'id'
}
const tree = [
  {
    id: 'code001',
    children: [
      {
        id: 'code002',
        children: []
      },
      {
        id: 'code003',
        children: []
      },
      {
        id: 'code004',
        children: [
          {
            id: 'code005',
            children: []
          },
          {
            id: 'code006',
            children: []
          }
        ]
      }
    ]
  }
]

const getTreeData = (items, id) => {
  const pitems = items.filter((item) => {return item.id !== id})
  if (pitems.length > 0) {
    for (let item in pitems) {
      getTreeData(item.children, id)
    }
  }
  return pitems
}      

// const printTree = (items) => {
//   if (items.length < 1) return
//   items.forEach((item, index) => {
//     console.log(item.id, index)
//     if (item.children && item.children.length > 0) {
//       printTree(item.children)
//     }
//   })
// }

const copyTree = (items, result) => {
  if (items.length < 1) return
  items.forEach((item, index) => {
    result[index] = item
    if (item.children && item.children.length > 0) {
      copyTree(item.children, result[index].children)
    }
  })
  return result
}

const filterTree = (items, result, id) => {
  if (items.length < 1) return
  const fitems = items.filter((ele) => {return ele.id !== id})
  fitems.forEach((item, index) => {
    result.push({id: item.id, children: []})
    if (item.children && item.children.length > 0) {
      filterTree(item.children, result[index].children, id)
    }
  })
  return result
}
// printTree(tree)
let resultArr = []
let resultArr2 = copyTree(tree, resultArr)
console.log({resultArr2})
let result = []
console.log('code001', filterTree(tree, result, 'code001'))
result = []
console.log('code002', filterTree(tree, result, 'code002'))
result = []
console.log('code003', filterTree(tree, result, 'code003'))
result = []
console.log('code004', filterTree(tree, result, 'code004'))
result = []
console.log('code005', filterTree(tree, result, 'code005'))
result = []
console.log('code006', filterTree(tree, result, 'code006'))
</script>