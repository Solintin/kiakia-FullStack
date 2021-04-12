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
            <span class="badge rounded-pill badge-notification">3</span>
          </a>
        </div>
        <div>
          <span>
            <i class="far fa-bell"></i>
            <span class="badge rounded-pill badge-notification">3</span>
          </span>
        </div>
        <div>
          <span> <i class="fas fa-user-circle fa-2x"></i> </span>
        </div>
        <div>
          <span>David Alenoghena</span>
        </div>
      </div>
    </header>
    <!-- E Header  -->

    <!-- SideBar  -->
    <div class="sidebar">
      <div class="dashboard">
        <p>Dashboard</p>
      </div>
      <div class="post">
        <p>Post(s)</p>
        <p>10</p>
      </div>
      <ul>
        <li>All posts</li>
        <li><a href="">Add New post</a></li>
        <li><a href="">Categories</a></li>
      </ul>
      <div class="support">
        <p>Support</p>
      </div>
      <ul>
        <li>FAQ</li>
        <li>Privacy Policy</li>
        <li>Cookie Declarartion</li>
        <li>Terms of Service</li>
      </ul>
      <div id="log-out">
        <span>
          <h6>Log Out</h6>
        </span>
      </div>
    </div>
    <!-- E SideBar  -->
    <form>
      <!-- Main  -->
      <div class="main">
        <h5 class="mb-4 text-center">Support Pages</h5>
        <div class="main-content">
          <router-link to="/admin/faqs">
            <div>
              <i
                class="fa fa-question-circle fa-4x text-center"
                aria-hidden="true"
              ></i>
              Frequently Asked Questions
            </div>
          </router-link>
          <router-link to="/admin/cookie">
            <div>
              <i class="fa-4x text-center fas fa-cookie"></i>
              Cookie Declaration
            </div>
          </router-link>
          <router-link to="/admin/policy">
            <div>
              <i class="fa-4x text-center fas fa-shield-alt"></i>
              Privacy of Policy
            </div>
       
          </router-link>
          <router-link to="/admin/tos">
            <div>
              <i class="fa-4x text-center fas fa-edit"></i>
              Terms of Services
            </div>
          </router-link>

        </div>
      </div>
      <!-- E Main  -->
    </form>
  </div>
</template>

<script>
export default {
  name: "EditPost",
  metaInfo() {
    return {
      title: "Admin Panel - Support Page || KiaKia Gas ",
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
.badge {
  position: absolute;
  font-size: xx-small;
  margin-left: -5px;
  margin-top: -5px;
  background-color: var(--red-color);
  color: white;
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
      margin-right: 10px;
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
  width: 100%;
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
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 25px;
    a {
      display: inherit;
      place-content: center;
      div {
        height: 200px;
        width: 300px;
        background: #c4c4c4;
        padding: 10px 10px;
        border-radius: 6px;
        color: rgb(65, 64, 64);
        display: inherit;
        place-content: center;
        font-weight: 700;
        .icon {
          color: rgb(65, 64, 64);
        }
        &:hover {
          background: var(--lightblue-color);
          transform: scale(1.02);
          transition: 1.1s;
          color: white;
          .icon {
            transition: 1.1s;
            color: white;
          }
        }
      }
    }
  }
}
</style>
