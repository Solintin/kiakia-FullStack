import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NewHome from "../components/New-Home.vue";
import WaitList from "../components/Waitlist.vue";
import About from "../views/About.vue";
import Gasprenuer from "../views/Gasprenuer.vue";
import Blog from "../views/Blog.vue";
import Blogpost from "../views/Blogpost.vue";
import Cookie from "../views/Cookie.vue";
import Support from "../views/Faqs.vue";
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
import AdminDashboard from "../API/AdminDashboard.vue";
import AdminUser from "../API/AdminUser.vue";
import UserInterface from "../API/UserInterface.vue";
import UserManagement from "../UserApp/User-App.vue";
import Register from "../Auth/Register.vue";
import Login from "../Auth/Login.vue";
import { auth } from '../firebase';

Vue.use(VueRouter);

const routes = [
  //Home
  {
    path: "/",
    name: "Home",
    component: Home,
   
  },
  //Home
  {
    path: "/newhome",
    name: "newhome",
    component: NewHome,
   
  },
  //WaitList
  {
    path: "/waitList",
    name: "waitlist",
    component: WaitList,
   
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
    path: '/blogpost/:id/',
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
    path: '/support',
    name: 'Support',
    component : Support
   
  },
  //Priv Pol in Support
  {
    path: '/support/policy',
    name: 'PrivacyPolicy',
    component : PrivacyPolicy
    
  },
  //terms of service in support
  {
    path: '/support/tos',
    name: 'TOS',
    component : TOS
    
  },
  //BlogCrud in Admin
  {
    path: '/admin/blog',
    name: 'AdminBlog',
    component : AdminBlog,
    meta: {
      requireAuth: true,
    },
    
  },
  //CookieCrud
  {
    path: '/admin/cookie',
    name: 'AdminCookie',
    component : AdminCookie,
    meta: {
      requireAuth: true,
    },
  },
  //PrivacyPolicy Crud in Admin
  {
    path: '/admin/policy',
    name: 'AdminPrivacy',
    component : AdminPrivacy,
    meta: {
      requireAuth: true,
    },
  },
  //TosCrud in Admin
  {
    path: '/admin/tos',
    name: 'AdminTos',
    component : AdminTos,
    meta: {
      requireAuth: true,
    },
  },
  //FaqsCrud In Admin
  {
    path: '/admin/faqs',
    name: 'AdminFaqs',
    component : AdminFaqs,
    meta: {
      requireAuth: true,
    },
  },
  //EditFaqs in Admin
  {
    path: '/admin/edit/faqs',
    name: 'EditFaqs',
    component : EditFaqs,
    meta: {
      requireAuth: true,
    },
  },
    //EditPost in Admin
  {
    path: '/admin/edit/post',
    name: 'EditPost',
    component : EditPost,
    meta: {
      requireAuth: true,
    },
  },
    //EditCookie in Admin
  {
    path: '/admin/edit/cookie',
    name: 'EditCookie',
    component : EditCookie,
    meta: {
      requireAuth: true,
    },
  },
    //EditPrivacyPolicy in Admin
  {
    path: '/admin/edit/policy',
    name: 'EditPrivacy',
    component : EditPrivacy,
    meta: {
      requireAuth: true,
    },
  },
    //EditTos in Admin
  {
    path: '/admin/edit/tos',
    name: 'EditTos',
    component : EditTos,
    meta: {
      requireAuth: true,
    },
  },
    //NewFaqs in Admin 
  {
    path: '/admin/new/faqs',
    name: 'NewFaqs',
    component : NewFaqs,
    meta: {
      requireAuth: true,
    },
  },
    //NewPost in Admin
  {
    path: '/admin/new/post',
    name: 'NewPost',
    component : NewPost,
    meta: {
      requireAuth: true,
    },
  },
    //NewPrivacyPolicy in Admin
  {
    path: '/admin/new/policy',
    name: 'NewPrivacy',
    component : NewPrivacy,
    meta: {
      requireAuth: true,
    },
  },
    //NewTOS in Admin
  {
    path: '/admin/new/tos',
    name: 'NewTos',
    component : NewTos,
    meta: {
      requireAuth: true,
    },
  },
    //NewCookie in Admin
  {
    path: '/admin/new/Cookie',
    name: 'NewCookie',
    component : NewCookie,
    meta: {
      requireAuth: true,
    },
  },
  //Support Pages
  {
    path: '/admin/',
    name: 'SupportPages',
    component : SupportPages,
    meta: {
      requireAuth: true,
    },
  },
              //API INTEGRATION ROUTE
  //
  {
    path: '/api/admin/',
    name: 'AdminDashboard',
    component : AdminDashboard,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/api/admin-user/',
    name: 'AdminUser',
    component : AdminUser,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: '/api/user/',
    name: 'UserInterface',
    component : UserInterface,
    meta: {
      requireAuth: true,
    },
  },

    // User App Management  
  {
    path: '/admin/user-management',
    name: 'UserManagement',
    component : UserManagement,
    meta: {
      requireAuth: true,
    },
    
  },

  // Auth

  {
    path: '/register',
    name: 'register',
    component : Register
    
  },

  {
    path: '/login',
    name: 'Login',
    component : Login
    
  },



  { path: '*', redirect: '/' }
];

const router = new VueRouter({
  hashbang: false,
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requireAuth);

  if (requiresAuth && !auth.currentUser) {
    next("/login");
  } else {
    next();
  }
});

export default router;
