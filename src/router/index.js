import Vue from "vue";
import Router from "vue-router";
import Dashboard from "@/views/Dashboard";
import Customer from "@/views/Customer/Customer.vue";
import Vehicle from "@/views/Vehicle/Vehicle.vue";
import Distance from "@/views/Distance/Distance.vue";
import Ticket from "@/views/Ticket/Ticket.vue";
import Login from "@/views/Users/Login.vue";
import Register from "@/views/Users/Register.vue";
import Statistic from "@/views/Statistic/Statistic.vue"

Vue.use(Router);

export default new Router({
  mode:"history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/customer",
      name: "customer",
      component: Customer
    },
    {
      path: "/distance",
      name: "distance",
      component: Distance
    },
    {
      path: "/ticket",
      name: "ticket",
      component: Ticket
    },
    {
      path: "/Vehicle",
      name: "Vehicle",
      component: Vehicle
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/statistic",
      name: "statistic",
      component: Statistic
    }
  ]
});
