import { createApp } from 'vue'

// vue3-tree-org
import vue3TreeOrg from 'vue3-tree-org'
import "vue3-tree-org/lib/vue3-tree-org.css"

import headerBar from './components/HeadBar.vue'
import App from './App.vue'
import './style.css'
import ElementPlus, { popperProps } from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import router from './router/index'
import { createPinia } from 'pinia'

import VueGridLayout from 'vue-grid-layout'
const pinia = createPinia()
// import {store} from './store/index'
// import VueI18n from './lang/index.ts'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.component('HeadBar', headerBar)
// app.use(VueI18n)
app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.use(vue3TreeOrg)
app.use(VueGridLayout)
// app.use(store)
app.mount('#app')


