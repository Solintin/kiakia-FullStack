<template>
  <div class="container">
    <Header />

    <div class="my-5">
      <div class="">
        <div class="waitlist-wrapper">
          <div class="my-3 display-6 text-center text-underline">
            WAITLIST DATA TABLE
          </div>
          <table class="table table-striped table-hover">
            <thead>
              <tr class="fw-bold">
                <th scope="col">#</th>
                <td scope="col">Date</td>
                <td scope="col">Name</td>
                <td scope="col">Email</td>
                <td scope="col">State</td>
                <td scope="col">City</td>
                <td scope="col">Phone No</td>
                <td scope="col" >Action</td>
              </tr>
            </thead>
            <tbody>
              <div v-if="waitlist.length == 0" class="loading img-fluid">
                <img src="../assets/loading-icon-animated-gif-19.jpg" alt="" />
              </div>
              <tr v-for="(list, idx) in waitlist" :key="idx">
                <th scope="row">{{ idx + 1 }}</th>
                <td>{{ list.createdOn }}</td>
                <td>
                  <p>{{ list.firstName }}</p>
                  <p>{{ list.lastName }}</p>
                </td>
                <td>{{ list.email }}</td>
                <td>{{ list.state }}</td>
                <td>{{ list.city }}</td>
                <td>
                  {{ list.phoneNumber }}
                </td>
                <td class="py-4">
                  <button class=" btn btn-danger p-2" @click="clear(list.id)">
                    delete Waitlist
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default {
  name: "waitlist",
  components: {
    Header,
    Footer,
  },
  created() {
    this.$store.dispatch("GET_WAITLIST");
  },
  methods: {
    clear(id) {
      this.$store.dispatch("DELETE_WAITLIST", id);
    },
  },
  computed: {
    ...mapState(["waitlist"]),
  },
};
</script>

<style>
.waitlist-wrapper {
  border: 1px solid cornflowerblue;
  border-radius: 5px;
  padding: 5px;
}
</style>
