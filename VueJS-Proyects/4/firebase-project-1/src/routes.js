import { createRouter, createWebHistory } from "vue-router";
import { useUserStore } from "./stores/user";

const requireAuth = async (to, from, next) => {
  const userStore = useUserStore();
  userStore.loading = true;
  const user = await userStore.currentUser();
  if (user) {
    next();
  } else {
    next("/login");
  }
  userStore.loading = false;
};
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./views/Home.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./views/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./views/Register.vue"),
  },
];
const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
