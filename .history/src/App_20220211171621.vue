<template>
  <div>
    <div class="three-canvas" ref="ThreeTarget"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { TEngine } from "@/utils/Three/TEngine";
export default defineComponent({
  setup() {
    const TE = new TEngine();
    const ThreeTarget = ref(null);
  }
})
</script>


<style lang="scss">

</style>
