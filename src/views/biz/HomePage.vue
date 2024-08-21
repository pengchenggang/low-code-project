<script setup>
import layoutBox from './layoutBox.vue'
// 这里zButton 转移到main.js注册
import contentLayers from './contentLayers.vue'
import chartsItemBox from './chartsItemBox.vue'
import left2Box from './left2Box.vue'
import drawingBoard from './drawingBoard.vue'
import drawingList from './drawingList.vue'
import EditSketchRule from './EditSketchRule.vue'
import { keyRecordHandle } from '@/utils/utils.js'

// 这个是动态注册，后期需要动态注册的时候，再说
// 解决的是 自定义组件太多，拖拽那个，再注册拖拽的组件
// window['$vue'].component('zButton', zButton)

// 开启键盘监听
keyRecordHandle()

</script>
<template>
  <div>
    <layoutBox>
      <template #header>header 低代码</template>
      <template #left1>大分类</template>
      <template #left2>
        可拖拽组件列表
        <left2Box></left2Box>
      </template>
      <template #left3>
        画布上已存在的组件：
        <contentLayers></contentLayers>
        
      </template>
      <template #content>
        <!-- 标尺 -->
        <!-- <edit-sketch-rule></edit-sketch-rule> -->
        <!-- 组件列表 应该放在画布里面，回头放 -->
        <drawingList></drawingList>
        <!-- <chartsItemBox></chartsItemBox> -->
        <!-- 画布 -->
        <drawingBoard></drawingBoard>
      </template>
      <template #right1>
        当前组件的属性面板
      </template>
    </layoutBox>

  </div>
</template>