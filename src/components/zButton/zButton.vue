<script setup>
import { NButton } from 'naive-ui'
const p = defineProps({
  compConfig: {
    type: Object,
    required: true
  }
})
const props = {
  buttonText: 'default',
  ...p.compConfig.props
}
const methods = {
  onClick: () => {},
  ...p.compConfig.methods
}
</script>

<template>
  <div>
    <n-button @click="methods.onClick">{{ props.buttonText }}</n-button>
  </div>
</template>