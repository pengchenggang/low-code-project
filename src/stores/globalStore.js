import { defineStore } from 'pinia'

export const useGlobalStore = defineStore({
  id: 'useGlobalStore',
  state: () => {
    return {
      boxSizeChange: false,
      list: []
    }
  },
  getters: {
    getBoxSizeChange () {
      return this.boxSizeChange
    },
    getList () {
      return this.list
    }
  },
  actions: {
    setBoxSizeChange () {
      this.boxSizeChange = !this.boxSizeChange
    },
    addList(item) {
      this.list.push(item)
    }
  }
})