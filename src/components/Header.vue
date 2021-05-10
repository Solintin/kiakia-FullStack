<template>
  <div class="nav-header">
    <!-- Navbar -->
    <div class="kiakia-navbar py-4">
      <div class="logo">
        <router-link to="/">
          <img src="../assets/images/Homepage/Layer-6.svg" alt="KiaKia-Glogo"
        /></router-link>
      </div>
      <div class="tabs">
        <div class="menu-bar">
          <i class="fa fa-bars fa-2x"></i>
        </div>
        <div class="menu-list">
          <ul class="my-auto">
            <li data-id="about">
              <router-link to="/about">About </router-link>
            </li>
            <li data-id="gasprenuer">
              <router-link to="/gasprenuer">Become a Gaspreneur</router-link>
            </li>
            <li data-id="blog">
              <router-link to="/blog">Obsessions</router-link>
            </li>
            <li data-id="support">
              <router-link to="/support">Support</router-link>
            </li>
            <li>
              <a href="#" class="text-white btn btn-primary">Get Started</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="nav-bottom"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    const menuList = document.querySelector(".menu-list ");
    const menuBar = document.querySelector(".menu-bar i");
    menuBar.addEventListener("click", () => {
      menuList.classList.toggle("open");
      menuBar.classList.toggle("open");
    });

    const navHeader = document.querySelector(".kiakia-navbar");
    const navBottom = document.querySelector("#nav-bottom");
    const navHeight = navBottom.getBoundingClientRect();

    window.onscroll = () => {
    document.documentElement.scrollTop > navHeight.height ?
        navHeader.classList.add("transparent-bg") :
        navHeader.classList.remove("transparent-bg");
      
    };
  },
  created() {
    const setThis = this;
    setTimeout(function() {
      const choosenCategories = document.querySelectorAll(".menu-list li");

      choosenCategories.forEach(function(item) {
        if (`${setThis.$route.path.trim()}` === `/${item.dataset.id}`) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    }, 500);
  },
};
</script>
<style scoped lang="scss">
.transparent-bg{
  background: rgba( #f7f7fc, .7);
  transition: all .7s;
}
.kiakia-navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 0 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  height: auto;
  .logo {
    display: inherit;
    flex: 1;
  }
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
.menu-list li.active {
  transition: all 500ms;
  padding-bottom: 5px;
  border-bottom: 3px solid #3789ec;
}

.tabs a {
  color: #000;
}
@media screen and (max-width: 992px) {
  .tabs li {
    font-size: 15px;
  }
  .kiakia-navbar {
    .logo img {
      height: 23px;
      // width: 80px;
    }
  }
}

@media screen and (max-width: 765px) {
  /* ===================== Menu bar Navigation ======================= */

  .kiakia-navbar {
    padding: 0 10px;
    .logo img {
      height: 100%;
    }
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
}
</style>
