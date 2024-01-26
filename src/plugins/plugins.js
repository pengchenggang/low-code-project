import zButton from '@/components/zButton/zButton.vue'

/**
 * 后期做的组件可以放到这里提前注册
 * @param {*} app 
 */
export function setupCustomComponents(app) {
  app.component('zButton', zButton)
}