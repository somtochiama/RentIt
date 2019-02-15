import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Houses from "./views/House.vue";
import About from "./views/About.vue";
import Dashboard from "./views/Dashboard.vue";
import Contact from "./views/Contact.vue";
import LogIn from "./components/LogIn.vue";
import SignUp from "./components/SignUp.vue";
import Services from "./views/Services.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: About
    },
    {
      path: "/houses",
      name: "Houses",
      component: Houses
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: "/login",
      name: "LogIn",
      component: LogIn
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUp
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    },
    {
      path: "/services",
      name: "Services",
      component: Services
    }

  ]
});
