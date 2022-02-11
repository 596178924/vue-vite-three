<template>
  <div>
    vue vite three
    <p class="p-1">vue p

      <span>span</span>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TEngine } from "./assets/ts/TEngine.ts";
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
