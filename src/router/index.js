import { createRouter, createWebHistory } from "vue-router";
import QuizComp from "../views/QuizComponent";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("./../views/HomeComponent.vue"),
  },

  {
    path: "/quiz",
    name: "Quiz",
    component: QuizComp,
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("./../views/ContactComponent.vue"),
  },
  {
    path: "/score",
    name: "Score",
    component: () => import("./../views/ScoreComponent.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
