<template >
  <div>
    <SidebarVue />
    <div class="my-4">
      <v-row justify="center">
        <v-col xl="4" lg="4" md="6" sm="8" xs="12">
          <v-card>
            <v-card-title>
              <h2>Change Password</h2>
            </v-card-title>
            <v-card-actions>
              <form action="" class="form" @submit.prevent="changePassword">
                <v-text-field
                  label="Enter Username"
                  class="form__control mb-3"
                  hide-details="auto"
                  v-model="username"
                  type="text"
                  placeholder="Username"
                  outlined
                >
                </v-text-field>
                <v-text-field
                  label="Enter Password"
                  class="form__control"
                  hide-details="auto"
                  v-model="password"
                  type="password"
                  placeholder="Password"
                  outlined
                >
                </v-text-field>
                <v-btn color="error" type="submit" class="login__btn">
                  {{ isLoading ? "Changing..." : "ChangePassword" }}</v-btn
                >
              </form>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
import SidebarVue from "../../components/admin/Sidebar.vue";
import axios from "axios";
export default {
  name: "changePassword",
  components: {
    SidebarVue,
  },
  middleware: ["auth"],
  data: () => ({
    username: "",
    password: "",
    isLoading: false,
  }),
  methods: {
    async changePassword() {
      if (!this.username || !this.password) {
        this.$toast.show("Please fill the field", {
          type: "error",
        });
      } else {
        const config = {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        };
        const formData = {
          name: this.username,
          password: this.password,
        };
        this.isLoading = true;

        const res = await axios.post(
          "http://localhost:8000/api/admin/change-password",
          formData,
          config
        );
        if (res.data.success) {
          this.isLoading = false;
          this.$toast.show(res.data.message, {
            type: "success",
          });
          this.username = "";
          this.password = "";
        } else {
          this.isLoading = false;
          this.$toast.show(res.data.message, {
            type: "error",
          });
        }
      }
    },
  },
};
</script>
<style>
</style>