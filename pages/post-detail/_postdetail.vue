<template>
  <div>
    <NavbarVue />
    <PostDetailHeroVue :title="title" />
    <div v-if="isloading" class="my-4 text-center">Loading...</div>
    <div v-else>
      <PostDetailVue
        :category="category"
        :title="title"
        :content="description"
        :image="image"
        :id="id"
      />
    </div>

    <FooterVue />
  </div>
</template>
<script>
import FooterVue from "../../components/front/Footer.vue";
import NavbarVue from "../../components/front/Navbar.vue";
import PostDetailVue from "../../components/front/PostDetail.vue";
import PostDetailHeroVue from "../../components/front/PostDetailHero.vue";
import axios from "axios";
export default {
  name: "PostDetail",
  head() {
    return {
      title: this.title,
    };
  },
  components: {
    NavbarVue,
    FooterVue,
    PostDetailHeroVue,
    PostDetailVue,
  },
  data: () => ({
    title: "",
    id: "",
    image: "",
    category: "",
    description: "",
    isloading: false,
  }),
  async mounted() {
    this.isloading = true;

    const res = await axios.get(
      "http://localhost:8000/api/front/single-posts/" +
        this.$route.params.postdetail
    );
    this.isloading = false;
    this.title = res.data.posts.title;
    this.image = res.data.posts.image;
    this.id = res.data.posts.categorys.id;
    this.description = res.data.posts.description;
    this.category = res.data.posts.categorys.category_name;
  },
};
</script>
<style>
</style>