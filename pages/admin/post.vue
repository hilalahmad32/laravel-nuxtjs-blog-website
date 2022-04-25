<template>
  <div>
    <SidebarVue />
    <v-container>
      <v-card>
        <v-card-text class="d-flex justify-space-between align-center">
          <v-card-title> Post ( {{ totalPost }} ) </v-card-title>
          <v-card-actions>
            <nuxt-link to="/admin/posts/create-post">
              <v-btn color="red lighten-2"> New </v-btn>
            </nuxt-link>
          </v-card-actions>
        </v-card-text>
        <hr />

        <v-card-subtitle>
          <div v-if="$store.state.isloading">Loading....</div>
          <div v-else>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-enter">Id</th>
                    <th class="text-enter">Title</th>
                    <th class="text-enter">Category</th>
                    <th class="text-enter">image</th>
                    <th class="text-enter">Views</th>
                    <th class="text-enter">View</th>
                    <th class="text-enter">Edit</th>
                    <th class="text-enter">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(post, index) in $store.state.posts" :key="index">
                    <td class="">{{ index + 1 }}</td>
                    <td class="">{{ post.title }}</td>
                    <td class="">{{ post.categorys.category_name }}</td>
                    <td class="">
                      <v-img
                        :src="'http://localhost:8000/storage/' + post.image"
                        width="70"
                        cover
                      ></v-img>
                    </td>
                    <td class="">{{ post.views }}</td>
                    <td class="">
                      <v-btn text class="ma-2" variant="text" color="blue">
                        <v-icon color="green darken-3"> mdi-eye</v-icon>
                      </v-btn>
                    </td>
                    <td class="">
                      <nuxt-link :to="`/admin/posts/update-post/${post.id}`">
                        <v-btn text class="ma-2" variant="text" color="blue">
                          <v-icon color="blue darken-3"> mdi-pencil</v-icon>
                        </v-btn></nuxt-link
                      >
                    </td>
                    <td class="">
                      <v-btn
                        @click="delPost(post.id)"
                        text
                        class="ma-2"
                        variant="text"
                        color="red"
                      >
                        <v-icon color="red darken-3"> mdi-delete</v-icon>
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>
        </v-card-subtitle>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import SidebarVue from "../../components/admin/Sidebar.vue";
import { mapActions } from "vuex";
import axios from "axios";
export default {
  name: "PostPage",
  components: {
    SidebarVue,
  },
  data: () => ({
    totalPost: 0,
  }),
  methods: {
    ...mapActions(["getPosts"]),
    ...mapActions(["deletePost"]),
    delPost(id) {
      this.deletePost(id);
      this.getPosts();
    },
    ...mapActions(["getAdmins"]),
  },

  async mounted() {
    await this.getAdmins();
    await this.getPosts();
    // get total Posts
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    const res1 = await axios.get(
      "http://localhost:8000/api/admin/total-posts",
      config
    );

    if (res1.data.success) {
      this.totalPost = res1.data.posts;
    }
  },
};
</script>
<style>
</style>