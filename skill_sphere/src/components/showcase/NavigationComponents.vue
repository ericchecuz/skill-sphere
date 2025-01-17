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

     <v-card style="margin-top: 25px; margin-bottom: 25px;">
    <v-layout>
      <v-app-bar
        color="primary"
        prominent
        
      >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>My files</v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-if="$vuetify.display.mdAndUp">
          <v-btn icon="mdi-magnify" variant="text"></v-btn>

          <v-btn icon="mdi-filter" variant="text"></v-btn>
        </template>

        <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        :location="$vuetify.display.mobile ? 'bottom' : undefined"
        temporary
      >
        <v-list
          :items="items"
        ></v-list>
      </v-navigation-drawer>

      <v-main style="height: 500px;">
        <v-card-text>
          The navigation drawer will appear from the bottom on smaller size screens.
        </v-card-text>
      </v-main>
    </v-layout>
  </v-card>

  <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        rail
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            subtitle="sandra_a88@gmailcom"
            title="Sandra Adams"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>

<v-card style="margin-top: 25px;">
    <v-layout>
      <v-navigation-drawer
        image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        theme="dark"
        permanent
      >
        <v-list nav>
          <v-list-item prepend-icon="mdi-email" title="Inbox" value="inbox"></v-list-item>
          <v-list-item prepend-icon="mdi-account-supervisor-circle" title="Supervisors" value="supervisors"></v-list-item>
          <v-list-item prepend-icon="mdi-clock-start" title="Clock-in" value="clockin"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>

    <!-- Pagination -->
    <v-pagination v-model="page" :length="10" class="mt-4" />
  </v-container>

  <v-card style="margin-top: 25px;">
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        temporary
      >
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
          title="John Leider"
        ></v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
          <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px">
        <div class="d-flex justify-center align-center h-100">
          <v-btn
            color="primary"
            @click.stop="drawer = !drawer"
          >
            Toggle
          </v-btn>
        </div>
      </v-main>
    </v-layout>
  </v-card>
  
</template>

<script>
export default {
    name: 'NavigationComponets',
  data() {
    return {
      items: ["Home", "About", "Contact"],
        page: 1,
      drawer: null,
    };
  },
};
</script>