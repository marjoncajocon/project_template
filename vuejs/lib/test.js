import { defineComponent, ref } from "../vue.js";

export const MyInputComponent = defineComponent({
  setup() {
    const count = ref(" Body "); // Using ref for reactive data

    return { count };
  },
  template: `
    <b>
      Header
      <hr>
      {{ count }}
     <hr/>
      Footer

    </b>
  `
});