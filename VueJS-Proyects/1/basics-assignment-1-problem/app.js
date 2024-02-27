const App = Vue.createApp({
  data() {
    return {
      name: "",
      myName: "Artbaddon",
      myAge: 19,
      image:
        "https://pm1.narvii.com/6354/42b47d3c4a65a18ee4c3eb62c1ecd455793f2af4_hq.jpg",
    };
  },
  methods: {
    calculateAge() {
      return this.myAge + 5;
    },
    randomNum() {
      return Math.random();
    },
  },
}).mount("#assignment");
