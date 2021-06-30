import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMeta from 'vue-meta'
import CKEditor from 'ckeditor4-vue';
import './assets/Styles.css'
import { auth } from "./firebase";




Vue.use(VueMeta).use( CKEditor );

Vue.config.productionTip = false
let app;

auth.onAuthStateChanged((user) => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
  if(user){
   store.dispatch('FETCH_USER_PROFILE', user)
  }
});
