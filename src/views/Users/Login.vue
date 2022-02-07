<template>
  <v-form ref="form" lazy-validation>
    <h2 style="text-center">LOG IN</h2>
    <v-text-field
      v-model="username"
      :counter="15"
      label="Username"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :items="password"
      label="Password"
      required
    ></v-text-field>
    <p v-if="msg">{{ msg }}</p>
    <v-btn  color="success" @click="logIn">
      Log in
    </v-btn>

   
  </v-form>
</template>
<script>
import AuthService from "@/services/AuthService.js";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      msg: ""
    };
  },

  methods: {
    async logIn() {
      try {
        const credentials={
          username:this.username,
          password:this.password
        };
        const response = await AuthService.logIn(credentials);
        this.msg = response.msg;

        const token = response.token;
        const user = response.user;

        this.$store.dispatch('login',{token, user});

        this.$router.push("/")
      } catch (error) {
         this.msg = error.response.data.msg;
      }
    }
  }
};
</script>
