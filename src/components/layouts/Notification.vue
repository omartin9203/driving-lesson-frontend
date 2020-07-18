<template>
  <v-menu bottom :offset-y="true">
    <template v-slot:activator="{ on }">
      <v-btn text v-on="on">
        <v-badge overlap bordered content="1">
          <v-icon>
            mdi-bell
          </v-icon>
        </v-badge>
      </v-btn>
    </template>

    <v-list dense>
      <v-list-item-group v-model="selected">
        <template v-for="(item, index) in itemsNotifications">
          <v-hover v-slot:default="{ hover }" :key="index">
            <v-list-item class="tile">
              <v-list-item-title :class="{ 'white--text': hover }">{{
                item.title
                }}</v-list-item-title>
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
export default class Notification extends Vue {
  itemsNotifications = [{ title: "coming soon" }, { title: "coming soon" }];
}
</script>

<style scoped>

</style>
