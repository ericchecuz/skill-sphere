<template>
  <v-navigation-drawer app permanent>
    <v-list>
      <v-list-item-group>
        <v-list-item v-for="item in menuItems" :key="item.text" :to="item.route">
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { text: "Containment", route: "/showcase/containment" },
        { text: "Navigation", route: "/showcase/navigation" },
        { text: "Form Inputs", route: "/showcase/form-inputs" },
        { text: "Layouts", route: "/showcase/layouts" },
        { text: "Feedback", route: "/showcase/feedback" },
        { text: "Data Display", route: "/showcase/data-display" },
        { text: "Pickers", route: "/showcase/pickers" },
        { text: "Images and Icons", route: "/showcase/images-and-icons" },
      ],
    };
  },
};
</script>
