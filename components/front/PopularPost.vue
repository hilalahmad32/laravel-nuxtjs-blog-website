<template >
  <div>
    <v-container class="my-10">
      <h1>Popular Post</h1>
      <v-row class="my-5">
        <v-col xl="4" lg="4" md="4" sm="6" xs="12" v-for="i in 6" :key="i">
          <v-card>
            <v-img
              height="250"
              src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            ></v-img>
            <v-card-title>Cafe Badilico</v-card-title>
            <v-card-text>
              <p>
                Small plates, salads & sandwiches - an intimate setting with 12
                indoor seats plus patio seating.
              </p>
              <v-btn
                class="my-4 btn__border"
                variant="contained"
                color="primary"
                text
                >Read More</v-btn
              >
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "PopulerCamp",
};
</script>
<style>
</style>