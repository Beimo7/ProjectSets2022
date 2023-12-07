<template>
  <div id="mynetwork"></div>
</template>
<script setup>
// import vis from 'vis-network'
import { ref } from 'vue'
const nodes = new vis.DataSet([
  { id: 1, label: 'node1'},
  { id: 2, label: 'node2'},
  { id: 3, label: 'node3'},
  { id: 4, label: 'node4'},
  { id: 5, label: 'node5'}
]);

let edges = new vis.DataSet([
  { from: 1, to: 3 },
  { from: 1, to: 2 },
  { from: 2, to: 4 },
  { from: 2, to: 5 },
  { from: 3, to: 3 },
]);
const mynetwork = ref(null)
const data = {
  nodes: nodes,
  edges: edges
}
const options = {}
const network = new vis.Network(mynetwork.value, data, options)
</script>
<style scoped>
#mynetwork {
  width: 100%;
  height: 100%;
  border: 1px solid lightgray;
}
</style>