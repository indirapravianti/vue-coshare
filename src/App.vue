<template>
  <v-app>
      <MyNavbar/>
        <router-view>
        </router-view>
      <MyFooter/>
  </v-app>
</template>

<script>
import MyNavbar from './components/Navbar';
import MyFooter from './components/Footer';

export default {
    name: 'App',

    components: {
      MyNavbar,
      MyFooter
    },

    data() {
      return {
        categoryIds: {
                'Programming': 1,
                'Data Science': 2,
                'UX Design': 3,
                'Web Development': 4,
                'Marketing': 5
            },
      }
    }

};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&display=swap');
* {
  font-family: 'Open Sans', sans-serif;
}

#app {
  background: #fcfaf2;
}
</style>