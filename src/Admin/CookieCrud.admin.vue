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
            <i class="fas fa-envelope "></i>
            <span class="badge rounded-pill badge-notification ">0</span>
          </a>
        </div>
        <div>
          <span>
            <i class="far fa-bell"></i>
            <span class="badge rounded-pill badge-notification ">0</span>
          </span>
        </div>
        <div>
          <span> <i class="fas fa-user-circle fa-2x"></i> </span>
        </div>
        <div>
          <span>{{this.currentUser}}</span>
        </div>
      </div>
    </header>
    <!-- E Header  -->
    <!-- SideBar  -->
    <div class="sidebar">
      <div class="dashboard">
        <p>Dashboard</p>
      </div>
      <div class="activeH post">
        <p>{{ this.cookies.length > 0 ? "cookies" : "cookie" }}</p>
        <p>{{ this.cookies.length }}</p>
      </div>
      <ul>
        <li class="activePost">All Cookies</li>
        <li><router-link to="/admin/new/post">Add New Cookie</router-link></li>
        <li><a href="">Categories</a></li>
      </ul>
      <div class="support">
        <p>Support</p>
      </div>
      <ul>
        <li><router-link to="/support">FAQ</router-link></li>
        <li><router-link to="/support/policy">Privacy Policy</router-link></li>
        <li class="fw-bold" ><router-link to="/support/cookie">Cookie Declarartion</router-link></li>
        <li><router-link to="/support/tos">Terms of Service</router-link></li>
      </ul>
      <div id="log-out">
         <button @click="logOut" class="btn">
          Logout
        </button>
      </div>
    </div>
    <!-- E SideBar  -->

    <!-- Main  -->
    <div class="main">
      <div class="main-content">
        <div class="mb-4">
            <span class="fw-bold">Cookie Declaration</span>
       

        </div>


        <table>
          <thead>
            <tr>
              <td><input type="checkbox" /></td>
              <td>title</td>
              <td>last updated</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
              <div v-if="cookies.length == 0" class="loading img-fluid">
        <img src="../assets/loading-icon-animated-gif-19.jpg" alt="">
      </div>
            <tr v-for="(cookie, key) in cookies" :key="key">
              <td><input type="checkbox" /></td>
              <td v-html="cookie.description.substring(0, 50)" >...</td>
           
              <td>
              
                <p>
                  {{ cookie.createdOn }}
                </p>
              </td>
              <td class="action">
                <span class="edit">
                  <router-link :to="{ name: 'EditCookie', query: { data: cookie } }"
                    >Edit</router-link
                  ></span
                >
                <span @click="deleteCookie(cookie.id)" class="delete">Delete</span>
              </td>
            </tr>

          </tbody>
        </table>
        <div class="paging my-2"></div>
      </div>
    </div>
    <!-- E Main  -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "CookiesCrud",
  metaInfo() {
    return {
      title: "Admin Panel - Cookie Declaration || KiaKia Gas ",
      // meta: [
      //   {
      //     name: "description",
      //     content:
      //       "Epiloge is about connecting in your field of interest. Our vision is to help people share their knowledge, work, projects, papers and ideas and build their network through what they do rather where they live, study or work.",
      //   },
      //   {
      //     property: "og:title",
      //     content: "Epiloge - Build your network in your field of interest",
      //   },
      //   { property: "og:site_name", content: "Epiloge" },
      //   { property: "og:type", content: "website" },
      //   { name: "robots", content: "index,follow" },
      // ],
    };
  },
  data() {
    return {
      currentUser : null,

    }
  },

  created() {
    this.getCookie();
    this.currentUser = this.userProfile.name

  },
  computed: {
    ...mapState(["cookies", 'userProfile']),
  },
  methods: {
    getCookie() {
      this.$store.dispatch("GET_COOKIE");
    },
    deleteCookie(id) {
      this.$store.dispatch("DELETE_COOKIE", id);
    },
     logOut() {
      this.$store.dispatch("LOGOUT");
    },
  },
};
</script>

<style scoped lang="scss">
:root {
  --red-color: #fb6464;
  --purple-color: #6e6893;
  --lightblue-color: #3789ec;
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
    flex: 1 !important;
  }
  .menu {
    display: flex !important;
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
    margin: 10px 30px !important;
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
  }
}
.support {
  margin-bottom: 10px;
  margin-top: 0;
  margin-left: 15px;
  font-weight: 500;
  cursor: pointer;
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
  width: 100%;
  color: #fff;
}

// Main

.main {
  width: auto;
  margin-top: 3.3rem;
  margin-left: 255px;
  margin-right: 0 !important;

  z-index: 1;
  height: 100vh;
  padding: 35px 10px 10px 40px;

  button {
    display: inline;
    margin-left: 15px;
  }

  .main-content {
    padding-right: 50px;

    .menu-bar {
      padding: 10px 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #c1c1c1;
      margin-bottom: 13px;
      padding-bottom: 3px;

      .category {
        flex: 1;
        ul {
          padding: 5px 0;
          margin-bottom: -10px !important;
        }
        li {
          background: none !important;
          border-radius: 0 !important;
          color: var(--purple-color);
          display: inline-block !important;
          margin: 0 7px;
          &:nth-of-type(1) {
            margin-left: 0;
            padding-left: 5px;
          }
        }

        .list-active {
          font-weight: 600;
          border-bottom: 2px solid black !important;
          padding-bottom: 10px !important;
          // width: 20px;
        }
      }
      .search-bar {
        flex: 1;
        background: #f4f2ff;
        padding: 5px;
        border-radius: 5px;
        span {
          margin: 8px 0;
        }
        input {
          color: var(--purple-color);
          border: none;
          outline: none;
          padding: 5px !important;
          background: transparent;
          width: 80%;
          margin: 0;
          font-size: 14px;
        }
      }
    }
    table {
      width: 100%;
      thead {
        tr {
          td {
            background: #f4f2ff;
            padding: 10px 0;
            font-weight: 600;
            font-size: 15px;
            color: var(--purple-color);
            text-transform: uppercase;
          }
        }
        td:nth-of-type(1) {
          border-radius: 5px 0 0 5px;
          width: 5%;
        }
        td:nth-of-type(2) {
          width: 35%;
        }
        td:nth-of-type(3) {
          width: 15%;
        }
        td:nth-of-type(4) {
          width: 25%;
        }
        td:nth-of-type(5) {
          border-radius: 0 5px 5px 0;
          width: 25%;
        }
      }
      .company {
        position: relative;
        background: #e6e6f2;
        width: 76px;
        height: 19px;
        border-radius: 15px;
        padding: 2px 10px 5px 20px;
        color: #4a4aff;

        &::before {
          content: "";
          position: absolute;
          width: 5px;
          height: 5px;
          top: 12px;
          left: 5px;
          background: #4a4aff;
          border-radius: 50%;
        }
      }
      .product {
        position: relative;
        background: #e8ecfd;
        width: 76px;
        height: 19px;
        border-radius: 15px;
        padding: 2px 10px 5px 20px;
        color: #3789ec;

        &::before {
          content: "";
          position: absolute;
          width: 5px;
          height: 5px;
          top: 12px;
          left: 5px;
          background: #3789ec;
          border-radius: 50%;
        }
      }
      .social-impact {
        position: relative;
        background: #fff4e6;
        width: 76px;
        height: 19px;
        border-radius: 15px;
        padding: 2px 10px 5px 20px;
        color: #faae08;

        &::before {
          content: "";
          position: absolute;
          width: 5px;
          height: 5px;
          top: 12px;
          left: 5px;
          background: #faae08;
          border-radius: 50%;
        }
      }
      td:nth-of-type(1) {
        padding-left: 10px;
      }
      td:nth-of-type(4) {
        padding-left: 20px;
      }
      td {
        padding: 10px 0;
      }
      td.action {
        .edit {
          align-self: center;
          margin-right: 50px;
          color: var(--lightblue-color);
          cursor: pointer;
        }
        .delete {
          align-self: center;
          color: var(--red-color);
          cursor: pointer;
        }
      }
      tbody {
        tr {
          padding: 10px 0 !important;
          border-bottom: 1px solid #d9d5ec;
          p {
            margin: 0;
          }
        }
      }
    }
    .paging {
      width: 100%;
      height: 50px;
      background: #f4f2ff;
      border-radius: 0 0 7px 7px;
      margin-bottom: 40px;
    }
  }
}
.icon {
  color: black;
}
</style>

