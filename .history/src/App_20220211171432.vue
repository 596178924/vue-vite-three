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
import { TEngine } from "@/utils/Three/TEngine";
export default defineComponent({
  setup() {
    const TE = new TEngine();
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
