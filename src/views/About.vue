<template>
  <div>
    <!-- Header  -->
    <Header />
    <!-- E Header  -->
    <!-- Hero Section  -->
    <div class="container-fluid hero-container">
      <HeroSection text="Democratizing LPG access across the nation" />
    </div>
    <!-- E Hero Section  -->
    <!-- Body -->

    <div class="container sustainability my-5">
      <div class="mission">
        <div class="head my-2">
          the mission
        </div>
        <h3>
          Accelerate clean cooking for the underserved
        </h3>
        <p>
          Our goal is to reach last mile consumers who earn between $1— $8 per
          day across Africa
        </p>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-3 py-3 ">
          <img
            src="../assets/new-home-asset/bus.png"
            alt="bus"
            class="img-fluid"
          />
          <p>Gas Hailing and delivery at anytime of the day</p>
        </div>
        <div class="col-md-3 py-3 ">
          <img
            src="../assets/new-home-asset/speedometer.png"
            alt="bus"
            class="img-fluid"
          />
          <p>Realtime gas monitoring</p>
        </div>
        <div class="col-md-3 py-3 ">
          <img
            src="../assets/new-home-asset/Check.png"
            alt="bus"
            class="img-fluid"
          />
          <p>Guaranteed cylinder safety and maintenenace</p>
        </div>
        <div class="col-md-3 py-3 ">
          <img
            src="../assets/new-home-asset/gas.png"
            alt="bus"
            class="img-fluid"
          />
          <p>Top level security for refilling, no underfill</p>
        </div>
      </div>
    </div>
   <div class="container-fluid upgrade py-5 text-white">
      <div class=" sustainability container">
      <div class="row">
        <div class="col-md-6 my-auto">
         
          <h4>
            We are committed to sustainability
          </h4>
          <p class="under-note">
            We convert scrap metal from expired LPG cylinders to make the
            enclosures for the IOT device. Scrap from laptop batteries(18650
            li-on batteries) is used to power the IOT devices.
          </p>
        </div>
        <div class="col-md-6 sustain my-auto">
          <img
            class="img-fluid"
            src="../assets/images/About/Group 1789.svg"
            alt="sustainability culture"
          />
        </div>
      </div>
    </div>
   </div>

    <div class=" sustainability container my-5 text-center">
      <div class="mission">
        <div class="head my-2">
          Who we are
        </div>
        <h3>
          Democratizing Energy Access in Africa
        </h3>
        <p>
          We are solving the energy poverty problem across households in Africa
          using IOT and Big Data
        </p>
      </div>
    </div>

    <upgrade />

    <!-- Footert -->
    <Footer />
    <!--E  Footer -->
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Upgrade from "../components/Upgrade";
import HeroSection from "../components/Hero_Section.vue";
export default {
  name: "About",
  components: {
    Footer,
    Header,
    Upgrade,
    HeroSection,
  },
  metaInfo() {
    return {
      title: "About || Gas 360",
      meta: [
        {
          name: "description",
          content:
            "Gas360 gets gas to your home at odd hours of the day and puts you in control of your gas usage.",
        },
        {
          property: "og:title",
          content: "About || KiaKia Gas 360.",
        },
        { property: "og:site_name", content: "gas360" },
        { property: "og:type", content: "website" },
        { name: "robots", content: "index,follow" },
      ],
    };
  },
};
</script>

<style>
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
a:hover {
  color: var(--primary);
}
body {
  background-color: #fffffa;
  font-family: "Manrope", sans-serif;
}
/* =============Deskstop view====================== */
.landing-page {
  min-width: 100%;
  min-height: 100vh;
  padding: 120px 0;
  background: #f7f7fc;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
.democrat {
  font-size: 64px;
  line-height: 76.8px;
  font-weight: 600;
}
.gas360-circle {
  text-align: end;
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

.tank-info img {
  height: 500px;
}
.gas-out {
  margin-top: 80px;
  color: var(--accent);
  font-style: normal;
  font-weight: 800;
  font-size: 44px;
  line-height: 120%;
}
.download img {
  width: 80px;
}
.image-mod img {
  width: 300px;
}
.gas-monitor img {
  margin-left: -30px;
  width: 80%;
}
.gas-monitor h6 {
  font-weight: 400;
}
.head {
  margin-top: 70px;
  color: var(--primary);
}
.gas-leakage {
  margin-left: -10px;
}
.gas-leakage img {
  width: 80%;
  margin-left: -30px;
}

/* ================ get started================= */
.get-started {
  margin-top: 40px;
  background-image: url("../assets/images/About/Rectangle.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
.start h1 {
  color: #011230;
  font-weight: 600;
  font-size: 48px;
  line-height: 64px;
}
.start img {
  height: 350px;
}
.start-links a {
  text-decoration: none;
  color: #000;
}
.start-links a:hover {
  color: #fff;
}
.start-links .next-link {
  margin: 40px 0;
}
.start-links .link {
  color: var(--primary);
}
.start-links .next-link:hover {
  border-radius: 5px;
  background-color: var(--primary);
  padding: 10px 20px;
  transition: all 0.5s linear;
}
.start-links .next-link:hover .link {
  color: #fff;
}
/* ========================== partners========================= */
.our-partners {
  color: var(--primary);
}
.partners {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.partners img {
  width: 100px;
  height: 100px;
}

.partners-mobile {
  display: none;
}
/* ==============upgrade=========================== */

.upgrade {
  background: #253043;
}
.upgrade .download img {
  width: 100px;
}
.cta img {
  width: 450px;
}
.support {
  width: 60%;
  margin: 40px auto;
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
  .democrat {
    font-size: 36px;
    line-height: 43.2px;
    font-weight: 600;
  }
  .gas360-circle {
    text-align: center;
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

  .support {
    width: 100%;
    margin: 40px auto;
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
  .mobileC,
  .start {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .start h1 {
    font-size: 25px;
  }
  .mobileC .tank-info img {
    height: 300px;
  }

  .cta {
    display: flex;
    justify-content: center;
  }
  .cta img {
    width: 300px;
  }
  .gas-monitor img {
    margin-left: 0;
  }
  .mobileE .gas-leakage,
  .gas-loan,
  .gas-monitor image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .partners-desktop {
    display: none;
  }
  .partners-mobile {
    display: flex;
  }
  .phone-mobile img {
    width: 450px;
  }
  .phone-desktop {
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
@media screen and (min-width: 765px) {
  .mobileC,
  .mobileE,
  .mobileG,
  .phone-mobile,
  .partners-mobile {
    display: none;
  }
}
</style>
