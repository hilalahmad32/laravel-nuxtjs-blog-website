<template >
  <div>
    <v-carousel v-model="model">
      <v-carousel-item>
        <div
          class="bg_image"
          style="background-image: url('https://images.unsplash.com/photo-1649651738909-967f63511615?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60)"
        >
          <div class="w__40">
            <h1 class="text--white">Welcome to my Nuxt and laravel website</h1>
            <p class="text--white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ut
              excepturi, incidunt facilis temporibus perferendis, veritatis,
              sapiente molestias quibusdam aspernatur consequatur fugiat quasi
              dicta nesciunt provident amet? Officia, exercitationem laboriosam.
            </p>
          </div>
        </div>
      </v-carousel-item>
      <v-carousel-item>
        <div
          class="bg_image"
          style="
            background-image: url('https://images.unsplash.com/photo-1649682222710-7b2e54c6bddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60');
          "
        >
          <div class="w__40">
            <h1 class="text--white">Welcome to my Nuxt and laravel website</h1>
            <p class="text--white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo ut
              excepturi, incidunt facilis temporibus perferendis, veritatis,
              sapiente molestias quibusdam aspernatur consequatur fugiat quasi
              dicta nesciunt provident amet? Officia, exercitationem laboriosam.
            </p>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script>
export default {
  name: "HeroCamp",
};
</script>
<style>
</style>