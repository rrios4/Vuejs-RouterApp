import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AFCView from "../views/AFCView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/afcnorth/:id",
    name: "AFC_North",
    props: true,
    component: AFCView
  },
  {
    path: "/afceast/:id",
    name: "AFC_East",
    props: true,
    component: AFCView
  },
  {
    path: "/afcsouth/:id",
    name: "AFC_South",
    props: true,
    component: AFCView
  },
  {
    path: "/afcwest/:id",
    name: "AFC_West",
    props: true,
    component: AFCView
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
