<template>
  <div style="padding: 15px; background-color: red">
    <button @click="btnClick" style="color: blue">Azgra Button</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AzgraButton",
  methods: {
    btnClick() {
      console.log("Azgra button clicked");
    },
  },
});
</script>