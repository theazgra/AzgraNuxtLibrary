<template>
  <div class="block">
    <slot />
  </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AzgraBlock",
  mounted() {},
});
</script>

<style lang="sass" scoped>
.block
  margin: 20px
  padding: 20px
  outline: 2px dashed gray
  text-align: center
</style>