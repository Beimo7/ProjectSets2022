import { defineConfig } from 'vite'
import viteBaseConfig from "./vite.base.config"
import viteDevCionfig from "./vite.dev.config"
import viteProdConfig from "./vite.prod.config"
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
})

// // 策略模式
// const envResolver = {
//   "build": () => {
//     console.log("生产环境")
//     return ({ ...viteBaseConfig, ...viteProdConfig})
//   },
//   "serve":() => {
//     console.log("开发环境")
//     return Object.assign({}, viteBaseConfig, viteDevCionfig)
//   }
// }
// export default defineConfig(({ command }) => {
//   // 是build还是serve 主要取决于我们命令是开启开发环境 还是 生产环境
//   return envResolver[command]()
//   if (command === "build") {
//     // 代表生产环境的配置
//   }
//   else {
//     // command 有 build 和 serve  两种情况
//     // 代表开发环境的配置
//   }
// })