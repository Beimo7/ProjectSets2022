<template>
  <div>
    <Table
      :data="tableData"
      :columns="tableColumns"
    ></Table>
    <Button>submit</Button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      tableData: [],
      tableColumns: [
        {
          title: 'name',
          key: 'name',
          minWidth: 50,
        },
        {
          title: 'age',
          key: 'age',
          minWidth: 50,
        },
        {
          title: 'work',
          key: 'work',
          minWidth: 80,
        },
        {
          title: 'address',
          key: 'address',
          minWidth: 100,
        }
      ]
    }
  }
}
</script>