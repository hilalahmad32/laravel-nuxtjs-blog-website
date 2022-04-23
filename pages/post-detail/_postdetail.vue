<template>
  <div>
    <NavbarVue />
    <PostDetailHeroVue :title="item.title" />
    <PostDetailVue
      :category="item.category"
      :title="item.title"
      :content="item.content"
    />
    <FooterVue />
  </div>
</template>
<script>
import FooterVue from "../../components/front/Footer.vue";
import NavbarVue from "../../components/front/Navbar.vue";
import PostDetailVue from "../../components/front/PostDetail.vue";
import PostDetailHeroVue from "../../components/front/PostDetailHero.vue";

export default {
  name: "PostDetail",
  head() {
    return {
      title: this.item.title,
    };
  },
  components: {
    NavbarVue,
    FooterVue,
    PostDetailHeroVue,
    PostDetailVue,
  },
  data: () => ({
    item: {
      title: "welcome to my new website",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, eaque sequi sint magni saepe beatae id ad odio iste accusamus, nisi ratione placeat obcaecati commodi tenetur laborum iusto consequuntur fugit?",
      category: "Food",
    },
  }),
};
</script>
<style>
</style>