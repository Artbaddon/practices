const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      // fullName: "",
      lastName: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        this.counter = 0;
      } else if (value < 0) {
        this.counter = 0;
      }
    },
  },
  computed: {
    fullName() {
      if (this.name === "") {
        console.log("Running");
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    
    add(num) {
      this.counter += num;
    },
    reduce(num) {
      this.counter -= num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
    outputFullName() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "al'Thor";
    },
  },
});

app.mount("#events");
