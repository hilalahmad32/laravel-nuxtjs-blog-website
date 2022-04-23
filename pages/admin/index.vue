<template >
  <div class="margin__card">
    <v-row justify="center">
      <v-col xl="4" lg="4" md="6" sm="8" xs="12">
        <v-card>
          <v-card-title><h2>Admin Login</h2></v-card-title>
          <v-card-actions>
            <form action="" class="form" @submit.prevent="login">
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
                Login</v-btn
              >
            </form>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "AdminIndexPage",
  middleware: ["guest"],
  data: () => ({
    username: "",
    password: "",
  }),
  methods: {
    ...mapActions(["adminLogins"]),
    login() {
      if (!this.username || !this.password) {
        this.$toast.show("Please fill the field", {
          type: "error",
        });
      } else {
        const formData = {
          name: this.username,
          password: this.password,
        };
        this.adminLogins(formData);
      }
    },
  },
};
</script>
<style la>
</style>