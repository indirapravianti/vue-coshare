<template>
      <nav>
        <v-toolbar flat app class="secondary px-16">

            <v-btn depressed small color="secondary" class="primary--text hidden-sm-and-up" @click="drawer = !drawer">
              <v-icon>mdi-menu</v-icon>
            </v-btn>

            <v-toolbar-title color="transparent" class=" primary--text">
                <v-btn to="/" depressed text class="font-weight-bold primary--text">
                COSHARE
              </v-btn> 
            </v-toolbar-title>
            

            <v-toolbar-items class="hidden-xs-only ml-10">
              <v-btn to="courses" text class="third--text">
                Courses
              </v-btn> 
            </v-toolbar-items>

               <v-spacer />
            <v-toolbar-items class="hidden-xs-only">
              <v-btn to="login" text class="third--text">
                LOGIN
              </v-btn>
              <v-btn to="signup" text class="third--text ml-10">
                SIGN UP
              </v-btn>
           </v-toolbar-items>
        </v-toolbar>

        <v-navigation-drawer v-model="drawer" absolute temporary left color="third">
          <v-list>
            <v-list-item v-for="item in items" :key="item.title" :to="item.link" link>
              {{item.title}}
            </v-list-item>
          </v-list>
        </v-navigation-drawer>       
    </nav>
</template>

<script>
export default {
    data() {
        return {
            drawer: false,
            items: [
                {title: 'Home', link: '/'},
                {title: 'Courses', link: 'courses'},
                {title: 'Login', link: 'login'},
                {title: 'Sign Up', link: 'signup'}
            ]
        }
    }
}
</script>
