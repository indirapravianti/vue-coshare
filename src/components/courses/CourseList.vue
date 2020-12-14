<template>
    <div>
        <v-row>
            <h2>Courses</h2>
            <v-btn v-if="isLogin" class="ml-5" elevation="0" color="primary" to="create">
                <v-icon>mdi-plus</v-icon>
                Create Course
            </v-btn>  
        </v-row>
        <v-row>
            <v-col sm="6" md="4" v-for="course in results" v-bind:key="course.courseId">
                <router-link v-bind:to="{name: 'CourseDetail', params: {id: course.courseId}}" class="text-decoration-none">
                      <VerticalCard v-bind:course="course"/>
                </router-link>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import VerticalCard from '@/components/cards/VerticalCard.vue'
import { mapState } from 'vuex'

export default {
    name: "CourseList",
    components: {
        VerticalCard
    },
    props: ["courses"],
    computed: {
        isLogin() {
        return this.$store.state.isLogin
        },
        ...mapState(['results'])
    }
}
</script>