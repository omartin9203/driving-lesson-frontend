<template>
  <v-app class="grey lighten-4">
    <navbar />
    <v-content class="mx-4 my-3">
      <notifications style="margin-top: 70px; margin-right: 6px">
        <template slot="body" slot-scope="props">
          <v-alert
            border="bottom"
            colored-border
            :type="props.item.type"
            elevation="3"
            dense
            prominent
            tile
            :icon="null"
            dismissible
            @toggle="props.close"
          >
            <span class="title">{{props.item.title}}</span>
            <br/>
            <span class="caption">{{props.item.text}}</span>
          </v-alert>
        </template>
      </notifications>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Navbar from "../Navbar.vue";
import Vue from "vue";
import {Component} from "vue-property-decorator";

@Component({
  components: {
    Navbar,
  }
})
export default class AppLayout extends Vue {

}
</script>
