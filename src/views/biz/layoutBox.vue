<template>
  <n-layout content-style="height: 100vh;">
    <n-layout-header class="go-header-box" content-style="">
      <!-- 这里css用的3列 左中右 -->
      <div class="go-header-box-left">
        <slot name="header">低代码平台</slot>
        <!-- 34-28px 按钮尺寸 -->
        <n-button @click="left2ClickHandle">左2</n-button>
        <n-button @click="left3ClickHandle">左3</n-button>
        <n-button @click="right1ClickHandle">右1</n-button>
      </div>
      <div class="go-header-box-center">
        <div>center</div>
      </div>
      <div class="go-header-box-right">
        <div>right</div>
      </div>

    </n-layout-header>
    <n-layout has-sider>
      <n-layout-sider bordered style="height: calc(100vh - 60px);" content-style="padding: 1px;" :width="68"
        :collapsed-width="0">
        <slot name="left1">左1</slot>
      </n-layout-sider>
      <n-layout-content content-style="padding: 0px;">
        <n-layout has-sider>
          <n-layout-sider bordered style="height: calc(100vh - 60px);" :collapsed="leftCollapsed2" :width="264"
            :collapsed-width="0">
            <slot name="left2">左2</slot>
          </n-layout-sider>
          <n-layout-content content-style="padding: 0px;">
            <n-layout has-sider>
              <n-layout-sider bordered style="height: calc(100vh - 60px);" :collapsed="leftCollapsed3" :width="202"
                :collapsed-width="0">
                <slot name="left3">左3</slot>
              </n-layout-sider>
              <n-layout-content content-style="padding: 0px;">
                <n-layout has-sider sider-placement="right">
                  <n-layout-content content-style="padding: 0px;" id="go-chart-edit-layout">
                    <slot name="content">content</slot>
                  </n-layout-content>
                  <n-layout-sider bordered style="height: calc(100vh - 60px);" :collapsed="rightCollapsed1" :width="350"
                    :collapsed-width="0">
                    <slot name="right1">右1</slot>
                  </n-layout-sider>
                </n-layout>
              </n-layout-content>
            </n-layout>
          </n-layout-content>
        </n-layout>
      </n-layout-content>
    </n-layout>
  </n-layout>
  <!-- <n-layout has-sider>
    <n-layout-sider bordered
                    :collapsed="leftCollapsed1"
                    :collapsed-width="0">
      左1
    </n-layout-sider>
    <n-layout-content content-style="padding: 24px;">
      content
    </n-layout-content>
  </n-layout> -->
</template>
<script setup>
import { useGlobalStore } from '@/stores/globalStore'
import { NLayout, NLayoutHeader, NLayoutSider, NLayoutContent, NButton } from 'naive-ui'
import { ref } from 'vue'
const globalStore = useGlobalStore()
const leftCollapsed2 = ref(false)
const leftCollapsed3 = ref(false)
const rightCollapsed1 = ref(false)
const left2ClickHandle = () => {
  leftCollapsed2.value = !leftCollapsed2.value
  globalStore.setBoxSizeChange()
}

const left3ClickHandle = () => {
  leftCollapsed3.value = !leftCollapsed3.value
  globalStore.setBoxSizeChange()
}
const right1ClickHandle = () => {
  rightCollapsed1.value = !rightCollapsed1.value
  globalStore.setBoxSizeChange()
}
</script>
<style scoped>
.go-header-box {
  display: grid;
  grid-template-columns: repeat(3, 33%);
  height: 60px;
  padding: 0 20px 0 60px;
}

.go-header-box-left {
  justify-content: start;
  display: flex;
  align-items: center;
  min-width: 320px;
}

.go-header-box-center {
  justify-content: center;
  display: flex;
  align-items: center;
  min-width: 320px;
}

.go-header-box-right {
  justify-content: flex-end;
  display: flex;
  align-items: center;
  min-width: 320px;
}

.n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  /* padding: 24px; */
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}
</style>