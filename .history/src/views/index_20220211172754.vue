<template>
  <div>
    <h3>homepage</h3>
    <div class="three-canvas" ref="ThreeTarget"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { TEngine } from "./../utils/Three/TEngine";
export default defineComponent({
  setup() {
    const ThreeTarget = ref(null);
    onMounted(() => {
      const TE = new TEngine(ThreeTarget);

    })
  }
})
</script>


<style lang="scss">
</style>
