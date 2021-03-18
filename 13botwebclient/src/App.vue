<template>
  <v-app class="app">
    <v-app-bar  app >
      <v-row>
        <v-col xs="3" md="2">
          <router-link style="text-decoration: none; color: inherit;" to="/">
          <v-toolbar-title>
                Kandem kandem
          </v-toolbar-title>

            </router-link>
          
              

          </v-col>
          <v-col sm="4">
             <router-link style="text-decoration: none; color: inherit;" to="/statistiche">
                         <v-btn outlined elevation="1">
              Statistiche
             
            </v-btn>
            </router-link>

          </v-col>
        </v-row>

    </v-app-bar>
    <v-main class="app">
      <v-container fluid>
        <router-view></router-view>
      </v-container>

    </v-main>

  </v-app>
</template>

<script>
export default {
  methods:{

  }
}
</script>

<style>
.app{
  background-color: #e9c46a;
}

</style>
