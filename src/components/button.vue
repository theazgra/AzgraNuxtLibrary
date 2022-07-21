<template>
  <div
    class="azgra__button"
    style="padding: 15px; background-color: red; width: 50%"
  >
    <button @click="btnClick" style="color: blue">{{ title }}</button>
    <ElSelect v-model="value" placeholder="Select value ...">
      <ElOption
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </ElSelect>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { notificationService } from "../services/notification";
import { Select as ElSelect, Option as ElOption } from "element-ui";

export default Vue.extend({
  name: "AzgraButton",
  components: { ElSelect, ElOption },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      options: [
        {
          value: "Option1",
          label: "Option1",
        },
        {
          value: "Option2",
          label: "Option2",
        },
        {
          value: "Option3",
          label: "Option3",
        },
        {
          value: "Option4",
          label: "Option4",
        },
        {
          value: "Option5",
          label: "Option5",
        },
      ],
      value: "",
    };
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
  button
    background-color: none
    padding: 12px
    border: 5px solid blue
</style>
