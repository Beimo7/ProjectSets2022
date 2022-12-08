import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入公共组件，全局使用
import Tree from './components/Tree.vue'

// createApp中导入的是根组件
const app = createApp(App)
app.use(router)
app.use(ElementPlus)

// 配置应用级选项

// 配置应用级的错误处理器，捕获所有子组件上抛出但没有处理的错误
app.config.errorHandler = (err) => {
  console.log(err)
}

// 注册应用范围内可用资源，如组件
app.component('Tree', Tree)

app.mount('#app')

// 可以创建多个应用实例，并进行挂载
const app1 = createApp(App)
app1.mount('#app1')
const app2 = createApp(App)
app2.mount('#app2')



