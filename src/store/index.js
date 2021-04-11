import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from "../firebase";
import moment from 'moment';



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts : [],
    faqs : [],
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
          commit("removePost", id);
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
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
          commit("removePost", id);
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },



    // Cookie Collection Actions
    async PUBLISH_COOKIE({commit}, form){
      try {
        const document = await fb.postsCollection.add({
          description : form.description,
      
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
      await fb.postsCollection.onSnapshot(data =>{
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

    DELETE_COOKIE({ commit }, id) {
      console.log(id);
      fb.postsCollection
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
          commit("removePost", id);
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
        });
    },


    //Privacy-Policy Collection Actions
    // async PUBLISH_POST({commit}, form){
    //   try {
    //     const document = await fb.postsCollection.add({
    //       title : form.title,
    //       category : form.category,
    //       post : form.post,
    //       authoredBy : form.authoredBy,
    //       createdOn : moment().format('L'), 
    //       blogImage : form.blogImage
    //     })
    //     console.log(document.id);
    //     console.log(form);
    //   } catch (error) {
    //     commit('setErrMsg', error.message)
    //     console.log(error.message);
    //   }
    // },

    // async GET_POST({commit}){
    //   await fb.postsCollection.onSnapshot(data =>{
    //  try {
    //   data.forEach(doc => {
    //     commit("setPosts", doc)
    //     console.log(doc);
    //   });
    //  } catch (error) {
    //   commit('setErrMsg', error.message)
    //   console.log(error.message);
    //  }
    //   })
    // },

    // editPost({ commit }, val) {
    //   fb.postsCollection
    //     .doc(val.activeItem)
    //     .update(val)
    //     .then(() => {
    //       console.log("Document successfully updated!");
    //     })
    //     .catch((error) => {
    //       commit("setErrorMsg", error.message);

    //       console.error("Error updating document: ", error);
    //     });
    // },

    // deletePost({ commit }, id) {
    //   console.log(id);
    //   fb.postsCollection
    //     .doc(id)
    //     .delete()
    //     .then(() => {
    //       console.log("Document successfully deleted!");
    //       commit("removePost", id);
    //     })
    //     .catch((error) => {
    //       console.error("Error removing document: ", error);
    //     });
    // },


    // //TOS Collection Actions
    // async PUBLISH_POST({commit}, form){
    //   try {
    //     const document = await fb.postsCollection.add({
    //       title : form.title,
    //       category : form.category,
    //       post : form.post,
    //       authoredBy : form.authoredBy,
    //       createdOn : moment().format('L'), 
    //       blogImage : form.blogImage
    //     })
    //     console.log(document.id);
    //     console.log(form);
    //   } catch (error) {
    //     commit('setErrMsg', error.message)
    //     console.log(error.message);
    //   }
    // },

    // async GET_POST({commit}){
    //   await fb.postsCollection.onSnapshot(data =>{
    //  try {
    //   data.forEach(doc => {
    //     commit("setPosts", doc)
    //     console.log(doc);
    //   });
    //  } catch (error) {
    //   commit('setErrMsg', error.message)
    //   console.log(error.message);
    //  }
    //   })
    // },

    // editPost({ commit }, val) {
    //   fb.postsCollection
    //     .doc(val.activeItem)
    //     .update(val)
    //     .then(() => {
    //       console.log("Document successfully updated!");
    //     })
    //     .catch((error) => {
    //       commit("setErrorMsg", error.message);

    //       console.error("Error updating document: ", error);
    //     });
    // },

    // deletePost({ commit }, id) {
    //   console.log(id);
    //   fb.postsCollection
    //     .doc(id)
    //     .delete()
    //     .then(() => {
    //       console.log("Document successfully deleted!");
    //       commit("removePost", id);
    //     })
    //     .catch((error) => {
    //       console.error("Error removing document: ", error);
    //     });
    // },

  },
  modules: {
  }
})
