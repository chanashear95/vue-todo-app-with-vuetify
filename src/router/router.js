import Vue from "vue";
import VueRouter from "vue-router";
import ToDo from "../screens/ToDo";
import About from "../screens/About";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "todo",
    component: ToDo,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
