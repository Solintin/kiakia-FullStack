<template>
  <div class="bg">
    <!-- Header  -->
    <section class="container-fluid bg-white">
      <div class="container header py-4">
        <div class="logo">
          <img src="../assets/Layer 6.svg" alt="" />
        </div>

        <div class="menu">
          <div>
            <a href="">
              <i class="fas fa-envelope"></i>
              <span class="badge rounded-pill badge-notification">3</span>
            </a>
          </div>
          <div>
            <span>
              <i class="far fa-bell"></i>
              <span class="badge rounded-pill badge-notification">3</span>
            </span>
          </div>
          <div>
            <span> <i class="fas fa-user-circle fa-2x"></i> </span>
          </div>
          <div>
            <span>David Alenoghena</span>
          </div>
        </div>
      </div>
    </section>

    <!-- E Header  -->

    <!-- Main -->
    <section class="container-fluid">
      <div class="container mt-5" style="margin-top: 100px;">
        <div class="d-flex justify-content-between">
          <div class="my-auto dashboard">
            Dashboard
          </div>
          <div class="search-wrapper">
            <span class="search-icon">
              <i class="fas fa-search"></i>
            </span>
            <input class="ps-5" type="text" placeholder="Search for order" />
          </div>
        </div>
        <!-- Table  -->
        <div @click="tabSelector" class="tab-container">
          <ul>
            <li data-id="processing" class="active">
              Processing
            </li>
            <li data-id="transit">In Transit</li>
            <li data-id="delivered">Delivered</li>
          </ul>
        </div>
        <div class="table-header p-2 bg-white mt-2 ">
          <div class="row">
            <div class="col-4">Name</div>
            <div class="col-2">Order date</div>
            <div class="col-3">Location</div>
            <div class="col-1">Cylinder</div>
            <div class="col-2 ps-2">Order-status</div>
          </div>
        </div>

        <!-- Processing -->

        <section :class="[{ activeTab: onProcess }, displayNone]">
          <div class="p-2 bg-white mb-1 py-2">
            <div class="row d-flex justify-content-center align-items-center">
              <div class="col-4 d-flex">
                <span class="me-2">
                  <i class="fas fa-user-circle fa-2x"></i
                ></span>
                <span class="contact">
                  <p>Ore Owolabi</p>
                  <p>+234 818 587 9603</p>
                </span>
              </div>
              <div class="col-2">12-05-2021 1:55pm</div>
              <div class="col-3">
                <i class="fas fa-map-marker-alt text-primary"></i> 1-4 Kiakia
                gas Drive, Lekki...
              </div>
              <div class="col-1">5KG</div>
              <div class="col-2 ps-2">
                <span class="processing">Processing</span>
              </div>
            </div>
          </div>
          <div class="p-2 bg-white my-1 py-2">
            <div class="row d-flex justify-content-center align-items-center">
              <div class="col-4 d-flex">
                <span class="me-2">
                  <i class="fas fa-user-circle fa-2x"></i
                ></span>
                <span class="contact">
                  <p>Ore Owolabi</p>
                  <p>+234 818 587 9603</p>
                </span>
              </div>
              <div class="col-2">12-05-2021 1:55pm</div>
              <div class="col-3">
                <i class="fas fa-map-marker-alt text-primary"></i> 1-4 Kiakia
                gas Drive, Lekki...
              </div>
              <div class="col-1">5KG</div>
              <div class="col-2 ps-2">
                <span class="processing">Processing</span>
              </div>
            </div>
          </div>
        </section>
        <!-- E Processing -->

        <!--Transit -->

        <section :class="[{ activeTab: onTransit }, displayNone]">
          <div class="p-2 bg-white mb-1 py-2">
            <div class="row d-flex justify-content-center align-items-center">
              <div class="col-4 d-flex">
                <span class="me-2">
                  <i class="fas fa-user-circle fa-2x"></i
                ></span>
                <span class="contact">
                  <p>Ore Owolabi</p>
                  <p>+234 818 587 9603</p>
                </span>
              </div>
              <div class="col-2">12-05-2021 1:55pm</div>
              <div class="col-3">
                <i class="fas fa-map-marker-alt text-primary"></i> 1-4 Kiakia
                gas Drive, Lekki...
              </div>
              <div class="col-1">5KG</div>
              <div class="col-2 ps-2">
                <span class="transit">Transit</span>
              </div>
            </div>
          </div>
          <div class="p-2 bg-white my-1 py-2">
            <div class="row d-flex justify-content-center align-items-center">
              <div class="col-4 d-flex">
                <span class="me-2">
                  <i class="fas fa-user-circle fa-2x"></i
                ></span>
                <span class="contact">
                  <p>Ore Owolabi</p>
                  <p>+234 818 587 9603</p>
                </span>
              </div>
              <div class="col-2">12-05-2021 1:55pm</div>
              <div class="col-3">
                <i class="fas fa-map-marker-alt text-primary"></i> 1-4 Kiakia
                gas Drive, Lekki...
              </div>
              <div class="col-1">5KG</div>
              <div class="col-2 ps-2">
                <span class="transit">Transit</span>
              </div>
            </div>
          </div>
          <div class="p-2 bg-white mb-1 py-2">
            <div class="row d-flex justify-content-center align-items-center">
              <div class="col-4 d-flex">
                <span class="me-2">
                  <i class="fas fa-user-circle fa-2x"></i
                ></span>
                <span class="contact">
                  <p>Ore Owolabi</p>
                  <p>+234 818 587 9603</p>
                </span>
              </div>
              <div class="col-2">12-05-2021 1:55pm</div>
              <div class="col-3">
                <i class="fas fa-map-marker-alt text-primary"></i> 1-4 Kiakia
                gas Drive, Lekki...
              </div>
              <div class="col-1">5KG</div>
              <div class="col-2 ps-2">
                <span class="transit">Transit</span>
              </div>
            </div>
          </div>
          <div class="p-2 bg-white my-1 py-2">
            <div class="row d-flex justify-content-center align-items-center">
              <div class="col-4 d-flex">
                <span class="me-2">
                  <i class="fas fa-user-circle fa-2x"></i
                ></span>
                <span class="contact">
                  <p>Ore Owolabi</p>
                  <p>+234 818 587 9603</p>
                </span>
              </div>
              <div class="col-2">12-05-2021 1:55pm</div>
              <div class="col-3">
                <i class="fas fa-map-marker-alt text-primary"></i> 1-4 Kiakia
                gas Drive, Lekki...
              </div>
              <div class="col-1">5KG</div>
              <div class="col-2 ps-2">
                <span class="transit">Transit</span>
              </div>
            </div>
          </div>
        </section>
        <!-- E Transit -->

        <!--  Delivered -->

        <section :class="[{ activeTab: onDelivered }, displayNone]">
          <div class="p-2 bg-white mb-1 py-2">
            <div class="row d-flex justify-content-center align-items-center">
              <div class="col-4 d-flex">
                <span class="me-2">
                  <i class="fas fa-user-circle fa-2x"></i
                ></span>
                <span class="contact">
                  <p>Ore Owolabi</p>
                  <p>+234 818 587 9603</p>
                </span>
              </div>
              <div class="col-2">12-05-2021 1:55pm</div>
              <div class="col-3">
                <i class="fas fa-map-marker-alt text-primary"></i> 1-4 Kiakia
                gas Drive, Lekki...
              </div>
              <div class="col-1">5KG</div>
              <div class="col-2 ps-2">
                <span class="delivered">Delivered</span>
              </div>
            </div>
          </div>
        </section>
        <!-- E delivered -->

        <!-- End Table  -->
      </div>
    </section>
    <!-- End Main -->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "user-app",
  metaInfo() {
    return {
      title: "Admin Panel - User App management || KiaKia Gas ",
    };
  },
  data() {
    return {
      onProcess: true,
      onTransit: false,
      onDelivered: false,
      displayNone: "displayNone",
      activeTab: "activeTab",
    };
  },
  computed: {
    ...mapState(["posts", "users"]),
  }, 
  created(){
    this.getUsers();
  },

  methods: {
    tabSelector() {
      const tab = document.querySelector(".tab-container");
      const tabList = document.querySelectorAll(".tab-container li");

      tab.addEventListener("click", (e) => {
        const id = e.target.dataset.id;
        if (id === "processing") {
          tabList.forEach((li) => {
            li.classList.remove("active");
          });
          e.target.classList.add("active");
          this.onProcess = true;
          this.onTransit = false;
          this.onDelivered = false;
        } else if (id === "transit") {
          tabList.forEach((li) => {
            li.classList.remove("active");
          });
          e.target.classList.add("active");
          this.onProcess = false;
          this.onTransit = true;
          this.onDelivered = false;
        } else {
          tabList.forEach((li) => {
            li.classList.remove("active");
          });
          e.target.classList.add("active");
          this.onProcess = false;
          this.onTransit = false;
          this.onDelivered = true;
        }
      });
    },
    getUsers(){
      this.$store.dispatch("GET_USER_INFO");
    }
  },
};
</script>

<style lang="scss" scoped>
:root {
  --red-color: #fb6464;
  --purple-color: #6e6893;
  --lightblue-color: #1266f1;
  --accent-color: #011230;
  --sec-color: #faae08;
  --sidebar-item: #393939;
}

* {
  text-decoration: none;
  list-style: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.badge {
  position: absolute;
  font-size: xx-small;
  margin-left: -5px;
  margin-top: -5px;
  background-color: var(--red-color);
  color: white;
}
a {
  text-decoration: none;
  color: var(--sidebar-item) !important;
}

.bg {
  background: #e5e5e5;
  height: auto;
  padding-bottom: 100px;
}
.header {
  background: #fff;
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;

  .logo {
    flex: 1;
  }
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      margin: 0 12px;
    }
  }
}
.dashboard {
  color: #18366c;
  font-weight: bold;
  font-size: 22px;
}
.search-wrapper {
  position: relative;
  background-color: #eff0f6;
  border-radius: 5px;
  .search-icon {
    position: absolute;
    top: 10px;
    left: 10px;
  }

  input {
    background: transparent;
    border-bottom: none !important;
  }
}
.table-header {
  color: #18366c;
  font-size: 18px;
  font-weight: 400;
  border-bottom: 2px solid #eff0f6;
}
.col-2 {
  border: none !important;
}
.processing {
  background: #dee4ed;
  border-radius: 15px;
  padding: 4px 8px;
}
.transit {
  background: #fcedcf;
  border-radius: 15px;
  padding: 4px 8px;
}
.delivered {
  background: #ccfff1;
  border-radius: 15px;
  padding: 4px 8px;
}
.displayNone {
  display: none !important;
}
.activeTab {
  display: block !important;
}
.contact {
  font-size: 14px;
}

.tab-container {
  ul {
    margin: 0;

    li {
      display: inline;
      margin: 40px 20px 40px 0 !important;
      font-size: 18px;
      cursor: pointer;
      padding: 8px 0;
    }
    li.active {
      border-bottom: 2px solid #306dd8;
      transition: all 300ms linear;
      color: #18366c;
    }
  }
}

.icon {
  color: black;
}

// Main
</style>
