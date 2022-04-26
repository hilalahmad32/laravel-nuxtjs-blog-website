<template >
  <div>
    <SidebarVue />
    <v-container>
      <v-card>
        <v-card-text class="d-flex justify-space-between align-center">
          <v-card-title> Contacts ( {{ totalContact }} ) </v-card-title>
        </v-card-text>
        <hr />
        <v-card-subtitle>
          <div v-if="$store.state.isloading">
            <h1 class="text-center my-3">
              <img src="~/static/loading.svg" alt="" />
            </h1>
          </div>
          <div v-else>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-enter">Id</th>
                    <th class="text-enter">Name</th>
                    <th class="text-enter">Email</th>
                    <th class="text-enter">Subject</th>
                    <th class="text-enter">Message</th>
                    <th class="text-enter">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(contact, index) in $store.state.contacts"
                    :key="index"
                  >
                    <td class="">{{ index + 1 }}</td>
                    <td class="">{{ contact.name }}</td>
                    <td class="">{{ contact.email }}</td>
                    <td class="">{{ contact.subject }}</td>
                    <td class="">{{ contact.message }}</td>
                    <td class="">
                      <v-btn
                        @click="delContact(contact.id)"
                        text
                        class="ma-2"
                        variant="text"
                        color="red"
                      >
                        <v-icon color="red darken-3"> mdi-delete</v-icon>
                      </v-btn>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>
        </v-card-subtitle>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import SidebarVue from "../../components/admin/Sidebar.vue";
import axios from "axios";
import { mapActions } from "vuex";
export default {
  name: "CommentPage",
  components: {
    SidebarVue,
  },
  middleware: ["auth"],

  data: () => ({
    totalContact: 0,
  }),

  methods: {
    ...mapActions(["getContacts"]),
    ...mapActions(["deleteContact"]),
    async getTotalContacts() {
      const config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      const res = await axios.get(
        "http://localhost:8000/api/admin/total-contacts",
        config
      );

      if (res.data.success) {
        this.totalContact = res.data.contacts;
      }
    },
    async delContact(id) {
      await this.deleteContact(id);
      await this.getTotalContacts();
      await this.getContacts();
    },
  },
  async mounted() {
    await this.getTotalContacts();
    await this.getContacts();
  },
};
</script>
<style >
</style>