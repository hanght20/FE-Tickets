<template>
  <div>
    <v-app-bar app color="green lighten-3" >
      <!-- Left Content -->
      <v-app-bar-nav-icon class=" d-lg-none me-2"></v-app-bar-nav-icon>
      <!-- Left Content -->
      <v-text-field
        rounded
        dense
        outlined
        hide-details
        class="app-bar-search flex-grow-0"
        prepend-inner-icon="mdi-magnify"
      >
      </v-text-field>
      <v-spacer></v-spacer>
      <!-- Right Content -->

      <v-btn small icon class="ms-3">
        <v-icon>
          mdi-calculator
        </v-icon>
      </v-btn>
      <v-btn small icon class="ms-3">
        <v-icon>
          mdi-bell
        </v-icon>
      </v-btn>
      <user-menu />
    </v-app-bar>
    <v-footer app inset color="transparent" absolute height="56" class="px-0">
      <div class="boxed-container w-full">
        <div class="mx-6 d-flex">
          <span>
            &copy; 2021
          </span>
        </div>
      </div>
    </v-footer>
  </div>
</template>

<script>
import UserMenu from "./layouts/UserMenu.vue";
export default {
  components: { UserMenu },
  name: "Topbar",
  
};
</script>
<style>
.app-bar-search {
  padding-left: 18px;
}
</style>
