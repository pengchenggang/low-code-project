<template>
  <div>
    <div class="item-box"
         draggable
         v-for="(item) in menuOptions"
         :key="item.title"
         @dragstart="dragStartHandle($event, item)"
         @dblclick="dblclickHandle(item)"
         @click="clickHandle(item)">
      <img :src="bar_x"
           width="200" />
      <div>
        {{ item.title }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import omit from 'lodash/omit'
import { JSONParse, JSONStringify } from '@/utils/utils.js'
import bar_x from './bar_x.png'
const DragKeyEnum = {
  DRAG_KEY: 'ChartData'
}
const menuOptions = ref([
  {
    title: "buttonText1",
    compKey: 'zButton',
    "props": {
      "buttonText": 'buttonText1'
    },
    "methods": {
      "onClick": () => {
        console.info('onClick1')
      }
    }
  },
  {
    title: "buttonText2",
    compKey: 'zButton',
    "props": {
      "buttonText": 'buttonText2'
    },
    "methods": {
      "onClick": () => {
        console.info('onClick2')
      }
    }
  },
])
const dragStartHandle = (e, item) => {
  // console.info('dragStartHandle e', e)
  console.info('dragStartHandle item', item)
  // console.info('dragStartHandle item.disabled', item.disabled)

  if (item.disabled) return
  // 动态注册图表组件
  // componentInstall(item.chartKey, fetchChartComponent(item))
  // componentInstall(item.conKey, fetchConfigComponent(item))
  // 将配置项绑定到拖拽属性上
  if (e && e.dataTransfer && e.dataTransfer.setData)
    e.dataTransfer.setData(DragKeyEnum.DRAG_KEY, JSONStringify(omit(item, ['image'])))
  // 修改状态
  // chartEditStore.setEditCanvas(EditCanvasTypeEnum.IS_CREATE, true)

  // 获取拖拽数据
  // const drayDataString = e!.dataTransfer!.getData(DragKeyEnum.DRAG_KEY)
  // 但 getData() 在测试中发现只能在 ondrop 事件中获取到值:
}

// 双击添加 双击的话，会激发两次单击事件
const dblclickHandle = (item) => {
  console.info('dblclickHandle item', item)
}

// 单击事件 这个应该不干什么事情，双击的时候还会触发两次
const clickHandle = (item) => {
  // item?.configEvents?.addHandle(item)
  console.info('clickHandle item', item)
}
</script>

<style scoped>
.item-box {
  margin: 10px;
  /* height: 100px; */
  user-select: none;
  background-color: burlywood;
  /* cursor: grab; */
}
.disable-select {
  user-select: none;
  pointer-events: none;
}
</style>
