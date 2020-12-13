<template>
    <v-card>
        <v-footer
        class="font-weight-medium pa-10"
        color="secondary"
        >
            <v-btn depressed class="third--text secondary">
                <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn depressed class="third--text secondary">
                <v-icon>mdi-twitter</v-icon>
            </v-btn>
            <v-btn depressed class="third--text secondary">
                <v-icon>mdi-youtube</v-icon>
            </v-btn>
            <v-btn depressed class="third--text secondary">
                <v-icon>mdi-instagram</v-icon>
            </v-btn>
            <v-btn href="https://github.com/indirapravianti/vue-coshare" depressed class="third--text secondary">
                <v-icon>mdi-github</v-icon>
            </v-btn>
            <v-spacer/>
            <p class="third--text">&copy; {{ new Date().getFullYear() }},  <strong>COSHARE</strong></p>
        </v-footer>
    </v-card>
</template>

<script>
export default {
    
}
</script>