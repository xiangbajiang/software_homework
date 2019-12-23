import Vue from "vue";
import VueRouter from "vue-router";
import HomePages from "../views/layout/HomePages.vue";
import Login from "../views/login/Login.vue";
import Error403 from "../views/error/403.vue";
import Home from "../views/home/index.vue";
import Admin from "../views/admin/index.vue";
import Expert from "../views/expert/index";
import Topic from "../views/topic/index";
import Add from "../views/expert/add";
import Export from "../views/export/index";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/error403",
    name: "error403",
    component: Error403
  },
  {
    path: "/home",
    name: "home",
    component: HomePages,
    children: [
      {
        path: "/home",
        component: Home,
        meta: {
          title: "home"
        }
      },
      {
        path: "/admin",
        component: Admin,
        meta: {
          title: "admin"
        }
      },
      {
        path: "/expert",
        component: Expert,
        meta: {
          title: "expert"
        }
      },
      {
        path: "/add",
        component: Add,
        meta: {
          title: "add"
        }
      },
      {
        path: "/export",
        component: Export,
        meta: {
          title: "export"
        }
      },
      {
        path: "/topic",
        component: Topic,
        meta: {
          title: "topic"
        }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
