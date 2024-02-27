const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.$refs.userText.value;
      // console.dir(this.$refs.userText);
    },
  },
  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("created()");
  },
  beforeMount() {
    console.log("beforeMount()");
  },
  mounted() {
    console.log("mounted()");
  },
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("updated()");
  },
  beforeUnmount() {
    console.log("beforeUnmount()");
  },
  unmounted() {
    console.log("unmounted()");
  },
});

app.mount("#app");

setTimeout(() => {
  app.unmount();
}, 3000);

// const data = {
//   message: "Hello!",
//   longMessage: "Hello World!!!",
// };
// const handler = {
//   set(target, key, value) {
//     if (key === "message") {
//       target.longMessage = value + "World";
//     }
//   },
// };

// const proxy = new Proxy(data, handler);

// proxy.message = "Hello!!!!!!! ";

// console.log(proxy.longMessage);

// console.log(proxy.longMessage);
