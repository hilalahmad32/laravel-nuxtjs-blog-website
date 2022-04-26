<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>
      <v-toolbar-title v-text="$store.state.admins.name" />
      <v-btn color="error" class="ml-3" text @click="logout">Logout</v-btn>
    </v-app-bar>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "SideBarComp",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Dashboard",
          to: "/admin/dashboard",
        },
        {
          icon: "mdi-widgets",
          title: "Category",
          to: "/admin/category",
        },
        {
          icon: "mdi-post",
          title: "Post",
          to: "/admin/post",
        },
        {
          icon: "mdi-post",
          title: "Comment",
          to: "/admin/comments",
        },
        {
          icon: "mdi-post",
          title: "Subscribe",
          to: "/admin/subscriber",
        },
        {
          icon: "mdi-post",
          title: "Contacts",
          to: "/admin/contacts",
        },
        {
          icon: "mdi-post",
          title: "Change Password",
          to: "/admin/change-password",
        },
        {
          icon: "mdi-post",
          title: "Setting",
          to: "/admin/setting",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Mitech Blog",
    };
  },

  methods: {
    ...mapActions(["adminLogout"]),
    logout() {
      this.adminLogout();
    },
  },
};
</script>
<style >
</style>