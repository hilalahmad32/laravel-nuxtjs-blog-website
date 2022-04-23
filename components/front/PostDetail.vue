<template >
  <div>
    <v-container>
      <v-row>
        <v-col xl="8" lg="8" md="8" sm="12">
          <div class="my-10">
            <img
              style="width: 100%"
              src="https://images.unsplash.com/photo-1649651738909-967f63511615?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60)"
              :alt="title"
            />
            <div class="my-2">
              <h2>{{ title }}</h2>
            </div>
            <h4 class="mb-2">{{ category }}</h4>
            <div class="mb-3">
              <p>
                {{ content }}
              </p>
            </div>
          </div>
          <h3>Comments( 44 )</h3>
          <hr />
        </v-col>
        <v-col xl="4" lg="4" md="4" sm="12">
          <div class="my-10">
            <v-card>
              <v-card-title>
                <h3>Categorys</h3>
              </v-card-title>
              <v-card-text>
                <h4 class="mt-2">Category</h4>
                <h4 class="mt-2">Category</h4>
                <h4 class="mt-2">Category</h4>
                <h4 class="mt-2">Category</h4>
              </v-card-text>
            </v-card>
          </div>

          <div class="my-10">
            <v-card>
              <v-card-title>
                <h3>Lastest Posts</h3>
              </v-card-title>
              <v-card-text>
                <nuxt-link :to="{ path: '/post-detail/' + title }">
                  <h4 class="mt-2">{{ title }}</h4>
                </nuxt-link>
                <nuxt-link :to="{ path: '/post-detail/' + title }">
                  <h4 class="mt-2">{{ title }}</h4>
                </nuxt-link>
                <nuxt-link :to="{ path: '/post-detail/' + title }">
                  <h4 class="mt-2">{{ title }}</h4>
                </nuxt-link>
                <nuxt-link :to="{ path: '/post-detail/' + title }">
                  <h4 class="mt-2">{{ title }}</h4>
                </nuxt-link>
              </v-card-text>
            </v-card>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col xl="7" lg="7" md="7" sm="12">
          <div v-for="i in 6" :key="i">
            <v-sheet class="p-3">
              <h3>Hilal ahmad</h3>
              <p>comment</p>
              <hr />
            </v-sheet>
          </div>
        </v-col>
        <v-col xl="5" lg="5" md="5" sm="12" xs="12">
          <form action="" class="form">
            <v-text-field
              label="Enter Your Name"
              class="form__control"
              hide-details="auto"
            >
            </v-text-field>
            <v-text-field
              label="Enter Your Email"
              class="form__control"
              hide-details="auto"
            >
            </v-text-field>
            <v-text-field
              label="Enter Your Comment"
              class="form__control"
              hide-details="auto"
            >
            </v-text-field>
            <v-btn color="error" class="login__btn"> Comment</v-btn>
          </form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "PostDetailComp",
  props: {
    title: String,
    category: String,
    content: String,
  },
};
</script>
<style >
</style>