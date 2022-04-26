<template>
  <div>
    <NavbarVue />
    <AboutHeroVue />
    <v-container class="my-10">
      <h1>{{ $store.state.settings.about_title }}</h1>
      <p>{{ $store.state.settings.about_desc }}</p>
    </v-container>
    <FooterVue />
  </div>
</template>
<script>
import AboutHeroVue from "../components/front/AboutHero.vue";
import FooterVue from "../components/front/Footer.vue";
import NavbarVue from "../components/front/Navbar.vue";
import { mapActions } from "vuex";
export default {
  name: "AboutPage",
  head() {
    return {
      title: "About",
    };
  },
  components: {
    NavbarVue,
    FooterVue,
    AboutHeroVue,
  },
  methods: {
    ...mapActions(["getSettings"]),
  },
  mounted() {
    this.getSettings();
  },
};
</script>
<style>
</style>