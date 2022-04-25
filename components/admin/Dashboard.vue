<template>
  <div>
    <v-container>
      <div v-if="isloading">
        <h3 class="text-center my-4">Loading...</h3>
      </div>
      <div v-else>
        <v-row>
          <v-col xl="4" lg="4" md="4" sm="6">
            <v-card class="d-flex justify-space-between">
              <v-card-header name>
                <v-card-title>Post</v-card-title>
                <v-card-subtitle>{{ totalPost }}</v-card-subtitle>
              </v-card-header>
              <v-card-actions>
                <v-icon large color="blue-grey darken-2">
                  mdi-post
                </v-icon></v-card-actions
              >
            </v-card>
          </v-col>
          <v-col xl="4" lg="4" md="4" sm="6">
            <v-card class="d-flex justify-space-between">
              <v-card-header name>
                <v-card-title>Category</v-card-title>
                <v-card-subtitle>{{ totalCategory }}</v-card-subtitle>
              </v-card-header>
              <v-card-actions>
                <v-icon large color="blue-grey darken-2">
                  mdi-widgets
                </v-icon></v-card-actions
              >
            </v-card>
          </v-col>
          <v-col xl="4" lg="4" md="4" sm="6">
            <v-card class="d-flex justify-space-between">
              <v-card-header name>
                <v-card-title>Comments</v-card-title>
                <v-card-subtitle>{{ totalComment }}</v-card-subtitle>
              </v-card-header>
              <v-card-actions>
                <v-icon large color="blue-grey darken-2">
                  mdi-gavel
                </v-icon></v-card-actions
              >
            </v-card>
          </v-col>
          <v-col xl="4" lg="4" md="4" sm="6">
            <v-card class="d-flex justify-space-between">
              <v-card-header name>
                <v-card-title>Contacts</v-card-title>
                <v-card-subtitle>{{ totalContact }}</v-card-subtitle>
              </v-card-header>
              <v-card-actions>
                <v-icon large color="blue-grey darken-2">
                  mdi-gavel
                </v-icon></v-card-actions
              >
            </v-card>
          </v-col>
          <v-col xl="4" lg="4" md="4" sm="6">
            <v-card class="d-flex justify-space-between">
              <v-card-header name>
                <v-card-title>Subscribe</v-card-title>
                <v-card-subtitle>{{ totalSubscribe }}</v-card-subtitle>
              </v-card-header>
              <v-card-actions>
                <v-icon large color="blue-grey darken-2">
                  mdi-gavel
                </v-icon></v-card-actions
              >
            </v-card>
          </v-col>
        </v-row>
      </div>
      <!-- <DashboardTableVue /> -->
      <!-- do it latter. -->
    </v-container>
  </div>
</template>
<script>
import DashboardTableVue from "./DashboardTable.vue";
import axios from "axios";
export default {
  name: "DasboardComp",
  components: {
    DashboardTableVue,
  },
  data: () => ({
    totalCategory: 0,
    totalPost: 0,
    totalComment: 0,
    totalContact: 0,
    totalSubscribe: 0,
    isloading: false,
  }),

  async mounted() {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    this.isloading = true;

    const res = await axios.get(
      "http://localhost:8000/api/admin/total-category",
      config
    );
    if (res.data.success) {
      this.totalCategory = res.data.categorys;
    }

    // get total Posts
    const res1 = await axios.get(
      "http://localhost:8000/api/admin/total-posts",
      config
    );

    if (res1.data.success) {
      this.totalPost = res1.data.posts;
    }

    // get total Comments
    const res2 = await axios.get(
      "http://localhost:8000/api/admin/total-comments",
      config
    );

    if (res2.data.success) {
      this.totalComment = res2.data.comments;
    }

    // get total contacts
    const res3 = await axios.get(
      "http://localhost:8000/api/admin/total-contacts",
      config
    );

    if (res3.data.success) {
      this.totalContact = res3.data.contacts;
    }
    // get total subscribers
    const res4 = await axios.get(
      "http://localhost:8000/api/admin/total-subscribe",
      config
    );

    if (res4.data.success) {
      this.totalSubscribe = res4.data.subscribes;
      this.isloading = false;
    }
  },
};
</script>
<style>
</style>