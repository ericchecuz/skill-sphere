<template>
  <v-virtual-scroll :items="items1" height="200">
    <template v-slot:default="{ item }">
      Virtual Item {{ item }}
    </template>
  </v-virtual-scroll>

  <v-card
    class="mx-auto"
    max-width="500"
  >
    <v-card-title>
      Company Employee List
    </v-card-title>

    <v-divider></v-divider>

    <v-virtual-scroll
      :items="items1"
      height="320"
      item-height="48"
    >
      <template v-slot:default="{ item }">
        <v-list-item
          :subtitle="`Badge #${item}`"
          :title="`Employee Name`"
        >
          <template v-slot:prepend>
            <v-icon class="bg-primary">mdi-account</v-icon>
          </template>

          <template v-slot:append>
            <v-btn
              icon="mdi-pencil"
              size="x-small"
              variant="tonal"
            ></v-btn>
          </template>
        </v-list-item>
      </template>
    </v-virtual-scroll>
  </v-card>

  <v-card
    class="mx-auto"
    max-width="400"
    style="margin-top: 25px;"
  >
    <v-card-item class="bg-orange-darken-4">
      <v-card-title>
        User Directory
      </v-card-title>

      <template v-slot:append>
        <v-btn
          color="white"
          icon="mdi-plus"
          size="small"
        ></v-btn>
      </template>
    </v-card-item>

    <v-card-text class="pt-4">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi nobis a at voluptates culpa optio amet! Inventore deserunt voluptatem maxime a veniam placeat, eos impedit nulla quos? Officiis, aperiam ducimus.
    </v-card-text>

    <v-divider></v-divider>

    <v-virtual-scroll
      :items="items"
      height="300"
      item-height="50"
    >
      <template v-slot:default="{ item }">
        <v-list-item>
          <template v-slot:prepend>
            <v-avatar
              :color="item.color"
              class="text-white"
              size="40"
            >
              {{ item.initials }}
            </v-avatar>
          </template>

          <v-list-item-title>{{ item.fullName }}</v-list-item-title>

          <template v-slot:append>
            <v-btn
              size="small"
              variant="tonal"
            >
              View User

              <v-icon
                color="orange-darken-4"
                end
              >
                mdi-open-in-new
              </v-icon>
            </v-btn>
          </template>
        </v-list-item>
      </template>
    </v-virtual-scroll>
  </v-card>


  <v-card>
    <v-card-title class="bg-indigo text-white text-h5">
      User Directory
    </v-card-title>

    <v-row
      class="pa-4"
      justify="space-between"
    >
      <v-col cols="5">
        <v-treeview
          v-model:activated="active"
          v-model:opened="open"
          :items="items"
          :load-children="fetchUsers"
          color="warning"
          density="compact"
          item-title="name"
          item-value="id"
          activatable
          open-on-click
          transition
        >
          <template v-slot:prepend="{ item }">
            <v-icon v-if="!item.children">
              mdi-account
            </v-icon>
          </template>
        </v-treeview>
      </v-col>

      <v-divider vertical></v-divider>

      <v-col
        class="d-flex text-center"
      >
        <v-scroll-y-transition mode="out-in">
          <div
            v-if="!selected"
            class="text-h6 text-grey-lighten-1 font-weight-light"
            style="align-self: center;"
          >
            Select a User
          </div>
          <v-card
            v-else
            :key="selected.id"
            class="pt-6 mx-auto"
            max-width="400"
            flat
          >
            <v-card-text>
              <v-avatar
                v-if="avatar"
                size="88"
              >
                <v-img
                  :src="`https://avataaars.io/${avatar}`"
                  class="mb-6"
                ></v-img>
              </v-avatar>
              <h3 class="text-h5 mb-2">
                {{ selected.name }}
              </h3>
              <div class="text-blue mb-2">
                {{ selected.email }}
              </div>
              <div class="text-blue subheading font-weight-bold">
                {{ selected.username }}
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-row
              class="text-left"
              tag="v-card-text"
            >
              <v-col
                class="text-right me-4 mb-2"
                cols="5"
                tag="strong"
              >
                Company:
              </v-col>
              <v-col>{{ selected.company.name }}</v-col>
              <v-col
                class="text-right me-4 mb-2"
                cols="5"
                tag="strong"
              >
                Website:
              </v-col>
              <v-col>
                <a
                  :href="`//${selected.website}`"
                  target="_blank"
                >{{ selected.website }}</a>
              </v-col>
              <v-col
                class="text-right me-4 mb-2"
                cols="5"
                tag="strong"
              >
                Phone:
              </v-col>
              <v-col>{{ selected.phone }}</v-col>
            </v-row>
          </v-card>
        </v-scroll-y-transition>
      </v-col>
    </v-row>
  </v-card>

</template>
<script>
export default {
    
    data: () => ({
      items1: Array.from({ length: 1000 }, (k, v) => v + 1),
       colors: ['#2196F3', '#90CAF9', '#64B5F6', '#42A5F5', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1', '#82B1FF', '#448AFF', '#2979FF', '#2962FF'],
      names: ['Oliver', 'Jake', 'Noah', 'James', 'Jack', 'Connor', 'Liam', 'John', 'Harry', 'Callum', 'Mason', 'Robert', 'Jacob', 'Jacob', 'Jacob', 'Michael', 'Charlie', 'Kyle', 'William', 'William', 'Thomas', 'Joe', 'Ethan', 'David', 'George', 'Reece', 'Michael', 'Richard', 'Oscar', 'Rhys', 'Alexander', 'Joseph', 'James', 'Charlie', 'James', 'Charles', 'William', 'Damian', 'Daniel', 'Thomas', 'Amelia', 'Margaret', 'Emma', 'Mary', 'Olivia', 'Samantha', 'Olivia', 'Patricia', 'Isla', 'Bethany'],
      surnames: ['Smith', 'Anderson', 'Clark', 'Wright', 'Mitchell', 'Johnson', 'Thomas', 'Rodriguez', 'Lopez', 'Perez', 'Williams', 'Jackson', 'Lewis', 'Hill', 'Roberts', 'Jones', 'White', 'Lee', 'Scott', 'Turner', 'Brown', 'Harris', 'Walker', 'Green', 'Phillips', 'Davis', 'Martin', 'Hall', 'Adams', 'Campbell', 'Miller', 'Thompson', 'Allen', 'Baker', 'Parker', 'Wilson', 'Garcia', 'Young', 'Gonzalez', 'Evans', 'Moore', 'Martinez', 'Hernandez', 'Nelson', 'Edwards', 'Taylor', 'Robinson', 'King', 'Carter', 'Collins'],
    }),
    computed: {
      items () {
        const namesLength = this.names.length
        const surnamesLength = this.surnames.length
        const colorsLength = this.colors.length

        return Array.from({ length: 10000 }, () => {
          const name = this.names[this.genRandomIndex(namesLength)]
          const surname = this.surnames[this.genRandomIndex(surnamesLength)]

          return {
            color: this.colors[this.genRandomIndex(colorsLength)],
            fullName: `${name} ${surname}`,
            initials: `${name[0]} ${surname[0]}`,
          }
        })
      },
    },

    methods: {
      genRandomIndex (length) {
        return Math.ceil(Math.random() * (length - 1))
      },
    },
    
  }
</script>