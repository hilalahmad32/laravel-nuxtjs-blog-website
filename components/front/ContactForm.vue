<template >
  <div class="my-10">
    <v-container>
      <h1 class="m-3">Contact Us</h1>

      <v-card>
        <v-card-title>
          <v-row>
            <v-col xl="6" lg="6" md="6" sm="12">
              <form action="" class="form">
                <v-text-field
                  label="Enter Your Name"
                  class="form__control my-3"
                  hide-details="auto"
                  outlined
                >
                </v-text-field>
                <v-text-field
                  label="Enter Your Email"
                  class="form__control my-3"
                  hide-details="auto"
                  outlined
                >
                </v-text-field>
                <v-text-field
                  label="Enter Your Subject"
                  class="form__control my-3"
                  hide-details="auto"
                  outlined
                >
                </v-text-field>
                <v-textarea
                  class="form__control"
                  label="Enter Your Message"
                  outlined
                ></v-textarea>
                <v-btn color="error" class="login__btn">Contact Us</v-btn>
              </form>
            </v-col>
            <v-col xl="6" lg="6" md="6" sm="12">
              <div class="my-3 text-gray">
                <h4>Gmail</h4>
                <span>ahilal123@gmail.com</span>
              </div>
              <hr />
              <div class="my-3 text-gray">
                <h4>Phone</h4>
                <span>343254334</span>
              </div>
              <hr />

              <div class="my-3 text-gray">
                <h4>Location</h4>
                <span>Pakistan</span>
              </div>
            </v-col>
          </v-row>
        </v-card-title>
      </v-card>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "ContactVue",
};
</script>
<style >
</style>