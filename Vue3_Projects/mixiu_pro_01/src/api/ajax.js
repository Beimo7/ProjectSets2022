// 对接口进行封装
import http from './http'

export default {
  // 获取树结构
  getTree() {
    return http({
      url: `/deep/tree`,
      method: "get"
    });
  },
  
}