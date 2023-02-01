<template>
  <div>
    <Quote :content="content" @update="update"></Quote>
    <!-- <el-input v-model="content"></el-input> -->
    {{ content }}
  </div>
  <dl>xx</dl>
  <blockquote>xx</blockquote>
  <el-button @click="showTable">显示图标</el-button>
  <div id="echarts" style="width: 600px; height: 400px"></div>
</template>
<script setup lang="ts">
import Quote from "../../components/Quote.vue";
import { ref } from "vue";
let content = ref("");
function update(value: string) {
  content.value = value;
}

import * as echarts from "echarts";

function showTable() {
  // 基于准备好的dom，初始化echarts实例
  let ele: any;
  console.log(document.getElementById("echarts"));
  ele = document.getElementById("echarts");
  var myChart = echarts.init(ele);
  var data = [
    [
      [28604, 77, 17096869, "Australia", 1990],
      [31163, 77.4, 27662440, "Canada", 1990],
      [1516, 68, 1154605773, "China", 1990],
      [13670, 74.7, 10582082, "Cuba", 1990],
      [28599, 75, 4986705, "Finland", 1990],
      [29476, 77.1, 56943299, "France", 1990],
      [31476, 75.4, 78958237, "Germany", 1990],
      [28666, 78.1, 254830, "Iceland", 1990],
      [1777, 57.7, 870601776, "India", 1990],
      [29550, 79.1, 122249285, "Japan", 1990],
      [2076, 67.9, 20194354, "North Korea", 1990],
      [12087, 72, 42972254, "South Korea", 1990],
      [24021, 75.4, 3397534, "New Zealand", 1990],
      [43296, 76.8, 4240375, "Norway", 1990],
      [10088, 70.8, 38195258, "Poland", 1990],
      [19349, 69.6, 147568552, "Russia", 1990],
      [10670, 67.3, 53994605, "Turkey", 1990],
      [26424, 75.7, 57110117, "United Kingdom", 1990],
      [37062, 75.4, 252847810, "United States", 1990],
    ],
    [
      [44056, 81.8, 23968973, "Australia", 2015],
      [43294, 81.7, 35939927, "Canada", 2015],
      [13334, 76.9, 1376048943, "China", 2015],
      [21291, 78.5, 11389562, "Cuba", 2015],
      [38923, 80.8, 5503457, "Finland", 2015],
      [37599, 81.9, 64395345, "France", 2015],
      [44053, 81.1, 80688545, "Germany", 2015],
      [42182, 82.8, 329425, "Iceland", 2015],
      [5903, 66.8, 1311050527, "India", 2015],
      [36162, 83.5, 126573481, "Japan", 2015],
      [1390, 71.4, 25155317, "North Korea", 2015],
      [34644, 80.7, 50293439, "South Korea", 2015],
      [34186, 80.6, 4528526, "New Zealand", 2015],
      [64304, 81.6, 5210967, "Norway", 2015],
      [24787, 77.3, 38611794, "Poland", 2015],
      [23038, 73.13, 143456918, "Russia", 2015],
      [19360, 76.5, 78665830, "Turkey", 2015],
      [38225, 81.4, 64715810, "United Kingdom", 2015],
      [53354, 79.1, 321773631, "United States", 2015],
    ],
  ];
  // 绘制图表
  myChart.setOption({
    // backgroundColor: {
    //   type: "radial",
    //   x: 0.3,
    //   y: 0.3,
    //   r: 0.8,
    //   colorStops: [
    //     {
    //       offset: 0,
    //       color: "#f7f8fa",
    //     },
    //     {
    //       offset: 1,
    //       color: "#cdd0d5",
    //     },
    //   ],
    // },
    // grid: {
    //   left: 10,
    //   containLabel: true,
    //   bottom: 10,
    //   top: 10,
    //   right: 30,
    // },
    // xAxis: {
    //   splitLine: {
    //     show: false,
    //   },
    // },
    // yAxis: {
    //   splitLine: {
    //     show: false,
    //   },
    //   scale: true,
    // },
    // series: [
    //   {
    //     name: "1990",
    //     data: data[0],
    //     type: "scatter",
    //     symbolSize: function (data: any) {
    //       return Math.sqrt(data[2]) / 5e2;
    //     },
    //     emphasis: {
    //       focus: "series",
    //       label: {
    //         show: true,
    //         formatter: function (param: any) {
    //           return param.data[3];
    //         },
    //         position: "top",
    //       },
    //     },
    //     itemStyle: {
    //       shadowBlur: 10,
    //       shadowColor: "rgba(120, 36, 50, 0.5)",
    //       shadowOffsetY: 5,
    //       color: {
    //         type: "radial",
    //         x: 0.4,
    //         y: 0.3,
    //         r: 1,
    //         colorStops: [
    //           {
    //             offset: 0,
    //             color: "rgb(251, 118, 123)",
    //           },
    //           {
    //             offset: 1,
    //             color: "rgb(204, 46, 72)",
    //           },
    //         ],
    //       },
    //     },
    //   },
    //   {
    //     name: "2015",
    //     data: data[1],
    //     type: "scatter",
    //     symbolSize: function (data: any) {
    //       return Math.sqrt(data[2]) / 5e2;
    //     },
    //     emphasis: {
    //       focus: "series",
    //       label: {
    //         show: true,
    //         formatter: function (param: any) {
    //           return param.data[3];
    //         },
    //         position: "top",
    //       },
    //     },
    //     itemStyle: {
    //       shadowBlur: 10,
    //       shadowColor: "rgba(25, 100, 150, 0.5)",
    //       shadowOffsetY: 5,
    //       color: {
    //         type: "radial",
    //         x: 0.4,
    //         y: 0.3,
    //         r: 1,
    //         colorStops: [
    //           {
    //             offset: 0,
    //             color: "rgb(129, 227, 238)",
    //           },
    //           {
    //             offset: 1,
    //             color: "rgb(25, 183, 207)",
    //           },
    //         ],
    //       },
    //     },
    //   },
    // ],

    // 系列中设置数据
    // xAxis: {
    //   type: 'category',
    //   data: ['a', 'b', 'c', 'd']
    // },
    // yAxis: {},
    // series: [
    //   {
    //     type: 'bar',
    //     name: '2015',
    //     data: [1, 2, 3, 4, 5]
    //   },
    //   {
    //     type: 'bar',
    //     name: '2016',
    //     data: [2, 3, 4, 5, 6]
    //   },
    //   {
    //     type: 'bar',
    //     name: '2017',
    //     data: [3, 4, 5, 6, 7]
    //   }
    // ]

    // 在数据集中设置数据
    legend: {},
    tooltip: {},
    dataset: {
      // 提供一份数据
      source: [
        ['product', '2015', '2016', '2017'],
        ['a', 1, 2, 3],
        ['b', 2, 3, 4],
        ['c', 4, 5, 6],
        ['d', 4, 4, 3]
      ]
      // 也可以使用常见的数据对象格式
      // 用dimensions指定维度的顺序。直角坐标系中，如果x轴 type为category
      // 默认将第一个维度映射到x轴上，后面维度映射到y轴上
      // 如果不指定dimensions，也可以通过执行series.encode完成映射
      // dimensions: ['product', '2015', '2016', '2017'],
      // source: [
      //   {
      //     product: 'a',
      //     '2015': 1,
      //     '2016': 2,
      //     '2017': 3
      //   },
      //   {
      //     product: 'b',
      //     '2015': 2,
      //     '2016': 3,
      //     '2017': 4
      //   },
      //   {
      //     product: 'c',
      //     '2015': 3,
      //     '2016': 4,
      //     '2017': 5
      //   },
      //   {
      //     product: 'd',
      //     '2015': 4,
      //     '2016': 5,
      //     '2017': 6
      //   }
      // ]
    },
    // 声明一个X轴，类目轴category。默认请跨国下，类目轴对应到dataset第一列
    xAxis: [
      {
        type: 'category',
        gridIndex: 0
      },
      {
        type: 'category',
        gridIndex: 1
      }
    ],
    yAxis: [
      {
        gridIndex: 0
      },
      {
        gridIndex: 1
      }
    ],
    grid: [
      {
        bottom: '55%'
      },
      {
        top: '55%'
      }
    ],
    series: [
      {
        type: 'bar',
        seriesLayoutBy: 'row'
      },
      {
        type: 'bar',
        seriesLayoutBy: 'row'
      },
      {
        type: 'bar',
        seriesLayoutBy: 'row'
      },
      {
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1
      },
      {
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1
      },
      {
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1
      },
      {
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1
      },
    ]
  });
}
</script>
<style scoped>
</style>
