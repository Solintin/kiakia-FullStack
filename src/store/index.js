import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from "../firebase";
import moment from 'moment';



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts : [],
    errMsg : "",
  },
  mutations: {
    setErrMsg(state, val){
      state.errMsg = val
    },
    setPosts(state, val){
      state.posts.push(val)
    }
  },
  actions: {
    async PUBLISH_POST({commit}, form){
      try {
        const document = await fb.postsCollection.add({
          title : form.title,
          category : form.category,
          post : form.post,
          authoredBy : form.authoredBy,
          createdOn : moment().format('L'),   
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

  },
  modules: {
  }
})
