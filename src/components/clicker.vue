<template>
  <ElButton>Click me!</ElButton>
</template>

<script lang="ts">
import Vue from "vue";
import { Button as ElButton } from "element-ui";

export default Vue.extend({
  name: "Clicker",
  components: { ElButton },
});
</script>
