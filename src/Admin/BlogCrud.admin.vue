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
            <span class="badge rounded-pill badge-notification r">0</span>
          </a>
        </div>
        <div>
          <span>
            <i class="far fa-bell"></i>
            <span class="badge rounded-pill badge-notification r">0</span>
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
        <p>{{ this.posts.length > 0 ? "Posts" : "Post" }}</p>
        <p>{{ this.posts.length }}</p>
      </div>
      <ul>
        <li class="activePost">All posts</li>
        <li><router-link to="/admin/new/post">Add New post</router-link></li>
        <li><a href="">Categories</a></li>
      </ul>
      <div class="support">
        <p>Support</p>
      </div>
      <ul>
        <li><router-link to="/support">FAQ</router-link></li>
        <li><router-link to="/support/policy">Privacy Policy</router-link></li>
        <li>
          <router-link to="/support/cookie">Cookie Declarartion</router-link>
        </li>
        <li><router-link to="/support/tos">Terms of Service</router-link></li>
      </ul>
      <div id="log-out">
        <span>
          <h6>Log Out</h6>
        </span>
      </div>
    </div>
    <!-- E SideBar  -->

    <!-- Main  -->
    <div class="main">
      <div class="main-content">
        <span>
          Blog posts
        </span>
        <router-link to="/admin/new/post">
          <button class="btn btn-primary ">Add Post</button></router-link
        >

        <section class="blog">
          <div class="menu-bar">
            <div class="category">
              <ul>
                <li
                  class="tab-btn py-auto active-high"
                  data-id="all"
                  @click="getAllBlogs"
                >
                  All
                </li>
                <li
                  class="tab-btn py-auto"
                  data-id="company"
                  @click="getCompanyBlogs"
                >
                  Company
                </li>
                <li
                  class="tab-btn py-auto"
                  data-id="product"
                  @click="getProductBlogs"
                >
                  Product
                </li>
                <li
                  class="tab-btn py-auto"
                  data-id="social"
                  @click="getSocialBlogs"
                >
                  Social Impact
                </li>
              </ul>
            </div>
            <div class="search-bar">
              <span>
                <i class="fas fa-search"></i>
              </span>
              <input
                type="search"
                @change="getSearchVar"
                v-model="search"
                placeholder="Search blog by Name, category or Date"
              />
            </div>
          </div>

          <div class="table-sub">
            <div class="title">title</div>
            <div class="cat">Categories</div>
            <div class="author">Author/last updated</div>
            <div class="action">Action</div>
          </div>

          <div class="content active-high" id="all">
            <div v-if="posts.length == 0" class="loading img-fluid">
              <img src="../assets/loading-icon-animated-gif-19.jpg" alt="" />
            </div>

            <div
              class="table-subcontent"
              v-for="(post, key) in getSearchVar() || posts"
              :key="key"
            >
              <div class="title">{{ post.title }}</div>
              <div class="cat">
                <span :class="post.category"> {{ post.category }}</span>
              </div>
              <div class="author">
                <p>{{ post.authoredBy }}</p>
                <p>
                  {{ post.createdOn }}
                </p>
              </div>
              <div class="action my-auto ms-1">
                <span class="edit">
                  <router-link :to="{ name: 'EditPost', query: { data: post } }"
                    >Edit</router-link
                  ></span
                >
                <span @click="deletePosts(post.id)" class="delete">Delete</span>
              </div>
            </div>
          </div>
          <div class="content " id="company">
            <div v-if="posts.length == 0" class="loading img-fluid">
              <img src="../assets/loading-icon-animated-gif-19.jpg" alt="" />
            </div>
            <div
              class="table-subcontent"
              v-for="(post, key) in company"
              :key="key"
            >
              <div class="title">{{ post.title }}</div>
              <div class="cat">
                <span :class="post.category"> {{ post.category }}</span>
              </div>
              <div class="author">
                <p>{{ post.authoredBy }}</p>
                <p>
                  {{ post.createdOn }}
                </p>
              </div>
              <div class="action my-auto ms-1">
                <span class="edit">
                  <router-link :to="{ name: 'EditPost', query: { data: post } }"
                    >Edit</router-link
                  ></span
                >
                <span @click="deletePosts(post.id)" class="delete">Delete</span>
              </div>
            </div>
          </div>
          <div class="content " id="product">
            <div v-if="posts.length == 0" class="loading img-fluid">
              <img src="../assets/loading-icon-animated-gif-19.jpg" alt="" />
            </div>

            <div
              class="table-subcontent"
              v-for="(post, key) in product"
              :key="key"
            >
              <div class="title">{{ post.title }}</div>
              <div class="cat">
                <span :class="post.category"> {{ post.category }}</span>
              </div>
              <div class="author">
                <p>{{ post.authoredBy }}</p>
                <p>
                  {{ post.createdOn }}
                </p>
              </div>
              <div class="action my-auto ms-1">
                <span class="edit">
                  <router-link :to="{ name: 'EditPost', query: { data: post } }"
                    >Edit</router-link
                  ></span
                >
                <span @click="deletePosts(post.id)" class="delete">Delete</span>
              </div>
            </div>
          </div>
          <div class="content" id="social">
            <div v-if="posts.length == 0" class="loading img-fluid">
              <img src="../assets/loading-icon-animated-gif-19.jpg" alt="" />
            </div>
            <div
              class="table-subcontent"
              v-for="(post, key) in social"
              :key="key"
            >
              <div class="title">{{ post.title }}</div>
              <div class="cat">
                <span :class="post.category"> {{ post.category }}</span>
              </div>
              <div class="author">
                <p>{{ post.authoredBy }}</p>
                <p>
                  {{ post.createdOn }}
                </p>
              </div>
              <div class="action my-auto ms-1">
                <span class="edit">
                  <router-link :to="{ name: 'EditPost', query: { data: post } }"
                    >Edit</router-link
                  ></span
                >
                <span @click="deletePosts(post.id)" class="delete">Delete</span>
              </div>
            </div>
          </div>
        </section>

        <div class="paging my-2"></div>
      </div>
    </div>
    <!-- E Main  -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "BlogCrud",
  data() {
    return {
      company: [],
      product: [],
      social: [],
      search: "",
    };
  },
  metaInfo() {
    return {
      title: "Admin Panel - Blog || KiaKia Gas ",
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
  mounted() {
    const blog = document.querySelector(".blog");
    const btns = document.querySelectorAll(".tab-btn");
    const articles = document.querySelectorAll(".content");
    blog.addEventListener("click", function(e) {
      const id = e.target.dataset.id;
      if (id) {
        // remove selected from other buttons
        btns.forEach(function(btn) {
          btn.classList.remove("active-high");
        });
        e.target.classList.add("active-high");
        // hide other articles
        articles.forEach(function(article) {
          article.classList.remove("active-high");
        });
        if (id) {
          const element = document.getElementById(id);
          element.classList.add("active-high");
        } else {
          const element2 = document.getElementById(selectOption.value);
          element2.classList.add("active-high");
        }
      }
    });
  },

  created() {
    this.getPost();
  },
  computed: {
    ...mapState(["posts"]),
  },
  methods: {
    getPost() {
      this.$store.dispatch("GET_POST");
    },
    deletePosts(id) {
      const check = confirm("Are you sure you want to delete this content ?");
      if (check) {
        this.$store.dispatch("deletePost", id);
      }
    },
    getPost() {
      this.$store.dispatch("GET_POST");
    },

    getAllBlogs() {
      const data = this.posts.filter((doc) => doc);
      this.product = data;
    },
    getProductBlogs() {
      const data = this.posts.filter(
        (doc) => doc.category.toLowerCase() === "product"
      );
      this.product = data;
    },
    getCompanyBlogs() {
      const data = this.posts.filter(
        (doc) => doc.category.toLowerCase() === "company"
      );
      this.company = data;
    },
    getSocialBlogs() {
      const data = this.posts.filter(
        (doc) => doc.category.toLowerCase() === "social-impact"
      );
      this.social = data;
    },
    getSearchVar() {
      const filteredBlog = this.posts.filter(
        (data) =>
          data.title.toLowerCase().match(this.search.toLowerCase()) ||
          data.post.toLowerCase().match(this.search.toLowerCase()) ||
          data.category.toLowerCase().match(this.search.toLowerCase()) ||
          data.createdOn.toLowerCase().match(this.search.toLowerCase())
      );
      console.log(filteredBlog);
      return filteredBlog;
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
  }
  .paging {
    width: 100%;
    height: 50px;
    background: #f4f2ff;
    border-radius: 0 0 7px 7px;
    margin-bottom: 40px;
  }
}
.icon {
  color: black;
}

.tab-btn {
  margin-bottom: 2rem;
  padding-left: 7px;
  font-size: 1rem;
  background: #fff;
  cursor: pointer;
  letter-spacing: 1px;
  transition: all 0.5s ease-in-out;
}
.tab-btn:hover:not(.active-high) {
  background: white;
  color: #000;
}

/* hide content */
.content {
  display: none !important;
}
.tab-btn.active-high {
  background: #e9f2fc;
  border-right: 2px solid var(--primary);
  padding: 7px;
}
.content.active-high {
  display: block !important;
}

.tab-btn.active-high {
  background: #fff;
  border-bottom: 3px solid var(--accent-color);
  padding: 4px;
  border-right: none !important;
  font-weight: 600;
}
.tab-btn {
  margin-bottom: 14px;
  margin-right: 15px;
  font-size: 15px;
}

.table-sub {
  background: #f4f2ff;
  padding: 10px 0;
  font-weight: 600;
  font-size: 15px;
  color: var(--purple-color);
  text-transform: uppercase;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  .title {
    display: inline-block !important;
    grid-column: 1 / 3;
    padding-left: 20px;
  }
}
.table-subcontent {
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
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
  padding: 10px !important;

  border-bottom: 1px solid #d9d5ec;
  p {
    margin: 0;
  }
  .title {
    display: inline-block !important;
    grid-column: 1 / 3;
  }
}
.table-sub {
  background: #f4f2ff;
  padding: 15px 0;
  font-weight: 600;
  font-size: 15px;
  color: var(--purple-color);
  text-transform: uppercase;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  border-radius: 5px;
  .title {
    display: inline-block !important;
    grid-column: 1 / 3;
    padding-left: 10px;
  }
}
</style>
