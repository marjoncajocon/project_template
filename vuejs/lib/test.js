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
  }
  ,
  template: `
    <div>
      <h2>{{ name }}</h2>
      <br />
      {{ count }}
      <br />
      <input type="text" v-model="username"  placeholder="username" /><br />
      <input type="password" v-model="password"  placeholder="password" /> <br />

      <template v-for="item of data">
        <button @mouseover="setCount">
          {{ item }}
        </button>
      </template>

{{ username }} - {{ password }}
    </div>
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
    <b>
      Header
      <hr>




      <Home v-if="isHome" />
      <Login name="noel" v-else="isHome" />


      <input type="checkbox" v-model="isHome" />
      


     <hr/>
      Footer

    </b>
  `
});