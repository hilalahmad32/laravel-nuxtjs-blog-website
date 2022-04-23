<template >
  <div>
    <v-container class="my-10">
      <h1>Latest Post</h1>
      <div v-if="$store.state.isloading">Loading...</div>
      <div v-else>
        <v-row class="my-5">
          <v-col
            xl="4"
            lg="4"
            md="4"
            sm="6"
            xs="12"
            v-for="(post, index) in $store.state.latestPosts"
            :key="index"
          >
            <v-card>
              <v-img
                height="250"
                :src="`http://localhost:8000/storage/${post.image}`"
              ></v-img>
              <v-card-title>{{ post.title }}</v-card-title>
              <v-card-text>
                <p>{{ post.description.substr(0, 100) + "...." }}</p>
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
    </v-container>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "LastesCamp",
  data: () => ({}),
  methods: {
    ...mapActions(["getLatestPost"]),
  },
  mounted() {
    this.getLatestPost();
  },
};
</script>
<style>
</style>