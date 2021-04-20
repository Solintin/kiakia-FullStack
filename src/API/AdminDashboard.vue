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
        <li class="active">
          <span class="mdi mdi-view-dashboard" style="color: blue"></span>
          Dashboard
        </li>
        <li><span class="mdi mdi-account"></span> User</li>
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
      <h2 class="mb-3">Overview</h2>
      <div class="overview">
        <div class="top-row">
          <div class="box">
            <div>
              <span><img src="../API/ApiAseet/user.png" alt=""/></span> No Of
              Users
            </div>
            <div>547</div>
          </div>
          <div class="box">
            <div>
              <span
                ><img src="../API/ApiAseet/storage.png" alt="cylinder"/></span
              >Active Cylinders
            </div>
            <div>235</div>
          </div>
          <div class="box">
            <div>
              <span
                ><img src="../API/ApiAseet/storage.png" alt="cylinder"/></span
              >Inactive Cylinders
            </div>
            <div>312</div>
          </div>
        </div>
        <!-- console  -->
        <div class="console">
          <div class="head-console">
            <div>Data Console</div>
            <div>See All <i class="fas fa-external-link-alt"></i></div>
          </div>
          <content>
            <div class="row">
              <div class="col-1">#</div>
              <div class="col-2">Meter number</div>
              <div class="col-2">Cylinder number</div>
              <div class="col-2">Name</div>
              <div class="col-3">Credit remaining(kg)</div>
              <div class="col-2">Valve Status</div>
            </div>
            <div class="row">
              <div class="col-1">1</div>
              <div class="col-2">MT-2349</div>
              <div class="col-2">C-298</div>
              <div class="col-2">Ore Owolabi</div>
              <div class="col-3">2kg</div>
              <div class="col-2">Open</div>
            </div>
            <div class="row">
              <div class="col-1">2</div>
              <div class="col-2">MT-2349</div>
              <div class="col-2">C-298</div>
              <div class="col-2">Ore Owolabi</div>
              <div class="col-3">2kg</div>
              <div class="col-2">Open</div>
            </div>
            <div class="row">
              <div class="col-1">3</div>
              <div class="col-2">MT-2349</div>
              <div class="col-2">C-298</div>
              <div class="col-2">Ore Owolabi</div>
              <div class="col-3">2kg</div>
              <div class="col-2">Open</div>
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
              C-456 topped up their credit balance
              <p>
                <a href="#"
                  >View details <i class="fas fa-arrow-right"></i
                ></a></p
            ></span>
          </li>
          <li>
            <span><img src="../API/ApiAseet/Cancel.png" alt="balance"/></span>
            <span>
              C-456 topped up their credit balance
              <p>
                <a href="#"
                  >View details <i class="fas fa-arrow-right"></i
                ></a></p
            ></span>
          </li>
          <li>
            <span><img src="../API/ApiAseet/network.png" alt="balance"/></span>
            <span>
              C-456 topped up their credit balance
              <p>
                <a href="#"
                  >View details <i class="fas fa-arrow-right"></i
                ></a></p
            ></span>
          </li>
          <li>
            <span><img src="../API/ApiAseet/card.png" alt="balance"/></span>
            <span>
              C-456 topped up their credit balance
              <p>
                <a href="#"
                  >View details <i class="fas fa-arrow-right"></i
                ></a></p
            ></span>
          </li>
        </ul>
      </div>
    </div>
    f

    <!-- E right side-bar -->
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@font-face {
    font-family: 'futura_ltregular';
    src: url('../API/ApiAseet/futuralt-webfont.woff2') format('woff2'),
         url('../API/ApiAseet/futuralt-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;

}
// header
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  font-family: 'futura_ltregular';
}
body {
  background: #e5e5e5 !important;
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
  margin-right: 20%;

  padding: 35px;
  height: 100vh;
  background: #e5e5e5;
  z-index: 10;

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
    margin-top: 7rem;
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
</style>
