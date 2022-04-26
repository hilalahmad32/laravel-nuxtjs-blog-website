<template >
  <div class="bg__blue">
    <v-container class="mt-10">
      <v-row class="my-5">
        <v-col xl="4" lg="4" md="4" sm="6" xs="12">
          <h3 class="text--white">{{ $store.state.settings.footer_logo }}</h3>
          <p class="text--white">
            {{ $store.state.settings.footer_desc }}
          </p>
          <v-btn
            color="primary"
            style="color: white !important"
            class="btn__border"
            text
            >About Me</v-btn
          >
        </v-col>
        <v-col xl="4" lg="4" md="4" sm="6" xs="12">
          <h3 class="text--white">Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </v-col>
        <v-col xl="4" lg="4" md="4" sm="6" xs="12">
          <h3 class="text--white">Subscribe For News Latter</h3>

          <form action="">
            <v-text-field
              label="Enter Your Email"
              class="form__control"
              hide-details="auto"
              v-model="email"
            >
            </v-text-field>

            <v-btn
              color="success"
              text
              class="login__btn"
              style="border: 1px solid blue"
              @click="subscribe"
            >
              Subscribe</v-btn
            >
          </form>
          <a :href="`${$store.state.settings.facebook}`">
            <v-btn style="margin-left: 2px; background-color: blue">
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
          </a>
          <v-btn style="margin-left: 2px; background-color: black">
            <v-icon>mdi-github</v-icon>
          </v-btn>
          <v-btn style="margin-left: 2px; background-color: red">
            <v-icon>mdi-instagram</v-icon>
          </v-btn>
          <v-btn style="margin-left: 2px; background-color: lightblue">
            <v-icon>mdi-twitter</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "FooterCamp",
  data: () => ({
    email: "",
  }),
  methods: {
    ...mapActions(["addSubscribe"]),
    ...mapActions(["getSettings"]),

    async subscribe() {
      if (!this.email) {
        this.$toast.show("Please fill the field", {
          type: "error",
        });
      } else {
        const data = {
          email: this.email,
        };
        await this.addSubscribe(data);
        this.email = "";
      }
    },
  },
  mounted() {
    this.getSettings();
  },
};
</script>
<style>
</style>