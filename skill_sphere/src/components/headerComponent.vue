<template>
<v-app-bar app color="primary" dark>
  <v-toolbar-title>Gestione Competenze</v-toolbar-title>
  <v-spacer></v-spacer>
  <v-btn text to="/roadmap">Roadmap</v-btn>
  <v-btn text to="/matching">Matching</v-btn>
  <v-btn text to="/workspace">Workspace</v-btn>
  <v-btn text to="/showcase">Showcase</v-btn> <!-- Aggiungi il link allo showcase -->
</v-app-bar>
</template>
<script>
export default {
  name: 'HeaderComponent'
};
</script>
