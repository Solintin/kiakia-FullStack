<template>
  <div class="">
    <!-- Landing Page -->
    <div class="landing-page">
      <div class="container">
        <!-- Navbar -->

        <Header />

        <!--E Navbar -->

        <div class="row ">
          <div class="col-md-6" style="margin-top: 120px">
            <div class="">
              <span class="display-5 fw-bold"
                >Never run out of cooking gas again</span
              >
            </div>
            <div class="my-2">
              <h6>
                Gas360 gets gas to your home at odd hours of the day and puts
                you in control of your gas usage.
              </h6>
            </div>
            <div class="text-left">
              <a href="#">
                <img
                  height="45px"
                  src="../assets/images/Homepage/kiakia7/Download-Badge/Google-Play-Badge.png"
                  alt="gplay"
                />
              </a>
              <a class="ms-3" href="#">
                <img
                  height="45px"
                  src="../assets/images/Homepage/kiakia6/Download-Badge/App-Store-Badge.png"
                  alt="apple"
                />
              </a>
            </div>
          </div>
          <div class="col-md-6">
            <div class="tank-info">
              <img
                src="../assets/images/Homepage/kiakia-gas/Mobile/iPhone-X.png"
                alt="tank info"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- E Landing Page -->
    <!-- Body -->
    <NewHome />

    <!-- Support -->
    <div class="container">
      <div class="support">
        <h6 class="text-uppercase head text-center">Support</h6>
        <h3 class="text-center">Frequently asked questions</h3>
        <div v-if="faqs.length == 0" class="loading img-fluid">
          <img src="../assets/loading-icon-animated-gif-19.jpg" class="img-fluid" alt="" />
        </div>

        <section class="questions">
          <!-- questions -->

          <!-- single question -->
          <!-- single question -->
          <article v-for="(faq, key) in faqs" :key="key" class="question">
            <!-- question title -->
            <div class="question-title" @click="toggleQuestion">
              <p>{{ faq.question }}</p>
              <div class="question-btn">
                <span class="plus-icon">
                  <span class="mdi mdi-chevron-right mdi-24px"></span>
                </span>
                <span class="minus-icon">
                  <span class="mdi mdi-chevron-up mdi-24px"></span>
                </span>
              </div>
            </div>
            <!-- answer text -->
            <div class="question-text">
              <p v-html="faq.answer"></p>
            </div>
          </article>
          <div class="mt-3 text-primary text-center">
            <button
              style="color: #18366C;
"
              class=" btn  btn-outline-primary"
            >
              <router-link to="/support">See More FAQs</router-link>
            </button>
          </div>
          <!-- E single question -->
        </section>
      </div>
      <!-- E Support -->
    </div>

    <!-- Footer -->
    <div class="container-fluid footer-wrapper">
      <Footer />
    </div>

    <!-- E Footer -->
  </div>
</template>

<script>
import { mapState } from "vuex";

import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import NewHome from "../components/New-Home.vue";
export default {
  name: "Home",
  metaInfo() {
    return {
      title: "Gas 360 | Homepage",
      meta: [
        {
          name: "description",
          content:
            "Gas360 gets gas to your home at odd hours of the day and puts you in control of your gas usage.",
        },
        {
          property: "og:title",
          content: "Homepage ||  Gas 360.",
        },
        { property: "og:site_name", content: "gas360" },
        { property: "og:type", content: "website" },
        { name: "robots", content: "index,follow" },
      ],
    };
  },
  components: {
    Footer,
    Header,
    NewHome,
  },
  created() {
    this.getFaqs();
  },
  computed: {
    ...mapState(["faqs"]),
  },
  methods: {
    getFaqs() {
      this.$store.dispatch("GET_FAQS");
    },
    toggleQuestion() {
      const questions = document.querySelectorAll(".question");

      questions.forEach(function(question) {
        const btn = question.querySelector(".question-title");
        // console.log(btn);

        btn.addEventListener("click", function() {
          // console.log(question);

          questions.forEach(function(item) {
            if (item !== question) {
              item.classList.remove("show-text");
            }
          });

          question.classList.toggle("show-text");
        });
      });
    },
  },

  mounted() {
    $(document).ready(function() {
      $(".dload").owlCarousel({
        margin: 0,
        loop: true,
        autoplayTimeOut: 2000,
        autoHoverPause: true,
        responsive: {
          0: {
            items: 1,
            nav: false,
          },
          600: {
            items: 2,
            nav: false,
          },
          1000: {
            items: 3,
            nav: false,
          },
        },
      });
    });
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700;800;900&display=swap");
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
  background-color: #fffffa;
  font-family: "Work Sans", sans-serif;
}
/* =============Deskstop view====================== */

.landing-page {
  min-width: 100%;
  min-height: 100vh;
  background: #f7f7fc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}

.tank-info {
  text-align : end;
  padding : 0;
  margin : 0;
}
.tank-info img{
  margin-right: -25px;
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

.support {
  width: 70% !important;
  margin: 40px auto !important;
}

/* =============== FAQ================== */
.question {
  background: var(--clr-white);
  border-radius: var(--radius);
  box-shadow: var(--light-shadow);
  padding: 10px 0;

  margin-bottom: 6px;
  /* border-bottom: 0.5px solid #4f4f4f; */
  transition: all 0.5s ease-in-out;
}
.question-title {
  display: flex;
  justify-content: space-between;
  text-transform: capitalize;
  padding-bottom: 5px;
  font-weight: 700;
  cursor: pointer;
  color: #18366c;
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
.footer-mobile {
  display: none;
}

.footer-wrapper {
  background: #f7f7fc;
}
@media screen and (max-width: 992px) {
  .tabs li {
    font-size: 15px;
  }
}

/* =========================== MOBILE VIEW========================== */
@media screen and (max-width: 768px) {
  /* ===================== Menu bar Navigation ======================= */
  .banner {
    flex-direction: column-reverse;
  }
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
    font-size: 25px;
    display: block !important;
    margin: 50px 20px !important;
  }
  .menu-list li a:hover {
    color: #3789ec !important;
  }
  .menu-list li:last-child {
    display: none !important;
  }
.tank-info{
  text-align: center;
}
.tank-info img{
  margin-right: 0 !important;
  margin-left: -15px !important;
  
}
  .support {
    width: 100% !important;
    margin: 40px auto !important;
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

  /* ================= Inner Component Mobile View ========================== */
  .mobileA,
  .mobileB,
  .mobileD,
  .mobileF {
    display: none;
  }

  /* Owl design */

  .owl-dots {
    text-align: center;
    margin-top: 20px;
  }
  .owl-dot {
    height: 13px;
    width: 13px;
    margin: 0 5px;
    outline: none;
    border-radius: 50%;
    border: 2px solid rgb(67, 137, 202) !important;
    transition: all 0.2s linear;
  }

  .owl-dot.active {
    width: 35px;
    border-radius: 14px;
  }
  .owl-dot.active,
  .owl-dot:hover {
    background: rgb(67, 137, 202) !important;
  }
}
</style>
