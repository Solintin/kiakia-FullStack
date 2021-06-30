<template>
  <div>
    <!-- Header  -->
    <header>
      <div class="logo">
        <img src="../assets/Layer 6.svg" alt="" />
      </div>
      <div class="menu">
        <div>
          <a href="">
            <i class="fas fa-envelope"></i>
            <span class="badge rounded-pill badge-notification"
              >3</span
            >
          </a>
        </div>
        <div>
          <span>
            <i class="far fa-bell"></i>
            <span class="badge rounded-pill badge-notification"
              >3</span
            >
          </span>
        </div>
        <div>
          <span> <i class="fas fa-user-circle fa-2x"></i> </span>
        </div>
        <div>
<span>{{ this.currentUser }}</span>        </div>
      </div>
    </header>
    <!-- E Header  -->

    <!-- SideBar  -->
    <div class="sidebar">
      <div class="dashboard">
        <p>Dashboard</p>
      </div>
      <div class="post">
        <p>Post</p>
        
      </div>
      <ul>
        <li>All posts</li>
        <li><a href="">Add New post</a></li>
        <li><a href="">Categories</a></li>
      </ul>
      <div class="activeH support">
        <p>Support</p>
      </div>
      <ul>
 <li><router-link to="/support">FAQ</router-link></li>
        <li class="fw-bold"><router-link to="/support/policy">Privacy Policy</router-link></li>
        <li><router-link to="/support/cookie">Cookie Declarartion</router-link></li>
        <li><router-link to="/support/tos">Terms of Service</router-link></li>
      </ul>
      <div id="log-out">
        <button @click="logOut" class="btn">
          Logout
        </button>
      </div>
    </div>
    <!-- E SideBar  -->
    <form @submit.prevent>
      <!-- Main  -->
      <div class="main">
        <div class="main-content">
          <h6 class="fs-4 text-center mb-5">Privacy Policy</h6>

         <strong>Description</strong>
  
          <ckeditor v-model="policy" :config="editorConfig"></ckeditor>

        </div>
      </div>
      <!-- E Main  -->

      <!-- Right Sidebar -->
      <div class="right-sidebar">
             <!-- Notification -->
        <div>
          <div v-if="this.successMsg"
            class="alert alert-success fade show"
            role="alert"
          >
            <span class="me-3">{{this.successMsg}}</span>
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
              @click="remove"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div v-else-if="this.errMsg"
          class="alert alert-danger alert-dismissible fade show"
            role="alert">
            <strong>{{this.errMsg}}</strong>
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
        <!-- E  Notification -->
        <div class="buttons">
          <button class="btn btn-primary text-center" @click="publishPrivacyPolicy">Update</button>
        </div>
        <div class="content">
          <div class="split-content">
            <div>Visibility : <span>Public</span></div>
            <div class="fw-bold">Edit</div>
          </div>
          <div class="split-content">
            <div>Status : <span>Published</span></div>
            <div class="fw-bold">Edit</div>
          </div>
          <div>Revision : <span>3</span></div>
          <div>Published : <span>Jan, 25, 2021</span></div>
        </div>
      </div>
      <!-- E Right Sidebar -->
    </form>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "PrivacyPolicy",

  data() {
    return {
      currentUser : null,
      policy: " ",
       editorConfig: {
        enterMode: 2,
        autoParagraph: false,
      },
    };
  }, 
  methods: {
     logOut() {
      this.$store.dispatch("LOGOUT");
    },
    publishPrivacyPolicy() {
      this.$store.dispatch("PUBLISH_POLICY", this.policy);
      return new Promise((resolve) => {
        setTimeout(() => {
          this.policy = "";
          resolve();
        }, 1500);
      });
    },
  },
  metaInfo() {
    return {
      title: "Admin Panel - Privacy Policy|| KiaKia Gas ",
    };
  },
  created() {
          this.currentUser = this.userProfile.name

  },
    
    computed:{
  ...mapState(['successMsg','errMsg', 'userProfile'])
},

};
</script>

<style lang="scss" scoped>
:root {
  --red-color: #fb6464;
  --purple-color: #6e6893;
  --lightblue-color: #1266f1;
  --accent-color: #011230;
  --sec-color: #faae08;
  --sidebar-item: #393939;
}

* {
  text-decoration: none;
  list-style: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
  color: var(--sidebar-item) !important;
}
header {
  background: #fff;
  padding: 0.6rem 1.5rem 0.6rem 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c1c1c1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  .logo {
    flex: 1;
  }
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      margin: 0 12px;
    }
  }
}
.sidebar {
  width: 255px;
  margin-top: 3.3rem;
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  background: #f6f6f6;
  z-index: 1;
  height: 100vh;
  padding: 35px 0px 10px 0px;
  .activePost {
    font-weight: 700;
  }

  .dashboard {
    margin-bottom: 40px;
    margin-left: 15px;
    font-weight: 500;
  }
  ul {
    margin: 15px 30px !important;
    font-size: 17px;
    font-weight: 400;
  }
}
.post {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 15px;
  font-weight: 500;
  cursor: pointer;
  p {
    margin: 0;
    &:nth-of-type(2) {
      padding-right: 15px;
    }
  }
}
.support {
  margin-left: 15px;
  font-weight: 500;
  cursor: pointer;
  p {
    margin: 0;
    padding: 0;
  }
}
.badge {
  position: absolute;
  font-size: xx-small;
  margin-left: -5px;
  margin-top: -5px;
  background-color: var(--red-color);
  color: white;
}
#log-out {
  margin-top: 100px;
  margin-left: 15px;
}
.activeH {
  background: var(--lightblue-color);
  border-radius: 5px;
  margin: 0;
  padding: 8px 15px;
  color: #fff;
  width: 100% !important;
}
.icon {
  color: black;
}

// Main
.main {
  width: auto;
  margin-top: 3.3rem;
  margin-left: 255px;
  margin-right: 255px;
  z-index: 1;
  padding: 35px 10px 10px 40px;

  .main-content {
    padding-right: 50px;
    width: auto;

    input,
    textarea {
      background: #f4f2ff;
      border-radius: 5px;
      padding: 5px 10px;
      border: none;
      outline: none;
      width: 100%;
      margin: 10px 0;

    }

    .category {
      ul {
        margin-top: 10px !important;
        margin-left: 0;
        padding: 0;
        li {
          margin-right: 15px;
          display: inline-flex;
          background: #f4f2ff;
          border-radius: 5px;
          padding: 5px 10px;
        }
        li.active {
          color: #fff;
          background: var(--lightblue-color);
        }
      }
    }
  }
}

// Right SideBar

.right-sidebar {
  width: 255px;
  margin-top: 3.3rem;
  padding-left: 10px;
  padding-right: 30px;
  padding-top: 148px;
  height: calc(100vh - 3.3rem);
  position: fixed;
  top: 0;
  right: 0;
  background: #fff;
  .buttons {
    button {
      width: 100%;
      display: inline-block;
      margin-bottom: 15px;
    }
  }
  .content {
    display: block !important;

    .split-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      div:nth-child(2) {
        cursor: pointer;
      }
    }
  }
}
</style>
