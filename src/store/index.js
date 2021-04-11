import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from "../firebase";
import moment from 'moment';



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts : [],
    faqs : [],
    cookies : [],
    policies : [],
    terms : [],
    errMsg : "",
  },
  mutations: {
    setErrMsg(state, val){
      state.errMsg = val
    },
    setPosts(state, val){
      state.posts.push(val)
    },
    setfaqs(state, val){
      state.faqs.push(val)
    },
    setCookie(state, val){
      state.cookies.push(val)
    },
    setPolicy(state, val){
      state.policies.push(val)
    },
    setTos(state, val){
      state.terms.push(val)
    },
  },
  actions: {
    // Post Collection Actions
    async PUBLISH_POST({commit}, form){
      try {
        const document = await fb.postsCollection.add({
          title : form.title,
          category : form.category,
          post : form.post,
          authoredBy : form.authoredBy,
          createdOn : moment().format('LL'), 
          blogImage : form.blogImage
        })
        console.log(document.id);
        console.log(form);
      } catch (error) {
        commit('setErrMsg', error.message)
        console.log(error.message);
      }
    },

    async GET_POST({commit}){
      await fb.postsCollection.onSnapshot(data =>{
     try {
      data.forEach(doc => {
        commit("setPosts", doc)
        console.log(doc);
      });
     } catch (error) {
      commit('setErrMsg', error.message)
      console.log(error.message);
     }
      })
    },

    editPost({ commit }, val) {
      fb.postsCollection
        .doc(val.activeItem)
        .update(val)
        .then(() => {
          console.log("Document successfully updated!");
        })
        .catch((error) => {
          commit("setErrorMsg", error.message);

          console.error("Error updating document: ", error);
        });
    },

    deletePost({ commit }, id) {
      console.log(id);
      fb.postsCollection
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
         
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
          commit("setErrorMsg", error.message);
        });
    },

    //FAQs Collection Actions
    async PUBLISH_FAQS({commit}, form){
      try {
        const document = await fb.faqsCollection.add({
          question : form.question,
         
          answer : form.answer,
         
          createdOn : moment().format('LL'), 
        
        })
        console.log(document.id);
        console.log(form);
      } catch (error) {
        commit('setErrMsg', error.message)
        console.log(error.message);
      }
    },

    async GET_FAQS({commit}){
      await fb.faqsCollection.onSnapshot(data =>{
     try {
      data.forEach(doc => {
        commit("setfaqs", doc)
        console.log(doc);
      });
     } catch (error) {
      commit('setErrMsg', error.message)
      console.log(error.message);
     }
      })
    },

    EDIT_FAQS({ commit }, val) {
      fb.faqsCollection
        .doc(val.activeItem)
        .update(val)
        .then(() => {
          console.log("Document successfully updated!");
        })
        .catch((error) => {
          commit("setErrorMsg", error.message);

          console.error("Error updating document: ", error);
        });
    },

    DELETE_FAQS({ commit }, id) {
      console.log(id);
      fb.faqsCollection
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
         
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
          commit("setErrorMsg", error.message);
        });
    },



    // Cookie Collection Actions
    async PUBLISH_COOKIE({commit}, form){
      try {
        const document = await fb.cookieCollection.add({
          description : form,
      
          createdOn : moment().format('LL'), 
         
        })
        console.log(document.id);
        console.log(form);
      } catch (error) {
        commit('setErrMsg', error.message)
        console.log(error.message);
      }
    },

    async GET_COOKIE({commit}){
      await fb.cookieCollection.onSnapshot(data =>{
     try {
      data.forEach(doc => {
        commit("setCookie", doc)
        console.log(doc);
      });
     } catch (error) {
      commit('setErrMsg', error.message)
      console.log(error.message);
     }
      })
    },

    EDIT_COOKIE({ commit }, val) {
      fb.cookieCollection
        .doc(val.activeItem)
        .update(val)
        .then(() => {
          console.log("Document successfully updated!");
        })
        .catch((error) => {
          commit("setErrorMsg", error.message);

          console.error("Error updating document: ", error);
        });
    },

    DELETE_COOKIE({ commit }, id) {
      console.log(id);
      fb.cookieCollection
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
         
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
          commit("setErrorMsg", error.message);
        });
    },


    // Privacy-Policy Collection Actions
    async PUBLISH_POLICY({commit}, form){
      try {
        const document = await fb.privacyCollection.add({
          policy : form,
          createdOn : moment().format('LL'), 
          
        })
        console.log(document.id);
        console.log(form);
      } catch (error) {
        commit('setErrMsg', error.message)
        console.log(error.message);
      }
    },

    async GET_POLICY({commit}){
      await fb.privacyCollection.onSnapshot(data =>{
     try {
      data.forEach(doc => {
        commit("setPolicy", doc)
        console.log(doc);
      });
     } catch (error) {
      commit('setErrMsg', error.message)
      console.log(error.message);
     }
      })
    },

    EDIT_POLICY({ commit }, val) {
      fb.privacyCollection
        .doc(val.activeItem)
        .update(val)
        .then(() => {
          console.log("Document successfully updated!");
        })
        .catch((error) => {
          commit("setErrorMsg", error.message);

          console.error("Error updating document: ", error);
        });
    },

    DELETE_POLICY({ commit }, id) {
      console.log(id);
      fb.privacyCollection
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
         
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
          commit("setErrorMsg", error.message);
        });
    },


    // //TOS Collection Actions
    async PUBLISH_TOS({commit}, form){
      try {
        const document = await fb.tosCollection.add({
          tos : form,
          createdOn : moment().format('LL'), 
        
        })
        console.log(document.id);
        console.log(form);
      } catch (error) {
        commit('setErrMsg', error.message)
        console.log(error.message);
      }
    },

    async GET_TOS({commit}){
      await fb.tosCollection.onSnapshot(data =>{
     try {
      data.forEach(doc => {
        commit("setTos", doc)
        console.log(doc);
      });
     } catch (error) {
      commit('setErrMsg', error.message)
      console.log(error.message);
     }
      })
    },

    EDIT_TOS({ commit }, val) {
      fb.tosCollection
        .doc(val.activeItem)
        .update(val)
        .then(() => {
          console.log("Document successfully updated!");
        })
        .catch((error) => {
          commit("setErrorMsg", error.message);

          console.error("Error updating document: ", error);
        });
    },

    DELETE_TOS({ commit }, id) {
      console.log(id);
      fb.tosCollection
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
         
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
          commit("setErrorMsg", error.message);
        });
    },

  },
  modules: {
  }
})
