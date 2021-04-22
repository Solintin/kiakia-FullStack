<template>
  <div class="container-fluid">
    <!-- header -->
    <section class="header-api">
      <div class="row">
        <div class="col-9">
          <img src="../API/ApiAseet/Layer 6.png" alt="" />
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

    <!-- main -->
    <section class="main-api">
      <div class="d-flex justify-content-between">
        <div class="d-inline mb-3">
          <span class="me-3 fs-3">Dashboard</span>
          <button
            class="btn rounded-pill btn-primary"
            data-toggle="modal"
            data-target="#topup"
            @click="openModal"
          >
            TopUp Credit
          </button>
        </div>
        <div>
          <div  class="d-flex justify-content-between align-items-center">
            <span>Valve Status</span>
            <span><button id='start' class="ms-4 btn rounded-pill btn-success" style="font-size: 12px;">Switch ON</button></span>
            </div>
            <!-- Switch Button-toggle -->
          <div class="d-flex justify-content-between align-items-center">
           
           <div class="button-wrapper">
              <button class="open" id="resume">Open</button>
            <button class="close" id="pause">Close</button>
           
           </div>
           
            <div>
             

            </div>
          </div>
        </div>
      </div>

      <!-- Top Up Modal -->

      <div
        class="modal fade"
        id="topup"
        tabindex="-1"
        role="dialog"
        aria-labelledby="topupTitle"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="topupTitle">Top Up Credit</h5>
            </div>
            <div class="modal-body">
              <p class="mb-3">
                You currently have <span class="fw-bold">0kg</span> of gas left
                to unlock in your cylinder.
              </p>
              <p>How much gas do you want to unlock?</p>
              <div class="search-wrapper">
                <input type="text" /> <span>Kg</span><span class="mx-3">|</span>
                <span class="text-primary">Max</span>
              </div>
            </div>
            <div class="modal-footer text-start">
              <button
                type="button"
                class="btn rounded-pill btn-primary"
                @click="closeModal"
              >
                Unlock Gas
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- E Top Up Modal -->

      <div class="overview">
        <div class="top-row">
          <div class="box">
            <div>
              <span><img src="../API/ApiAseet/user.png" alt=""/></span>Last
              Credit Purchased
            </div>
            <div>3kg</div>
          </div>
          <div class="box">
            <div>
              <span
                ><img src="../API/ApiAseet/storage.png" alt="cylinder"/></span
              >Total cylinder volume
            </div>
            <div>12.5kg</div>
          </div>
          <div class="box">
            <div>
              <span
                ><img src="../API/ApiAseet/storage.png" alt="cylinder"/></span
              >Volume Remaining
            </div>
            <div><span id="timer">3</span> kg</div>
          </div>
        </div>
        <!-- console  -->
        <div class="console">
          <div class="head-console">
            <div>TopUp History</div>
            <div>See All <i class="fas fa-external-link-alt"></i></div>
          </div>
          <content>
            <div class="row">
              <div class="col-1">Date Issued</div>
              <div class="col-2">Meter Number</div>
              <div class="col-2">Cylinder Number</div>
              <div class="col-2">Credit Purchased</div>
              <div class="col-3">Volume Remaining(kg)</div>
              <div class="col-2">Trasaction Details</div>
            </div>
            <div class="row">
              <div class="col-1">17/04/21</div>
              <div class="col-2">MT-2349</div>
              <div class="col-2">C-298</div>
              <div class="col-2">3kg</div>
              <div class="col-3" id="timer">3 <span>kg</span></div>
              <div class="col-2">View Details</div>
            </div>
            <div class="row">
              <div class="col-1">27/03/21</div>
              <div class="col-2">MT-2349</div>
              <div class="col-2">C-298</div>
              <div class="col-2">6kg</div>
              <div class="col-3">0</div>
              <div class="col-2">View Details</div>
            </div>
            <div class="row">
              <div class="col-1">2/03/21</div>
              <div class="col-2">MT-2349</div>
              <div class="col-2">C-298</div>
              <div class="col-2">3kg</div>
              <div class="col-3">0</div>
              <div class="col-2">View Details</div>
            </div>
          </content>
        </div>
      </div>
    </section>
    <!--E  main -->

    <!-- right side-bar -->

    <div class="right-sidebar">
      <div class="side-box">
        <div class="activity">
          <div>Activity</div>
          <div>See All <i class="fas fa-external-link-alt"></i></div>
        </div>

        <ul>
          <li>
            <span><img src="../API/ApiAseet/card.png" alt="balance"/></span>
            <span>
              C-298 topped up their credit balance
              <p>
                <a href="#"
                  >View details <i class="fas fa-arrow-right"></i
                ></a></p
            ></span>
          </li>
          <li>
            <span><img src="../API/ApiAseet/Cancel.png" alt="balance"/></span>
            <span>
              C-298 topped up their credit balance
              <p>
                <a href="#"
                  >View details <i class="fas fa-arrow-right"></i
                ></a></p
            ></span>
          </li>
          <li>
            <span><img src="../API/ApiAseet/network.png" alt="balance"/></span>
            <span>
              C-298 topped up their credit balance
              <p>
                <a href="#"
                  >View details <i class="fas fa-arrow-right"></i
                ></a></p
            ></span>
          </li>
          <li>
            <span><img src="../API/ApiAseet/card.png" alt="balance"/></span>
            <span>
              C-298 topped up their credit balance
              <p>
                <a href="#"
                  >View details <i class="fas fa-arrow-right"></i
                ></a></p
            ></span>
          </li>
        </ul>
      </div>
     
    </div>

    <!-- E right side-bar -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      isActive: false,
      isPause : true,
      credit: 3,
    };
  },

  mounted() {
    var timer = document.getElementById("timer");
var start = document.getElementById("start");
var pause = document.getElementById("pause");
var resume = document.getElementById("resume");
var id;
var value = "00:00";

function startTimer(m, s) {
    timer.textContent = m + "." + s;
    if (s == 0) {
        if (m == 0) {
            return;
        } else if (m != 0) {
            m = m - .0003;
            s = 100;
        }
    }
    
    s = s - .0003;
    id = setTimeout(function () {
        startTimer(m, s)
    }, 1000);
}

function pauseTimer() {
    value = timer.textContent;
    clearTimeout(id);
    console.log("paused");
}

function resumeTimer() {
  console.log("resumed");
    var t = value.split(".");
    
    startTimer(parseInt(t[0], 10), parseInt(t[1], 10));
}

start.addEventListener("click", function () {
    startTimer(3, 0);
}, false);

pause.addEventListener("click", pauseTimer, false);

resume.addEventListener("click", resumeTimer, false);
  },

  methods: {
  














  
    toggle() {
      this.isActive = !this.isActive
      let downloadTimer;
      if (this.isActive) {
        let timeleft = 3;
        downloadTimer = setInterval(function() {
          if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("volume").innerHTML = "Finished";
          } else {
            document.getElementById("volume").innerHTML = timeleft;
          }
          
      if (this.pause) {
        clearInterval(downloadTimer);
      }
          timeleft -= 0.000001;
        }, 1000);
      }

 

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
        this.isActive = !this.isActive;
        console.log("Not active");
      } else {
        axios
          .post(
            `http://english.energyy.ucskype.com/internal/commonInternal.jsp?requestParams={"action":"lorawanMeterApi","method":"setValveState","param":{"IMEI":"862818042416703","valveState":"1"}}`
          )
          .then((response) => {
            // JSON responses are automatically parsed.
            this.isActive = !this.isActive;
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
    openModal() {
      $("#topup").modal("show");
    },
    closeModal() {
      $("#topup").modal("hide");
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
.container-fluid {
  background: #e5e5e5 !important;
  height: 100vh;
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

.main-api {
  width: auto;
  margin-top: 6rem;
  margin-left: 1%;
  margin-right: 30%;
  height: 100vh;

  padding: 35px;
  height: auto;
  background: #e5e5e5;
  //   z-index: 10;

  .top-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
    .box {
      border-radius: 5px;
      background: #fff;
      padding: 10px 8px;
      div:nth-child(2) {
        margin-top: 20px;
      }
    }
  }
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
        background: #e5e5e5;
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
.right-sidebar {
  position: fixed !important;
  top: 0;
  bottom: 0;
  right: 0;
  width: 20%;
  margin-top: 7rem;
  margin-right: 10%;
  padding: 0 5px;
  font-size: 13px;
  height: 100vh;
  background: #e5e5e5;
  a {
    text-decoration-line: underline !important;
  }
  ul li {
    span {
      margin: 5px 3px;
    }
    display: flex;
    justify-content: space-between;
  }
  .side-box {
    background: #fff;
    padding: 10px;
    border-radius: 10px;
    .activity {
      display: flex;
      justify-content: space-between;
      margin: 20px;
    }
  }
}
span img {
  background: #dde7f9;
  padding: 5px;
  border-radius: 5px;
}
.modal .modal-footer {
  text-align: left !important;
}
.search-wrapper {
  background: #e5e5e5;
  padding: 5px;

  input {
    border-bottom: none !important;
    width: 70%;
    background: transparent;
    outline: none;
    border: none;
  }
}
.button-wrapper{
  padding-right: 12px;
  button{
    font-size: 12px;
    background: transparent;
    border: none;
    outline: none;
  }
  .open{
        border-radius:  3px  0 0 3px ;
background: rgb(71, 102, 22);
padding: 4px 10px;
margin: 4px 0;
color: white;
  }
  .close{
        border-radius:  0 3px 3px 0;
background: crimson;
padding: 4px 10px;
color: wheat;
margin: 4px 0;

  }
}
</style>
