// import './assets/main.css'

import { createApp } from 'vue'
// import { createPinia } from 'pinia'
import { setupStore } from './stores'

import App from './App.vue'
import router from './router'

import { setupCustomComponents } from '@/plugins/plugins.js'

const app = createApp(App)

// app.use(createPinia())
// 挂载状态管理
setupStore(app)
app.use(router)

// 注册全局自定义组件 这里是全部自己的模块组件 全部加载
// 后期再看动态加载
setupCustomComponents(app)

app.mount('#app')

// 挂载到 window
window['$vue'] = app
window['$drawingList'] = []
