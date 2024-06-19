<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <div :style="{ border: '1px dashed red', padding: '10px' }">
    <div :style="{ marginBottom: '10px', fontWeight: 'bold' }">{{  msg }}</div>

    <div :style="{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }">
      <div :style="{ marginRight: '20px' }">Счет:</div>
      <div>{{ count }}</div>
    </div>
    <div>
      <button @click="count++">+</button>
    </div>
  </div>

</template>

<style scoped></style>
