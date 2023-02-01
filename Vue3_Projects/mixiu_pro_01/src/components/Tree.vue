<template>
  <div>
    <input :value="modelValue" @input="emitValue" />
    <el-button @click="$emit('clickFunction')">父组件点一点</el-button>
    <span>{{ title }}</span>
  </div>
  <div
    class=""
    id="divContainter"
    :style="{ width: '90px', height: '90px', color: 'orange' }"
  >
    <el-button @click="changePage">跳转页面</el-button>
    <span id="testSpan" :style="styleObject">内容</span>
  </div>
  <div class="tree-container">
    <span>{{ count }}</span>
    <p>这是一段html文本<span v-html="count"></span></p>
    <el-button @click="handleCount">计数</el-button>
    <el-button @click="getCheckedNodes">getCheckedNodes</el-button>
    <el-button @click="getCheckedKeys">getCheckedKeys</el-button>
    <el-button @click="setCheckedNodes">setCheckedNodes</el-button>
    <el-icon color="orange" size="18">
      <Files />
    </el-icon>
    <el-icon type="Edit" color="grey" size="19"> </el-icon>
    <el-tree
      ref="treeRef"
      :data="data"
      :props="defaultProps"
      node-key="id"
      :default-expanded-keys="defaultExpendedKeys"
      :default-checked-keys="defaultCheckedKeys"
      :render-content="renderContent"
      @node-click="handleNodeClick"
      show-checkbox
      highlight-current
    ></el-tree>
  </div>
</template>
<script setup>
import "../mock/index";
import Ajax from "../api/ajax";
import { ref, reactive, onMounted } from "vue";

// 传递的参数
// const props = defineProps({ title: String })

const props = defineProps(['title', 'titleModifiers'])

const emit = defineEmits(['update:modelValue'])

function emitValue(e) {
  let value = e.target.value
  console.log(props.titleModifiers.capitalize)
  if (props.titleModifiers.capitalize) {
    console.log({value})
    value = value.charAt(0).toUpperCase() + value.slice(1)
    console.log({value})
  }
  emit('update:title', value)
}

// 需求
// 1、当结点为叶子节点的时候，复选框不能勾选(x)
// 2、当结点为根节点的时候，默认展开
// 3、当树节点为叶子节点的时候，默认勾选
const count = ref(12);
const data = reactive([]);
// 为树节点的渲染属性,label显示树节点，此时值为name
const defaultProps = reactive({
  id: "id",
  label: "name",
  children: "children",
  parentId: "parentId",
  disabled: "disabled",
  // isLeaf: false,
});
const defaultExpendedKeys = reactive([]); //默认展开的树节点
const defaultCheckedKeys = reactive([]); //默认展开的叶子节点
// 封装公共样式
const styleObject = reactive({
  width: "100px",
  height: "100px",
  backgroundColor: "rgba(166, 172, 205, 0.2)",
  color: "rgba(137, 211, 255)",
});
onMounted(() => {
  Ajax.getTree()
    .then((res) => {
      if (res.status === 0) {
        res.data.forEach((ele) => {
          data.push(ele);
        });
        data.forEach((item) => {
          // 当树节点为根节点的时候，默认展开
          if (!item.parentId) {
            defaultExpendedKeys.push(item.id);
          }
          // 当树节点为叶子节点的时候，默认勾选
          traverseTreeNodes(item, defaultCheckedKeys);
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
function changePage() {
  // $router.push("./about");
}
// 计数
function handleCount() {
  count.value++;
}
// 点击树节点触发
function handleNodeClick(data, node, vuecomponent) {
  console.log({ data }, { node }, { vuecomponent });
}
// 渲染树节点
function renderContent(h, { node, data }) {
  let icon = data.children.length > 0 ? "Files" : "FolderOpened";
  let color = data.children.length > 0 ? "orange" : "grey";
  return h(
    "span",
    {
      style: {
        width: "340px",
        display: "inline-block",
      },
    },
    [
      h("Icon", {
        props: {
          type: "md-floder",
        },
      }),
      h(
        "el-icon",
        {
          props: {
            type: "Files",
            color: color,
            size: 18,
          },
          style: {
            marginLeft: "5px",
            marginRight: "5px",
            paddingBottom: "3px",
          },
        },
        [
          // h('Files', {
          //   style: {
          //     width: '3px'
          //   }
          // }),
          // h('span', {
          //   style: {
          //     backgroundColor: 'orange'
          //   }
          // }, data.name)
        ]
      ),
      h("span", data.name),
    ]
  );
}
// 遍历树节点， 输出叶子节点
function traverseTreeNodes(node, arr) {
  if (node.children && node.children.length !== 0 && Math.random() < 0.5) {
    arr.push(node.id);
    node.children.forEach((item) => {
      traverseTreeNodes(item, arr); // 这儿必须加上self，否则会报错
    });
  } else {
    return;
  }
}
// 获取树的选中结点，by Nodes
function getCheckedNodes() {
  let tempArr = [];
  $refs.treeRef.getCheckedNodes().forEach((item) => {
    tempArr.push(item.id);
  });
  console.log({ tempArr });
}
// 获取树的选中结点，by Keys
function getCheckedKeys() {
  console.log($refs.treeRef.getCheckedKeys(false));
}
// 设置树的选中结点， by Nodes
function setCheckedNodes() {}
</script>