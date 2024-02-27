const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmedName: "",
      numIncrease: 0,
      numDecrease: 0,
    };
  },
  methods: {
    setIncreaseNumber(event) {
      this.numIncrease = parseInt(event.target.value);
    },
    setDecreaseNumber(event) {
      this.numDecrease = parseInt(event.target.value);
      console.log(this.numDecrease);
    },
    increaseCounter() {
      this.counter += this.numIncrease;
    },
    decreaseCounter() {
      this.counter -= this.numDecrease;
    },
    resetCounter() {
      this.counter = 0;
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    confirmName() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert(`Submited ${this.name}`);
    },
  },
});

app.mount("#events");
