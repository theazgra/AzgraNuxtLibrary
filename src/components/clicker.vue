<template>
  <ElButton @click="foobar">Click me!</ElButton>
</template>

<script lang="ts">
import Vue from "vue";
import { Button as ElButton } from "element-ui";

export default Vue.extend({
  name: "Clicker",
  components: { ElButton },
  methods: {
    foobar(): void {
      console.log(this);
      //   this.store.dispatch("user/setName", "ELISKA");
    },
  },
});
</script>
