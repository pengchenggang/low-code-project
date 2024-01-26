<template>
  <div v-for="(item, index) in drawingListComputed" :key="index">
    <!-- :is 如果是字符串，就查找全局组件 -->
    <component :is="item.compKey"
               :comp-config="item"></component>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { JSONParse, JSONStringify } from '@/utils/utils.js'

const drawingListComputed = computed(() => window['$drawingList'])
// const compConfig = JSONParse(JSONStringify({
//   compKey: 'zButton',
//   "props": {
//     "buttonText": 'buttonText'
//   },
//   "methods": {
//     "onClick": () => {
//       console.info('onClick')
//     }
//   }
// }))
</script>
