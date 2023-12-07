import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', {
  state: () => {
    return {
      person: {
      name: 'xx',
      age: 11,
      sex: 'male'
    },
      address: 'xxx',
    }
  },
  getters: {
    getAddAge: (state) => {
      return (num: number) => state.person.age + num
    },
    getNameAndAge() : string{
      return this.person.name + this.getAddAge(10)
    }
  },
  actions: {
    saveName(name: string) {
      this.person.name = name
    }
  }
})