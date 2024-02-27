const app = Vue.createApp({
  data() {
    return {
      enteredGoalValue: "",
      goals: [],
      users: [
        {
          name: "Victor",
          age: 24,
        },
        {
          name: "Pablo",
          age: 21,
        },
      ],
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
  },
});

app.mount("#user-goals");
