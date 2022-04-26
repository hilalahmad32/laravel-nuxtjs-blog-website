<template >
  <div class="my-10">
    <v-container>
      <h1 class="m-3">Contact Us</h1>

      <v-card>
        <v-card-title>
          <v-row>
            <v-col xl="6" lg="6" md="6" sm="12">
              <form action="" class="form" @submit.prevent="contacts">
                <v-text-field
                  label="Enter Your Name"
                  class="form__control my-3"
                  hide-details="auto"
                  outlined
                  v-model="name"
                >
                </v-text-field>
                <v-text-field
                  label="Enter Your Email"
                  class="form__control my-3"
                  hide-details="auto"
                  outlined
                  v-model="email"
                >
                </v-text-field>
                <v-text-field
                  label="Enter Your Subject"
                  class="form__control my-3"
                  hide-details="auto"
                  outlined
                  v-model="subject"
                >
                </v-text-field>
                <v-textarea
                  class="form__control"
                  label="Enter Your Message"
                  outlined
                  v-model="message"
                ></v-textarea>
                <v-btn color="error" type="submit" class="login__btn">{{
                  $store.state.isloading ? "Sending...." : "Contact Us"
                }}</v-btn>
              </form>
            </v-col>
            <v-col xl="6" lg="6" md="6" sm="12">
              <div class="my-3 text-gray">
                <h4>Gmail</h4>
                <span>{{ $store.state.settings.email }}</span>
              </div>
              <hr />
              <div class="my-3 text-gray">
                <h4>Phone</h4>
                <span>{{ $store.state.settings.phone }}</span>
              </div>
              <hr />

              <div class="my-3 text-gray">
                <h4>Location</h4>
                <span>{{ $store.state.settings.address }}</span>
              </div>
            </v-col>
          </v-row>
        </v-card-title>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "ContactVue",
  data: () => ({
    name: "",
    email: "",
    subject: "",
    message: "",
  }),
  methods: {
    ...mapActions(["addContact"]),
    ...mapActions(["getSettings"]),

    async contacts() {
      if (!this.name || !this.email || !this.subject || !this.message) {
        this.$toast.show("Please fill the field", {
          type: "error",
        });
      } else {
        const data = {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message,
        };
        await this.addContact(data);
        this.name = "";
        this.email = "";
        this.subject = "";
        this.message = "";
      }
    },
  },
  mounted() {
    this.getSettings();
  },
};
</script>
<style >
</style>