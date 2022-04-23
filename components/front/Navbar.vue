<template >
  <div>
    <div class="main__nav">
      <v-container>
        <div class="nav">
          <nuxt-link to="/" exact class="nav__logo">Mitech</nuxt-link>
          <v-icon class="show text--white" @click="nav = !nav">{{
            nav ? "X" : "mdi-menu"
          }}</v-icon>
          <div class="navbar" :class="{ active_nav: nav }">
            <nuxt-link to="/" class="nav_link" exact>Home</nuxt-link>
            <nuxt-link to="/blog" class="nav_link" exact>Blog</nuxt-link>
            <nuxt-link to="/about" class="nav_link" exact>About</nuxt-link>
            <nuxt-link to="/contact" class="nav_link" exact>Contact</nuxt-link>
          </div>
        </div>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavbarComp",
  data: () => ({
    nav: false,
  }),
};
</script>
<style >
</style>