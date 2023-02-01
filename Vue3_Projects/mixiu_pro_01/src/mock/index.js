import Mock, { Random } from 'mockjs'

// 全局设置
// mockJs.setup({
//   timeout: 200 - 400
// })

// 树形控件
// 生成树节点

// 生成树
let count = Math.random() * 10
let tree = []
for (let k = 0; k < Math.random() * 10; k++) {
  let treeNode = Mock.mock({
    id: '@id()',
    name: '@cname()',
    code: /^1[34578]\d{9}$/,
  })
  treeNode.parentId = ''
  // treeNode.disabled = Math.random() < 0.5 ? true : false
  treeNode.children = []
  for (let i = 0; i < count; i++) {
    // 生成一级子节点
    let child = Mock.mock({
      id: '@id()',
      name: '@cname()',
      code: /^1[34578]\d{9}$/,
    })
    child.parentId = treeNode.id
    // child.disabled = Math.random() < 0.5 ? true : false
    child.children = []
    let childCount = Math.random() * 10
    for (let j = 0; j < childCount; j++) {
      let node = Mock.mock({
        id: '@id()',
        name: '@cname()',
        code: /^1[34578]\d{9}$/,
      })
      node.parentId = child.id
      // node.disabled = Math.random() < 0.5 ? true : false
      node.children = []
      child.children.push(node)
    }
    treeNode.children.push(child)
  }
  tree.push(treeNode)
}


// 生成table数据
let table = []
for (let i = 0; i < Math.random() * 100; i++) {
  let rowData = Mock.mock({
    id: '@id()',
    name: '@cname()',
    code: /^1[34578]\d{9}$/,
    date: '@date()',
    email: '@email()'
  })
  table.push(rowData)
}

// 树组件 数据
Mock.mock('/deep/tree', 'get', () => {
  return {
    status: 0,
    data: tree
  }
})

// 表格数据
Mock.mock('/deep/table', 'get', () =>{
  return {
    status: 0,
    data: table
  }
})
export default []