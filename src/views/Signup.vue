<template>
  <v-content>
    <v-form>
      <v-card class="mx-auto my-9 px-8 py-8 elevation-0" width="500">
      <v-card-title :class="fontSize" class="font-weight-black display-1">Create your account now!</v-card-title>
      <p class="body-2">Join the fastest, most enjoyable way to learn a new skill. 
          We'll personalise your learning experience from the get go. 
          By getting just the right level of challenge you'll stay motivated, 
          and our proven learning techniques will speed up your learning so 
          you'll nail your goals in no time!</p>
      <v-alert color="error" :value="error" icon="mdi-close" class="white--text">Username or password or email is invalid</v-alert>
      <v-card-text class="mt-9">
        <v-text-field v-model="username" label="Username" prepend-icon="mdi-account-circle"></v-text-field>
        <v-text-field v-model="email" label="E-mail" prepend-icon="mdi-email"></v-text-field>
        <v-text-field v-on:keyup.enter="register" v-model="password" label="Password" type="password" prepend-icon="mdi-lock"></v-text-field>
      </v-card-text>
      <v-card-actions class="mt-4">
        <v-btn @click.prevent="register" depressed block elevation="2" class="rounded-xl text-none px-6 py-6" color="primary">Register</v-btn>
      </v-card-actions>
      <v-card-actions>
        <v-btn to="login" elevation="0" depressed color="white" class="text-decoration-underline text-none">Have an account? Log in now</v-btn>
      </v-card-actions>
    </v-card>
    </v-form>
  </v-content>
</template>


<script>
import axios from 'axios'
export default {
  name: 'Signup',
  data: function() {
    return {
      email: '',
      username: '',
      password:'',
      error: false
    }
  },
  methods: {
    register() {
      axios({
        method: 'post',
        url:'http://ec2-54-146-85-74.compute-1.amazonaws.com/v1/api/register',
        data: {
          username : this.username,
          password : this.password,
          email : this.email
        }
      })
      .then((response) => {
        if (response.data.statusCode == 200){
          this.$router.push('/login')
        }
        else{
          this.error = true
        }
      })
    }
  },
  computed: {
    fontSize() {
        switch (this.$vuetify.breakpoint.name) {
            case 'xs': return 'headline'
            case 'sm': return 'headline'
        }
    return '300px'
    }
  }
}
</script>