
<template>
  <div>
       <!-- Landing Page -->
    <div class="landing-page">
        <div class="container">
            <!-- Navbar -->
         <Header/>

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
                        <p> <img src="../assets/images/Support/Linked Path Group.svg" alt=""></p>
                    </div>

                </div>
            </div>
            <!-- E Content -->

        </div>
    </div>



    <!-- E Landing Page -->
    <!-- Body -->
    <div class="container my-5">
        <div v-if="cookies.length == 0" class="loading img-fluid">
        <img src="../assets/loading-icon-animated-gif-19.jpg" alt="">
      </div>
       <span   v-for="(cookie, key) in cookies" :key="key">
      <p v-html="cookie.description"></p>
       </span>
    </div>
    <!--E Body -->


    <!-- Upgrade -->
    <div class="upgrade text-white">
        <div class="container">
            <div class="row pt-5">
                <div class="col-md-6 col-sm-12">
                    <h2>
                        Upgrade your cooking gas experience
                    </h2>
                    <p class="mb-4">
                        Download the app to keep track of your gas level, order gas from the comfort of your home,
                        subscribe for
                        refills.
                    </p>
                    <div class="download">
                        <div>Get the App</div>
                        <a href="#"> <img src="../assets/images/Support/Google Play Badge.png" alt="gplay">
                        </a>
                        <a class="me-3" href="#"> <img src="../assets/images/Support/App Store Badge.png" alt="apple">
                        </a>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 cta mt-5">
                    <img src="../assets/images/Support/iPhone.png" alt="">
                </div>
            </div>
        </div>
    </div>
    <!-- E Upgrade -->



    <!-- footer -->
    <Footer />
    <!--E footer -->

  </div>
</template>

<script>
import {mapState} from 'vuex'
 import Header from '@/components/Header'
 import Footer from '@/components/Footer'

export default {
    name : "Cookie",
      components:{
      Footer, Header
    },
    metaInfo() {
      return {
        title: "Cookies || KiaKia Gas 360",
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

  created() {
    this.getCookie();
  },
  computed: {
    ...mapState(["cookies"]),
  },
  methods: {
    getCookie() {
      this.$store.dispatch("GET_COOKIE");
    },
  }
}
</script>

<style>
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
  background-image: url("../assets/images/Support/Rectangle.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
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
.head {
  text-transform: uppercase;
  color: var(--primary);
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
  .gas360-circle {
    padding: 50px 0;
  }
  h5.head {
    font-size: 16px;
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

</style>