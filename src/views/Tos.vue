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
                Legal Infomation
              </h5>
              <h1>
                Terms of services
              </h1>
            </div>
            <div class="col-md-6 text-center gas360-circle">
              <p>
                <img
                  src="../assets/images/Support/Linked Path Group.svg"
                  alt=""
                />
              </p>
            </div>
          </div>
        </div>
        <!-- E Content -->
      </div>
    </div>

    <!-- E Landing Page -->
    <!-- Body -->

    <section class="container support">
      <div class="row">
        <div class="tab-mobile">
          <div class="tab-btn py-auto active" data-id="agreement">
            Agreement to terms
          </div>
          <div class="tab-btn py-auto" data-id="intellectual">
            Intellectual property rights
          </div>
          <div class="tab-btn py-auto" data-id="user-rep">
            User representation
          </div>
          <div class="tab-btn py-auto" data-id="user-reg">
            User registration
          </div>
          <div class="tab-btn py-auto" data-id="contact">Contact</div>
        </div>
        <div class="col-2 py-5">
          <!-- btn container -->
          <div class="btn-container">
            <div class="tab-btn py-auto active" data-id="agreement">
              Agreement to terms
            </div>
            <div class="tab-btn py-auto" data-id="intellectual">
              Intellectual property rights
            </div>
            <div class="tab-btn py-auto" data-id="user-rep">
              User representation
            </div>
            <div class="tab-btn py-auto" data-id="user-reg">
              User registration
            </div>
            <div class="tab-btn py-auto" data-id="contact">Contact</div>
          </div>
        </div>
        <div class="col-10 py-5">
          <div class="support-content">
            <!-- single item -->

            <div class="ms-5 content active" id="agreement">
              <h4>Terms of service</h4>
              <div v-if="terms.length == 0" class=" img-fluid">
                <img src="../assets/loading-icon-animated-gif-19.jpg" alt="" />
              </div>

              <div v-for="(tos, key) in terms" :key="key">
                <p>
                  Last updated: <span> {{ tos.createdOn }} </span>
                </p>
                <p v-html="tos.tos"></p>
              </div>
            </div>
            <!-- E Support -->
            <!-- end of single item -->

            <!-- single item -->
            <div class="ms-5  content" id="intellectual">
              <h4>Intellectual property rights</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat placeat autem nam, ipsa expedita beatae natus enim
                eaque, minus quos, nihil eum dolor quas molestiae culpa. Facilis
                earum ipsa blanditiis?
              </p>
              <ul class="my-5">
                <li class="my-3 ">
                  <a class="text-primary" href="#">Terms of service</a>
                </li>
                <li class="my-3 ">
                  <a class="text-primary" href="#">Cookie policy</a>
                </li>
                <li class="my-3 ">
                  <a class="text-primary" href="#">Privacy policy</a>
                </li>
                <li class="my-3 ">
                  <a class="text-primary" href="#">Code of conduct</a>
                </li>
              </ul>
            </div>
            <div class="ms-5  content" id="user-rep">
              <h4>User representations</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat placeat autem nam, ipsa expedita beatae natus enim
                eaque, minus quos, nihil eum dolor quas molestiae culpa. Facilis
                earum ipsa blanditiis?
              </p>
            </div>
            <div class="ms-5  content" id="user-reg">
              <h4>User registration</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat placeat autem nam, ipsa expedita beatae natus enim
                eaque, minus quos, nihil eum dolor quas molestiae culpa. Facilis
                earum ipsa blanditiis?
              </p>
            </div>
            <div class="ms-5  content" id="contact">
              <h4>Contact Us</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat placeat autem nam, ipsa expedita beatae natus enim
                eaque, minus quos, nihil eum dolor quas molestiae culpa. Facilis
                earum ipsa blanditiis?
              </p>
            </div>
          </div>
        </div>
      </div>
      .
    </section>

    <!-- E Body -->

    <!-- footer -->
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "Tos",
  components: {
    Footer,
    Header,
  },
  metaInfo() {
    return {
      title: "Terms Of Service || KiaKia Gas 360",
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
    const support = document.querySelector(".support");
    const btns = document.querySelectorAll(".tab-btn");
    const articles = document.querySelectorAll(".content");
    support.addEventListener("click", function(e) {
      const id = e.target.dataset.id;
      if (id) {
        // remove selected from other buttons
        btns.forEach(function(btn) {
          btn.classList.remove("active");
        });
        e.target.classList.add("active");
        // hide other articles
        articles.forEach(function(article) {
          article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
      }
    });
  },
  created() {
    this.getTos();
  },
  computed: {
    ...mapState(["terms"]),
  },
  methods: {
    getTos() {
      this.$store.dispatch("GET_TOS");
    },
  },
};
</script>

<style>
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
  background-color: #ffffff;
  font-family: "Work Sans", sans-serif !important;
}
/* =============Deskstop view====================== */
.landing-page {
  min-width: 100%;
  min-height: auto;
  background: #f7f7fc;
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
.col-2 {
  border-right: 0.5px solid #d9dbe1;
}
.col-2 {
  padding: 0 !important;
}
#privacy,
#contact {
  margin-bottom: 70px;
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
  .gas360-circle {
    padding: 50px 0;
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
  .col-2 {
    display: none;
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
  .tab-mobile {
    display: none;
  }
}
</style>
