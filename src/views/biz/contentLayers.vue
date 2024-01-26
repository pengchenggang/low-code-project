// 这个是已经拖拽出来的组件列表 可以上下进行排序
<script setup>
import { ref } from 'vue'
import Draggable from 'vuedraggable'
const layerList = ref(['a'])
const onMoveCallback = val => {
  console.info('onMoveCallback val', val)
}
</script>
<template>
  <div>
    <draggable item-key="id"
               v-model="layerList"
               ghostClass="ghost"
               @change="onMoveCallback">
      <template #item="{ element }">
        {{ element }}
      </template>
    </draggable>
  </div>
</template>
<style scope>
.ghost {
  opacity: 0;
}
</style>