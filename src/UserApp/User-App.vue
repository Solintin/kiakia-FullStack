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
            <input
              class="ps-5"
              @change="getSearchVar"
              v-model="search"
              type="text"
              placeholder="Search for order"
            />
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
          <div v-for="(order, key) in getSearchVar()" :key="key">
            <div class="p-2 bg-white mb-1 py-2">
              <div class="row d-flex justify-content-center align-items-center">
                <div class="col-4 d-flex">
                  <span class="me-2">
                    <i class="fas fa-user-circle text-primary fa-2x"></i
                  ></span>
                  <span
                    class="contact"
                    data-toggle="modal"
                    data-target="#exampleModalCenter"
                    @click="toggleModal(order.id)"
                  >
                    <span> </span>
                    <p>
                      {{ order.order.fullName || "No Data" }}
                    </p>
                    <p>{{ order.order.phoneNumber }}</p>
                  </span>
                </div>
                <div class="col-2">{{ order.time || "No Data" }}</div>
                <div class="col-3">
                  <i class="fas fa-map-marker-alt text-primary"></i>
                  {{ order.order.home_address || "No Data" }}
                </div>
                <div class="col-1">{{ order.order.size || "No Data" }}</div>
                <div class="col-2 ps-2">
                  <span class="processing">{{ order.order.orderStatus }}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- E Processing -->

        <!--Transit -->

        <section :class="[{ activeTab: onTransit }, displayNone]">
          <div v-for="(order, key) in getSearchVar()" :key="key">
            <div class="p-2 bg-white mb-1 py-2">
              <div class="row d-flex justify-content-center align-items-center">
                <div class="col-4 d-flex">
                  <span class="me-2">
                    <i class="fas fa-user-circle text-primary fa-2x"></i
                  ></span>
                  <span class="contact">
                    <p>
                      {{ order.order.fullName || "No Data" }}
                    </p>
                    <p>{{ order.order.phoneNumber }}</p>
                  </span>
                </div>
                <div class="col-2">{{ order.time || "No Data" }}</div>
                <div class="col-3">
                  <i class="fas fa-map-marker-alt text-primary"></i>
                  {{ order.order.delivery_address || "No Data" }}
                </div>
                <div class="col-1">{{ order.order.size || "No Data" }}</div>
                <div class="col-2 ps-2">
                  <span class="transit">{{ order.order.orderStatus }}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- E Transit -->

        <!--  Delivered -->

        <section :class="[{ activeTab: onDelivered }, displayNone]">
          <div v-for="(order, key) in getSearchVar()" :key="key">
            <div class="p-2 bg-white mb-1 py-2">
              <div class="row d-flex justify-content-center align-items-center">
                <div class="col-4 d-flex">
                  <span class="me-2">
                    <i class="fas fa-user-circle text-primary fa-2x"></i
                  ></span>
                  <span class="contact">
                    <p>
                      {{ order.order.fullName || "No Data" }}
                    </p>
                    <p>{{ order.order.phoneNumber }}</p>
                  </span>
                </div>
                <div class="col-2">{{ order.time || "No Data" }}</div>
                <div class="col-3">
                  <i class="fas fa-map-marker-alt text-primary"></i>
                  {{ order.order.home_address || "No Data" }}
                </div>
                <div class="col-1">{{ order.order.size || "No Data" }}</div>
                <div class="col-2 ps-2">
                  <span class="delivered">{{ order.order.orderStatus }}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- E delivered -->

        <!-- End Table  -->
      </div>
    </section>
    <!-- End Main -->

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
          <div
            class="modal-header d-flex justify-content-between align-items-center"
            id="exampleModalLongTitle"
          >
            <div class="div">
              <h4 class="modal-title">
                {{ this.fullName }}
              </h4>
              <h6>Order ID: FR-298</h6>
              <h6>User ID: C-298</h6>
            </div>
            <div>
              <h5>Order Status</h5>

              <select v-model="orderStatus" @change="handleChanges(productId)">
                <option> {{ this.orderStatus }} </option>
                <option
                  v-for="(status, idx) in Status"
                  :key="idx"
                  :value="status"
                >
                  {{ status }}
                </option>
              </select>
            </div>
          </div>

          <div
            class="modal-body d-flex justify-content-between align-items-center"
          >
            <div>
              <div class=" d-flex my-3">
                <span class="col-1"
                  ><i class="fas fa-map-marker-alt text-primary"></i>
                </span>

                <div class="col-11 px-3">
                  Location
                  <p>{{ this.address }}</p>
                </div>
              </div>

              <div class=" d-flex my-3">
                <span class="col-1" style="color : blue;"
                  ><img src="../API/ApiAseet/card.png" alt="storage"
                /></span>
                <div class="col-11 px-3">
                  Date and time
                  <p>{{ this.time }}</p>
                </div>
              </div>
            </div>
            <div>
              <div class="d-flex my-3">
                <span class="col-1"
                  ><i class="fas fa-map-marker-alt text-primary"></i>
                </span>
                <div class="col-11 ms-1">
                  Assigned Rider
                  <div class=" rider-wrapper">
                    <input
                      v-model="rider"
                      type="text"
                      placeholder="Input Rider..."
                      @change="handleChanges(productId)"
                    />
                    <span class="ms-2 pencil-icon">
                      <i class="far fa-edit fa-2x"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="d-flex my-3">
                <span class="col-1"
                  ><img src="../API/ApiAseet/storage.png" alt="storage"
                /></span>
                <div class="col-11 ">
                  Total Cylinder Size
                  <p>{{ this.size }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click="closeModal(updatedOrder)"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- E modal -->
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
      search: "",
      rider: "",
      address: "",
      fullName: "null",
      size: "",
      time: "",
      orderStatus: "",
      productId: "",
      openModal: false,
      Status: ["Processing", "Transit", "Delivered"],
      updatedOrder: {
        rider: "",
        activeItem: null,
      },
    };
  },
  computed: {
    ...mapState(["posts", "orders"]),
  },
  created() {
    this.getData();
  },

  methods: {
    async getOrdersDetail(orderId) {
      try {
        await this.orders.filter((order) => {
          if (order.id === orderId) {
            this.fullName = order.order.fullName;
            this.address = order.order.home_address;
            this.size = order.order.size;
            this.time = order.time;
            this.orderStatus = order.order.orderStatus;
            this.productId = order.id;
          }
          console.log(this.productId);
        });
      } catch (error) {
        console.log(error);
      }
    },

   async handleChanges(orderId) {
       await   this.orders.filter((order) => {
        if (order.id === orderId) {
          this.updatedOrder = order;
          this.updatedOrder.activeItem = orderId;   
          this.updatedOrder.rider = this.rider;
          order.order.orderStatus = this.orderStatus;
          }
      }),
      console.log(this.orderStatus);
    },

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
    getData() {
      this.$store.dispatch("GET_ORDERS_INFO");
    },
    getSearchVar() {
      if (this.onProcess) {
        const processingOrders = this.orders.filter(
          (data) => data.order.orderStatus === "Processing"
        );
        const filteredOrder = processingOrders.filter(
          (data) =>
            data.order.fullName
              .toLowerCase()
              .match(this.search.toLowerCase()) ||
            data.order.home_address
              .toLowerCase()
              .match(this.search.toLowerCase()) ||
            data.time.toLowerCase().match(this.search.toLowerCase()) ||
            data.order.size.toLowerCase().match(this.search.toLowerCase())
        );

        return filteredOrder;
      } else if (this.onTransit) {
        const transitOrders = this.orders.filter(
          (data) => data.order.orderStatus === "Transit"
        );

        const filteredOrder = transitOrders.filter(
          (data) =>
            data.order.fullName
              .toLowerCase()
              .match(this.search.toLowerCase()) ||
            data.order.home_address
              .toLowerCase()
              .match(this.search.toLowerCase()) ||
            data.time.toLowerCase().match(this.search.toLowerCase()) ||
            data.order.size.toLowerCase().match(this.search.toLowerCase())
        );
        return filteredOrder;
      } else {
        const deliveredOrder = this.orders.filter(
          (data) => data.order.orderStatus === "Delivered"
        );

        const filteredOrder = deliveredOrder.filter(
          (data) =>
            data.order.fullName
              .toLowerCase()
              .match(this.search.toLowerCase()) ||
            data.order.home_address
              .toLowerCase()
              .match(this.search.toLowerCase()) ||
            data.time.toLowerCase().match(this.search.toLowerCase()) ||
            data.order.size.toLowerCase().match(this.search.toLowerCase())
        );
        return filteredOrder;
      }
    },

    toggleModal(orderId) {
      this.openModal = true;
      $("#exampleModalCenter").modal("show");
      console.log(this.openModal);
      this.getOrdersDetail(orderId);
    },

    async closeModal(updatedOrder) {
      console.log(this.updatedOrder);
      await this.$store.dispatch("EDIT_ORDER", updatedOrder);
      $("#exampleModalCenter").modal("hide");
    },
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
}
.rider-wrapper {
  display: inline-flex;
  input {
    background-color: #eff0f6;
    border-radius: 5px;
    border-bottom: none !important;
  }
}
input {
  background: transparent;
  border-bottom: none !important;
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
  cursor: pointer;
  p:nth-of-type(2) {
    border-bottom: 1px solid #333;
  }
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
