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
            <v-card-title> Add Post</v-card-title>
            <v-card-subtitle>
              <form action="" class="form" @submit.prevent="addPost">
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

                <v-btn color="error" type="submit" class="login__btn">
                  {{ $store.state.isloading ? "Saveing..." : "Save" }}</v-btn
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
import SidebarVue from "../../../components/admin/Sidebar.vue";
import { mapActions } from "vuex";
export default {
  name: "createPostPage",
  components: {
    SidebarVue,
  },
  data: () => ({
    cat_id: "",
    title: "",
    file: "",
    description: "",
  }),

  methods: {
    ...mapActions(["getCategory"]),
    ...mapActions(["createPost"]),
    onChangeFile(e) {
      this.file = e;
    },
    addPost() {
      if (!this.title || !this.description || !this.cat_id) {
        this.$toast.show("Please fill the field", {
          type: "error",
        });
      } else {
        // we use formdata
        const formdata = new FormData();
        formdata.append("title", this.title);
        formdata.append("cat_id", this.cat_id);
        formdata.append("description", this.description);
        formdata.append("image", this.file);
        this.createPost(formdata);
      }
    },
  },
  mounted() {
    //  map((val) => {
    //     this.categorys.push(val);
    //   });
    this.getCategory();
  },
};
</script>
<style>
</style>