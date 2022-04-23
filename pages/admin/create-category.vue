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
            <v-card-title> Add Category</v-card-title>
            <v-card-subtitle>
              <form action="" class="form" @submit.prevent="addCategory">
                <v-text-field
                  label="Enter Category"
                  class="form__control"
                  hide-details="auto"
                  v-model="category_name"
                >
                </v-text-field>

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
import SidebarVue from "../../components/admin/Sidebar.vue";
import { mapActions } from "vuex";

export default {
  name: "createCategoryPage",
  components: {
    SidebarVue,
  },
  data: () => ({
    category_name: "",
  }),
  methods: {
    ...mapActions(["createCategory"]),
    addCategory() {
      if (!this.category_name) {
        this.$toast.show("Please fill the field", {
          type: "error",
        });
      } else {
        const data = {
          category_name: this.category_name,
        };
        this.createCategory(data);
      }
    },
  },
};
</script>
<style>
</style>