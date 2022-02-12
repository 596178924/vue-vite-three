<template>
  <div>
    <!-- <h3>homepage</h3> -->
    <div class="three-canvas" ref="threeTarget"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, Ref, ref } from "vue";
// import { WebGLRenderer } from "three";
import { TEngine } from "./../utils/Three/TEngine";
import { BasicObjectList } from "@/utils/Three/TBasicObject";
import { LightsList } from "./../utils/Three/TLights"
// import { TCanvasTextureEditor }  from "@/utils/Three/TCanvasTextureEditor"
export default defineComponent({
  setup() {
    const threeTarget: Ref<null> = ref(null);
    onMounted(() => {
      const TE = new TEngine(threeTarget.value!);
      // TE.addObject(...LightsList);
      TE.addObject(...BasicObjectList);
    })
    return {
      threeTarget
    }
  },
  data: () => ({
    // renderer: WebGLRenderer
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
