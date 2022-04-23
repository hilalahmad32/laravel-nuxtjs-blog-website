<template >
  <div>
    <v-row>
      <v-col xl="6" lg="6" md="6" sm="12">
        <v-card>
          <v-card-title>Post Data</v-card-title>
          <v-card-subtitle>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Title</th>
                    <th class="text-left">Category</th>
                    <th class="text-left">image</th>
                    <th class="text-left">Views</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in 5" :key="index">
                    <td class="text-left">{{ str.substr(0, 10) }}....</td>
                    <td class="text-left">Php</td>
                    <td class="text-left">
                      <v-img
                        src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
                        width="70"
                        cover
                      ></v-img>
                    </td>
                    <td class="text-left">44</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-subtitle>
          <v-card-actions class="d-flex justify-end">
            <v-btn text color="red">View More </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col xl="6" lg="6" md="6" sm="12">
        <v-card>
          <v-card-title>Category Data</v-card-title>
          <v-card-subtitle>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Category</th>
                    <th class="text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in 5" :key="index">
                    <td class="text-left">{{ str.substr(0, 10) }}....</td>
                    <td class="text-left">1</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-subtitle>
          <v-card-actions class="d-flex justify-end">
            <v-btn text color="red">View More </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col xl="6" lg="6" md="6" sm="12">
        <v-card>
          <v-card-title>Comments Data</v-card-title>
          <v-card-subtitle>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Post</th>
                    <th class="text-left">Name</th>
                    <th class="text-left">Email</th>
                    <th class="text-left">Comment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in 5" :key="index">
                    <td class="text-left">{{ str.substr(0, 10) }}....</td>
                    <td class="text-left">Hilal ahmad</td>
                    <td class="text-left">ahilal@gmail.com</td>
                    <td class="text-left">{{ comment.substr(0, 10) }}....</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-subtitle>
          <v-card-actions class="d-flex justify-end">
            <v-btn text color="red">View More </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col xl="6" lg="6" md="6" sm="12">
        <v-card>
          <v-card-title>Contact Data</v-card-title>
          <v-card-subtitle>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">Name</th>
                    <th class="text-left">Email</th>
                    <th class="text-left">Subject</th>
                    <th class="text-left">Message</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in 5" :key="index">
                    <td class="text-left">Hilal ahmad</td>
                    <td class="text-left">ahilal@gmail.com</td>
                    <td class="text-left">web development</td>
                    <td class="text-left">{{ msg.substr(0, 10) }}...</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card-subtitle>
          <v-card-actions class="d-flex justify-end">
            <v-btn text color="red">View More </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "DashboardTable",
  data: () => ({
    str: "how to make a project in php",
    comment: "hi sir how are you",
    msg: "hi sir i have a problem in you ",
  }),
};
</script>
<style>
</style>