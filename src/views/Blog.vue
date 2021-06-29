<template>
  <div>
    <!-- Header  -->
    <Header />
    <!-- E Header  -->
    <!-- Hero Section  -->
    <div class="container-fluid hero-container">
      <HeroSection
      text ="Stories, resources and articles making the Gas360 experience" />
    </div>
    <!-- E Hero Section  -->

    <section class="container blog">
      <div v-if="posts.length == 0" class="loading">
        <img
          class="img-fluid"
          src="../assets/loading-icon-animated-gif-19.jpg"
          alt=""
        />
      </div>
      <div class="mobile-first">
        <div>
          <select name="dropdown" id="dropdown" style="padding: 10px 0;">
            <option
              class="tab-button active-high"
              value="all"
              
              data-id="all"
              @change="getAllBlogs"
              >ALL</option
            >
            <option
              class="tab-button"
              value="company"
              data-id="company"
              @click="getCompanyBlogs"
              >Company</option
            >
            <option
              class="tab-button"
              value="product"
              data-id="product"
              @change="getProductBlogs"
              >Product</option
            >
            <option
              class="tab-button"
              value="social"
              data-id="social"
              @change="getSocialBlogs"
              >Social</option
            >
            <option
              class="tab-button"
              value="retail"
              data-id="social"
              @change="getSocialBlogs"
              >Retail 2.0</option
            >
          </select>
        </div>
        <div class="py-auto position-relative">
          <form @submit.prevent>
            <input
              type="text"
              @change="getSearchVar"
              v-model="search"
             
            />
            <i class="icon-search-mobile fa fa-search"></i>
          </form>
        </div>
      </div>

      <div class="desktop-first">
        <div
          class="tab-button  active-high"
          data-id="all"
          @click="getAllBlogs"
        >
          All Posts
        </div>
        <div class="tab-button" data-id="company" @click="getCompanyBlogs">
          Company
        </div>
        <div class="tab-button" data-id="product" @click="getProductBlogs">
          Product
        </div>
        <div class="tab-button" data-id="social" @click="getSocialBlogs">
          Social Impact
        </div>
        <div class="tab-button" data-id="social" @click="getSocialBlogs">
          Retail 2.0
        </div>
      </div>
      <!-- Search Bar  -->

      <div class="search-input position-relative  d-none d-md-block">
        <form @submit.prevent>
          <input
            type="text"
            @change="getSearchVar"
            v-model="search"
            placeholder="Search Blog"
            class="w-100"
          />
          <i class="icon mx-4 fa fa-search"></i>
        </form>
      </div>

      <div class="blog py-5">
        <div class="content active-high" id="all">
          <div class="row">
            <div
              v-for="(post, key) in getSearchVar() || posts"
              :key="key"
              class="col-lg-4 col-md-6 mb-5"
            >
              <router-link :to="{ name: 'Blogpost', params: { id: post.id } }">
                <img class="img-fluid" :src="post.blogImage" alt="post-image" />
              </router-link>

              <div class="text-primary text-uppercase my-2">{{ post.category }}</div>
              <b>
                <h5>
                  {{ post.title }}
                </h5>
              </b>
              <div class="part-post">
                <p v-html="post.post.substring(0, 100)"></p>
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
              class="col-lg-4 col-md-6 mb-5"
            >
              <router-link :to="{ name: 'Blogpost', params: { id: post.id } }">
                <img class="img-fluid" :src="post.blogImage" alt="post-image" />
              </router-link>

              <div class="text-primary text-uppercase my-2">{{ post.category }}</div>
              <b>
                <p>
                  {{ post.title }}
                </p>
              </b>
              <div class="part-post">
                <p v-html="post.post.substring(0, 100)"></p>
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
              class="col-lg-4 col-md-6 mb-5"
            >
              <router-link :to="{ name: 'Blogpost', params: { id: post.id } }">
                <img class="img-fluid" :src="post.blogImage" alt="post-image" />
              </router-link>

              <div class="text-primary text-uppercase my-2">{{ post.category }}</div>
              <b>
                <p>
                  {{ post.title }}
                </p>
              </b>
              <div class="part-post">
                <p v-html="post.post.substring(0, 100)"></p>
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
              class="col-lg-4 col-md-6 mb-5"
            >
              <router-link :to="{ name: 'Blogpost', params: { id: post.id } }">
                <img class="img-fluid" :src="post.blogImage" alt="post-image" />
              </router-link>

              <div class="text-primary text-uppercase my-2">{{ post.category }}</div>
              <b>
                <p>
                  {{ post.title }}
                </p>
              </b>
              <div class="part-post">
                <p v-html="post.post.substring(0, 100)"></p>
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
import HeroSection from "@/components/Hero_Section.vue";

export default {
  name: "Blog",
  components: {
    Footer,
    Header,
    HeroSection,
  },
  data() {
    return {
      company: [],
      product: [],
      social: [],
      search: "",
      isLoading: true,
      incomingData: {},
    };
  },
  metaInfo() {
    return {
      title: "Blog || KiaKia Gas 360",
      meta: [
        {
          name: "description",
          content:
            "Gas360 gets gas to your home at odd hours of the day and puts you in control of your gas usage.",
        },
        {
          property: "og:title",
          content: "Blog || KiaKia Gas 360.",
        },
        { property: "og:site_name", content: "gas360" },
        { property: "og:type", content: "website" },
        { name: "robots", content: "index,follow" },
      ],
    };
  },
  mounted() {
    
    const selectOption = document.querySelector("#dropdown");

    const blog = document.querySelector(".blog");
    const btns = document.querySelectorAll(".tab-button");
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
      // this.isLoading = false;
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

      return filteredBlog;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700;800;900&display=swap");

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
.loading {
  display: grid;
  place-content: center;
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
  font-family: "Work Sans" sans-serif;
}
/* =============Deskstop view====================== */
.Hero-container {
  padding-top: 120px;
  padding-bottom: 50px;
}

.part-post {
  color: rgb(94, 94, 94);
}

.search-input {
  padding: 5px 0 0 50px;
  margin: 5px 0;
  background: #edeef1;
  border-radius: 5px;
  input {
    padding: 5px 5px !important;
    background: transparent;
   
  }
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
.tab-button {

  font-size: 1rem;
  background: #fff;
  cursor: pointer;
  letter-spacing: 1px;
  transition: all 0.5s ease-in-out;
}
.tab-button:hover:not(.active-high) {
  background: white;
  color: #000;
}

/* hide content */
.content {
  display: none !important;
}
.tab-button.active-high {
  background: #e9f2fc;
  border-right: 2px solid var(--primary);
  padding: 7px;
}
.content.active-high {
  display: block !important;
}

.desktop-first {
  display: flex !important;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px !important;
  border-bottom: 0.5px solid #d9dbe1;
  div{
    margin: 20px 25px;
  }
}
.tab-button.active-high {
  background: #fff;
  border-bottom: 3px solid var(--primary);
  padding: 4px;
  border-right: none !important;
  font-weight: 600;
}
.tab-button {
  margin-bottom: 14px;
  margin-right: 15px;
  font-size: 15px;
}
#all img,
#company img,
#product img,
#social img {
  border-radius: 5px;
}
input[type="text"],
select {
  width: 100%;
  border: none;
  padding: 10px 0;
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
  .icon-search-mobile {
    position: absolute;
    top: 13px;
    right: 5px;
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
