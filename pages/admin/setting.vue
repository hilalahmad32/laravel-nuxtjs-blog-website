<template>
  <div>
    <SidebarVue />
    <div v-if="isLoading">
      <h1 class="text-center my-3">
        <img src="~/static/loading.svg" alt="" />
      </h1>
    </div>
    <div v-else>
      <div class="my-3">
        <v-row justify="center">
          <v-col xl="4" lg="4" md="6" sm="8" xs="12">
            <v-card>
              <v-card-title><h2>Change Setting</h2></v-card-title>
              <v-card-actions>
                <form action="" class="form" @submit.prevent="changeSetting">
                  <v-text-field
                    label="Enter header Name"
                    class="form__control mb-3"
                    hide-details="auto"
                    v-model="header_logo"
                    type="text"
                    placeholder="Header Name"
                    outlined
                  >
                  </v-text-field>
                  <v-text-field
                    label="Enter footer Name"
                    class="form__control mb-3"
                    hide-details="auto"
                    v-model="footer_logo"
                    type="text"
                    placeholder="footer Name"
                    outlined
                  >
                  </v-text-field>
                  <v-text-field
                    label="Enter footer Desc"
                    class="form__control mb-3"
                    hide-details="auto"
                    v-model="footer_desc"
                    type="text"
                    placeholder="footer Desc"
                    outlined
                  >
                  </v-text-field>
                  <v-text-field
                    label="Enter Email"
                    class="form__control mb-3"
                    hide-details="auto"
                    v-model="email"
                    type="text"
                    placeholder="Email"
                    outlined
                  >
                  </v-text-field>
                  <v-text-field
                    label="Enter Phone"
                    class="form__control mb-3"
                    hide-details="auto"
                    v-model="phone"
                    type="text"
                    placeholder="Phone"
                    outlined
                  >
                  </v-text-field>
                  <v-text-field
                    label="Enter Address"
                    class="form__control mb-3"
                    hide-details="auto"
                    v-model="address"
                    type="text"
                    placeholder="Address"
                    outlined
                  >
                  </v-text-field>
                  <v-text-field
                    label="Enter facebook link"
                    class="form__control mb-3"
                    hide-details="auto"
                    v-model="facebook"
                    type="text"
                    placeholder="Facebook link"
                    outlined
                  >
                  </v-text-field>
                  <v-text-field
                    label="Enter youtube link"
                    class="form__control mb-3"
                    hide-details="auto"
                    v-model="youtube"
                    type="text"
                    placeholder="Youtube"
                    outlined
                  >
                  </v-text-field>
                  <v-text-field
                    label="Enter instagram"
                    class="form__control mb-3"
                    hide-details="auto"
                    v-model="instagram"
                    type="text"
                    placeholder="instagram"
                    outlined
                  >
                  </v-text-field>
                  <v-text-field
                    label="Enter about Title"
                    class="form__control mb-3"
                    hide-details="auto"
                    v-model="about_title"
                    type="text"
                    placeholder="about Title"
                    outlined
                  >
                  </v-text-field>
                  <v-text-field
                    label="Enter about Desc"
                    class="form__control mb-3"
                    hide-details="auto"
                    v-model="about_desc"
                    type="text"
                    placeholder="about Desc"
                    outlined
                  >
                  </v-text-field>
                  <v-btn color="error" type="submit" class="login__btn">
                    {{ isLoading ? "Changing..." : "Change Setting" }}</v-btn
                  >
                </form>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>
<script>
import SidebarVue from "../../components/admin/Sidebar.vue";
import axios from "axios";
export default {
  name: "SettingPage",
  components: {
    SidebarVue,
  },
  data: () => ({
    id: "",
    header_logo: "",
    footer_logo: "",
    footer_desc: "",
    email: "",
    phone: "",
    address: "",
    facebook: "",
    instagram: "",
    youtube: "",
    about_title: "",
    about_desc: "",
    isLoading: false,
  }),
  methods: {
    async changeSetting() {
      const config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      const data = {
        header_logo: this.header_logo,
        footer_logo: this.footer_logo,
        footer_desc: this.footer_desc,
        email: this.email,
        phone: this.phone,
        address: this.address,
        facebook: this.facebook,
        instagram: this.instagram,
        youtube: this.youtube,
        about_title: this.about_title,
        about_desc: this.about_desc,
      };
      this.isLoading = true;
      const res = await axios.post(
        "http://localhost:8000/api/admin/setting/" + this.id,
        data,
        config
      );
      if (res.data.success) {
        this.isLoading = false;
        this.$toast.show(res.data.message, {
          type: "success",
        });
      } else {
        this.$toast.show(res.data.message, {
          type: "error",
        });
      }
    },
  },
  async mounted() {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    this.isLoading = true;

    const res = await axios.get(
      "http://localhost:8000/api/admin/setting",
      config
    );
    if (res.data.success) {
      this.isLoading = false;

      this.id = res.data.settings.id;
      this.header_logo = res.data.settings.header_logo;
      this.footer_logo = res.data.settings.footer_logo;
      this.footer_desc = res.data.settings.footer_desc;
      this.email = res.data.settings.email;
      this.phone = res.data.settings.phone;
      this.address = res.data.settings.address;
      this.facebook = res.data.settings.facebook;
      this.instagram = res.data.settings.instagram;
      this.youtube = res.data.settings.youtube;
      this.about_title = res.data.settings.about_title;
      this.about_desc = res.data.settings.about_desc;
    }
  },
};
</script>
<style >
</style>