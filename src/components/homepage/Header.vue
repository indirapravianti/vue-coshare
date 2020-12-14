<template>
    <div :style="{backgroundColor: darkColor}">
        <v-container class="py-10">
            <v-row justify="center" align="center">
                <v-col md="4" offset-lg="1">
                    <h1 class="giant-text primary--text mb-4">COSHARE</h1>
                    <h1 class="third--text">Level up your skills with with us!</h1>
                    <p class="third--text">It's a natural approach to learning new skills. Jump in and give it a go!</p>
                    <v-btn to="/courses" depressed color="primary" class="float-on-hover pa-6 mt-6 font-weight-bold secondary--text" 
                    >Get started</v-btn>
                </v-col>
                <v-col md="6" lg="6">
                    <img src="/img/homepage.png" alt="" :height="sheetHeight">
                </v-col>
            </v-row>
        </v-container>
    </div>
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
    },
    data() {
        return {
                darkColor: "#2b3648"
        }
    }
}
</script>

<style>
.float-on-hover {
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
.float-on-hover:hover, .float-on-hover:focus, .float-on-hover:active {
  -webkit-transform: translateY(-10px);
  transform: translateY(-10px);
}
.giant-text {
    font-size: 56px;
    font-weight: 800;
    letter-spacing: 1.2px;
    transform: rotate(-3deg);
}
</style>