<template>
  <div>
    <div class="registration-page container-fluid">
      <div class="d-flex">
        <div class="col-5">
          <img
            src="../assets/Group 6884.png"
            alt=""
            class="side-image img-fluid"
          />
        </div>
        <div class="col-7">
          <div class="container mx-5">
            <p class="text-center my-5">
              <img src="../assets/Layer 6.svg" alt="" />
            </p>
            <h4 class="text-center my-2 sign-up">
              Welcome Back
            </h4>
            <form @submit.prevent class="my-3">
              <label for="email">Email</label>
              <div class="email-field mb-4">
                <input
                  id="email"
                  type="email"
                  v-model.trim="email"
                  placeholder="Example@email.com"
                  required
                />
                <div class="input-icon">
                  <i class="fas fa-envelope"></i>
                </div>
              </div>
              <label for="password">Password</label>
              <div class="password-field mb-4">
                <input
                  required
                  type="password"
                  id="password"
                  v-model.trim="password"
                  placeholder="Password"
                />
                <div class="input-icon" @click="switchVisibility">
                  <span v-if="passwordVisible">
                    <i class="fas fa-eye"></i>
                  </span>
                  <span v-else>
                    <i class="fas fa-eye-slash"></i>
                  </span>
                </div>
              </div>
              <div class="mb-2 d-flex justify-content-between">
                <div>
                  <input type="checkbox" />
                </div>
                <div>
                  <p>Forgot Password</p>
                </div>
              </div>
              <button
                @click="logIn"
                class="w-100 btn btn-primary text-capitalize"
              >
                <span v-if="loader" class="spinner-border text-white" role="status"></span>
                <span v-else>
                  Log In
                </span>
              </button>
              <div class="my-2">
                <span class="text-secondary"> New Admin ? </span>
                <span>
                  <router-link class="text-primary" to="/register"
                    >Create an account now!</router-link
                  >
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loader: false,
      email: "",
      password: "",
      name: "",
      passwordVisible: false,
    };
  },
  methods: {
    switchVisibility() {
      this.passwordVisible = !this.passwordVisible;
      const passwordField = document.querySelector("#password");
      if (passwordField.getAttribute("type") === "password")
        passwordField.setAttribute("type", "text");
      else passwordField.setAttribute("type", "password");
    },
    async logIn() {
        this.loader = !this.loader;

      const loginData = {
        email: this.email,
        password: this.password,
        name: this.name,
      };
     await this.$store.dispatch("LOGIN", loginData);
        this.loader = !this.loader;
     
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans&display=swap");

.registration-page {
  font-family: "DM Sans", sans-serif !important;
  height: 100vh;
  width: 100%;
  padding: 0;
  margin: 0;

  .side-image {
    width: 100%;
    height: 100vh;
  }
  .content {
    margin-left: 45%;
    width: auto;
    height: 100vh;
  }
  .email-field {
    position: relative;
    background-color: #eff0f6;
    border-radius: 5px;
    input {
      background: transparent;
      border-bottom: none !important;
      outline: none !important;
      border: none !important;
      padding-left: 10px;
      width: 100%;
    }
    .input-icon {
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }
  .password-field {
    position: relative;
    background-color: #eff0f6;
    border-radius: 5px;
    padding: 10px;
    input,
    input[type="text"] {
      background: transparent;
      border-bottom: none !important;
      outline: none !important;
      border: none !important;
      padding: 0 !important;
      width: 100%;
    }

    .input-icon {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
  }
  label {
    color: #7782ac;
  }
  .sign-up {
    color: #18366c;
  }
}
</style>
