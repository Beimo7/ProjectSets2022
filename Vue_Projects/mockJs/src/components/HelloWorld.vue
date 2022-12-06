<template>
  <div>
    <Table :data="tableData" :columns="tableColumns"></Table>
    <Button :loading="loading" @click="test">submit</Button>
    <Button type="error" ghost :loading="loading" @click="update">update</Button>
    <iframe  ref="Iframe" src="https://www.baidu.com/"></iframe>
    <iframe src="http://localhost:8080">
    </iframe>
    <Spin size="large" v-if="loading"></Spin>
    <!-- <vxe-table :data="tableData">
      <vxe-column field="name" title="name"></vxe-column>
      <vxe-column field="age" title="age"></vxe-column>
      <vxe-column field="work" title="work"></vxe-column>
      <vxe-column field="address" title="address"></vxe-column>
    </vxe-table> -->
  </div>
</template>

<script>
import mockJs from '../mock/index'
import $ from 'jquery'
export default {
  name: "HelloWorld",
  data() {
    return {
      loading: false,
      testData: 90,
      tableData: [],
      tableColumns: [
        {
          title: "id",
          key: "id",
          minWidth: 50,
        },
        {
          title: "name",
          key: "name",
          minWidth: 50,
        },
        {
          title: "date",
          key: "date",
          minWidth: 80,
        },
        {
          title: "email",
          key: "email",
          minWidth: 100,
          ellipsis: true,
          render: (h, params) => {
            let texts = '';
            texts = params.row.email
            return h('div', [
              h(
                'Tooltip', 
                {
                  props: {
                    placement: "right",
                    transfer: true,
                  },
                  style: {
                    cursor: 'pointer',
                  },
                  on: {
                    'click': () => {
                      console.log('click')
                    }
                  }
                },
                [
                  texts,
                  h(
                    'div',
                    {
                      slot: 'content',
                      style: {
                        whiteSpace: 'normal',
                      },
                      on: {
                        click: () => {
                          console.log('chu')
                        }
                      }
                    },
                    params.row.email
                  )
                ]
              )
            ])
          }
        },
      ],
    };
  },
  mounted() {
    this.update();
    // this.updateIframe()
  },
  methods: {
    update() {
      let self = this
      $.getJSON('/api/setData', {}, (data) => {
        console.log('next',{data});
        data.forEach((item) => {
          self.tableData.push(item);
        })
      })
    },
    // updateIframe() {
    //   this.loading = true
    //   let self = this
    //   let iframe = this.$refs.Iframe
    //   iframe.onload = () =>{
    //     console.log('iframe', iframe)
    //     debugger
    //     console.log('iframe.contentDocument', iframe.contentDocument)
    //     self.loading = false
    //   } 
    // },
    test() {
      let self = this;
      console.log('first this', this, this.testData)
      console.log('first self', self, self.testData)
      this.testData = 100
      console.log('second this', this, this.testData)
      console.log('second self', self, self.testData)
      self.testData = 200
      console.log('third this', this, this.testData)
      console.log('third self', self, self.testData)
    }
    // //success Event
    // async update() {
    //   let self = this
    //   await this.success()
    //   this.close()
    // },
    // // success
    // success() {
    //   return new Promise((resolve) => {
    //     console.log("开始执行success函数");
    //     let count = 0;
    //     let timeout = setInterval(() => {
    //       if (count > 10) {
    //         clearInterval(timeout);
    //         resolve(count)
    //       }
    //       count += 1;
    //       console.log({ count });
    //     }, 1000);
    //     console.log("结束执行success函数");
    //   });
    // },
    // close(val) {
    //   console.log("开始执行close");
    //   console.log({val})
    //   console.log("结束执行close");
    // },
    // update() {
    //   this.success(this.close)
    // },
    // success(callback) {
    //   console.log('success 开始')
    //   let count = 0
    //   let settime = setInterval(() => {
    //     count += 1
    //     console.log({count})
    //     if (count == 5) {
    //       clearInterval(settime)
    //       console.log('success 结束')
    //       callback()
    //     }
    //   }, 1000)
    // },
    // close() {
    //   console.log('close')
    // }
  },
};
</script>