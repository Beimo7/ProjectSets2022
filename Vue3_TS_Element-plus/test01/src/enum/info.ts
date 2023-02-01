import { reactive } from 'vue'

interface info {
  phone: string ,
  verify?: number,
  password?: string,
  checked: boolean,
  type: number //登录类型，0为验证码，1为密码,
  btnText: string // 当登陆类型为0，显示"登录/注册"，当登录类型为1时，显示"登录"
}

let info = reactive({
  phone: '',
  checked: false,
  type: 0,
  password: '',
  verify: ''
})
export default info

