<template>
  <v-app>
    <!-- Barra di navigazione -->
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Gestione Competenze</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/roadmap">Roadmap</v-btn>
      <v-btn text to="/matching">Matching</v-btn>
      <v-btn text to="/workspace">Workspace</v-btn>
    </v-app-bar>

    <!-- Sezione principale con introduzione -->
    <v-main>

      <v-container class="pa-5">
        <v-row>
          <v-col cols="12" md="6">
            <v-card class="pa-4" outlined>      
               <v-card-title class="headline">Esplora i Componenti di Vuetify 3</v-card-title>
              <v-card-subtitle>
                Scopri tutti i potenti e versatili componenti offerti da Vuetify 3 per creare interfacce utente moderne e responsive.
              </v-card-subtitle>        
              <v-btn color="primary" class="mt-4" :to="'/showcase'"  >Vai allo Showcase</v-btn>         
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card class="pa-4" outlined>
              <v-card-title class="headline">Benvenuto nella tua App di Crescita Professionale</v-card-title>
              <v-card-subtitle>
                Unisciti a una community di professionisti, apprendi nuove competenze e collabora su micro-progetti.
              </v-card-subtitle>
              <v-btn color="primary" class="mt-4" to="/roadmap">Inizia il Tuo Percorso</v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <!-- Sezione Funzionalità principali -->
      <v-container class="pa-5" fluid>
        <v-row>
          <v-col v-for="(item, index) in features" :key="index" cols="12" md="4">
            <v-card>
              <v-img :src="item.image" height="200px"></v-img>
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-subtitle>{{ item.description }}</v-card-subtitle>
              <v-card-actions>
                <v-btn text :to="item.link">Scopri di più</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      // Funzionalità principali della app
      features: [
        {
          title: "Roadmap di Apprendimento",
          description: "Crea un percorso personalizzato per acquisire nuove competenze.",
          image: "https://via.placeholder.com/400x200",
          link: "/roadmap"
        },
        {
          title: "Matching tra Professionisti",
          description: "Collegati con esperti per collaborare su micro-progetti.",
          image: "https://via.placeholder.com/400x200",
          link: "/matching"
        },
        {
          title: "Workspace Collaborativo",
          description: "Crea spazi di lavoro per progetti e discussioni.",
          image: "https://via.placeholder.com/400x200",
          link: "/workspace"
        }
      ]
    };
  }
};
</script>

<style scoped>
.v-img {
  border-radius: 10px;
}

.v-card {
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
