const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      buttonToggle: false,
      display: "",
      userColor: "",
    };
  },
  methods: {
    buttonClicked() {
      this.buttonToggle = !this.buttonToggle;
    },
  },
  computed: {
    inputClasses() {
      if (this.userInput === "user1") {
        return { user1: true };
      } else if (this.userInput === "user2") {
        return { user2: true };
      }
    },
    toggleParagraph() {
      if (this.buttonToggle === true) {
        return { hidden: true };
      } else {
        return { visible: true };
      }
    },
  },
});

app.mount("#assignment");
