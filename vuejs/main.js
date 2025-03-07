//import { createApp, ref } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

import { MyInputComponent } from "./lib/test.js";
import {createApp, ref} from "./vue.js";

//////

import "./plugin/bs3/css/bootstrap.css";
import "./plugin/bs3/css/bootstrap-theme.css";
import "./plugin/bs3/js/bootstrap.js";

/////


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

    <Teleport to="body">
    <MyInputComponent />
    </Teleport>
  `
}).mount('#app')


// createApp({
//   setup() {
    
//   },
//   components: {
//     MyInputComponent
//   }
//   ,
//   data() {
//     return {
//         count: ""
//     }
//   }
//   ,
//   template: `
//     <b>
//         {{count}}
//         <br />
//         <input type="text" v-model="count">

//         <Teleport to="body">
//         <MyInputComponent />
//         </Teleport>
//     </b>
//   `
// }).mount('#app')