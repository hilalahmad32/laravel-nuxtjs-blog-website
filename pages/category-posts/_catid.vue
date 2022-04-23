<template>
  <div>
    <NavbarVue />
    <AllCategoryPostHeroVue />
    <v-container class="my-10">
      <h1>Category Post</h1>
      <div v-if="isloading">Loading...</div>
      <div v-else>
        <div v-if="posts.length > 0">
          <v-row class="my-5">
            <v-col
              xl="4"
              lg="4"
              md="4"
              sm="6"
              xs="12"
              v-for="(post, index) in posts"
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
        <div v-else>
          <h3>Posts not found by this category</h3>
        </div>
      </div>
    </v-container>
    <FooterVue />
  </div>
</template>

<script>
import AllCategoryPostHeroVue from "../../components/front/AllCategoryPostHero.vue";
import FooterVue from "../../components/front/Footer.vue";
import NavbarVue from "../../components/front/Navbar.vue";
import axios from "axios";
export default {
  name: "CategoryPage",
  head() {
    return {
      title: "category-posts",
    };
  },
  data: () => ({
    posts: [],
    isloading: false,
  }),
  components: {
    NavbarVue,
    FooterVue,
    AllCategoryPostHeroVue,
  },

  async mounted() {
    this.isloading = true;
    const res = await axios.get(
      "http://localhost:8000/api/front/category-posts/" +
        this.$route.params.catid
    );
    this.isloading = false;

    this.posts = res.data.posts;
  },
};
</script>
