<template>
  <div>
    <!-- Landing Page -->
    <div class="landing-page">
      <div class="container">
        <!-- Navbar -->
        <Header />

        <!-- Content -->

        <!-- E Content -->
      </div>
    </div>

    <!-- E Landing Page -->
    <!-- Body -->
    <div class="container" style="padding-top : 100px; paddong-botton-50px">
      <div class="text-primary text-uppercase mb-5">
        {{ incomingData[0].category }}
      </div>
      <h3 class="mb-3">
        {{ incomingData[0].title }}
      </h3>
      <div class="blog-info mb-5">
        <ul>
          <li>
            <span style="color:#474A57;">By</span>
            <span class="fw-bold">
              {{ incomingData[0].authoredBy }}
            </span>
          </li>
          <li>
            <div>
              <span class="fw-bold">{{ incomingData[0].createdOn }}</span>
            </div>
          </li>
          <li>
            <div>
              <p><span id="time"></span> minute read</p>
            </div>
          </li>
        </ul>
      </div>

      <!--Post  Image  -->
      <img
        class="my-4"
        height="300"
        width="100%"
        :src="incomingData[0].blogImage"
        alt="post-image"
      />
      <article class="article">
        <div v-html="incomingData[0].post"></div>
      </article>

      <!-- E Body -->

    </div>
      <!-- footer -->
      <Footer />
      <!--E footer -->
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { mapState } from "vuex";
export default {
  name: "Blogpost",
  components: {
    Footer,
    Header,
  },

  metaInfo() {
    return {
      title: `${this.pageTitle} || Gas 360`,
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
  data() {
    return {
      incomingData: {},
      pageTitle: "",
    };
  },
  mounted() {
    this.readingTime();
  },
  computed: {
    ...mapState(["posts"]),
  },

  async created() {
    await this.makePost();
 
  },

  methods: {
    makePost() {
      const currentUrl = window.location.pathname;
      var id = currentUrl.match(/\b[\w=.]+$/g);
      const currentPostId = this.$route.params.id || id[0];
      console.log(this.posts);
      this.incomingData = this.posts.filter((doc) => doc.id === currentPostId);
      this.pageTitle = this.incomingData[0].title;
    },





    readingTime() {
      const text = document.querySelector(".article").innerText;
      const wpm = 225;
      const words = text.trim().split(/\s+/).length;
      const time = Math.ceil(words / wpm);
      document.getElementById("time").innerText = time;
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700;800;900&display=swap');
:root {
  --primary: #3789ec;
  --accent: #011230;
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
  background-color: #ffffff;
 font-family: 'Work Sans', sans-serif !important;
}
/* =============Deskstop view====================== */
.landing-page {
  min-width: 100%;
  min-height: auto;
  background-color: #fff;
}
.kiakia-navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  height: auto;
}
.tabs li {
  display: inline;
  margin: 0 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 27px;

  color: #a58787;
}
.menu-bar {
  display: none;
}

.tabs a {
  color: #000;
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
/* =============== FAQ================== */
.question {
  background: var(--clr-white);
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
  padding: 10px 0;

  margin-bottom: 6px;
  border-bottom: 0.5px solid #4f4f4f;
  transition: all 0.5s ease-in-out;
}
.question-title {
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
  padding-bottom: 5px;
  font-weight: 500;
  font-size: 18px;
}
.question:last-child {
  border-bottom: none;
}
.question-btn {
  margin-top: -5px;
}
.question-title p {
  margin-bottom: 0;
}
.question-btn {
  cursor: pointer;
}

.question-text {
  font-size: 15px;
  padding-bottom: 0.5rem;
}
.question-text p {
  color: #474a57;

  margin-bottom: 0;
}
/* hide text */
.question-text {
  display: none;
}
.show-text .question-text {
  display: block;
}
.minus-icon {
  display: none;
}
.show-text .minus-icon {
  display: inline;
}
.show-text .plus-icon {
  display: none;
}
.blog-info li {
  display: inline-block;
  margin-right: 30px;
}
.blog-info li:nth-child(2) {
  list-style: circle !important;
}
.blog-info li:nth-child(3) {
  list-style: circle !important;
}

/* ==================footer===================== */
.footer {
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0;
  margin: 20px 0;
}
.footer .footer-card {
  width: 18%;
  margin: 10px;
}
.footer-card img {
  width: 100px;
}
.footer-card li {
  list-style-type: none;
  display: block;
  margin: 10px 0;
}
.footer a {
  color: #474a57 !important;
}
.footer-mobile {
  display: none;
}
.head {
  text-transform: uppercase;
  color: var(--primary);
}

.btn-container {
  display: block;
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
.tab-btn:hover:not(.active) {
  background: white;
  color: #000;
}

/* hide content */
.content {
  display: none;
}
.tab-btn.active {
  background: #e9f2fc;
  border-right: 2px solid var(--primary);
  padding: 7px;
}
.content.active {
  display: block;
}

.tab-mobile {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  border-bottom: 0.5px solid #d9dbe1;
}
.tab-btn.active {
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
.tab-mobile-menu {
  display: none;
}

@media screen and (max-width: 992px) {
  .tabs li {
    font-size: 15px;
  }
}

/* =========================== MOBILE VIEW========================== */
@media screen and (max-width: 765px) {
  /* ===================== Menu bar Navigation ======================= */
  .menu-bar {
    display: block;
    position: absolute;
    cursor: pointer;
    top: 20px;
    right: 20px;
    z-index: 999;
  }
  .menu-list {
    height: 100vh;
    position: fixed;
    width: 100%;
    padding-top: 50px;
    background: #e5e5e5;
    left: 0;
    top: 0;
    clip-path: circle(10px at 90% -12%);
    -webkit-clip-path: circle(10px at 90% -12%);
    transition: all 1s ease-out;
  }
  .menu-list.open {
    clip-path: circle(1000px at 90% -12%);
    -webkit-clip-path: circle(1000px at 90% -12%);
  }
  .menu-bar i.open::before {
    content: "\f00d";
    transition: all 0.6s ease-in;
  }
  .menu-list li {
    display: block !important;
    margin: 50px 20px !important;
  }
  .menu-list li:last-child {
    display: none !important;
  }
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

  .blog-info li {
    display: block;
    margin-right: 10px;
  }

  /* ======================= Footer====================== */
  .footer .footer-card {
    width: 30%;
    margin: 5px;
  }
  .footer .footer-card {
    width: 100%;
    margin: 10px;
  }
  .footer {
    display: none;
  }
  .footer-mobile {
    display: block;
  }
  .footer-mobile a {
    color: #474a57 !important;
  }
  .footer-mobile a:hover {
    color: var(--primary) !important;
  }
}

@media screen and (min-width: 765px) {
  .tab-mobile-menu {
    display: none;
  }
}
</style>
