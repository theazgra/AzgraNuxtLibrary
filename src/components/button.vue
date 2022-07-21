<template>
  <div
    class="azgra__button"
    style="padding: 15px; background-color: red; width: 50%"
  >
    <button @click="btnClick" style="color: blue">{{ title }}</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { notificationService } from "../services/notification";
export default Vue.extend({
  name: "AzgraButton",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    btnClick() {
      notificationService.notify("Azgra button clicked");
    },
  },
});
</script>

 <style lang="sass" scoped>
.azgra__button
  height: 250px
</style>
