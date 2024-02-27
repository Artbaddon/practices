const app = Vue.createApp({
  data() {
    return {
      inputValue: "",
      confirmedInputValue: "",
    };
  },
  methods: {
    showAlert() {
      alert("Hello World");
    },
    registerInput(event) {
      this.inputValue = event.target.value;
    },
    confirmInput(event) {
      this.confirmedInputValue = event.target.value;
    },
  },
}).mount("#assignment");
