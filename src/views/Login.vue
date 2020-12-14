<template>
    <v-content>
        <v-form>
            <v-card class="mx-auto my-9 px-8 py-8 elevation-0" width="500">
              <v-card-title class="font-weight-black display-2" align="center">Log in to have fun and learn faster</v-card-title>
              <v-alert color="error" :value="error" icon="mdi-close" class="white--text">Username or password is invalid</v-alert>
              <v-card-text class="mt-9">
                  <v-text-field v-model="username" label="Username" prepend-icon="mdi-account-circle"></v-text-field>
                  <v-text-field v-on:keyup.enter="logIn" v-model="password" label="Password" type="password" prepend-icon="mdi-lock"></v-text-field>
              </v-card-text>
              <v-card-actions class="mt-4">
                  <v-btn @click.prevent="logIn" depressed block elevation="2" class="rounded-xl text-none px-6 py-6" color="primary">Login</v-btn>
              </v-card-actions>
              <v-card-actions>
                  <v-btn to="signup" elevation="0" color="white" class="text-decoration-underline text-none">Don't have an account? Sign up now!</v-btn>
              </v-card-actions>
            </v-card>
        </v-form>
    </v-content>
</template>

<script>
import axios from 'axios'

export default {
   data() {
    return {
      username: '',
      password: '',
      error: false
    }
  },
  methods: {
    logIn() {
        axios({
        method: 'post',
        url:'http://ec2-54-146-85-74.compute-1.amazonaws.com/v1/api/login',
        data: {
          username : this.username,
          password : this.password
        }
      })
      .then((response) => {
        var token = response.data.body.access_token
        if (token){
          this.$store.commit('loginUser',{
          authKey : response.data.body.access_token,
          username : this.username
        })
        this.$router.push('/')
        }
        else{
          this.error = true
        }
      }, (error) => {
        console.log(error);
      })
    }
  },
    }
  </script>