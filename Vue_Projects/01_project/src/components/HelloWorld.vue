<template>
  <div>
    <Table
      :data="tableData"
      :columns="tableColumns"
      :width="500"
    ></Table>
    <div>
      <div class="parent" v-for="(subList, index) in appList" :key="index">
        <div class="child" :style="{corsur: 'pointer'}" v-for="(item, ind) in subList" :key="ind">
          <span>{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      tableData: [
        {
          name: 'xiao',
          age: '19',
          sex: 'female',
        },
        {
          name: 'lan',
          age: '20',
          sex: 'male',
        },
        {
          name: 'ming',
          age: '18',
          sex: 'female',
        }
      ],
      tableColumns: [
        {
          title: 'name',
          key: 'name',
          minWidth: 80,
        },
        {
          title: 'age',
          key: 'age',
          minWidth: 50,
        },
        {
          title: 'sex',
          key: 'sex',
          minWidth: 50,
        },
      ],
      appList: [
        [
          {name: 'app1-1', code: 'app1-1'},
          {name: 'app1-2', code: 'app1-2'},
          {name: 'app1-3', code: 'app1-3'},
        ],
        [
          {name: 'app2-1', code: 'app2-1'},
          {name: 'app2-2', code: 'app2-2'},
          {name: 'app2-3', code: 'app2-3'}
        ],
        [
          {name: 'app3-1', code: 'app3-1'},
          {name: 'app3-2', code: 'app3-2'},
          {name: 'app3-3', code: 'app3-3'}
        ]
      ]
    }
  }
}
</script>
<style>
.child {
  width: 50px;
  height: 50px;
}
.parent {
  position: relative;
  left: 50px;
}
</style>