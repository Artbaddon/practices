// Composables
import { createRouter, createWebHistory } from "vue-router";


const routes = [
  
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/products",
    name: "Products",
    component: () => import("../views/Products.vue"),
  },
  {
    path: "/products/edit/:id",
    name: "Product",
    component: () => import("../views/EditProduct.vue"),
  },
  {
    path: "/products/add",
    name: "Add product",
    component: () => import("../views/Add.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
