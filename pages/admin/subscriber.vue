<template >
  <div>
    <SidebarVue />
    <v-container>
      <v-card>
        <v-card-text class="d-flex justify-space-between align-center">
          <v-card-title> Subscriber ( {{ totalSubscribe }} ) </v-card-title>
        </v-card-text>
        <hr />
        <v-card-subtitle>
          <div v-if="$store.state.isloading">Loading....</div>
          <div v-else>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-enter">Id</th>
                    <th class="text-enter">Email</th>
                    <th class="text-enter">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(sub, index) in $store.state.subscribes"
                    :key="index"
                  >
                    <td class="">{{ index + 1 }}</td>
                    <td class="">{{ sub.email }}</td>
                    <td class="">
                      <v-btn
                        @click="delSub(sub.id)"
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
  name: "SubscribePage",
  components: {
    SidebarVue,
  },
  data: () => ({ totalSubscribe: 0 }),
  methods: {
    ...mapActions(["getSubscribes"]),
    ...mapActions(["deleteSub"]),
    async getTotalSubscribe() {
      const config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      const res = await axios.get(
        "http://localhost:8000/api/admin/total-subscribe",
        config
      );

      if (res.data.success) {
        this.totalSubscribe = res.data.subscribes;
      }
    },

    async delSub(id) {
      await this.deleteSub(id);
      await this.getTotalSubscribe();
      await this.getSubscribes();
    },
  },
  async mounted() {
    await this.getTotalSubscribe();
    await this.getSubscribes();
  },
};
</script>
<style >
</style>