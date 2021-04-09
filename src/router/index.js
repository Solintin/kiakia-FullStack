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
import AdminBlog from "../views/Admin/BlogCrud.admin.vue";
import AdminCookie from "../views/Admin/Cookie.admin.vue";
import EditFaqs from "../views/Admin/EditFaqs.admin.vue";
import EditPost from "../views/Admin/EditPost.admin.vue";
import NewFaqs from "../views/Admin/NewFaqs.admin.vue";
import NewPost from "../views/Admin/NewPost.admin.vue";
import AdminPrivacy from "../views/Admin/Privacy.admin.vue";
import SupportPages from "../views/Admin/SupportPages.admin.vue";
import AdminTos from "../views/Admin/Tos.admin.vue";

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
    path: '/admin/blog',
    name: 'AdminBlog',
    component : AdminBlog
    
  },
  {
    path: '/admin/cookie',
    name: 'AdminCookie',
    component : AdminCookie
    
  },
  {
    path: '/admin/edit-faqs',
    name: 'EditFaqs',
    component : EditFaqs
    
  },
  {
    path: '/admin/edit-post',
    name: 'EditPost',
    component : EditPost
    
  },
  {
    path: '/admin/new-faqs',
    name: 'NewFaqs',
    component : NewFaqs
    
  },
  {
    path: '/admin/new-post',
    name: 'NewPost',
    component : NewPost
    
  },
  {
    path: '/admin/privacy-policy',
    name: 'AdminPrivacy',
    component : AdminPrivacy
    
  },
  {
    path: '/admin/support-pages',
    name: 'SupportPages',
    component : SupportPages
    
  },
  {
    path: '/admin/terms-of-service',
    name: 'AdminTos',
    component : AdminTos
    
  },


  { path: '*', redirect: '/' }
];

const router = new VueRouter({
  hashbang: false,
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
