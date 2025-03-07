import { Panel } from "../plugin/theme.js";
import { defineComponent, onBeforeUnmount, onMounted, ref } from "../vue.js";

const Login = defineComponent({
  props: [
    "name"
  ],
  setup() {

    
    onMounted(() => {
      console.log("this is mounted!");
    });

    onBeforeUnmount(() => {
      console.log("distroeyd login");
    });

  },
  components: {
    Panel
  },
  data() {
    return {
      username: "",
      password: "",
      count: 0,
      data: ["43", "fda", "ff", "444"]
    };
  },
  methods: {
    setCount() {
      this.count++;
    }
  },

  template: `
    <Panel title="Login Form" logo="">
      hellwo this is a slot
    </Panel>
  `
});


const Home = defineComponent({
  props: ["name"],
  template: `
    <h1>Dash Board</h1>
  `,
  mounted() {
    console.log("Dashboard is mounted!");
  }
});


export const MyInputComponent = defineComponent({
  data() {
    return {
      isHome: true
    }
  },
  components: {
    Login,
    Home
  },
  template: `

      <Home v-if="isHome" />
      <Login name="Marjon Cajocon" v-else="isHome" />


      <input type="checkbox" v-model="isHome" />
      
  `
});