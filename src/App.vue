<template>
  <v-app >
    <v-main>
      <Navbar/>
        <router-view>
        </router-view>
      <Footer/>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    Navbar,
    Footer
  },

  data: () => ({
    //
  }),
  // computed: {
  //   isLogin() {
  //     return this.$store.state.isLogin
  //   }
  // }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');
* {
  font-family: 'Open Sans', sans-serif;
}

#app {
  background: #fcfaf2;
}
</style>