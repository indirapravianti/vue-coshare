<template>
  <v-container height="800">
      <v-row justify="center" align="center">
          <v-col md="4" offset-lg="1">
              <h1>Level up your skills with with us!</h1>
              <p>It's a natural approach to learning new skills. Jump in and give it a go!</p>
              <v-btn to="/courses" depressed elevation="2" color="primary">Get started</v-btn>
          </v-col>
          <v-col md="6" lg="6">
              <img src="/img/homepage.png" alt="" :height="sheetHeight">
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
    computed: {
         sheetHeight() {
             switch (this.$vuetify.breakpoint.name) {
                 case 'xs': return '400px'
                 case 'sm': return '500px'
                 case 'md': return '500px'
                 case 'lg': return '600px'                 
                 case 'xl': return '600px'
              }
          return '300px'
          }
      }
}
</script>