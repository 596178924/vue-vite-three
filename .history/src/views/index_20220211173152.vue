<template>
  <div>
    <h3>homepage</h3>
    <div class="three-canvas" ref="threeTarget"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { TEngine } from "./../utils/Three/TEngine";
export default defineComponent({
  setup() {
    const threeTarget = ref(null);
    onMounted(() => {
      const TE = new TEngine(threeTarget.value!);
    })
    return {
      threeTarget
    }
  }
})
</script>


<style lang="scss">
.three-canvas {
  width: 100%;
  height: 100%;
}
</style>
