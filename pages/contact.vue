<template>
  <div>
    <NavbarVue />
    <ContactHeroVue />
    <ContactFormVue />
    <FooterVue />
  </div>
</template>
<script>
import ContactFormVue from "../components/front/ContactForm.vue";
import ContactHeroVue from "../components/front/ContactHero.vue";
import FooterVue from "../components/front/Footer.vue";
import NavbarVue from "../components/front/Navbar.vue";

export default {
  name: "ContactPage",
  head() {
    return {
      title: "Contact",
    };
  },
  components: {
    ContactHeroVue,
    FooterVue,
    NavbarVue,
    ContactFormVue,
  },
};
</script>
<style >
</style>