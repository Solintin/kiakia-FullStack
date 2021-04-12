<template>
  <div>
    <!-- Landing Page -->
    <div class="landing-page">
      <div class="container">
        <!-- Navbar -->
        <Header />
        <!-- Content -->
        <div class="container my-5">
          <div class="row">
            <div class="col-md-6">
              <h5 class="head">
                Blog
              </h5>
              <h1>
                Stories, resources and materials making the Gas360 experience
              </h1>
            </div>
            <div class="col-md-6 text-center gas360-circle">
              <p>
                <img src="../assets/images/Blog/Linked Path Group.svg" alt="" />
              </p>
            </div>
          </div>
        </div>
        <!-- E Content -->
      </div>
    </div>

    <!-- E Landing Page -->
    <!-- Body -->

    <section class="container blog">
      <div class="mobile-first">
        <div>
          <select name="dropdown" id="dropdown">
            <option
              class="tab-btn active-high"
              value="all"
              selected
              data-id="all"
              >ALL</option
            >
            <option class="tab-btn" value="company" data-id="company"
              >Company</option
            >
            <option class="tab-btn" value="product" data-id="product"
              >Product</option
            >
            <option class="tab-btn" value="social" data-id="social"
              >Social</option
            >
          </select>
        </div>
        <div class="py-auto position-relative">
          <form @submit.prevent>
            <input type="text" @change="getSearchVar" v-model="search"  placeholder="Search Blog"/>
            <i class=" icon fa fa-search"></i>
          </form>
        </div>
      </div>

      <div class="desktop-first">
        <div class="tab-btn py-auto active-high" data-id="all"  @click="getAllBlogs">All Posts</div>
        <div class="tab-btn py-auto" data-id="company" @click="getCompanyBlogs">
          Company
        </div>
        <div class="tab-btn py-auto" data-id="product" @click="getProductBlogs">
          Product
        </div>
        <div class="tab-btn py-auto" data-id="social" @click="getSocialBlogs">
          Social Impact
        </div>
        <div class="tab-btn py-auto position-relative">
          <form @submit.prevent>
               <input type="text" @change="getSearchVar" v-model="search"  placeholder="Search Blog"/>
            <i class=" icon fa fa-search"></i>
          </form>
        </div>
      </div>

      <div class="blog container py-5">
        <div class="content active-high" id="all">
          <div class="row">
            <div
              v-for="(post, key) in getSearchVar() || posts"
              :key="key"
              class="col-lg-4 col-md-6 mb-3"
            >
              <router-link :to="{ name: 'Blogpost', query: { data: post } }">
                <img class="img-fluid" :src="post.blogImage" alt="post-image" />
              </router-link>

              <div class="head">{{ post.category }}</div>
              <b>
                <p>
                  {{ post.title }}
                </p>
              </b>
              <div class="part-post">
                {{ post.post.substring(0, 100) }}
              </div>
              <p>{{ post.createdOn }}</p>
            </div>
          </div>
        </div>

        <div class="content" id="company">
          <div class="row">
            <div
              v-for="(post, key) in company"
              :key="key"
              class="col-lg-4 col-md-6 mb-3"
            >
              <router-link :to="{ name: 'Blogpost', query: { data: post } }">
                <img class="img-fluid" :src="post.blogImage" alt="post-image" />
              </router-link>

              <div class="head">{{ post.category }}</div>
              <b>
                <p>
                  {{ post.title }}
                </p>
              </b>
              <div class="part-post">
                {{ post.post.substring(0, 100) }}
              </div>
              <p>{{ post.createdOn }}</p>
            </div>
          </div>
        </div>

        <div class="content" id="product">
          <div class="row">
            <div
              v-for="(post, key) in product"
              :key="key"
              class="col-lg-4 col-md-6 mb-3"
            >
              <router-link :to="{ name: 'Blogpost', query: { data: post } }">
                <img class="img-fluid" :src="post.blogImage" alt="post-image" />
              </router-link>

              <div class="head">{{ post.category }}</div>
              <b>
                <p>
                  {{ post.title }}
                </p>
              </b>
              <div class="part-post">
                {{ post.post.substring(0, 100) }}
              </div>
              <p>{{ post.createdOn }}</p>
            </div>
          </div>
        </div>

        <div class="content" id="social">
          <div class="row">
            <div
              v-for="(post, key) in social"
              :key="key"
              class="col-lg-4 col-md-6 mb-3"
            >
              <router-link :to="{ name: 'Blogpost', query: { data: post } }">
                <img class="img-fluid" :src="post.blogImage" alt="post-image" />
              </router-link>

              <div class="head">{{ post.category }}</div>
              <b>
                <p>
                  {{ post.title }}
                </p>
              </b>
              <div class="part-post">
                {{ post.post.substring(0, 100) }}
              </div>
              <p>{{ post.createdOn }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- E Body -->

    <!-- footer -->

    <Footer />

    <!-- E footer -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "Blog",
  components: {
    Footer,
    Header,
  },
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
      title: "Blog || KiaKia Gas 360",
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
    const selectOption = document.querySelector("#dropdown");
    const blog = document.querySelector(".blog");
    const btns = document.querySelectorAll(".tab-btn");
    const articles = document.querySelectorAll(".content");
    blog.addEventListener("click", function(e) {
      const id = e.target.dataset.id;
      if (id || selectOption) {
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

    getAllBlogs() {
      const data = this.posts.filter(
        (doc) => doc
      );
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
        (data) => data.title.toLowerCase().match(this.search.toLowerCase())
      );
      console.log(filteredBlog);
      return filteredBlog;

      
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@300;400&display=swap");
:root {
  --primary: #3789ec;
  --accent: #011230;
}
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}
ul {
  margin: 0 !important;
  padding: 0 !important;
}
li {
  list-style: none !important;
}
a {
  text-decoration: none !important;
  color: #000 !important;
}
body {
  background-color: #fffffa;
  font-family: "Manrope", sans-serif;
}
/* =============Deskstop view====================== */
.landing-page {
  min-width: 100%;
  min-height: auto;
  background-image: url("../assets/images/Blog/Rectangle.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

/* ==============upgrade=========================== */
.upgrade {
  background-color: var(--primary);
  padding: 50px 0;
}
.upgrade .download img {
  width: 100px;
}
.cta img {
  width: 450px;
}
.head {
  text-transform: uppercase;
  color: var(--primary);
}

.btn-container {
  display: block !important;
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

.desktop-first {
  display: flex !important;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px !important;
  border-bottom: 0.5px solid #d9dbe1;
}
.tab-btn.active-high {
  background: #fff;
  border-bottom: 3px solid var(--primary);
  padding: 4px;
  border-right: none !important;
  font-weight: 600;
}
.tab-btn {
  margin-bottom: 14px;
  margin-right: 15px;
  font-size: 15px;
}
#all img,
#company img,
#product img,
#social img {
  border-radius: 20px;
}
input[type="text"],
select {
  width: 100%;
  border: none;
  padding: 10px 10px 10px 35px;
}
input[type="text"]:focus {
  outline: none;
  border-bottom: 1.5px solid var(--primary);
  transition: all 0.5s ease-in-out;
}
.icon {
  position: absolute;
  top: 13px;
  left: 0;
}
.mobile-first {
  display: none !important;
}

@media screen and (max-width: 992px) {
  .tabs li {
    font-size: 15px;
  }
}

/* =========================== MOBILE VIEW========================== */
@media screen and (max-width: 765px) {
  /* ===================== Menu bar Navigation ======================= */

  .cta img {
    width: 350px;
  }
  .menu-list li a {
    font-size: 25px;
  }
  li a:hover {
    color: var(--primary) !important;
  }
  h5.head {
    font-size: 16px;
  }
  .gas360-circle {
    padding: 50px 0;
  }
  input[type="text"] {
    width: 100%;
    border: none;
    padding: 10px 10px 10px 35px;
  }
  input[type="text"]:focus {
    outline: none;
    border-bottom: 1.5px solid var(--primary);
    transition: all 0.5s ease-in-out;
  }
  .icon {
    position: absolute;
    top: 13px;
    left: 0;
  }
  .col-2 {
    display: none;
  }
  .desktop-first {
    display: none !important;
  }
  .mobile-first {
    display: flex !important;
    justify-content: space-between;
    margin-bottom: 10px;
    border-bottom: 0.5px solid #d9dbe1;
  }

  /* ======================= Footer====================== */
}
@media screen and (min-width: 765px) {
  .mobile-first {
    display: none !important;
  }
}
</style>
