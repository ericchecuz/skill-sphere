<template>
  <v-container style="background-color:#BBDEFB; flex-direction: column;">
    <h2>Containment Components</h2>
    
    <!-- Button -->
    <div>
      <div style="padding: 2%;">
        <!-- Default Button -->
        <v-btn size="small" color="primary">Primary Button</v-btn>

        <!-- Raised Button -->
        <v-btn raised color="secondary">Raised Button</v-btn>

        <!-- Outline Button -->
        <v-btn outlined color="success">Outlined Button</v-btn>

        <!-- Flat Button -->
        <v-btn flat color="error">Flat Button</v-btn>

        <!-- Icon Button -->
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </div>
      <div style="padding: 2%;">
        <v-row align="center" justify="center">
          <v-col cols="auto">
            <v-btn size="x-small">Extra small Button</v-btn>
          </v-col>

          <v-col cols="auto">
            <v-btn size="small">Small Button</v-btn>
          </v-col>

          <v-col cols="auto">
            <v-btn>Regular Button</v-btn>
          </v-col>

          <v-col cols="auto">
            <v-btn size="large">Large Button</v-btn>
          </v-col>

          <v-col cols="auto">
            <v-btn size="x-large">X-Large Button</v-btn>
          </v-col>
        </v-row>
      </div>
    </div>

    <div class="d-flex justify-center align-center ga-2">
    <v-label style="width: 100px">default</v-label>

    <!-- Chip -->

    <v-chip size="x-small">
      x-small
    </v-chip>

    <v-chip size="small">
      small
    </v-chip>

    <v-chip>
      default
    </v-chip>

    <v-chip size="large">
      large
    </v-chip>

    <v-chip size="x-large">
      x-large
    </v-chip>
  </div>
  <div class="d-flex justify-center align-center ga-2 mt-2">
    <v-label style="width: 100px">comfortable</v-label>

    <v-chip density="comfortable" size="x-small">
      x-small
    </v-chip>

    <v-chip density="comfortable" size="small">
      small
    </v-chip>

    <v-chip density="comfortable">
      default
    </v-chip>

    <v-chip density="comfortable" size="large">
      large
    </v-chip>

    <v-chip density="comfortable" size="x-large">
      x-large
    </v-chip>
  </div>
  <div class="d-flex justify-center align-center ga-2 mt-2">
    <v-label style="width: 100px">compact</v-label>

    <v-chip density="compact" size="x-small">
      x-small
    </v-chip>

    <v-chip density="compact" size="small">
      small
    </v-chip>

    <v-chip density="compact">
      default
    </v-chip>

    <v-chip density="compact" size="large">
      large
    </v-chip>

    <v-chip density="compact" size="x-large">
      x-large
    </v-chip>

  </div>
  <div class="text-center">
    <v-chip
      class="ma-2"
      label
    >
      Label
    </v-chip>

    <v-chip
      class="ma-2"
      color="pink"
      label
    >
      <v-icon icon="mdi-label" start></v-icon>
      Tags
    </v-chip>

    <v-chip
      class="ma-2"
      color="primary"
      label
    >
      <v-icon icon="mdi-account-circle-outline" start></v-icon>
      John Leider
    </v-chip>

    <v-chip
      class="ma-2"
      color="cyan"
      closable
      label
    >
      <v-icon icon="mdi-twitter" start></v-icon>
      New Tweets
    </v-chip>
  </div>
  <div class="text-center">
    <v-chip
      class="ma-2"
      color="indigo"
      prepend-icon="mdi-account-circle"
    >
      Mike
    </v-chip>

    <v-chip
      append-icon="mdi-star"
      class="ma-2"
      color="orange"
    >
      Premium
    </v-chip>

    <v-chip
      append-icon="mdi-cake-variant"
      class="ma-2"
      color="primary"
    >
      1 Year
    </v-chip>

    <v-chip
      class="ma-2"
      color="green"
    >
      <template v-slot:prepend>
        <v-avatar
          class="green-darken-4"
        >
          1
        </v-avatar>
      </template>
      Years
    </v-chip>

    <v-chip
      :model-value="true"
      class="ma-2"
      color="teal"
      prepend-icon="mdi-checkbox-marked-circle"
      closable
    >
      Confirmed
    </v-chip>

    <v-chip
      :model-value="true"
      class="ma-2"
      close-icon="mdi-delete"
      color="teal"
      prepend-icon="mdi-checkbox-marked-circle"
      closable
    >
      Confirmed
    </v-chip>
  </div>

    <!-- Card -->
     <v-row align="center" justify="center" dense style="margin-bottom: 25px;">
    <v-col cols="12" md="6">
      <v-card
        append-icon="mdi-check"
        class="mx-auto"
        prepend-icon="mdi-account"
        subtitle="prepend-icon and append-icon"
        title="Icons"
      >
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="6">
      <v-card
        class="mx-auto"
        subtitle="prepend and append"
        title="Icons"
      >
        <template v-slot:prepend>
          <v-icon color="primary" icon="mdi-account"></v-icon>
        </template>
        <template v-slot:append>
          <v-icon color="success" icon="mdi-check"></v-icon>
        </template>
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="6">
      <v-card
        append-avatar="https://cdn.vuetifyjs.com/images/john.jpg"
        class="mx-auto"
        prepend-avatar="https://cdn.vuetifyjs.com/images/logos/v-alt.svg"
        subtitle="prepend-avatar and append-avatar"
        title="Avatars"
      >
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
      </v-card>
    </v-col>

    <v-col cols="12" md="6">
      <v-card
        class="mx-auto"
        subtitle="prepend and append"
        title="Avatars"
      >
        <template v-slot:prepend>
          <v-avatar color="blue-darken-2">
            <v-icon icon="mdi-alarm"></v-icon>
          </v-avatar>
        </template>
        <template v-slot:append>
          <v-avatar size="24">
            <v-img
              alt="John"
              src="https://cdn.vuetifyjs.com/images/john.png"
            ></v-img>
          </v-avatar>
        </template>
        <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</v-card-text>
      </v-card>
    </v-col>
  </v-row>
<v-card
    class="mx-auto"
    prepend-icon="$vuetify"
    subtitle="The #1 Vue UI Library"
    width="400"
    style="margin-bottom: 25px;"
  >
    <template v-slot:title>
      <span class="font-weight-black">Welcome to Vuetify</span>
    </template>

    <v-card-text class="bg-surface-light pt-4">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!
    </v-card-text>
  </v-card>

   <v-card
    class="mx-auto"
    max-width="344"
    style="margin-bottom: 25px;"
  >
    <v-card-text>
      <div>Word of the Day</div>

      <p class="text-h4 font-weight-black">el·ee·mos·y·nar·y</p>

      <p>adjective</p>

      <div class="text-medium-emphasis">
        relating to or dependent on charity; charitable; charitable donations. Pertaining to alms.<br>
        "an eleemosynary educational institution."
      </div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="teal-accent-4"
        text="Learn More"
        variant="text"
        @click="reveal = true"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <v-card
        v-if="reveal"
        class="position-absolute w-100"
        height="100%"
        style="bottom: 0;"
      >
        <v-card-text class="pb-0">
          <p class="text-h4">Origin</p>

          <p class="text-medium-emphasis">
            late 16th century (as a noun denoting a place where alms were distributed): from medieval Latin eleemosynarius, from late Latin eleemosyna ‘alms’, from Greek eleēmosunē ‘compassion’
          </p>
        </v-card-text>

        <v-card-actions class="pt-0">
          <v-btn
            color="teal-accent-4"
            text="Close"
            variant="text"
            @click="reveal = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-expand-transition>
  </v-card>

     <v-card
    class="mx-auto"
    max-width="450"
  >
    <v-img
      :aspect-ratio="16/9"
      src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
      cover
    >
    </v-img>
    <v-card-title class="flex-column align-start">
      <div class="text-h4 mb-2">
        Welcome Home...
      </div>
      <div class="text-h6 font-weight-regular text-grey">
        Monday, 12:30 PM, Mostly Sunny
      </div>
      <div class="d-flex align-center">
        <v-avatar
          class="me-4"
          size="24"
        >
          <v-img
            src="https://cdn.vuetifyjs.com/images/weather/part-cloud-48px.png"
            contain
          ></v-img>
        </v-avatar>

        <span class="text-body-2 text-grey">81° / 62°</span>
      </div>
    </v-card-title>

    <v-divider class="mx-4"></v-divider>

    <v-card-text class="d-flex justify-space-between">
      <v-chip
        prepend-icon="mdi-brightness-5"
        @click="lights"
      >
        Turn on lights
      </v-chip>
      <v-chip
        prepend-icon="mdi-alarm-check"
        @click="alarm"
      >
        Set alarm
      </v-chip>
      <v-chip
        icon="mdi-blinds"
        @click="blinds"
      >
        Close blinds
      </v-chip>
    </v-card-text>

  </v-card>
<v-card class="mx-auto" max-width="400" style="margin-top: 25px;">
    <v-img
      color="surface-variant"
      height="200"
      src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg"
      cover
    >
      <v-toolbar color="transparent">
        <template v-slot:prepend>
          <v-btn icon="$menu"></v-btn>
        </template>

        <v-toolbar-title class="text-h6" text="Messages"></v-toolbar-title>

        <template v-slot:append>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
      </v-toolbar>
    </v-img>

    <v-card-text>
      <div class="font-weight-bold ms-1 mb-2">Today</div>

      <v-timeline align="start" density="compact">
        <v-timeline-item
          v-for="message in messages"
          :key="message.time"
          :dot-color="message.color"
          size="x-small"
        >
          <div class="mb-4">
            <div class="font-weight-normal">
              <strong>{{ message.from }}</strong> @{{ message.time }}
            </div>

            <div>{{ message.message }}</div>
          </div>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </v-card>

  
<v-card style="margin-top: 25px;"
    class="mx-auto"
    max-width="344"
  >
    <v-img
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      cover
    ></v-img>

    <v-card-title>
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        text="Explore"
      ></v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>

  <v-card
  style="margin-top: 25px;"
    class="mx-auto"
    max-width="500"
  >
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
              cover
            >
              <v-card-title class="text-white" v-text="card.title"></v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <v-btn
                color="medium-emphasis"
                icon="mdi-heart"
                size="small"
              ></v-btn>

              <v-btn
                color="medium-emphasis"
                icon="mdi-bookmark"
                size="small"
              ></v-btn>

              <v-btn
                color="medium-emphasis"
                icon="mdi-share-variant"
                size="small"
              ></v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>

   <v-container>
    <v-card style="margin-top: 25px;"> 
      <v-card-title class="text-overline">
        Progress

        <div class="text-green-darken-3 text-h3 font-weight-bold">90%</div>

        <div class="text-h6 text-medium-emphasis font-weight-regular">
          $2,938.00 remaining
        </div>
      </v-card-title>
      <br>
      <v-card-text>
        <div
          :style="`right: calc(${review} - 32px)`"
          class="position-absolute mt-n8 text-caption text-green-darken-3"
        >
          Eligibility review
        </div>
        <v-progress-linear
          color="green-darken-3"
          height="22"
          model-value="90"
          rounded="lg"
        >
          <v-badge
            :style="`right: ${review}`"
            class="position-absolute"
            color="white"
            dot
            inline
          ></v-badge>
        </v-progress-linear>

        <div class="d-flex justify-space-between py-3">
          <span class="text-green-darken-3 font-weight-medium">
            $26,442.00 remitted
          </span>

          <span class="text-medium-emphasis"> $29,380.00 total </span>
        </div>
      </v-card-text>

      <v-divider></v-divider>

      <v-list-item
        append-icon="mdi-chevron-right"
        lines="two"
        subtitle="Details and agreement"
        link
      ></v-list-item>
    </v-card>
  </v-container>

    <div style="display: flex; padding: 2%; flex-direction: column; gap: 25px;">
      <!-- Basic Card -->
      <v-card>
        <v-card-title>Card Title</v-card-title>
        <v-card-subtitle>Card Subtitle</v-card-subtitle>
        <v-card-text>This is some content inside the card.</v-card-text>
        <v-card-actions>
          <v-btn text>Action</v-btn>
        </v-card-actions>
      </v-card>

      <!-- Card with Image -->
      <v-card>
        <v-img src="https://via.placeholder.com/300x200" height="200px"></v-img>
        <v-card-title>Card Title with Image</v-card-title>
        <v-card-text>Content below the image.</v-card-text>
      </v-card>

      <!-- Card with Actions -->
      <v-card>
        <v-card-title>Card with Actions</v-card-title>
        <v-card-text>Here are some actions for this card.</v-card-text>
        <v-card-actions>
          <v-btn color="primary">Action 1</v-btn>
          <v-btn color="secondary">Action 2</v-btn>
        </v-card-actions>
      </v-card>
      
      <!-- Hoverable Card -->
      <v-card hover>
        <v-card-title>Hoverable Card</v-card-title>
        <v-card-text>This card changes on hover.</v-card-text>
      </v-card>
    </div>

    <!-- List -->
    <v-list style="margin-bottom: 25px;">
      <v-list-item v-for="(item, index) in items" :key="index">
        <v-list-item-content>
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <!-- Divider -->
    <v-divider></v-divider>

    <!-- Expansion Panels -->
    <v-expansion-panels>
      <v-expansion-panel
    title="Title"
    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
  >
      </v-expansion-panel>
      <v-expansion-panel
    title="Title"
    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
  >
      </v-expansion-panel>
      <v-expansion-panel
    title="Title"
    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima"
  >
      </v-expansion-panel>
    </v-expansion-panels>

    <!-- Dialog -->
    <v-dialog max-width="500" >
  <template  v-slot:activator="{ props: activatorProps }">
    <v-btn style="margin-top: 25px;"
      v-bind="activatorProps"
      color="surface-variant"
      text="Open Dialog"
      variant="flat"
    ></v-btn>
  </template>

  <template v-slot:default="{ isActive }">
    <v-card title="Dialog">
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          text="Close Dialog"
          @click="isActive.value = false"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </template>
</v-dialog>

<div class="pa-4 text-center">
    <v-dialog
      v-model="dialog"
      max-width="600"
    >
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          class="text-none font-weight-regular"
          prepend-icon="mdi-account"
          text="Edit Profile"
          variant="tonal"
          v-bind="activatorProps"
        ></v-btn>
      </template>

      <v-card
        prepend-icon="mdi-account"
        title="User Profile"
      >
        <v-card-text>
          <v-row dense>
            <v-col
              cols="12"
              md="4"
              sm="6"
            >
              <v-text-field
                label="First name*"
                required
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="4"
              sm="6"
            >
              <v-text-field
                hint="example of helper text only on focus"
                label="Middle name"
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="4"
              sm="6"
            >
              <v-text-field
                hint="example of persistent helper text"
                label="Last name*"
                persistent-hint
                required
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="4"
              sm="6"
            >
              <v-text-field
                label="Email*"
                required
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="4"
              sm="6"
            >
              <v-text-field
                label="Password*"
                type="password"
                required
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              md="4"
              sm="6"
            >
              <v-text-field
                label="Confirm Password*"
                type="password"
                required
              ></v-text-field>
            </v-col>

            <v-col
              cols="12"
              sm="6"
            >
              <v-select
                :items="['0-17', '18-29', '30-54', '54+']"
                label="Age*"
                required
              ></v-select>
            </v-col>

            <v-col
              cols="12"
              sm="6"
            >
              <v-autocomplete
                :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                label="Interests"
                auto-select-first
                multiple
              ></v-autocomplete>
            </v-col>
          </v-row>

          <small class="text-caption text-medium-emphasis">*indicates required field</small>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text="Close"
            variant="plain"
            @click="dialog = false"
          ></v-btn>

          <v-btn
            color="primary"
            text="Save"
            variant="tonal"
            @click="dialog = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>

  <div class="pa-4 text-center">
    <v-btn
      :disabled="dialog"
      color="primary"
      icon="mdi-refresh"
      text="Start loading"
      @click="dialog = true"
    ></v-btn>

    <v-dialog
      v-model="dialog"
      max-width="320"
      persistent
    >
      <v-list
        class="py-2"
        color="primary"
        elevation="12"
        rounded="lg"
      >
        <v-list-item
          prepend-icon="$vuetify-outline"
          title="Refreshing Application..."
        >
          <template v-slot:prepend>
            <div class="pe-4">
              <v-icon color="primary" size="x-large"></v-icon>
            </div>
          </template>

          <template v-slot:append>
            <v-progress-circular
              color="primary"
              indeterminate="disable-shrink"
              size="16"
              width="2"
            ></v-progress-circular>
          </template>
        </v-list-item>
      </v-list>
    </v-dialog>
  </div>

    <!-- Pagination -->
    <v-pagination v-model="page" :length="5"></v-pagination>
    
  </v-container>
   
</template>

<script>
export default {
  name: "ContainmentComponents",

  data() {
      return {
        cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      ],
        messages: [
        {
          from: 'You',
          message: `Sure, I'll see you later.`,
          time: '10:42am',
          color: 'deep-purple-lighten-1',
        },
        {
          from: 'John Doe',
          message: 'Yeah, sure. Does 1:00pm work?',
          time: '10:37am',
          color: 'green',
        },
        {
          from: 'You',
          message: 'Did you still want to grab lunch today?',
          time: '9:47am',
          color: 'deep-purple-lighten-1',
        },
          ],
      review: '30%',
      items: ["Item 1", "Item 2", "Item 3"],
      dialog: false,
        page: 1,
        reveal: false,
       show: false,
      };
      
    
  },
     watch: {
      dialog (val) {
        if (!val) return

        setTimeout(() => (this.dialog = false), 4000)
      },
    },
     methods: {
      alarm () {
        alert('Turning on alarm...')
      },
      blinds () {
        alert('Toggling blinds...')
      },
      lights () {
        alert('Toggling lights...')
          },
      removeChip() {
      console.log("Chip removed");
      }
    },
};
</script>
