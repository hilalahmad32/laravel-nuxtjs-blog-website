<template >
  <div>
    <v-container class="my-10">
      <div class="d-flex align-center my-4">
        <v-text-field
          label="Search Here ..."
          class="form__control"
          hide-details="auto"
          outlined
        >
        </v-text-field>
        <v-btn color="success" text>Search</v-btn>
      </div>
      <h1>All Post</h1>
      <v-row class="my-5">
        <v-col
          xl="4"
          lg="4"
          md="4"
          sm="6"
          xs="12"
          v-for="(item, index) in datas"
          :key="index"
        >
          <v-card>
            <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <nuxt-link :to="{ path: '/post-detail/' + item.id }"
              ><v-card-title>{{ item.title }}</v-card-title></nuxt-link
            >
            <v-card-subtitle>category</v-card-subtitle>
            <v-card-text>
              <p>{{ item.content.substr(0, 200) }}.....</p>
              <v-btn
                class="mb-2 btn__border"
                variant="contained"
                color="primary"
                text
                >Read More</v-btn
              >
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <div class="text-center">
        <v-pagination v-model="page" :length="4" circle></v-pagination>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "AllCamp",
  data: () => ({
    page: 1,
    datas: [
      {
        id: 1,
        title: "welcome to my title",
        content: "this is content we can dyoue in ay place",
      },
      {
        id: 2,
        title: "welcome to my title 2",
        content: "this is content we can dyoue in ay place",
      },
      {
        id: 3,
        title: "welcome to my title 3",
        content: "this is content we can dyoue in ay place",
      },
      {
        id: 4,
        title: "welcome to my title 4",
        content: "this is content we can dyoue in ay place",
      },
      {
        id: 5,
        title: "welcome to my title 5",
        content: "this is content we can dyoue in ay place",
      },
      {
        id: 6,
        title: "welcome to my title 6",
        content: "this is content we can dyoue in ay place",
      },
    ],
  }),
};
</script>
<style>
</style>