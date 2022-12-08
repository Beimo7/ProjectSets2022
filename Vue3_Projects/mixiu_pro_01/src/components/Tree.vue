<template>
  <div class="tree-container">
    <span>{{ count }}</span>
    <p>这是一段html文本<span v-html="count"></span></p>
    <el-button @click="handleCount">计数</el-button>
    <el-button @click="getCheckedNodes">getCheckedNodes</el-button>
    <el-button @click="getCheckedKeys">getCheckedKeys</el-button>
    <el-button @click="setCheckedNpdes">setCheckedKeys</el-button>
    <el-button @click="setCheckedKeys">setCheckedKeys</el-button>
    <el-button @click="resetChecked">resetChecked</el-button>
    <el-tree
      ref="treeRef"
      :data="data"
      :props="defaultProps"
      node-key="id"
      :default-expanded-keys="defaultExpendedKeys"
      :default-checked-keys="defaultCheckedKeys"
      @node-click="handleNodeClick"
      show-checkbox
      highlight-current
    ></el-tree>
  </div>
</template>
<script>
import "../mock/index";
import Ajax from "../api/ajax";

// 需求
// 1、当结点为叶子节点的时候，复选框不能勾选(x)
// 2、当结点为根节点的时候，默认展开
// 3、当树节点为叶子节点的时候，默认勾选

export default {
  name: "Tree",
  components: {},
  data() {
    // const loadNode = (node, resolve) => {
    //   let self = this
    //   if (node.level === 0) {
    //     that.getFatherData(resolve) //获取顶级节点的数据
    //   }
    //   if (node.level >= 1) {
    //     this.getChildrenData(node.data.code, resolve) // 异步获取子节点数据
    //     return resolve([]) //防止在该结点没有子节点时一直转圈
    //   }
    // };
    return {
      count: 12,
      data: {},
      // 为树节点的渲染属性,label显示树节点，此时值为name
      defaultProps: {
        id: 'id',
        label: 'name',
        children: "children",
        parentId: 'parentId',
        disabled: 'disabled'
        // isLeaf: false,
      },
      defaultExpendedKeys: [], //默认展开的树节点
      defaultCheckedKeys: [], //默认展开的叶子节点
    };
  },
  mounted() {
    let self = this;
    Ajax.getTree()
      .then((res) => {
        if (res.status === 0) {
          self.data = res.data;
          self.data.forEach(item => {
            // 当树节点为根节点的时候，默认展开
            if (!item.parentId) {
              self.defaultExpendedKeys.push(item.id)
            }
            // 当树节点为叶子节点的时候，默认勾选
            self.traverseTreeNodes(item, self.defaultCheckedKeys)
          })
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    // 计数
    handleCount() {
      this.count ++
    },
    // 点击树节点触发
    handleNodeClick(data, node, vuecomponent) {
      console.log({ data }, { node }, { vuecomponent });
    },
    // 遍历树节点， 输出叶子节点
    traverseTreeNodes(node, arr) {
      let self = this
      if (node.children && node.children.length !== 0 && Math.random() < 0.5) {
        arr.push(node.id)
        node.children.forEach(item => {
          self.traverseTreeNodes(item, arr)  // 这儿必须加上self，否则会报错
        })
      }
      else {
        return
      }
    },
    // 获取树的选中结点，by Nodes
    getCheckedNodes() {
      // console.log('first', this.$refs.treeRef.getCheckedNodes(false, false))
      let tempArr = []
      this.$refs.treeRef.getCheckedNodes().forEach(item => {
        // debugger
        // console.log(item.id)
        tempArr.push(item.id)
      })
      console.log({tempArr})
      // console.log('second', this.defaultCheckedKeys)
    },
    // 获取树的选中结点，by Keys
    getCheckedKeys() {
      console.log(this.$refs.treeRef.getCheckedKeys(false))
    },
    // 设置树的选中结点， by Nodes
    setCheckedNodes() {
      
    }
    // getFatherData(resolve) {
    //   Ajax.getTree().then((res) => {
    //     if (res.status === 0) {
    //       let data = res.data
    //       data.forEach(item => {
    //         item = {...item, isLeaf: true}
    //       })
    //     }
    //   })
    //   resolve(data)
    // },
    // getChildrenData(parentId, resolve) {

    // }
  },
};
</script>