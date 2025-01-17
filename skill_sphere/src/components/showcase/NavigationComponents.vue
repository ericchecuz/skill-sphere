<template>
  <v-container>
    <h2>Navigation Components</h2>
    <!-- App Bar -->
    <v-app-bar>
      <v-toolbar-title>App Bar</v-toolbar-title>
    </v-app-bar>

    <!-- Navigation Drawer -->
    <v-navigation-drawer permanent>
      <v-list>
        <v-list-item v-for="item in items" :key="item">
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Pagination -->
    <v-pagination v-model="page" :length="10" class="mt-4" />
  </v-container>
</template>

<script>
export default {
    name: 'NavigationComponets',
  data() {
    return {
      items: ["Home", "About", "Contact"],
      page: 1,
    };
  },
};
</script>