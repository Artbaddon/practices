const app = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the course",
      courseGoalB: "Master Vue",
      vueLink: "https://vuejs.org",
      vueHTML: "<h2 style='color:white;'>HELLO VUE HTML!</h2>",
    };
  },
  methods: {
    showGoal() {
      const randomNumber = Math.round(Math.random() * 10);
      if (randomNumber < 2) {
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    },
    showHello() {
      const si = "a";
    },
  },
});

app.mount("#user-goal");
