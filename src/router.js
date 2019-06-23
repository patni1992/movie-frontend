import Vue from "vue";
import Router from "vue-router";
import Search from "./views/Search";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "Search"
    },

    {
      path: "/search",
      name: "Search",
      component: Search
    }
  ]
});
