<template>
  <v-navigation-drawer app width="250" floating>
    <div class="vertical-nav-header ">
      <v-toolbar color="green lighten-2">
        <v-img
          :src="require('@/assets/logo.jpg')"
          max-height="50px"
          max-width="50px"
          alt="logo"
          contain
          eager
          class="mr-3"
        ></v-img>

        <v-toolbar-title>Hang Thao</v-toolbar-title>
      </v-toolbar>
    </div>
    <v-list nav dense flat>
      <v-list-item-group color="indigo">
        <v-list-item link>
          <v-list-item-icon>
            <v-icon class="mr-3">mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Dashboard</v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{ name: 'customer' }">
          <v-list-item-icon>
            <v-icon class="mr-3">mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Customer</v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{ name: 'ticket' }">
          <v-list-item-icon>
            <v-icon class="mr-3">mdi-ticket</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Ticket</v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{ name: 'Vehicle' }">
          <v-list-item-icon>
            <v-icon class="mr-3">mdi-car</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Vehicle</v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{ name: 'distance' }">
          <v-list-item-icon>
            <v-icon class="mr-3">mdi-routes</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Distance</v-list-item-content>
        </v-list-item>
        <v-list-item :to="{ name: 'login' }">
          <v-list-item-icon>
            <v-icon class="mr-3">mdi-login</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Login</v-list-item-content>
        </v-list-item>
        <v-list-item :to="{ name: 'register' }">
          <v-list-item-icon>
            <v-icon class="mr-3">mdi-account-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Register</v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item class="mt-3" :to="{ name: 'statistic' }">
          <v-list-item-icon>
            <v-icon class="mr-3">mdi-chart-box</v-icon>
          </v-list-item-icon>
          <v-list-item-content>Statistic</v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style></style>
