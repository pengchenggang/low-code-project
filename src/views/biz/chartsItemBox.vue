<template>
  <!-- 拖拽的动作 -->
  <!-- 每一项组件的渲染 -->
  <div class="item-box"
       v-for="(item) in menuOptions"
       :key="item.title"
       draggable
       @dragstart="!item.disabled && dragStartHandle($event, item)"
       @dblclick="dblclickHandle(item)"
       @click="clickHandle(item)">
    {{ item.disabled }}
    {{ item.title }}
    <img :src="bar_x"
         width="200" />
  </div>
  <div style="width: 500px; height: 500px; background-color: gray;" @drop="dropHandle"
  @dragover="dragoverHandle"
    @dragenter="dragoverHandle"></div>
</template>

<script setup>
import { ref } from 'vue'
import bar_x from './bar_x.png'
const menuOptions = ref([
  { title: 'abc', disabled: false },
  { title: 'heiheihei', disabled: false },
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
  // e!.dataTransfer!.setData(DragKeyEnum.DRAG_KEY, JSONStringify(omit(item, ['image'])))
  // 修改状态
  // chartEditStore.setEditCanvas(EditCanvasTypeEnum.IS_CREATE, true)

  // 获取拖拽数据
  // const drayDataString = e!.dataTransfer!.getData(DragKeyEnum.DRAG_KEY)
  // 但 getData() 在测试中发现只能在 ondrop 事件中获取到值:
}

// 拖拽结束
const dragendHandle = () => {
  console.info('dragendHandle')
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
const dropHandle = (e) => {
  console.info('dropHandle e', e)
}

// * 进入拖拽区域
const dragoverHandle = (e) => {
  e.preventDefault()
  e.stopPropagation()
  if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy'
}
</script>
<style scoped>
.item-box {
  margin: 10px;
  height: 100px;
  user-select: none;
  background-color: pink;
  cursor: grab;
}
.disable-select {
  user-select: none;
  pointer-events: none;
}
</style>