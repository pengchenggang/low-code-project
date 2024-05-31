<script setup>
// https://www.npmjs.com/package/vue3-sketch-ruler
import { computed, reactive, ref, watch } from "vue"
import { useGlobalStore } from '@/stores/globalStore.js';
const globalStore = useGlobalStore()
const sketchRuleReDraw = ref(true)
const thick = 20
const scale = ref(2)
// 计算画布大小
const canvasBox = () => {
  const layoutDom = document.getElementById('go-chart-edit-layout')
  if (layoutDom) {
    // 此处减去滚动条的宽度和高度 
    const scrollW = 20
    return {
      height: layoutDom.clientHeight - scrollW,
      width: layoutDom.clientWidth - scrollW
    }
  }
  return {
    width: 500, // width.value, 全局配置的值 这里先省略
    height: 500, // height.value 全局配置的值 这里先省略
  }
}

const startX = ref(0)
const startY = ref(0)
const lines = reactive({ h: [], v: [] })

// 主题
const paletteStyle = computed(() => {
  const isDarkTheme = null // 全局配置
  return isDarkTheme
    ? {
        bgColor: '#18181c',
        longfgColor: '#4d4d4d',
        shortfgColor: '#4d4d4d',
        fontColor: '#4d4d4d',
        shadowColor: '#18181c',
        borderColor: '#18181c',
        cornerActiveColor: '#18181c'
      }
    : {}
})

// 重绘标尺
const reDraw = () => {
  sketchRuleReDraw.value = false
  setTimeout(() => {
    sketchRuleReDraw.value = true
  }, 10)
}

watch(
  () => globalStore.getBoxSizeChange,
  (newValue, oldValue) => {
    console.info('reDraw')
    setTimeout(() => {
      reDraw()
    }, 400)
  }
)
</script>
<template>
  <sketch-rule
      v-if="sketchRuleReDraw"
      :thick="thick"
      :scale="scale"
      :width="canvasBox().width"
      :height="canvasBox().height"
      :startX="startX"
      :startY="startY"
      :lines="lines"
      :palette="paletteStyle"
    >
    </sketch-rule>
    <!-- 这里还有处理滚动缩放的一段代码 回头再说 edit-rule -->
</template>