<template>
  <n-layout content-style="height: 100vh;">
    <n-layout-header style="height: 60px; padding: 16px;"
                     content-style="">
      <slot name="header">低代码平台</slot>
      <!-- 34-28px 按钮尺寸 -->
      <n-button @click="left2ClickHandle">左2</n-button>
      <n-button @click="left3ClickHandle">左3</n-button>
      <n-button @click="right1ClickHandle">右1</n-button>
    </n-layout-header>
    <n-layout has-sider>
      <n-layout-sider bordered
                      style="height: calc(100vh - 60px);"
                      content-style="padding: 1px;"
                      :width="68"
                      :collapsed-width="0">
        <slot name="left1">左1</slot>
      </n-layout-sider>
      <n-layout-content content-style="padding: 0px;">
        <n-layout has-sider>
          <n-layout-sider bordered
                          style="height: calc(100vh - 60px);"
                          :collapsed="leftCollapsed2"
                          :width="264"
                          :collapsed-width="0">
            <slot name="left2">左2</slot>
          </n-layout-sider>
          <n-layout-content content-style="padding: 0px;">
            <n-layout has-sider>
              <n-layout-sider bordered
                              style="height: calc(100vh - 60px);"
                              :collapsed="leftCollapsed3"
                              :width="202"
                              :collapsed-width="0">
                <slot name="left3">左3</slot>
              </n-layout-sider>
              <n-layout-content content-style="padding: 0px;">
                <n-layout has-sider
                          sider-placement="right">
                  <n-layout-content content-style="padding: 0px;">
                    <slot name="content">content</slot>
                  </n-layout-content>
                  <n-layout-sider bordered
                                  style="height: calc(100vh - 60px);"
                                  :collapsed="rightCollapsed1"
                                  :width="350"
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
import { NLayout, NLayoutHeader, NLayoutSider, NLayoutContent, NButton } from 'naive-ui'
import { ref } from 'vue'
const leftCollapsed2 = ref(false)
const leftCollapsed3 = ref(false)
const rightCollapsed1 = ref(false)
const left2ClickHandle = () => {
  leftCollapsed2.value = !leftCollapsed2.value
}

const left3ClickHandle = () => {
  leftCollapsed3.value = !leftCollapsed3.value
}
const right1ClickHandle = () => {
  rightCollapsed1.value = !rightCollapsed1.value
}
</script>
<style scoped>
.n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
  padding: 24px;
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}
</style>