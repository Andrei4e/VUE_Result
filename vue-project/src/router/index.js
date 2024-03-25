import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/components/HomePage.vue";
import ProjectPage from "@/components/ProjectPage.vue";
import BlogPage from "@/components/BlogPage.vue";
import ErrorPage from "@/components/ErrorPage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomePage,
    },
    {
      path: "/project",
      name: "project",
      component: ProjectPage,
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogPage,
    },
    {
      path: "/404",
      name: "notFound",
      component: ErrorPage,
    },
    {
      path: "*",
      redirect: "/404",
    },
  ],
});
