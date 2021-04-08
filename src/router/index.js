import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Gasprenuer from "../views/Gasprenuer.vue";
import Blog from "../views/Blog.vue";
import Blogpost from "../views/Blogpost.vue";
import Cookie from "../views/Cookie.vue";
import Faqs from "../views/Faqs.vue";
import PrivacyPolicy from "../views/PrivacyPolicy.vue";
import TOS from "../views/Tos.vue";
import Admin from "../views/Admin/BlogCrud.admin..vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
   
  },
  {
    path: '/about',
    name: 'About',
    component : About

  },
  {
    path: '/gasprenuer',
    name: 'Gasprenuer',
    component : Gasprenuer
    
  },
  {
    path: '/blog',
    name: 'Blog',
    component : Blog
    
  },
  {
    path: '/blogpost',
    name: 'Blogpost',
    component : Blogpost
    
  },
  {
    path: '/support/cookie',
    name: 'Cookie',
    component : Cookie
    
  },
  {
    path: '/support/faqs',
    name: 'Faqs',
    component : Faqs
   
  },
  {
    path: '/support/privacy-policy',
    name: 'PrivacyPolicy',
    component : PrivacyPolicy
    
  },
  {
    path: '/support/terms-of-service',
    name: 'TOS',
    component : TOS
    
  },
  {
    path: '/support/admin',
    name: 'Admin',
    component : Admin
    
  },
  // {
  //   path: '/blogpost',
  //   name: 'Blogpost',
  //   component : Blogpost
    
  // },

  { path: '*', redirect: '/' }
];

const router = new VueRouter({
  hashbang: false,
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
