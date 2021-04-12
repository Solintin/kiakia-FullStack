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
    successMsg : false,
  },
  mutations: {
    setErrMsg(state, val){
      state.errMsg = val
    },
    setSuccessMsg(state, val){
      state.successMsg = val
    },
    
    setPosts(state, val){
      state.posts = val
    },
    setfaqs(state, val){
      state.faqs = val
    },
    setCookie(state, val){
      state.cookies = val
    },
    setPolicy(state, val){
      state.policies = val
    },
    setTos(state, val){
      state.terms = val
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
          blogImage : form.blogImage,
          revised : parseInt(0)
        })
     commit('setSuccessMsg', "Blog Added Successfully")
      } catch (error) {
        commit('setErrMsg', error.message)
        console.log(error.message);
      }
    },

    async GET_POST({commit}){
      await fb.postsCollection.onSnapshot(data =>{
       const postArray = []
       
     try {
      data.forEach(doc => {
        const info = doc.data()
        info.id = doc.id
        postArray.push(info)
      });
   
      commit("setPosts", postArray)

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
          commit('setSuccessMsg', true)
        })
        .catch((error) => {
          commit("setErrorMsg", error.message);

          console.error("Error updating document: ", error);
        });
        
    },
    

    deletePost({ commit }, id) {
    
      fb.postsCollection
        .doc(id)
        .delete()
        .then(() => {
         
          commit('setSuccessMsg', "Blog successfully deleted")
         
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
        const faqsArray = [];
     try {
      data.forEach(doc => {
        const info = doc.data()
        info.id = doc.id
        faqsArray.push(info)
      
      });
      commit("setfaqs", faqsArray)
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
        const cookiesArray = []
     try {
      data.forEach(doc => {
        const info = doc.data()
        info.id = doc.id
        cookiesArray.push(info)
      });
      commit("setCookie", cookiesArray)

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
        const policyArray = [];
     try {
      data.forEach(doc => {
        const info = doc.data()
        info.id = doc.id
        policyArray.push(info)
      });
      commit("setPolicy", policyArray)
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
        const tosArray = [];
     try {
      data.forEach(doc => {
        const info = doc.data()
        info.id = doc.id
        tosArray.push(info)
      });
      commit("setTos", tosArray)
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
