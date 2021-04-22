<template>
  <div>
    <!-- header -->
    <section class="header-api">
      <div class="row">
        <div class="col-3">
          <img src="../API/ApiAseet/Layer 6.png" alt="" />
        </div>
        <div class="col-6">
          <div class="search-bar">
            <span>
              <i class="fas fa-search"></i>
            </span>
            <input type="search" placeholder="Search By UserID" />
          </div>
        </div>
        <div class="col-3 d-flex justify-content-between">
          <span><i class="far fa-bell"></i></span>
          <span><i class="far fa-comment-dots"></i></span>
          <span
            >David Alenoghena
            <img
              src="../assets/images/Homepage/image-1.svg"
              class="profile-img"
              alt=""
          /></span>
        </div>
      </div>
    </section>
    <!-- E header -->

    <!-- sidebar -->
    <section class="sidebar-api">
      <p>MAIN MENU</p>
      <ul>
        <li>
         <router-link to="/api/admin"> <span class="mdi mdi-view-dashboard"></span>
          Dashboard</router-link>
        </li>
        <li class="active">
         <router-link to="/api/admin-user">  <span class="mdi mdi-account" style="color: blue"></span> Users</router-link>
        </li>
        <li><span class="mdi mdi-chart-line"></span> Activity</li>
        <li>
          <span><i class="fas fa-file"></i></span> Reports
        </li>
      </ul>
      <div class="log-out">
        <ul>
          <li><span class="mdi mdi-logout"></span>Log Out</li>
        </ul>
      </div>
    </section>
    <!-- E sidebar -->

    <!-- main -->
    <section class="main-api">
      <h2 class="mb-3">Users</h2>
      <div class="overview">
        <!-- console  -->
        <div class="console">
          <div class="head-console">
            <div>Data Console</div>
            <div>Filter <i class="fas fa-filter"></i></div>
          </div>
          <content>
            <div class="row">
              <div class="col-1">#</div>
              <div class="col-1">Meter number</div>
              <div class="col-1">Cylinder number</div>
              <div class="col-2">Name</div>
              <div class="col-2">Location</div>
              <div class="col-2">Credit remaining(kg)</div>
              <div class="col-2">Valve Status</div>
              <div class="col-1"></div>
            </div>

            <div class="row">
              <div class="col-1">1</div>
              <div class="col-1">MT-2349</div>
              <div class="col-1">C-298</div>
              <div class="col-2">David Alenoghena</div>
              <div class="col-2">2 Chevron Drive, Victoria Island</div>
              <div class="col-2">5kg</div>
              <div class="col-2 text-success">Open</div>
              <div class="col-1">
                <button
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                  @click="toggleModal()"
                >
                  View Details
                </button>
              </div>
            </div>

            <div class="row">
              <div class="col-1">2</div>
              <div class="col-1">MT-2356</div>
              <div class="col-1">C-258</div>
              <div class="col-2">Soliu Alley</div>
              <div class="col-2">1 Akorede Drive, akoka Ibadan</div>
              <div class="col-2">2kg</div>
              <div class="col-2 text-success">Open</div>
              <div class="col-1">
                <button
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  View Details
                </button>
              </div>
            </div>
            <div class="row">
              <div class="col-1">3</div>
              <div class="col-1">MT-2240</div>
              <div class="col-1">C-28</div>
              <div class="col-2">Ore Owolabi</div>
              <div class="col-2">2 Chevron Drive, Victoria Island</div>
              <div class="col-2">6kg</div>
              <div class="col-2"><span class="text-success" v-if="isActive">Open</span> <span class="text-danger" v-else>Closed</span></div>
              <div class="col-1">
                <button
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                  @click="toggleModal()"
                >
                  View Details
                </button>
              </div>
            </div>
            <div class="row">
              <div class="col-1">4</div>
              <div class="col-1">MT-2349</div>
              <div class="col-1">C-298</div>
              <div class="col-2">Emeka Chuckwu</div>
              <div class="col-2">2 sambna street, cheif building Abia state</div>
              <div class="col-2">3kg</div>
              <div class="col-2 text-success">Open</div>
              <div class="col-1">
                <button
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  View Details
                </button>
              </div>
            </div>
            <div class="row">
              <div class="col-1">5</div>
              <div class="col-1">MT-1249</div>
              <div class="col-1">C-298</div>
              <div class="col-2">Ayo folorunsh0</div>
              <div class="col-2">5 gidan kwano, Minna Niger-state</div>
              <div class="col-2">2kg</div>
              <div class="col-2 text-success">Open</div>
              <div class="col-1">
                <button
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  View Details
                </button>
              </div>
            </div>
            <div class="row">
              <div class="col-1">6</div>
              <div class="col-1">MT-2349</div>
              <div class="col-1">C-298</div>
              <div class="col-2">Alabi kareem</div>
              <div class="col-2">2 northwall Drive, sango Ibadan</div>
              <div class="col-2">4kg</div>
              <div class="col-2 text-success">Open</div>
              <div class="col-1">
                <button
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                >
                  View Details
                </button>
              </div>
            </div>

            <div class="row">
              <div class="col-1">7</div>
              <div class="col-1">MT-4134</div>
              <div class="col-1">C-858</div>
              <div class="col-2">taiwo Owolabi</div>
              <div class="col-2">2 Tunga Drive, Town-street Ilorin</div>
              <div class="col-2">2kg</div>
              <div class="col-2 text-success">Open</div>
              <div class="col-1">
                <button
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                  @click="toggleModal"
                >
                  View Details
                </button>
              </div>
            </div>
          </content>
        </div>

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
                  Ore Owolabi
                </h4>
                <div>
                  <div>Valve Status</div>
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <span>Open</span>
                    <div class="ms-2 toggle-button" @click="switchState()">
                      <div class="switch" @click="toggle"></div>
                    </div>
                    <span class="ms-2">Close</span>
                  </div>
                </div>
              </div>
              <div
                class="modal-body d-flex justify-content-between align-items-center"
              >
                <div>
                  <div class=" d-flex mb-5">
                    <span class=" col-1 mdi mdi-cube-outline  me-2" style="color : blue;"></span>
                    <div class="col-11">
                      Meter Number
                      <p>MT-2349</p>
                    </div>
                  </div>

                  <div class=" d-flex ">
                    <span class="col-1 mdi mdi-map-marker-outline  me-2" style="color : blue;"></span>
                    <div class="col-11">
                      Location
                      <p>2 Chevron Drive, Victoria Island, Lagos state</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="d-flex">
                    <span class="col-1"
                      ><img src="../API/ApiAseet/storage.png" alt="storage"
                    /></span>
                    <div class="col-11 ms-4">
                      Total Cylinder Size
                      <p>12.5kg</p>
                    </div>
                  </div>
                  <div class="d-flex">
                    <span class="col-1"><img src="../API/ApiAseet/card.png" alt="card"/></span
                    ><div class="col-11 ms-4">
                        Last Credit Purchased
                    <p>6kg</p>
                    </div>
                  </div>
                  <div class="d-flex">
                    <span class="col-1"><img src="../API/ApiAseet/card.png" alt="card"/></span
                    ><div class="col-11 ms-4">
                        Volume Left
                    <p>4.5kg</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                  @click="closeModal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- E Modal -->
      </div>
    </section>
    <!--E  main -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      isActive: false,
   
    };
  },

  methods: {
    toggle() {
      if (this.isActive) {
        //   if Open Change to Close
        axios
          .post(
            `http://english.energyy.ucskype.com/internal/commonInternal.jsp?requestParams={"action":"lorawanMeterApi","method":"setValveState","param":{"IMEI":"862818042416703","valveState":"0"}}`
          )
          .then((response) => {
            // JSON responses are automatically parsed.
            // this.isActive = !this.isActive;
            console.log("Valve Closed");
          })
          .catch((e) => {
            console.log(e);
          });
        console.log("Not active");
        this.isActive = !this.isActive;
      } else {
        axios
          .post(
            `http://english.energyy.ucskype.com/internal/commonInternal.jsp?requestParams={"action":"lorawanMeterApi","method":"setValveState","param":{"IMEI":"862818042416703","valveState":"1"}}`
          )
          .then((response) => {
            // JSON responses are automatically parsed.
            // this.isActive = !this.isActive;
            console.log("Valve open");
          })
          .catch((e) => {
            console.log(e);
          });
        console.log("Active");
         this.isActive = !this.isActive;
      }
    },
    switchState() {
      //   const stateChange = document.querySelector(".toggle-button");
      const stateChange = document.querySelector(".switch");
      stateChange.classList.toggle("active");
    },
    toggleModal() {
      $("#exampleModalCenter").modal("show");
    },
    closeModal() {
      $("#exampleModalCenter").modal("hide");
    },
  },
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "futura_ltregular";
  src: url("../API/ApiAseet/futuralt-webfont.woff2") format("woff2"),
    url("../API/ApiAseet/futuralt-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
// header
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  font-family: "futura_ltregular";
}
body {
  background: #e5e5e5 !important;
}
.toggle-button {
  width: 40px;
  height: 20px;
  background: #c7c8c9;
  border-radius: 50px;
  position: relative;
  cursor: pointer;
  transition: all 300ms;
  .switch {
    position: absolute;
    width: 20px;
    height: 20px;
    background: darkgrey;
    border-radius: 50%;
    margin-left: 25px;
    top: 0;
    bottom: 0;
    transition: all 300ms;
  }
  .switch.active {
    background: #306dd8;
    margin-left: 0;
    transition: all 300ms;
    transform: scale(1.08);
  }
}
.header-api {
  padding: 10px 20px;
  background: #fff;
  position: fixed;
  // z-index: 100;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  .profile-img {
    height: 40px;
    width: 40px;
    border-radius: 50px;
  }
}
.search-bar {
  flex: 1;
  background: #f4f2ff;
  padding: 5px;
  border-radius: 5px;
  width: 70%;
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

// SideBar

.sidebar-api {
  position: fixed !important;
  width: 20%;
  height: 100vh;
  background: #fff;
  padding: 35px 20px 0 20px;
  li {
    margin: 20px 0 !important;
    span {
      margin: 0 10px !important;
    }
  }
  .active {
    background: #dde7f9 !important;
    padding: 10px 5px;
    border-radius: 5px;
  }
  .log-out {
    margin-top: 15rem;
  }
}
.main-api {
  width: auto;
  margin-top: 3.3rem;
  margin-left: 20%;
  margin-right: 2%;

  padding: 35px;
  height: 100vh;
  background: #e5e5e5;
  z-index: 10;

  .console {
    background: #fff;
    margin-top: 20px;
    padding: 15px 10px !important;
    border-radius: 4px;
    .head-console {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    content {
      font-size: 13px;
      .row:nth-of-type(odd) {
        background: #d3d3d3;
      }
      .row {
        &:first-child {
          .col-2:last-child {
            color: black;
          }
        }
        margin: 8px 3px;
        align-items: center;
        div {
          padding: 10px;
        }
        .col-2:last-child {
          color: blue;
        }
      }
    }
    .col-2,
    .col-3 {
      text-align: center;
      border-right: none !important;
    }
  }
}
span img {
  background: #dde7f9;
  padding: 5px;
  border-radius: 5px;
}
span.mdi {
  background: #dde7f9;
  padding: 3px;
  border-radius: 5px;
  width: min-content;
  height: min-content;
}
.row button{
    border: none;
    background: none;
    outline: none;
    text-decoration-line: underline;
}
</style>
