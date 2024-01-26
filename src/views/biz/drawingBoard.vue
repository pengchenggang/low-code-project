<template>
  <div>
    <div style="width: 500px; height: 500px; background-color: gray;"
         @drop="dropHandle"
         @dragover="dragoverHandle"
         @dragenter="dragoverHandle"></div>
  </div>
</template>
<script setup>
import { JSONParse, JSONStringify } from '@/utils/utils.js'
const DragKeyEnum = {
  DRAG_KEY: 'ChartData'
}
const dropHandle = (e) => {
  // console.info('dropHandle e', e)
  let drayData = null
  // 获取拖拽数据
  if (e && e.dataTransfer && e.dataTransfer.getData) {
    const drayDataString = e.dataTransfer.getData(DragKeyEnum.DRAG_KEY)
    // console.info('drayDataString', drayDataString)
    drayData = JSONParse(drayDataString)
  }

  // console.info('drayData', drayData)
  window['$drawingList'].push(drayData)
  console.info(`window['$drawingList']`, window['$drawingList'])
}

// * 进入拖拽区域
const dragoverHandle = (e) => {
  e.preventDefault()
  e.stopPropagation()
  if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy'
}
</script>