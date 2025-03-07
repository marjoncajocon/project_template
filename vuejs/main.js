//import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

import { MyInputComponent } from "./lib/test.js";
import {createApp, ref} from "./vue.js";


createApp({
  setup() {
    
  },
  components: {
    MyInputComponent
  }
  ,
  data() {
    return {
        count: ""
    }
  }
  ,
  template: `
    <b>
        {{count}}
        <br />
        <input type="text" v-model="count">

        <MyInputComponent />
    </b>
  `
}).mount('#app')