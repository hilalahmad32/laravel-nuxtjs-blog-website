<template >
  <div>
    <SidebarVue />
    <v-container>
      <v-row justify="center" class="mt-10">
        <v-col xl="6" lg="6" md="6" sm="8" xs="12">
          <nuxt-link to="/admin/category">
            <v-btn color="secondary" class="mb-4">Go Back</v-btn></nuxt-link
          >
          <v-card>
            <v-card-title> Update Category</v-card-title>
            <v-card-title v-if="isloading">Loading....</v-card-title>
            <v-card-subtitle>
              <form action="" class="form" @submit.prevent="update">
                <v-text-field
                  label="Enter Category"
                  class="form__control"
                  hide-details="auto"
                  v-model="category_name"
                >
                </v-text-field>

                <v-btn color="error" type="submit" class="login__btn">
                  {{
                    $store.state.isloading ? "Updateing..." : "Update"
                  }}</v-btn
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
import axios from "axios";
import { mapActions } from "vuex";
export default {
  name: "EditCategoryPage",
  components: {
    SidebarVue,
  },
  data: () => ({
    id: "",
    category_name: "",
    isloading: false,
  }),
  methods: {
    ...mapActions(["updateCategory"]),
    update() {
      if (!this.category_name) {
        this.$toast.show("Please fill the field", {
          type: "error",
        });
      } else {
        const data = {
          id: this.$route.params.catid,
          category_name: this.category_name,
        };
        this.updateCategory(data);
      }
    },
  },

  async mounted(_) {
    this.isloading = true;
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    const res = await axios.put(
      "http://localhost:8000/api/admin/categorys/" + this.$route.params.catid,
      _,
      config
    );
    if (res.data.success) {
      this.isloading = false;
      this.category_name = res.data.categorys.category_name;
    }
  },
};
</script>
<style>
</style>