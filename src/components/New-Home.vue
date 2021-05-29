<template>
  <div class="home-wrapper">
    <!-- Why Use Gas 360 -->

    <section class="container-fluid why-gas-360">
      <div class="container py-5">
        <h2 class="py-3 text-md-center fw-bold">
          Why use Gas360?
        </h2>
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
        <div class="col-md-6 ps-md-5">
          <img
            class="img-fluid"
            src="../assets/new-home-asset/order-refillsvg.svg"
            alt="order-refill"
          />
        </div>
      </div>
      <!-- monitor -->
      <div class="mt-4 row">
        <div class="col-md-6">
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
      <div class="container py-5">
        <div class="row">
          <div class="col-md-6">
            <div class="">
              <h1 class="get-started-text">
                Get started with Gas360
              </h1>
              <div class="image-wrapper">
                <img src="../assets/new-home-asset/iPhone-X.png" alt="" />
              </div>
            </div>
          </div>
          <div class="col-md-6 mt-5 pt-md-5">
            <div class=" ">
              <ul class="m-3">
                <li class="py-3">
                  <div class="number my-auto">
                    1
                  </div>
                  <span>
                    <h5>Cylinder exchange</h5>
                    <p>
                      Sign up and get your old cylinder swapped for a new one,
                      free of charge
                    </p></span
                  >
                </li>
                <li class="py-3">
                  <div class="number my-auto">
                    2
                  </div>
                  <span>
                    <h5>Subscribe for subsequent refills</h5>
                    <p>
                      You get a free smart gas meter when you pre-order for at
                      least 3 subsequent refills.
                    </p></span
                  >
                </li>
                <li class="py-3">
                  <div class="number my-auto">
                    3
                  </div>
                  <span>
                    <h5>Realtime Consumption Monitoring</h5>
                    <p>
                      We monitor your gas,prompt you when it is almost run out
                      and deliver to you before it ever runs out
                    </p></span
                  >
                </li>
                <li class="py-3">
                  <div class="number my-auto">
                    4
                  </div>
                  <span>
                    <h5>Cylinder exchange</h5>
                    <p>
                      Pay for gas once or small-small depending on your usage
                      through a trusted payment platform.
                    </p></span
                  >
                </li>
                <li>
                  <button class="p-2 fs-6">Get Started Now</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- E Get started -->

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h4 class="modal-title" id="exampleModalLongTitle">
              Join the waitlist
            </h4>
            <div>
              <div
                @click="closeModal"
                class="display-6"
                style="cursor: pointer;"
              >
                X
              </div>
            </div>
          </div>
          <section class="modal-body">
            <form>
              <div
                class="mb-3 d-flex justify-content-between align-items-center"
              >
                <label for="fname">FirstName*</label>
                <label for="City" class="text-left">LastName*</label>
              </div>
              <div
                class="mb-3 d-flex justify-content-between align-items-center"
              >
                <div class="me-3 input-wrapper">
                  <div class="">
                    <input
                      type="text"
                      id="fname"
                      class="w-100"
                      placeholder="First Name"
                      v-model="firstName"
                      required
                    />
                  </div>
                </div>
                <div class="input-wrapper">
                  <input
                    type="text"
                    id="lname"
                    placeholder="First Name"
                    v-model="lastName"
                    required
                  />
                </div>
              </div>
              <label for="email">Email*</label>
              <div class="mb-3 input-wrapper">
                <input
                  type="email"
                  v-model="email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <label for="number">Number</label>
              <div class="mb-3 input-wrapper">
                <input
                  type="phone"
                  v-model="phoneNumber"
                  id="number"
                  placeholder="Number"
                  required
                />
              </div>
              <div
                class="mb-3 d-flex justify-content-between align-items-center"
              >
                <label for="fname">State*</label>
                <label for="City" class="text-left">City*</label>
              </div>

              <div
                class="mb-3 d-flex justify-content-between align-items-center"
              >
                <div class="me-3 input-wrapper">
                  <select v-model="selectedState" @change="pickedState">
                    <option>Please Choose a State</option>
                    <option
                      v-for="(state, idx) in states"
                      :key="idx"
                      :value="state"
                    >
                      {{ state }}
                    </option>
                  </select>
                </div>
                <div class="input-wrapper">
                  <select class="w-100" v-model="selectedCity">
                    <option
                      v-for="(city, idx) in correspondingCities"
                      :key="idx"
                    >
                      {{ city }}
                    </option>
                  </select>
                </div>
              </div>
            </form>
          </section>

          <div class="modal-footer">
            <!-- Notification -->
            <div>
              <div
                v-if="this.successMsg"
                class="alert alert-success fade show"
                role="alert"
              >
                <span class="me-3">{{ this.successMsg }}</span>
                <button
                  type="button"
                  class="close"
                  data-dismiss="alert"
                  aria-label="Close"
                  @click="remove"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div
                v-else-if="this.errMsg"
                class="alert alert-danger alert-dismissible fade show"
                role="alert"
              >
                <strong>{{ this.errMsg }}</strong>
                <button
                  type="button"
                  class="close"
                  data-dismiss="alert"
                  aria-label="Close"
                  @click="remove"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
            <!-- E  Notification -->
            <button
              type="button"
              class="btn btn-primary"
              data-dismiss="modal"
              @click="sendData"
            >
              Join the Waitlist
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- E Modal -->

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
        <button class="p-2 fs-6" @click="toggleModal">Join the waitlist</button>
      </div>
    </section>
    <!-- E Waitlist  -->

    <!-- Partners -->
    <div class="container  py-5">
      <p class="text-center text-uppercase our-partners">Our Partners</p>
      <h3 class="text-center">Backed by trusted agencies</h3>

      <div class="partners partners-desktop">
        <div>
          <img src="../assets/images/Homepage/WhatsApp11.svg" alt="Partner5" />
        </div>
        <div>
          <img src="../assets/images/Homepage/WhatsApp12.svg" alt="Partner1" />
        </div>
        <div>
          <img src="../assets/new-home-asset/fut-logo.svg" alt="Partner2" />
        </div>
        <div>
          <img
            src="../assets/new-home-asset/Leap-Africa-2.svg"
            alt="Partner3"
          />
        </div>
        <div>
          <img src="../assets/images/Homepage/sahara-1.svg" alt="Partner4" />
        </div>
      </div>
      <div class="partners-mobile">
        <div class="partners dload owl-carousel ">
          <div>
            <img
              src="../assets/images/Homepage/WhatsApp11.svg"
              alt="Partner5"
            />
          </div>
          <div>
            <img
              src="../assets/images/Homepage/WhatsApp12.svg"
              alt="Partner1"
            />
          </div>
          <div>
            <img src="../assets/new-home-asset/fut-logo.svg" alt="Partner2" />
          </div>
          <div>
            <img
              src="../assets/new-home-asset/Leap-Africa-2.svg"
              alt="Partner3"
            />
          </div>
          <div>
            <img src="../assets/images/Homepage/sahara-1.svg" alt="Partner4" />
          </div>
        </div>
      </div>
    </div>
    <!-- E Partners -->

<upgrade />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Upgrade from "../components/Upgrade"
import Cities from "../components/Cities.json";
export default {
  name: "newhome",
  components: {Upgrade},
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      selectedCity: "",
      selectedState: "",
      correspondingCities: [],
      cities: Cities,
      states: [
        "Abia",
        "Adamawa",
        "Akwa Ibom",
        "Anambra",
        "Bauchi",
        "Bayelsa",
        "Benue",
        "Borno",
        "Cross River",
        "Delta",
        "Ebonyi",
        "Edo",
        "Ekiti",
        "Enugu",
        "FCT - Abuja",
        "Gombe",
        "Imo",
        "Jigawa",
        "Kaduna",
        "Kano",
        "Katsina",
        "Kebbi",
        "Kogi",
        "Kwara",
        "Lagos",
        "Nasarawa",
        "Niger",
        "Ogun",
        "Ondo",
        "Osun",
        "Oyo",
        "Plateau",
        "Rivers",
        "Sokoto",
        "Taraba",
        "Yobe",
        "Zamfara",
      ],
    };
  },

  computed: {
    ...mapState(["successMsg", "errMsg"]),
  },

  methods: {
    remove() {
      $(".alert").alert("close");
    },
    pickedState(event) {
      this.correspondingCities = this.cities[`${event.target.value}`];

      console.log(this.correspondingCities);
    },
    toggleModal() {
      $("#exampleModalCenter").modal("show");
    },
    closeModal() {
      $("#exampleModalCenter").modal("hide");
    },
    sendData() {
      const form = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phoneNumber: this.phoneNumber,
        selectedCity: this.selectedCity,
        selectedState: this.selectedState,
      };

      this.$store.dispatch("PUBLISH_WAITLIST", form);

      setTimeout(() => {
        this.closeModal();
      }, 3000);
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
    padding: 10px 20px  !important;
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
  margin-top: -15px;
}
// Waitlist
.waitlist {
  background-color: #253043;
  text-align: center;
  color: #fff;
}
// Upgrade


// Modal

.modal form {
  input[type="email"],
  input[type="phone"],
  input[type="text"],
  select {
    border-bottom: none !important;
    background: transparent;
    border-radius: 5px;
    padding-right: 5px !important;
  }
  .input-wrapper {
    width: 100%;
    background: #eff0f6;
    padding: 7px;
    border-radius: 5px;
  }
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
    .get-started-text {
      text-align: center;
    }
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
    li:last-of-type{
    display: none !important;
  }
  }
  button {
    padding: 10px 5px !important;
  }
  
}
</style>
