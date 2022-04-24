<template >
  <div>
    <v-container>
      <v-row>
        <v-col xl="8" lg="8" md="8" sm="12">
          <div class="my-10">
            <img
              style="width: 100%"
              :src="`http://localhost:8000/storage/${image}`"
              :alt="title"
            />
            <div class="my-2">
              <h2>{{ title }}</h2>
            </div>
            <nuxt-link :to="`/category-posts/${id}`">
              <h4 class="mb-2">{{ category }}</h4></nuxt-link
            >
            <div class="mb-3">
              <p>
                {{ content }}
              </p>
            </div>
          </div>
          <h3>
            Comments(
            {{
              $store.state.comments.length > 0
                ? $store.state.comments.length
                : "0"
            }}
            )
          </h3>
          <hr />
        </v-col>
        <v-col xl="4" lg="4" md="4" sm="12">
          <div class="my-10">
            <v-card>
              <v-card-title>
                <h3>Categorys</h3>
              </v-card-title>
              <v-card-text>
                <nuxt-link
                  v-for="(category, index) in $store.state.getCategorys"
                  :key="index"
                  :to="`/category-posts/${category.id}`"
                >
                  <h4 class="mt-2">
                    {{ category.category_name }}
                  </h4></nuxt-link
                >
              </v-card-text>
            </v-card>
          </div>

          <div class="my-10">
            <v-card>
              <v-card-title>
                <h3>Lastest Posts</h3>
              </v-card-title>
              <v-card-text>
                <nuxt-link
                  v-for="(latestPost, index) in $store.state.latestPosts"
                  :key="index"
                  :to="{ path: '/post-detail/' + latestPost.id }"
                >
                  <h4 class="mt-2">{{ latestPost.title }}</h4>
                </nuxt-link>
              </v-card-text>
            </v-card>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col xl="7" lg="7" md="7" sm="12">
          <div v-if="!$store.state.comments.length > 0">
            Comment not found in this post
          </div>
          <div v-for="(comment, index) in $store.state.comments" :key="index">
            <v-sheet class="p-3">
              <h3>{{ comment.name }}</h3>
              <p>{{ comment.comment }}</p>
              <hr />
            </v-sheet>
          </div>
        </v-col>
        <v-col xl="5" lg="5" md="5" sm="12" xs="12">
          <form action="" class="form">
            <v-text-field
              label="Enter Your Name"
              class="form__control"
              hide-details="auto"
              v-model="name"
            >
            </v-text-field>
            <v-text-field
              label="Enter Your Email"
              class="form__control"
              hide-details="auto"
              v-model="email"
            >
            </v-text-field>
            <v-text-field
              label="Enter Your Comment"
              class="form__control"
              hide-details="auto"
              v-model="comments"
            >
            </v-text-field>
            <v-btn
              color="error"
              @click="submitComments(postid)"
              class="login__btn"
            >
              Comment</v-btn
            >
          </form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "PostDetailComp",

  props: {
    id: Number,
    title: String,
    category: String,
    content: String,
    image: String,
    postid: Number,
  },
  data: () => ({
    name: "",
    email: "",
    comments: "",
  }),
  methods: {
    ...mapActions(["getLatestPost"]),
    ...mapActions(["getCategorys"]),
    ...mapActions(["addComment"]),
    ...mapActions(["getComments"]),
    async submitComments(cid) {
      if (!this.name || !this.email || !this.comments) {
        this.$toast.show("Please fill the field", {
          type: "error",
        });
      } else {
        const data = {
          id: cid,
          name: this.name,
          email: this.email,
          comment: this.comments,
        };
        await this.addComment(data);
        this.getComments(this.postid);
        this.name = "";
        this.email = "";
        this.comments = "";
      }
    },
  },
  mounted() {
    this.getLatestPost();
    this.getCategorys();
    this.getComments(this.postid);
  },
};
</script>
<style >
</style>