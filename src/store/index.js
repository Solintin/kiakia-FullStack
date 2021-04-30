import Vue from "vue";
import Vuex from "vuex";
import * as fb from "../firebase";
import moment from "moment";
import createpersistedstate from "vuex-persistedstate";

Vue.use(Vuex);
// const vuexPersist = new VuexPersist({
//   key: 'my-app',
//   storage: window.localStorage
// })

// const store = new Vuex.Store({
//   //...initialization
//   plugins: [createpersistedstate()],
// });

export default new Vuex.Store({
  plugins: [createpersistedstate()],

  state: {
    posts: [],
    faqs: [],
    cookies: [],
    policies: [],
    terms: [],
    waitlist: [],
    errMsg: null,
    successMsg: null,
  },
  mutations: {
    setErrMsg(state, val) {
      state.errMsg = val;
    },
    setSuccessMsg(state, val) {
      state.successMsg = val;
    },
    // initialiseStore(state){
    //   if(localStorage.getItem('posts')){
    //     this.replaceState(
    //       Object.assign(state, JSON.parse(localStorage.getItem('posts')))
    //     )
    //     // state.posts = val
    //   }
    // },
    setPosts(state, val) {
      // localStorage.setItem('posts', JSON.stringify(val))
      state.posts = val;
    },
    setfaqs(state, val) {
      state.faqs = val;
    },
    setCookie(state, val) {
      state.cookies = val;
    },
    setPolicy(state, val) {
      state.policies = val;
    },
    setTos(state, val) {
      state.terms = val;
    },
    setWaitList(state, val) {
      state.waitlist = val;
    },
  },
  actions: {
    // Post Collection Actions
    async PUBLISH_POST({ commit }, form) {
      try {
        const document = await fb.postsCollection.add({
          title: form.title,
          category: form.category,
          post: form.post,
          authoredBy: form.authoredBy,
          createdOn: moment().format("LL"),
          blogImage: form.blogImage,
          revised: parseInt(0),
        });

        commit("setSuccessMsg", "Post Succesfull");
        setTimeout(() => {
          commit("setSuccessMsg", null);
        }, 3000);
      } catch (error) {
        commit("setErrMsg", error.message);
        setTimeout(() => {
          commit("setErrMsg", null);
        }, 3000);
        console.log(error.message);
      }
    },

    async GET_POST({ commit }) {
      await fb.postsCollection.onSnapshot((data) => {
        const postArray = [];

        try {
          data.forEach((doc) => {
            const info = doc.data();
            info.id = doc.id;
            postArray.push(info);
          });

          commit("setPosts", postArray);
        } catch (error) {
          commit("setErrMsg", error.message);
          console.log(error.message);
        }
      });
    },

    editPost({ commit }, val) {
      fb.postsCollection
        .doc(val.activeItem)
        .update(val)
        .then(() => {
          commit("setSuccessMsg", "Update Succesfull");
          setTimeout(() => {
            commit("setSuccessMsg", null);
          }, 3000);
        })
        .catch((error) => {
          commit("setErrorMsg", error.message);
          setTimeout(() => {
            commit("setErrorMsg", null);
          }, 3000);
          console.error("Error updating document: ", error);
        });
    },

    deletePost({ commit }, id) {
      fb.postsCollection
        .doc(id)
        .delete()
        .then(() => {
          commit("setSuccessMsg", "Blog successfully deleted");

          setTimeout(() => {
            commit("setSuccessMsg", null);
          }, 3000);
        })
        .catch((error) => {
          console.error("Error removing document: ", error);

          commit("setErrorMsg", error.message);
          setTimeout(() => {
            commit("setErrorMsg", null);
          }, 3000);
        });
    },

    //FAQs Collection Actions
    async PUBLISH_FAQS({ commit }, form) {
      try {
        const document = await fb.faqsCollection.add({
          question: form.question,
          answer: form.answer,
          createdOn: moment().format("LL"),
        });
        commit("setSuccessMsg", "Post Succesfull");
        setTimeout(() => {
          commit("setSuccessMsg", null);
        }, 3000);
        console.log(document.id);
        console.log(form);
      } catch (error) {
        commit("setErrMsg", error.message);
        setTimeout(() => {
          commit("setErrMsg", null);
        }, 3000);
        console.log(error.message);
      }
    },

    async GET_FAQS({ commit }) {
      await fb.faqsCollection.onSnapshot((data) => {
        const faqsArray = [];
        try {
          data.forEach((doc) => {
            const info = doc.data();
            info.id = doc.id;
            faqsArray.push(info);
          });
          commit("setfaqs", faqsArray);
        } catch (error) {
          commit("setErrMsg", error.message);
          console.log(error.message);
        }
      });
    },

    EDIT_FAQS({ commit }, val) {
      fb.faqsCollection
        .doc(val.activeItem)
        .update(val)
        .then(() => {
          commit("setSuccessMsg", "Update Succesfull");
          setTimeout(() => {
            commit("setSuccessMsg", null);
          }, 3000);
          console.log("Document successfully updated!");
        })
        .catch((error) => {
          commit("setErrMsg", error.message);
          setTimeout(() => {
            commit("setErrMsg", null);
          }, 3000);

          console.error("Error updating document: ", error);
        });
    },

    DELETE_FAQS({ commit }, id) {
      console.log(id);
      fb.faqsCollection
        .doc(id)
        .delete()
        .then(() => {
          commit("setSuccessMsg", "delete Succesfull");
          setTimeout(() => {
            commit("setSuccessMsg", null);
          }, 3000);
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
          commit("setErrMsg", error.message);
          setTimeout(() => {
            commit("setErrMsg", null);
          }, 3000);
        });
    },

    // Cookie Collection Actions
    async PUBLISH_COOKIE({ commit }, form) {
      try {
        const document = await fb.cookieCollection.add({
          description: form,

          createdOn: moment().format("LL"),
        });
        console.log(document.id);
        console.log(form);
        commit("setSuccessMsg", "Post Succesfull");
        setTimeout(() => {
          commit("setSuccessMsg", null);
        }, 3000);
      } catch (error) {
        commit("setErrMsg", error.message);
        console.log(error.message);
      }
    },

    async GET_COOKIE({ commit }) {
      await fb.cookieCollection.onSnapshot((data) => {
        const cookiesArray = [];
        try {
          data.forEach((doc) => {
            const info = doc.data();
            info.id = doc.id;
            cookiesArray.push(info);
          });
          commit("setCookie", cookiesArray);
        } catch (error) {
          commit("setErrMsg", error.message);
          console.log(error.message);
        }
      });
    },

    EDIT_COOKIE({ commit }, val) {
      fb.cookieCollection
        .doc(val.activeItem)
        .update(val)
        .then(() => {
          commit("setSuccessMsg", "Update Succesfull");
          setTimeout(() => {
            commit("setSuccessMsg", null);
          }, 3000);
        })
        .catch((error) => {
          commit("setErrMsg", error.message);
          setTimeout(() => {
            commit("setErrMsg", null);
          }, 3000);

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
          commit("setSuccessMsg", "Delete Succesfull");
          setTimeout(() => {
            commit("setSuccessMsg", null);
          }, 3000);
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
          commit("setErrorMsg", error.message);
        });
    },

    // Privacy-Policy Collection Actions
    async PUBLISH_POLICY({ commit }, form) {
      try {
        const document = await fb.privacyCollection.add({
          policy: form,
          createdOn: moment().format("LL"),
        });
        console.log(document.id);
        console.log(form);
        commit("setSuccessMsg", "Post Succesfull");
        setTimeout(() => {
          commit("setSuccessMsg", null);
        }, 3000);
      } catch (error) {
        commit("setErrMsg", error.message);
        setTimeout(() => {
          commit("setErrMsg", null);
        }, 3000);
        console.log(error.message);
      }
    },

    async GET_POLICY({ commit }) {
      await fb.privacyCollection.onSnapshot((data) => {
        const policyArray = [];
        try {
          data.forEach((doc) => {
            const info = doc.data();
            info.id = doc.id;
            policyArray.push(info);
          });
          commit("setPolicy", policyArray);
        } catch (error) {
          commit("setErrMsg", error.message);
          console.log(error.message);
        }
      });
    },

    EDIT_POLICY({ commit }, val) {
      fb.privacyCollection
        .doc(val.activeItem)
        .update(val)
        .then(() => {
          consolcommit("setSuccessMsg", "Post Succesfull");
          setTimeout(() => {
            commit("setSuccessMsg", null);
          }, 3000);
        })
        .catch((error) => {
          commit("setErrMsg", error.message);
          setTimeout(() => {
            commit("setErrMsg", null);
          }, 3000);
          console.error("Error updating document: ", error);
        });
    },

    DELETE_POLICY({ commit }, id) {
      console.log(id);
      fb.privacyCollection
        .doc(id)
        .delete()
        .then(() => {
          commit("setSuccessMsg", "Post Succesfull");
          setTimeout(() => {
            commit("setSuccessMsg", null);
          }, 3000);
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
          commit("setErrMsg", error.message);
          setTimeout(() => {
            commit("setErrMsg", null);
          }, 3000);
        });
    },

    // //TOS Collection Actions
    async PUBLISH_TOS({ commit }, form) {
      try {
        const document = await fb.tosCollection.add({
          tos: form,
          createdOn: moment().format("LL"),
        });
        console.log(document.id);
        console.log(form);
        commit("setSuccessMsg", "Post Succesfull");
        setTimeout(() => {
          commit("setSuccessMsg", null);
        }, 3000);
      } catch (error) {
        commit("setErrMsg", error.message);
        setTimeout(() => {
          commit("setErrMsg", null);
        }, 3000);
        console.log(error.message);
      }
    },

    async GET_TOS({ commit }) {
      await fb.tosCollection.onSnapshot((data) => {
        const tosArray = [];
        try {
          data.forEach((doc) => {
            const info = doc.data();
            info.id = doc.id;
            tosArray.push(info);
          });
          commit("setTos", tosArray);
        } catch (error) {
          commit("setErrMsg", error.message);
          console.log(error.message);
        }
      });
    },

    EDIT_TOS({ commit }, val) {
      fb.tosCollection
        .doc(val.activeItem)
        .update(val)
        .then(() => {
          commit("setSuccessMsg", "Post Succesfull");
          setTimeout(() => {
            commit("setSuccessMsg", null);
          }, 3000);
          console.log("Document successfully updated!");
        })
        .catch((error) => {
          commit("setErrMsg", error.message);
          setTimeout(() => {
            commit("setErrMsg", null);
          }, 3000);
          console.error("Error updating document: ", error);
        });
    },

    DELETE_TOS({ commit }, id) {
      console.log(id);
      fb.tosCollection
        .doc(id)
        .delete()
        .then(() => {
          commit("setSuccessMsg", "Delete Succesfull");
          setTimeout(() => {
            commit("setSuccessMsg", null);
          }, 3000);
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
          commit("setErrMsg", error.message);
          setTimeout(() => {
            commit("setErrMsg", null);
          }, 3000);
        });
    },

    //WAITLIST
    async PUBLISH_WAITLIST({ commit }, form) {
      try {
        const document = await fb.waitListCollection.add({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phoneNumber: form.phoneNumber,
          state: form.selectedState,
          city: form.selectedCity,

          createdOn: moment().format("LL"),
        });
        commit("setSuccessMsg", "Post Succesfull");
        setTimeout(() => {
          commit("setSuccessMsg", null);
        }, 3000);
        console.log(document.id);
        console.log(form);
      } catch (error) {
        setTimeout(() => {
          commit("setErrMsg", error.message);
          console.log(error.message);
          commit("setErrMsg", null);
        }, 3000);
      }
    },

    async GET_WAITLIST({ commit }) {
      await fb.waitListCollection.onSnapshot((data) => {
        const waitlistArray = [];
        try {
          data.forEach((doc) => {
            const info = doc.data();
            info.id = doc.id;
            waitlistArray.push(info);
          });
          commit("setWaitList", waitlistArray);
        } catch (error) {
          setTimeout(() => {
            commit("setErrMsg", null);
          }, 3000);
        }
      });
    },

    DELETE_WAITLIST({ commit }, id) {
      console.log(id);
      fb.waitListCollection
        .doc(id)
        .delete()
        .then(() => {
          commit("setSuccessMsg", "Delete Succesfull");
          setTimeout(() => {
            commit("setSuccessMsg", null);
          }, 3000);
          console.log("Document successfully deleted!");
        })
        .catch((error) => {
          console.error("Error removing document: ", error);
          commit("setErrMsg", error.message);
          setTimeout(() => {
            commit("setErrMsg", null);
          }, 3000);
        });
    },
  },
  modules: {},
});
