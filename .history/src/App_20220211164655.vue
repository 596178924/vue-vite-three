<template>
  <div>
    vue vite three
    <p class="p-1">vue p

      <span>span</span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  setup() {
    
  }
})
</script>


<style lang="scss">
.p-1 {
  color: red;
  span {
    color: aqua;
  }
}
</style>
