import Vue from "vue";
import VueRouter from "vue-router";
import HomePages from "../views/layout/HomePages.vue";
import Login from "../views/login/Login.vue";
import Error403 from "../views/error/403.vue";
import Home from "../views/home/index.vue";
import Admin from "../views/admin/index.vue";
import Teacher from "../views/teacher/index.vue";
import Student from "../views/student/index.vue";
import Competition from "../views/competition/index.vue";
import Type from "../views/type/index.vue";
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
        path: "/teacher",
        component: Teacher,
        meta: {
          title: "teacher"
        }
      },
      {
        path: "/student",
        component: Student,
        meta: {
          title: "student"
        }
      },
      {
        path: "/type",
        component: Type,
        meta: {
          title: "type"
        }
      },
      {
        path: "/competition",
        component: Competition,
        meta: {
          title: "competition"
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
