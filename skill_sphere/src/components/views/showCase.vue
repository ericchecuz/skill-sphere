<template>
  <v-app>
    <Header/>
    <v-main>
      <v-container style="background-color:#BBDEFB ;">
        <v-row>
            <SideBar />
          <v-col cols="9">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SideBar from "@/components/sideBarComponent.vue";
import Header from "@/components/headerComponent.vue";

export default {
  name: 'ShowcaseView',
  components: {
    SideBar,
    Header,
  },
};
</script>

