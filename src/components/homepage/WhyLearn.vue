<template>
    <v-container class="mt-10">
        <h1 justify="center" align="center" class="primary--text">Why learn with Coshare?</h1>
        <v-row justify="center" align="center">
            <v-col md="6" lg="6">
                <v-img src="/img/why_1.png" alt="" :height="sheetHeight"></v-img>
            </v-col>
            <v-col md="4" offset-lg="1">
                <h1>Level up your skills with with us!</h1>
                <p>Because we know. You probably tried learning a new skill before. 
                    It was hard or boring...or both. You know what’s weird, though? We’ve ALL 
                    learned a skill once! Sure, it took a bit of time, but all good things in 
                    life do. <br><br> That’s why we created a 3-step approach to learning that helps 
                    you acquire a new skill like you did the first time around: naturally. </p>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col md="4" offset-lg="1">
                <h2 class="primary--text">Step 1</h2>
                <h1>Learn real-life skills with help from our super-smart learning engine.</h1>
                <p>It adapts your lessons to your individual needs, which keeps boredom away so 
                    you stay motivated and learn faster. Skill goals? Nailed. </p>
            </v-col>
            <v-col md="6" lg="6">
                <v-img src="/img/why_2.png" alt="" :height="sheetHeight"></v-img>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col md="6" lg="6">
                <v-img src="/img/why_3.png" alt="" :height="sheetHeight"></v-img>
            </v-col>
            <v-col md="4" offset-lg="1">
                <h2 class="primary--text">Step 2</h2>
                <h1>Immerse yourself. Build your ability to actually understand a new 
                    skill in real-world contexts.</h1>
                <p>With thousands of high-quality audio and video clips you’ll watch, 
                    listen and learn from real experts on each field! </p>
            </v-col>
        </v-row>
        <v-row justify="center" align="center">
            <v-col md="4" offset-lg="1">
                <h2 class="primary--text">Step 3</h2>
                <h1>Gain the confidence to show your skill!
                </h1>
                <p>With us, it’s about jumping in and giving it a go without worrying about being accurate. </p>
            </v-col>
            <v-col md="6" lg="6">
                <v-img src="/img/why_4.png" alt="" :height="sheetHeight"></v-img>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            secondary: '#FCFAF2',
        }
    },
    computed: {
         sheetHeight() {
             switch (this.$vuetify.breakpoint.name) {
                 case 'xs': return '400px'
                 case 'sm': return '400px'
                 case 'md': return '400px'
                 case 'lg': return '500px'                 
                 case 'xl': return '500px'
              }
          return '300px'
        }
    }
}
</script>