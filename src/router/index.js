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
import AdminBlog from "../Admin/BlogCrud.admin.vue";
import AdminFaqs from "../Admin/FaqsCrud.admin.vue";
import AdminCookie from "../Admin/CookieCrud.admin.vue";
import AdminTos from "../Admin/TosCrud.admin.vue";
import AdminPrivacy from "../Admin/PrivacyCrud.admin.vue";
import EditFaqs from "../Admin/EditFaqs.admin.vue";
import EditPrivacy from "../Admin/EditPrivacy.admin.vue";
import EditCookie from "../Admin/EditCookie.admin.vue";
import EditTos from "../Admin/EditTos.admin.vue";
import EditPost from "../Admin/EditPost.admin.vue";
import NewFaqs from "../Admin/NewFaqs.admin.vue";
import NewPost from "../Admin/NewPost.admin.vue";
import NewPrivacy from "../Admin/NewPrivacy.admin.vue";
import NewCookie from "../Admin/NewCookie.admin.vue";
import NewTos from "../Admin/NewTos.admin.vue";
import SupportPages from "../Admin/SupportPages.admin.vue";

Vue.use(VueRouter);

const routes = [
  //Home
  {
    path: "/",
    name: "Home",
    component: Home,
   
  },
  //About
  {
    path: '/about',
    name: 'About',
    component : About

  },
  //GasPrenuer
  {
    path: '/gasprenuer',
    name: 'Gasprenuer',
    component : Gasprenuer
    
  },
  //Blog
  {
    path: '/blog',
    name: 'Blog',
    component : Blog
    
  },
  //blogPost
  {
    path: '/blogpost',
    name: 'Blogpost',
    component : Blogpost
    
  },
  //Cookie In suport
  {
    path: '/support/cookie',
    name: 'Cookie',
    component : Cookie
    
  },
  //Faqs in Support
  {
    path: '/support/faqs',
    name: 'Faqs',
    component : Faqs
   
  },
  //Priv Pol in Support
  {
    path: '/support/privacy-policy',
    name: 'PrivacyPolicy',
    component : PrivacyPolicy
    
  },
  //terms of service in support
  {
    path: '/support/terms-of-service',
    name: 'TOS',
    component : TOS
    
  },
  //BlogCrud in Admin
  {
    path: '/admin/blog',
    name: 'AdminBlog',
    component : AdminBlog
    
  },
  //CookieCrud
  {
    path: '/admin/cookie',
    name: 'AdminCookie',
    component : AdminCookie
    
  },
  //PrivacyPolicy Crud in Admin
  {
    path: '/admin/privacy-policy',
    name: 'AdminPrivacy',
    component : AdminPrivacy
    
  },
  //TosCrud in Admin
  {
    path: '/admin/terms-of-service',
    name: 'AdminTos',
    component : AdminTos
    
  },
  //FaqsCrud In Admin
  {
    path: '/admin/faqs',
    name: 'AdminFaqs',
    component : AdminFaqs
    
  },
  //EditFaqs in Admin
  {
    path: '/admin/edit-faqs',
    name: 'EditFaqs',
    component : EditFaqs
    
  },
    //EditPost in Admin
  {
    path: '/admin/edit-post',
    name: 'EditPost',
    component : EditPost
    
  },
    //EditCookie in Admin
  {
    path: '/admin/edit-cookie',
    name: 'EditCookie',
    component : EditCookie
    
  },
    //EditPrivacyPolicy in Admin
  {
    path: '/admin/edit-privacy-policy',
    name: 'EditPrivacy',
    component : EditPrivacy
    
  },
    //EditTos in Admin
  {
    path: '/admin/edit-terms-of-service',
    name: 'EditTos',
    component : EditTos
    
  },
    //NewFaqs in Admin
  
  {
    path: '/admin/new/faqs',
    name: 'NewFaqs',
    component : NewFaqs
    
  },
    //NewPost in Admin
  {
    path: '/admin/new/post',
    name: 'NewPost',
    component : NewPost
    
  },
    //NewPrivacyPolicy in Admin
  {
    path: '/admin/new/privacy-policy',
    name: 'NewPrivacy',
    component : NewPrivacy
    
  },
    //NewTOS in Admin
  {
    path: '/admin/new/terms-of-service',
    name: 'NewTos',
    component : NewTos
    
  },
    //NewCookie in Admin
  {
    path: '/admin/new/Cookie',
    name: 'NewCookie',
    component : NewCookie
    
  },
  {
    path: '/admin/support-pages',
    name: 'SupportPages',
    component : SupportPages
    
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
