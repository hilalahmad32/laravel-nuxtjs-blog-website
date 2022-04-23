<template>
  <div>
    <NavbarVue />
    <AllPostHeroVue />
    <AllPostVue />
    <FooterVue />
  </div>
</template>

<script>
import AllPostVue from "../components/front/AllPost.vue";
import AllPostHeroVue from "../components/front/AllPostHero.vue";
import FooterVue from "../components/front/Footer.vue";
import NavbarVue from "../components/front/Navbar.vue";

export default {
  name: "BlogPage",
  head() {
    return {
      title: "Blog",
    };
  },
  components: {
    NavbarVue,
    FooterVue,
    AllPostVue,
    AllPostHeroVue,
  },
};
</script>
