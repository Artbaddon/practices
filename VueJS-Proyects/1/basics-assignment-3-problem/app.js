const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  watch: {
    result() {
      setTimeout(function () {
        this.number = 0;
      }, 1000);
    },
  },

  computed: {
    result() {
      console.log(this.number);
      if (this.number < 37) {
        return "Not there yet";
      } else if (this.number > 37) {
        return "Too much!";
      } else {
        return this.number;
      }
    },
  },
  methods: {
    add(num) {
      this.number += num;
    },
  },
}).mount("#assignment");
