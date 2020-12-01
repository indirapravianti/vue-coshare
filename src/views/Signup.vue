<template>
  <v-content>
    <v-card class="mx-auto mt-9 px-8 py-8 elevation-0" width="500">
      <v-card-title :class="fontSize" class="font-weight-black display-1">Create your account now!</v-card-title>
      <p class="body-2">Join the fastest, most enjoyable way to learn a new skill. 
          We'll personalise your learning experience from the get go. 
          By getting just the right level of challenge you'll stay motivated, 
          and our proven learning techniques will speed up your learning so 
          you'll nail your goals in no time!</p>
      <v-card-text class="mt-9">
        <v-text-field label="Username" prepend-icon="mdi-account-circle"></v-text-field>
        <v-text-field label="E-mail" prepend-icon="mdi-email"></v-text-field>
        <v-text-field label="Password" type="password" prepend-icon="mdi-lock"></v-text-field>
      </v-card-text>
      <v-card-actions class="mt-4">
        <v-btn depressed flat block elevation="2" class="rounded-xl text-none px-6 py-6" color="primary">Register</v-btn>
      </v-card-actions>
      <v-card-actions>
        <v-btn to="login" depressed color="white" class="text-decoration-underline text-none">Have an account? Log in now</v-btn>
      </v-card-actions>
    </v-card>
  </v-content>
</template>


<script>
export default {
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