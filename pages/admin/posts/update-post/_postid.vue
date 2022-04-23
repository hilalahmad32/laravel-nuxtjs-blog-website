<template >
  <div>
    <SidebarVue />
    <v-container>
      <v-row justify="center" class="mt-10">
        <v-col xl="6" lg="6" md="6" sm="8" xs="12">
          <nuxt-link to="/admin/post">
            <v-btn color="secondary" class="mb-4">Go Back</v-btn></nuxt-link
          >
          <v-card>
            <v-card-title> Update Post</v-card-title>
            <v-card-subtitle>
              <form action="" class="form" @submit.prevent="update">
                <v-text-field
                  label="Enter Titile"
                  class="form__control"
                  hide-details="auto"
                  outlined
                  v-model="title"
                >
                </v-text-field>
                <select
                  name=""
                  id=""
                  placeholder="Select Category"
                  class="selectBox"
                  v-model="cat_id"
                >
                  <option
                    v-for="(category, index) in $store.state.categorys"
                    :key="index"
                    :value="category.id"
                  >
                    {{ category.category_name }}
                  </option>
                </select>
                <v-textarea
                  class="form__control"
                  label="Enter description"
                  outlined
                  v-model="description"
                ></v-textarea>
                <v-file-input
                  accept="image/*"
                  label="File input"
                  outlined
                  @change="onChangeFile"
                ></v-file-input>
                <img
                  :src="'http://localhost:8000/storage/' + old_image"
                  alt=""
                  width="70"
                  cover
                />

                <input type="hidden" v-model="old_image" />
                <br />
                <v-btn color="error" type="submit" class="login__btn">
                  {{ $store.state.isloading ? "Updating..." : "Update" }}</v-btn
                >
              </form>
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import SidebarVue from "~/components/admin/Sidebar.vue";
import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: "updatePostPage",
  components: {
    SidebarVue,
  },
  data: () => ({
    title: "",
    description: "",
    cat_id: "",
    old_image: "",
    new_image: "",
  }),
  methods: {
    ...mapActions(["getCategory"]),
    ...mapActions(["updatePost"]),
    onChangeFile(e) {
      this.new_image = e;
    },
    update() {
      if (!this.title || !this.description || !this.cat_id) {
        this.$toast.show("Please fill the field", {
          type: "error",
        });
      } else {
        // use to formdata
        const formdata = new FormData();
        formdata.append("id", this.$route.params.postid);
        formdata.append("title", this.title);
        formdata.append("cat_id", this.cat_id);
        formdata.append("description", this.description);
        formdata.append("new_image", this.new_image);
        formdata.append("old_image", this.old_image);
        this.updatePost(formdata);
      }
    },
  },
  async mounted(_) {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    const res = await axios.put(
      `http://localhost:8000/api/admin/posts/${this.$route.params.postid}`,
      _,
      config
    );
    this.title = res.data.posts.title;
    this.description = res.data.posts.description;
    this.cat_id = res.data.posts.cat_id;
    this.old_image = res.data.posts.image;
    this.getCategory();
  },
};
</script>
<style>
</style>