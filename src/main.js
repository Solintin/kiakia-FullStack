import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMeta from 'vue-meta'
import CKEditor from 'ckeditor4-vue';
import './assets/Styles.css'



Vue.use(VueMeta).use( CKEditor );

Vue.config.productionTip = false

new Vue({
  router,
  store,
  // beforeCreate(){
  //   this.$store.commit('initialiseStore');
  // },
  render: h => h(App)
}).$mount('#app')
