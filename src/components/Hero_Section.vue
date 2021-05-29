<template>
  <section class="container-fluid" style="background: #f7f7fc;">
    <div class="container">
      <div class="">
        <div class="row hero">
          <div class="col-md-6 hero-text my-auto">
            {{ text }}
          </div>
          <div class="col-md-6 gas360-circle my-auto">
            <img
              src="../assets/images/GasPreneur/Linked-Path-Group.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props:["text"]
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Manrope&display=swap");

.hero {
  width: 100%;
  padding-top: 140px !important;
  padding-bottom: 50px !important;
  background: #f7f7fc;

}
.hero-text {
  font-family: "Manrope", sans-serif;
  font-size: 50px;
  line-height: 76.8px;
  font-weight: 600;
}
.gas360-circle {
  text-align: end;
}

@media screen and (max-width: 765px) {
  .hero-text {
    font-size: 36px;
    line-height: 43.2px;
    font-weight: 600;
  }
  .gas360-circle {
    text-align: center;
  }
}
</style>
