<template>
  <v-form ref="form" lazy-validation>
    <h2>Sign up</h2>
    <v-text-field
      v-model="username"
      :counter="15"
      label="Username"
      required
    ></v-text-field>

    <v-text-field v-model="email" label="E-mail" required></v-text-field>

    <v-text-field v-model="password" label="Password" required></v-text-field>

    <p v-if="msg">{{ msg }}</p>
    <v-btn color="success" class="mr-4" @click="signUp">
      Sign up
    </v-btn>
  </v-form>
</template>
<script>
import AuthService from "@/services/AuthService.js";
export default {
  name: "register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
      msg: ""
    };
  },

  methods: {
    async signUp() {
      try {
        const credentials = {
          username: this.username,
          email: this.email,
          password: this.password
        };
        const response = await AuthService.signUp(credentials);
        this.msg = response.msg;
      } catch (error) {
        this.msg = console.error.response.data.msg;
      }
    }
  }
};
</script>
