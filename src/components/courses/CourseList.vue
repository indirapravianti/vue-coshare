<template>
  <div>
      <h2>Courses</h2>
      <v-row>
          <v-col sm="6" md="4" v-for="course in courses" v-bind:key="course.courseId">
            <router-link v-bind:to="'course/' + course.courseId" class="text-decoration-none">
                  <VerticalCard v-bind:course="course"/>
            </router-link>
          </v-col>
      </v-row>
  </div>
</template>

<script>
import VerticalCard from '@/components/cards/VerticalCard.vue'

export default {
    name: "CourseList",
    components: {
        VerticalCard
    },
    props: ["courses"]
}
</script>