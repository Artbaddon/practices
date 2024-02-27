const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "doom",
          name: "Victor Von doom",
          phone: "666-666-66",
          email: "victorvondoom@gmail.com",
        },
        {
          id: "rand",
          name: "Rand al'Thor",
          phone: "123-123",
          email: "thedragonreborn@gmail.com",
        },
        {
          id: "jesus",
          name: "Jesucristo Garcia",
          phone: "123-121-1-13",
          email: "jesuschrist@gmail.com",
        },
        {
          id: "kaladin",
          name: "Kaladin Stormblessed",
          phone: "123-121-1-13",
          email: "kaladinbridgefour@gmail.com",
        },
      ],
    };
  },
});
app.component("friend-contact", {
  template: `
  <li>
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails">
            {{detailsVisible ?'Hide':'Show'}} Details
          </button>
          <ul v-if="detailsVisible">
            <li><strong>Phone: </strong> {{friend.phone}}</li>
            <li><strong>Email: </strong>{{friend.email}}</li>
          </ul>
        </li>
  `,
  data() {
    return {
      detailsVisible: false,
      friend: {
        id: "kaladin",
        name: "Kaladin Stormblessed",
        phone: "123-121-1-13",
        email: "kaladinbridgefour@gmail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
  },
});
app.mount("#app");
