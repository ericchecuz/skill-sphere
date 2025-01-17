<template>
  <v-app>
    <v-main>
      <v-container class="pa-5">
        <v-form>
          <!-- Text Field -->
          <v-text-field
            v-model="textField"
            label="Nome"
            placeholder="Inserisci il tuo nome"
            outlined
            required
          ></v-text-field>

          <!-- Number Input -->
          <v-text-field
            v-model="numberField"
            label="Età"
            placeholder="Inserisci la tua età"
            type="number"
            outlined
            required
          ></v-text-field>

          <!-- Checkbox -->
          <v-checkbox
            v-model="agreeCheckbox"
            label="Accetto i termini e le condizioni"
            required
          ></v-checkbox>

          <!-- Select -->
          <v-select
            v-model="selectedOption"
            :items="options"
            label="Seleziona una competenza"
            required
          ></v-select>

          <!-- File Input -->
          <v-file-input
            v-model="fileInput"
            label="Carica il tuo curriculum"
            outlined
            accept=".pdf,.docx"
          ></v-file-input>

          <!-- Submit Button -->
          <v-btn @click="submitForm" color="primary" class="mt-4">
            Invia
          </v-btn>
        </v-form>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'FormInput',

  data() {
    return {
      textField: '',
      numberField: null,
      agreeCheckbox: false,
      selectedOption: null,
      options: ['Sviluppatore', 'Designer', 'Project Manager', 'Tester'],
      fileInput: null,
    };
  },

  methods: {
    submitForm() {
      // Funzione per inviare i dati del form
      console.log('Form Submitted:', {
        nome: this.textField,
        età: this.numberField,
        accettazione: this.agreeCheckbox,
        competenza: this.selectedOption,
        file: this.fileInput,
      });
    },
  },
};
</script>

<style scoped>
.v-btn {
  display: block;
  margin-top: 20px;
}
</style>
