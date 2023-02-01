import { computed } from 'vue'

let person = reactive({
  firstName: 'xx',
  lastName: 'xx'
})
// 计算属性——简写
let fullName = computed(() => {
  return person.firstName + '-' + person.lastName
})





//  计算属性——完整
let fullNameSecond = computed(() => {
  get() {
      return person.firstName + '-' + person.lastName
    },
    set(value) {
      const nameArr = value.split('-')
      person.firstName = nameArr[0]
      person.lastName = nameArr[1]
    }
})