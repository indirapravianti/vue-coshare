<template>
  <v-content>
    <v-card class="mx-auto mt-9 px-8 py-8 elevation-0" width="500">
      <v-card-title class="font-weight-black display-2" align="center">Log in to have fun and learn faster</v-card-title>
      <v-card-text class="mt-9">
        <v-text-field label="Username" prepend-icon="mdi-account-circle"></v-text-field>
        <v-text-field label="Password" type="password" prepend-icon="mdi-lock"></v-text-field>
      </v-card-text>
      <v-card-actions class="mt-4">
        <v-btn depressed flat block elevation="2" class="rounded-xl text-none px-6 py-6" color="primary">Login</v-btn>
      </v-card-actions>
      <v-card-actions>
        <v-btn to="signup" depressed color="white" class="text-decoration-underline text-none">Don't have an account? Sign up now!</v-btn>
      </v-card-actions>
    </v-card>
  </v-content>
</template>
