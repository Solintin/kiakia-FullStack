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
      <div class="activeH post">
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
        <li><a href="">FAQ</a></li>
        <li><a href="">Privacy Policy</a></li>
        <li><a href="">Cookie Declarartion</a></li>
        <li><a href="">Terms of Service</a></li>
      </ul>
      <div id="log-out">
        <span>
          <h6>Log Out</h6>
        </span>
      </div>
    </div>
    <!-- E SideBar  -->
    <form @submit.prevent>
      <!-- Main  -->
      <div class="main">
        <div class="main-content">
          <h6 class="fs-4 text-center mb-5">Add New Post</h6>

          <strong>Title</strong>
          <input type="text" id="title" v-model="title" />

          <strong>Author</strong>

          <input type="text" id="author" name="author" v-model="authoredBy" />

          <strong>Cateogory</strong>
          <div class="category">
            <ul>
              <li
                v-for="(category, index) in categories"
                :key="index"
                :class="{ active: category.isClicked }"
                @click="chooseCategory(category)"
              >
                {{ category.categ }}
              </li>
              <!-- <li class="active">Company</li>
              <li>Product</li>
              <li>Social Impact</li> -->
            </ul>
          </div>

          <strong>Description</strong>
          <vue-editor v-model="post"></vue-editor>

          <p class="mt-4 mb-0"><strong>Featured Image</strong></p>
          <input type="file" @change="uploadImage" />
        </div>
      </div>
      <!-- E Main  -->

      <!-- Right Sidebar -->
      <div class="right-sidebar">
        <div class="buttons">
          <button class="btn btn-primary text-center" @click="publishPost">
            Add Post
          </button>
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
        <div>
          <p class="fw-bold my-2">Blog - Image Live preview</p>
          <img :src="blogImage" alt="" class="img-fluid" />
        </div>
      </div>
      <!-- E Right Sidebar -->
    </form>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { fbAccess } from "../firebase";

export default {
  name: "NewPost",
  components: {
    VueEditor,
  },
  data() {
    return {
      title: "",
      post: "",
      authoredBy: "",
      categories: [
        { categ: "product", isClicked: false },
        { categ: "company", isClicked: false },
        { categ: "social-impact", isClicked: false },
      ],
      selectCategory: "",
      blogImage: "",
      imageUploadSuccess: false,
    };
  },
  metaInfo() {
    return {
      title: "Admin Panel - New Post || KiaKia Gas ",
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

  methods: {
    publishPost() {
      const form = {
        post: this.post,
        authoredBy: this.authoredBy,
        title: this.title,
        category: this.selectCategory,
        blogImage : this.blogImage
      };
      this.$store.dispatch("PUBLISH_POST", form);
    },
    chooseCategory(cat) {
      this.selectCategory = cat.categ;
      console.log(cat);
      cat.isClicked = !cat.isClicked;
    },
    uploadImage(e) {
      let file = e.target.files[0];
      const storageRef = fbAccess.storage().ref(`Assets/${file.name}`);
      storageRef
        .getDownloadURL()
        .then((imageUrl) => {
          this.blogImage = imageUrl;
          console.log(imageUrl);
          this.imageUploadSuccess = !this.imageUploadSuccess;
          console.log(this.imageUploadSuccess);
        })
        .catch((error) => {
          console.log(error);
          console.log(this.imageUploadSuccess);
        });

      
    },
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
    input:last-of-type {
      background: none;
      margin-left: 0;
      padding: 0;
    }
    .category {
      padding: 8px 0 !important;
      ul {
        margin-top: 10px;
        margin-left: 0;
        padding: 0;
        li {
          margin-right: 15px;
          display: inline-flex;
          background: #f4f2ff;
          border-radius: 5px;
          padding: 5px 10px;
          cursor: pointer;
          &:hover {
            background: var(--lightblue-color);
            color: #fff;
          }
        }
        li.active {
          color: #fff;
          background: var(--lightblue-color);
          width: min-content;
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
