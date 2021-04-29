<template>
  <div class="home-wrapper">
    <!-- Why Use Gas 360 -->

    <section class="container-fluid why-gas-360">
      <div class="container text-center">
        <span class="my-2 fs-4  fw-bold">
          Why use Gas360?
        </span>
        <div class="row">
          <div class="col-md-3 col-sm-12 p-3 ">
            <img
              src="../assets/new-home-asset/bus.png"
              alt="bus"
              class="img-fluid"
            />
            <p>Gas Hailing and delivery at anytime of the day</p>
          </div>
          <div class="col-md-3 col-sm-12 p-3 ">
            <img
              src="../assets/new-home-asset/speedometer.png"
              alt="bus"
              class="img-fluid"
            />
            <p>Realtime gas monitoring</p>
          </div>
          <div class="col-md-3 col-sm-12 p-3 ">
            <img
              src="../assets/new-home-asset/Check.png"
              alt="bus"
              class="img-fluid"
            />
            <p>Guaranteed cylinder safety and maintenenace</p>
          </div>
          <div class="col-md-3 col-sm-12 p-3 ">
            <img
              src="../assets/new-home-asset/gas.png"
              alt="bus"
              class="img-fluid"
            />
            <p>Top level security for refilling, no underfill</p>
          </div>
        </div>
      </div>
    </section>
    <!--E Why Use Gas 360 -->

    <!-- Features -->
    <section class="features container my-5">
      <h2 class="text-center">Features that give the Gas360 experience</h2>
      <!-- pay small small  -->
      <div class="mt-4 row">
        <div class="col-md-6 my-auto">
          <h2>Pay small small</h2>
          You do not have money to switch to LPG, no problem, we would give a
          cylinder and gas and you buy in small quantities with our smart
          meters.
        </div>
        <div class="col-md-6 ps-5">
          <img
            class="img-fluid"
            src="../assets/new-home-asset/order-refillsvg.svg"
            alt="order-refill"
          />
        </div>
      </div>
      <!-- monitor -->
      <div class="mt-4 row">
        <div class="col-md-6 ps-5">
          <img
            class="img-fluid tank-info"
            src="../assets/new-home-asset/tankinfosvg.svg"
            alt="order-refill"
          />
        </div>
        <div class="col-md-6 my-auto">
          <h2>You monitor, We deliver</h2>
          Monitor the level of gas in your cylinder through our mobile app. We
          ensure a replacement is delivered to you once your gas level is low.
        </div>
      </div>
      <div class="mt-4 row">
        <!-- Leakages -->
        <div class="col-md-6 my-auto">
          <h2>Detect gas leakages to avoid fire outbreaks</h2>
          Automatic gas detection that detects gas leakages before they start.
        </div>
        <div class="col-md-6 ps-5">
          <img
            class="img-fluid"
            src="../assets/new-home-asset/Group45.svg"
            alt="order-refill"
          />
        </div>
      </div>

      <!-- Subscribe  -->
      <div class="mt-4 row">
        <div class="col-md-6 ps-5">
          <img
            class="img-fluid"
            src="../assets/new-home-asset/preordersvg.svg"
            alt="order-refill"
          />
        </div>
        <div class="col-md-6 my-auto">
          <h2>Subscribe for future refills</h2>
          With our smart meters,you can enjoy uninterrupted supply of gas and
          you will never have to worry about running out of gas again
        </div>
      </div>
    </section>

    <!-- E Features -->

    <!-- Get started -->
    <section class="container-fluid get-start">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="container">
              <h1>
                Get started with Gas360
              </h1>
              <div class="image-wrapper">
                <img src="../assets/new-home-asset/iPhone-X.png" alt="" />
              </div>
            </div>
          </div>
          <div class="col-md-6 my-auto">
            <div class="container ">
              <ul class="m-3">
                <li class="py-3">
                  <div class="number">
                    1
                  </div>
                  <span>
                    <h3>Cylinder exchange</h3>
                    <p>
                      Sign up and get your old cylinder swapped for a new one,
                      free of charge
                    </p></span
                  >
                </li>
                <li class="py-3">
                  <div class="number">
                    2
                  </div>
                  <span>
                    <h3>Subscribe for subsequent refills</h3>
                    <p>
                      You get a free smart gas meter when you pre-order for at
                      least 3 subsequent refills.
                    </p></span
                  >
                </li>
                <li class="py-3">
                  <div class="number">
                    3
                  </div>
                  <span>
                    <h3>Realtime Consumption Monitoring</h3>
                    <p>
                      We monitor your gas,prompt you when it is almost run out
                      and deliver to you before it ever runs out
                    </p></span
                  >
                </li>
                <li class="py-3">
                  <div class="number">
                    4
                  </div>
                  <span>
                    <h3>Cylinder exchange</h3>
                    <p>
                      Pay for gas once or small-small depending on your usage
                      through a trusted payment platform.
                    </p></span
                  >
                </li>
                <li>
                  <button class="p-3">Get Started</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- E Get started -->
    <!-- Waitlist  -->
    <section class="container-fluid waitlist py-4">
      <div class="container">
        <h4>
          We are currently live anywhere in:
        </h4>
        <h1 class="my-3">
          IKOYI & BANANA ISLAND
        </h1>
        <p>Not yet in your area? Get notified when we are in your area?</p>
        <button class="p-3">Join the waitlist</button>
      </div>
    </section>
    <!-- E Waitlist  -->
  </div>
</template>

<script>
export default {
  name: "newhome",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600;700;800;900&display=swap");
:root {
  --primary: #3789ec;
  --accent: #011230;
  --darkblue: #253043;
}

body {
  background-color: #ffffff;
  font-family: "Work Sans", sans-serif !important;
  width: 100% !important;
  scroll-behavior: smooth;
}
/* WHY USE GAS 360 */
section.container-fluid {
  width: 100vw !important;
}
// Why Gas 360

.why-gas-360 {
  background-color: #253043;
  padding: 20px 0;
  width: 100vw;
  color: #fff;
  margin: 0 auto;
  img {
    margin-bottom: 15px;
  }
}
// Features
.features {
  h2 {
    font-weight: 600;
    color: #18366c;
    font-size: 2.5rem;
  }
  .col-md-6 {
    color: #253043;
    line-height: 27px;
    font-size: 18px;
  }
  .row {
    margin: 20px 0;
  }
  .tank-info {
    margin-left: -15px;
  }
}
// Get Started
.get-start {
  background: #fcfcfc;
  padding: 70px 0;
  h1 {
    color: #18366c;
    font-size: 60px;
    font-weight: 600;
  }
  .image-wrapper {
    width: min-content;
    text-align: center;
    background: #faae08 !important;
    border-radius: 7px;
    padding: 20px 40px;
    img {
      margin-left: -20px;
      height: 70%;
    }
  }
  .number {
    height: min-content;
    padding: 30px !important;
    border-radius: 6px;
    background: #eaf0fb;
    margin-right: 20px;
    font-weight: 800;
    font-size: 1.7rem;
    color: #306dd8;
  }
  ul li {
    display: inline-flex !important;
    span h3 {
      color: #18366c !important;
    }
  }
}
button {
  margin-top: 15px;
  outline: none;
  border-radius: 5px;
  background: #faae08;
  font-size: 25px;
  border: none;
  color: #fff;
}
.home-wrapper {
  overflow-x: hidden;
}
.waitlist {
  background-color: #253043;
  text-align: center;
  color: #fff;
}

/* =========================== MOBILE VIEW========================== */
@media screen and (max-width: 765px) {
  .features {
    .tank-info {
      margin-left: -15px;
    }
    .row:nth-of-type(odd) {
      flex-direction: column-reverse;
    }
    .row {
      .col-md-6 {
        text-align: center !important;
        margin-right: 0 !important;
        margin-left: 0 !important;
        padding-right: 0 !important;
        padding-left: 0 !important;
      }
      img {
        height: 300px !important;
      }
      div {
        margin: 20px 0 !important;
        font-size: 1rem;
      }
    }
    h2 {
      font-size: 1.7rem;
    }
  }
  .get-start {
    h3 {
      font-size: 20px;
    }
    .container:nth-of-type(1) {
      margin: 0 !important;
      padding: 0 !important;
    }
    .row {
      .col-md-6:nth-of-type(1) {
        .container {
          margin: 0 !important;
          padding: 0 !important;
        }
      }
    }
    h1 {
      color: #18366c;
      font-size: 30px;
      font-weight: 600;
    }
    .image-wrapper {
      width: 100vw;
      border-radius: 0;
    }
  }
  button {
    padding: 10px 5px !important;
  }
}
</style>
