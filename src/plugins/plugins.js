import zButton from '@/components/zButton/zButton.vue'
import { SketchRule } from 'vue3-sketch-ruler'
import 'vue3-sketch-ruler/lib/style.css'

/**
 * 后期做的组件可以放到这里提前注册
 * @param {*} app 
 */
export function setupCustomComponents(app) {
  // 测试button组件
  app.component('zButton', zButton)
  // 标尺
  app.component('SketchRule', SketchRule)
}