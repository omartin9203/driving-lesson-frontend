<template>
  <nav>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title
        class="text-uppercase"
        :class="{ 'my_v-toolbar__title pl-0': $vuetify.breakpoint.xsOnly }"
      >
        <span
          class="font-weight-light"
          :class="{ 'body-1': $vuetify.breakpoint.xsOnly }"
          >Driving</span
        >
        <span
          class="font-weight-medium"
          :class="{ 'body-1': $vuetify.breakpoint.xsOnly }"
          >Lessons</span
        >
      </v-toolbar-title>
      <v-spacer />
      <!--      Notifications button-->
      <notification />
      <!--      Profile button-->
      <user-options />
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      dark
      app
      temporary
    >
      <v-divider
        style="border-color: white; width: calc(100% - 30px); margin-left: 15px;"
        class="mb-3"
      />
      <v-list>
        <v-list-item
          v-for="link in filterLinks()"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-icon>
            <v-icon class="white--text">
              {{ link.icon }}
            </v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">
              {{ link.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";
import Notification from "./Notification.vue";
import UserOptions from "@/components/layouts/UserOptions.vue";

@Component({
  components: { UserOptions, Notification }
})
export default class Navbar extends Vue {
  drawer = null;
  links = [
    {
      icon: "dashboard",
      text: "Dashboard",
      route: "/dashboard",
      roles: []
    },
  ];
  baseUrl = process.env.BASE_URL;

  hasPermission(roles: string[]): boolean {
    return true;
    // if (!this.user) return false;
    // return (
    //   !roles.length ||
    //   roles.some((r: string) => this.user.roles.some((x: string) => x == r))
    // );
  }
  filterLinks() {
    return this.links.filter((x: any) => this.hasPermission(x.roles));
  }
}
</script>

<style scoped>

</style>
