<!-- parent ./HomePage.vue -->
<template>
  <!-- 画布整个场景 -->
  <div class="go-preview go-content-box" style="position: absolute;">
    <n-scrollbar x-scrollable>
      <n-scrollbar>
        <div :style="{ pointerEvents: isPressSpace ? 'none' : 'auto' }">
          <!-- 画布平铺的点点背景 -->
          <div class="go-content-box-canvas">
            <!-- 1920-1080的画布 -->
            <div style="width: 1920px; height: 1080px; background-color: gray;" @drop="dropHandle"
              @dragover="dragoverHandle" @dragenter="dragoverHandle">
              今飞凯达垃圾客服鲁大师放得开啦实际付款鲁大师剪发卡老大手机卡拉法基打撒考拉飞机扣到拉萨<br>
              今飞凯达垃圾客服鲁大师放得开啦实际付款鲁大师剪发卡老大手机卡拉法基打撒考拉飞机扣到拉萨<br>
              今飞凯达垃圾客服鲁大师放得开啦实际付款鲁大师剪发卡老大手机卡拉法基打撒考拉飞机扣到拉萨<br>
              今飞凯达垃圾客服鲁大师放得开啦实际付款鲁大师剪发卡老大手机卡拉法基打撒考拉飞机扣到拉萨<br>
              今飞凯达垃圾客服鲁大师放得开啦实际付款鲁大师剪发卡老大手机卡拉法基打撒考拉飞机扣到拉萨<br>
              今飞凯达垃圾客服鲁大师放得开啦实际付款鲁大师剪发卡老大手机卡拉法基打撒考拉飞机扣到拉萨<br>
              今飞凯达垃圾客服鲁大师放得开啦实际付款鲁大师剪发卡老大手机卡拉法基打撒考拉飞机扣到拉萨<br>
              今飞凯达垃圾客服鲁大师放得开啦实际付款鲁大师剪发卡老大手机卡拉法基打撒考拉飞机扣到拉萨<br>
              今飞凯达垃圾客服鲁大师放得开啦实际付款鲁大师剪发卡老大手机卡拉法基打撒考拉飞机扣到拉萨<br>
              今飞凯达垃圾客服鲁大师放得开啦实际付款鲁大师剪发卡老大手机卡拉法基打撒考拉飞机扣到拉萨<br>
              今飞凯达垃圾客服鲁大师放得开啦实际付款鲁大师剪发卡老大手机卡拉法基打撒考拉飞机扣到拉萨<br>
              今飞凯达垃圾客服鲁大师放得开啦实际付款鲁大师剪发卡老大手机卡拉法基打撒考拉飞机扣到拉萨<br>
            </div>
          </div>
        </div>
      </n-scrollbar>
    </n-scrollbar>
  </div>
  <!-- 底部40高的状态条 -->
  <div style="height: 40px;">
    底部40高的状态条
  </div>
</template>
<script setup>
import { useGlobalStore } from '@/stores/globalStore.js'
import { JSONParse, JSONStringify } from '@/utils/utils.js'
import { ref } from 'vue';

const globalStore = useGlobalStore()
const isPressSpace = ref(false)

window.onKeySpacePressHold = (isHold) => {
  isPressSpace.value = isHold
}

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
  globalStore.addList(drayData)
  // window['$drawingList'].push(drayData)
  // console.info(`window['$drawingList']`, window['$drawingList'])
}

// * 进入拖拽区域
const dragoverHandle = (e) => {
  e.preventDefault()
  e.stopPropagation()
  if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy'
}
</script>
<style>
/* 整个画布最外层 */
.go-content-box {
  /* background-image: linear-gradient(#18181c 14px, transparent 0), linear-gradient(90deg, transparent 14px, #86909c 0); */
  /* 下面有个margin 1px */
  height: calc(100vh - 61px - 40px);
  margin: 1px;
  margin-bottom: 0;
}

/* .go-content-box-canvas {
  height: calc(100vh - 61px - 40px);
} */
</style>