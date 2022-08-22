<template>
  <ElButton @click="foobar">
    {{ $t("buttons.buy") }}
  </ElButton>
</template>

<script lang="ts">
import Vue from "vue";
import { Button as ElButton } from "element-ui";
import { connectToServices } from "../services/componentConnectionService";

export default Vue.extend({
  name: "Clicker",
  components: { ElButton },
  beforeCreate() {
    connectToServices(this);
  },
  methods: {
    foobar(): void {
      console.log(this.$store.getters["user/getName"]);
    },
  },
});
</script>
