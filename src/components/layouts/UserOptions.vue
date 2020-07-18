<template>
  <v-menu bottom :offset-y="true">
    <template v-slot:activator="{ on }">
      <v-btn text v-on="on">
        <v-icon>
          mdi-account
        </v-icon>
      </v-btn>
    </template>

    <v-list dense>
      <v-list-item-group v-model="selected">
        <template v-for="(item, index) in itemsAccount">
          <v-hover v-slot:default="{ hover }" :key="index">
            <v-list-item
              @click="item.action"
              class="tile"
            >
              <v-list-item-icon>
                <v-icon :color="hover ? 'white' : null">
                  {{ item.icon }}
                </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title :class="{ 'white--text': hover }">
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-hover>
        </template>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import Vue from "vue";
import {Component} from "vue-property-decorator";

@Component({})
export default class UserOptions extends Vue {
  itemsAccount = [
    {
      icon: "mdi-account-circle",
      text: "View Profile",
      route: "",
      action: this.onViewProfile,
    },
    {
      icon: "exit_to_app",
      text: this.isAuthenticated ? "Sign Out" : "Sign In",
      route: "",
      action: this.isAuthenticated ? this.onSignOut : this.onSignIn,
    }
  ];
  selected = [];

  onSignIn() {
    return;
  }
  onSignOut() {
    return;
  }
  onViewProfile() {
    return;
  }

  get isAuthenticated() {
    return false;
  }
}
</script>

<style scoped>

</style>
