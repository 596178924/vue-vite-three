<template>
  <div>
    <!-- <h3>homepage</h3> -->
    <div class="three-canvas" ref="threeTarget"></div>

  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { WebGLRenderer } from "three";
import { TEngine } from "./../utils/Three/TEngine";
export default defineComponent({
  setup() {
    const threeTarget = ref(null);
    onMounted(() => {
      const TE = new TEngine(threeTarget.value);
    })
    return {
      threeTarget
    }
  },
  data:()=>({
    renderer: WebGLRenderer
  })
})
</script>


<style lang="scss">
.three-canvas {
  width: 100vw;
  height: 100vh;
  canvas {
    background-color: #000;
  }
}
</style>
