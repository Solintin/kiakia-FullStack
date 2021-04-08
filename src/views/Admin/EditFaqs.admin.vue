<template>
  <div>
       <!-- Header  -->
    <header>
        <div class="logo">
            <img src="../asset/Layer 6.svg" alt="">
        </div>
        <div class="menu">
            <div>
                <a href="">
                    <i class="fas fa-envelope fa-lg icon"></i>
                    <span class="badge rounded-pill badge-notification bg-danger">3</span>
                </a>
            </div>
            <div>
                <span> <i class="far fa-bell"></i>
                    <span class="badge rounded-pill badge-notification bg-danger">3</span>
                </span>
            </div>
            <div>
                <span> <i class="fas fa-user-circle fa-2x"></i> </span>
            </div>
            <div>
                <span>David Alenoghena</span>
            </div>


        </div>

    </header>
    <!-- E Header  -->

    <!-- SideBar  -->
    <div class="sidebar">
        <div class="dashboard">
            <p>Dashboard</p>
        </div>
        <div class="post">
            <p>Post(s)</p>
            <p>10</p>
        </div>
        <ul>
            <li>All posts</li>
            <li><a href="">Add New post</a></li>
            <li><a href="">Categories</a></li>
        </ul>
        <div class="active support">
            <p>Support</p>
        </div>
        <ul>
            <li class="fw-bold">FAQ </li>
            <li>Privacy Policy</li>
            <li>Cookie Declarartion</li>
            <li>Terms of Service</li>
        </ul>
        <div id="log-out">
            <span>
                <h6>Log Out</h6>
            </span>
        </div>
    </div>
    <!-- E SideBar  -->
    <form>

        <!-- Main  -->
        <div class="main">
            <div class="main-content">
                <h6 class="fs-4 text-center mb-5">Frequently Asked Questions</h6>

                <strong>Question</strong>
                <input type="text" id="title" >


                <strong>Answer</strong>
                <textarea  id="desc" name="desc" cols="30" rows="10">Tortor, tincidunt tortor ac malesuada lacus cursus in. Est amet lectus vulputate ac egestas vel velit praesent egestas. Viverra diam amet volutpat tristique sed blandit eget id. Nunc non neque scelerisque nisi mauris euismod sed tempus morbi.
                </textarea>


            </div>

        </div>
        <!-- E Main  -->

        <!-- Right Sidebar -->
        <div class="right-sidebar">
            <div class="buttons">
                <button class="btn btn-primary text-center">Update</button>
                <button class="btn btn-outline-danger text-center">Delete</button>
            </div>
            <div class="content">
                <div class="split-content">
                    <div> Visibility : <span>Public</span></div>
                    <div class="fw-bold">Edit</div>
                </div>
                <div class="split-content">
                    <div> Status : <span>Published</span>
                    </div>
                    <div class="fw-bold">Edit</div>
                </div>
                <div>Revision : <span>3</span></div>
                <div>Published : <span>Jan, 25, 2021</span></div>
            </div>
        </div>
        <!-- E Right Sidebar -->

    </form>
  </div>
</template>

<script>
export default {
 name: "Faqs Admin",
  metaInfo() {
    return {
      title: "Admin Panel - Edit FAQ|| KiaKia Gas ",
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
       CKEDITOR.replace('desc');
  },
}
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
a {
  text-decoration: none;
  color: var(--sidebar-item) !important;
}
header {
  background: #fff;
  padding: 0.6rem 1.5rem 0.6rem 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #c1c1c1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
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
.sidebar {
  width: 255px;
  margin-top: 3.3rem;
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  background: #f6f6f6;
  z-index: 1;
  height: 100vh;
  padding: 35px 0px 10px 0px;
  .activePost {
    font-weight: 700;
  }

  .dashboard {
    margin-bottom: 40px;
    margin-left: 15px;
    font-weight: 500;
  }
  ul {
    margin-top: 8px;
  }
}
.post {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 15px;
  font-weight: 500;
  cursor: pointer;
  p {
    margin: 0;
  }
}
.support {
  margin-left: 15px;
  font-weight: 500;
  cursor: pointer;
  p{
    margin: 0;
    padding: 0;
  }
}

#log-out {
  margin-top: 100px;
  margin-left: 15px;
}
.active {
  background: var(--lightblue-color);
  border-radius: 5px;
  margin: 0;
  padding: 8px 15px;
  color: #fff;
}
.icon {
  color: black;
}

// Main
.main {
  width: auto;
  margin-top: 3.3rem;
  margin-left: 255px;
  margin-right: 255px;
  z-index: 1;
  padding: 35px 10px 10px 40px;

  .main-content {
    padding-right: 50px;
    width: auto;

    input,
    textarea {
      background: #f4f2ff;
      border-radius: 5px;
      padding: 5px 10px;
      border: none;
      outline: none;
      width: 100%;
      margin: 10px 0;
    }
   
    .category {
      ul {
        margin-top: 10px;
        margin-left: 0;
        padding: 0;
        li {
          margin-right: 15px;
          display: inline-flex;
          background: #f4f2ff;
          border-radius: 5px;
          padding: 5px 10px;
        }
        li.active{
          color: #fff;
          background: var(--lightblue-color);
        }
      }
    }
  }
}

// Right SideBar

.right-sidebar {
  width: 255px;
  margin-top: 3.3rem;
  padding-left: 10px;
  padding-right: 30px;
  padding-top: 148px;
  height: calc(100vh - 3.3rem);
  position: fixed;
  top: 0;
  right: 0;
  background: #fff;
  .buttons{
    button{
      width: 100%;
      display: inline-block;
      margin-bottom: 15px;
    }
  }
  .content{
    .split-content{
      display: flex;
      justify-content: space-between;
      align-items: center;
      div:nth-child(2){
        cursor: pointer;
      }
    }
  }
}

</style>