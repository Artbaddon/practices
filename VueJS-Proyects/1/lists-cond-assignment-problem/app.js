const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      userTask: "",
      toggleList: false,
    };
  },
  computed: {
    toggleTaskList() {
      if (this.toggleList === true) {
        return false;
      } else {
        return true;
      }
    },
    addTextBtn() {
      if (this.toggleList === true) {
        return "Show";
      } else {
        return "Hide";
      }
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.userTask);
    },
    toggleListBtn() {
      this.toggleList = !this.toggleList;
    },
  },
});

app.mount("#assignment");
