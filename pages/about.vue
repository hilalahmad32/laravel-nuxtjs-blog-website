<template>
  <div>
    <NavbarVue />
    <AboutHeroVue />
    <v-container class="my-10">
      <h1>About me</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste porro
        soluta vero libero nihil numquam eveniet ipsum excepturi! Aut, et ex
        perspiciatis accusantium nobis nihil voluptate eum odio ipsa veritatis.
        perspiciatis accusantium nobis nihil voluptate eum odio ipsa veritatis.
        perspiciatis accusantium nobis nihil voluptate eum odio ipsa veritatis.
      </p>
    </v-container>
    <FooterVue />
  </div>
</template>
<script>
import AboutHeroVue from "../components/front/AboutHero.vue";
import FooterVue from "../components/front/Footer.vue";
import NavbarVue from "../components/front/Navbar.vue";
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
};
</script>
<style>
</style>