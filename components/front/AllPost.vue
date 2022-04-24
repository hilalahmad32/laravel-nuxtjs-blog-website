<template >
  <div>
    <v-container class="my-10">
      <div class="d-flex align-center my-4">
        <v-text-field
          label="Search Here ..."
          class="form__control"
          hide-details="auto"
          outlined
        >
        </v-text-field>
        <v-btn color="success" text>Search</v-btn>
      </div>
      <h1>All Post</h1>
      <div class="my-4 text-center" v-if="$store.state.isloading">
        Loading....
      </div>
      <div v-else>
        <v-row class="my-5">
          <v-col
            xl="4"
            lg="4"
            md="4"
            sm="6"
            xs="12"
            v-for="(post, index) in $store.state.allPosts"
            :key="index"
          >
            <v-card>
              <v-img
                height="250"
                :src="`http://localhost:8000/storage/${post.image}`"
              ></v-img>
              <nuxt-link :to="{ path: '/post-detail/' + post.id }"
                ><v-card-title>{{ post.title }}</v-card-title>
              </nuxt-link>
              <v-card-subtitle>category</v-card-subtitle>
              <v-card-text>
                <p>{{ post.description.substr(0, 100) }}.....</p>
                <nuxt-link :to="`/post-detail/${post.id}`">
                  <v-btn
                    class="my-4 btn__border"
                    variant="contained"
                    color="primary"
                    text
                    >Read More</v-btn
                  ></nuxt-link
                >
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <div class="text-center">
        <v-pagination v-model="page" :length="4" circle></v-pagination>
      </div>
    </v-container>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "AllCamp",
  data: () => ({
    page: 1,
  }),
  methods: {
    ...mapActions(["getAllPost"]),
  },
  mounted() {
    this.getAllPost();
  },
};
</script>
<style>
</style>