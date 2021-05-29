<template>
  <div>
      <!-- footer -->
    <div class="container">
        <div class="footer ">
            <div class="footer-card pt-3">
                         <router-link to="/">
           <img
                src="../assets/images/Homepage/Layer-6.svg"
                alt="KiaKia-Glogo"
              /></router-link>
            </div>
            <div class="footer-card">
                <div class="mb-1"><b>Company</b></div>
                <ul>
                    <li>
                         <router-link to="/about">About Us</router-link>
                    </li>
                     <li>
                        <router-link to="/gasprenuer">Become a Gaspreneur</router-link>
                    </li>
                    <li>   
                        <router-link to="/blog">Blog</router-link>
                    </li>
                </ul>
            </div>
            <div class="footer-card">
                <div class="mb-1"><b>Support</b></div>
                <ul>
                     <li>
                         <router-link to="/support">FAQ</router-link>
                    </li>
                     <li>
                        <router-link to="/support/tos">Terms of service</router-link>
                    </li>
                    <li>   
                        <router-link to="/support/policy">Privacy</router-link>
                    </li>
     
                </ul>
            </div>
            <div class="footer-card">
                <div class="mb-1"><b>Contact</b></div>
                <ul>
                    <li><a href="#">support@gas360.io</a></li>
                    <li><a href="#">+2348140005500</a></li>
                </ul>
            </div>
            <div class="footer-card">
                <div class="mb-1"><b>Follow us:</b></div>
                <ul>
                    <li><a href="#"><i class="fab fa-twitter"></i> @gas360tech</a></li>
                    <li><a href="#"><i class="fab fa-instagram"></i> @gas360tech </a></li>

                </ul>
            </div>
        </div>
    </div>



    <!-- Mobile Footer -->
    <div class="container footer-mobile">
        <div class="footer-card my-5">
            <img src="../assets/images/Homepage/Layer-6.svg" alt="logo">
        </div>
        <section class="questions">
            <!-- questions -->

            <!-- single question -->
            <article class="question">
                <!-- question title -->
                <div class="question-title">
                    <p>Company</p>
                    <div class="question-btn">
                        <span class="plus-icon">
                            <span class="mdi mdi-chevron-right mdi-24px"></span>
                        </span>
                        <span class="minus-icon">

                            <span class="mdi mdi-chevron-up mdi-24px"></span>
                        </span>
                    </div>
                </div>
                <!-- answer text -->
                <div class="question-text">
                    <p>
                    <ul>
                        <li><a href="#">About US</a></li>
                        <li><a href="#">Become a Gaspreneur</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>

                    </p>
                </div>
            </article>
            <!-- E single question -->

            <!-- single question -->
            <article class="question">
                <!-- question title -->
                <div class="question-title">
                    <p>Support</p>
                    <div class="question-btn">
                        <span class="plus-icon">
                            <span class="mdi mdi-chevron-right mdi-24px"></span>
                        </span>
                        <span class="minus-icon">

                            <span class="mdi mdi-chevron-up mdi-24px"></span>
                        </span>
                    </div>
                </div>
                <!-- answer text -->
                <div class="question-text">
                    <p>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Terms of service</a></li>
                        <li><a href="#">Privacy</a></li>
                    </ul>
                    </p>
                </div>
            </article>
            <!-- E single question -->

            <!-- single question -->
            <article class="question">
                <!-- question title -->
                <div class="question-title">
                    <p>Contact
                    </p>
                    <div class="question-btn">
                        <span class="plus-icon">
                            <span class="mdi mdi-chevron-right mdi-24px"></span>
                        </span>
                        <span class="minus-icon">

                            <span class="mdi mdi-chevron-up mdi-24px"></span>
                        </span>
                    </div>
                </div>
                <!-- answer text -->
                <div class="question-text">
                    <p>
                    <ul>
                        <li><a href="#">support@gas360.io</a></li>
                        <li><a href="#">+2348140005500</a></li>
                    </ul>
                    </p>
                </div>
            </article>
            <!-- E single question -->
            <!-- single question -->
            <article class="question">
                <!-- question title -->
                <div class="question-title">
                    <p>Follow us:
                    </p>
                    <div class="question-btn">
                        <span class="plus-icon">
                            <span class="mdi mdi-chevron-right mdi-24px"></span>
                        </span>
                        <span class="minus-icon">

                            <span class="mdi mdi-chevron-up mdi-24px"></span>
                        </span>
                    </div>
                </div>
                <!-- answer text -->
                <div class="question-text">
                    <p>
                    <ul>
                        <li><a href="#"><i class="fab fa-twitter"></i> @gas360tech</a></li>
                        <li><a href="#"><i class="fab fa-instagram"></i> @gas360tech </a></li>

                    </ul>
                    </p>
                </div>
            </article>
            <!-- E single question -->

        </section>
    </div>
    <!-- E Mobile Footer -->




    <!-- E footer -->
    <!-- copyright -->
   <div class='container'>
 <div class="mt-5 p-3" style="color: #969BAB;  border-top: 0.5px solid #888888;">
        &copy; Copyright, Gas360 <span id="year"></span>. All right reserved
    </div>
   </div>
    <!-- copyright -->

  </div>
</template>

<script>
export default {
    
    mounted() {
               const questions = document.querySelectorAll(".question");

      questions.forEach(function(question) {
        const btn = question.querySelector(".question-title");
        // console.log(btn);

        btn.addEventListener("click", function() {
          // console.log(question);

          questions.forEach(function(item) {
            if (item !== question) {
              item.classList.remove("show-text");
            }
          });

          question.classList.toggle("show-text");
        });
      });


    const year = document.getElementById("year");
    const date = new Date();
    year.innerHTML = date.getFullYear();
  
    },

    
}
</script>

<style scoped lang='scss'>

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
.footer-mobile {
  display: none;
 
}


/* =========================== MOBILE VIEW========================== */
@media screen and (max-width: 765px) {

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




}



</style>