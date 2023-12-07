// <template>
//   <div id="mountNode"></div>
// </template>
// <script lang="ts" setup>
// import G6 from '@antv/g6'
// import { onMounted } from 'vue';
// const sourceData: Array<TNode> = [
//   {
//     orgCode: "1",
//     orgName: "A集团",
//     orgType: "集团",
//     orgParents: [],
//   },
//   {
//     orgCode: "2",
//     orgName: "A1公司",
//     orgType: "公司",
//     orgParents: ["1"]
//   },
//   {
//     orgCode: "3",
//     orgName: "A2公司",
//     orgType: "公司",
//     orgParents: ["1"]
//   },
//   {
//     orgCode: "4",
//     orgName: "A11部门",
//     orgType: "部门",
//     orgParents: ["2", "3"]
//   }
// ]
// // 将sourceData转换成data构造图
// interface TNode {
//   orgCode: String,
//   orgName: String,
//   orgType: String,
//   orgParents: Array<String>
// }
// interface GNode {
//   id: String
// }
// interface GEdge {
//   source: String,
//   target: String
// }
// let GNodes: Array<GNode> = []
// let GEdges: Array<GEdge> = []
// const exchangeData = (sourceData: Array<TNode>) => {
//   for (let i = 0; i < sourceData.length; i++) {
//     GNodes.push({id: sourceData[i].orgCode})
//     let temp = sourceData[i]
//     for (let j = 0; j < temp.orgParents.length; j++) {
//       GEdges.push({source: temp.orgParents[j], target: temp.orgCode})
//     }
//   }
// }
// exchangeData(sourceData)
// const data = {
//   nodes: GNodes,
//   edges: GEdges

//   // 点集
// //   nodes: [{
// //     id: 'node1', // String，该节点存在则必须，节点的唯一标识
// //   },{
// //     id: 'node2', // String，该节点存在则必须，节点的唯一标识
// //  }, {
// //    id: 'node3'
// //  }],
// //   // 边集
// //   edges: [{
// //     source: 'node1', // String，必须，起始点 id
// //     target: 'node2'  // String，必须，目标点 id
// //   },
// //   {
// //     source: 'node1',
// //     target: 'node3'
// //   }]
// };
// onMounted(() => {
//   var graph = new G6.Graph({
//     container: 'mountNode',
//     width: window.innerWidth,
//     height: window.innerHeight,
//     fitView: true,
//     modes: {
//       default: ['drag-canvas', 'drag-node']
//     },
//     layout: {
//       type: 'dagre',
//       nodeSize: [40, 20],
//       nodesep: 1,
//       ranksep: 1
//     },
//     animate: true,
//     defaultNode: {
//       size: [40, 20],
//       color: 'steelblue',
//       shape: 'rect',
//       style: {
//         lineWidth: 2,
//         fill: '#fff'
//       }
//     },
//     defaultEdge: {
//       size: 1,
//       color: '#e2e2e2',
//       style: {
//         endArrow: {
//           path: 'M 4,0 L -4,-4 L -4,4 Z',
//           d: 4
//         }
//       }
//     }
//   })
// graph.read(data);  // 读取 Step 2 中的数据源到图上
// graph.render();    // 渲染图
// })

// </script>