import { createRouter, createWebHistory } from "vue-router";
import Board from "../views/BoardVue.vue";
import SignUp from "../views/SignUp.vue";
import LogIn from "../views/LogIn.vue";

const routes = [
  {
    path: "/",
    name: "Board",
    component: Board,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/login",
    name: "LogIn",
    component: LogIn,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;