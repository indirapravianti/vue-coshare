<template>
<div>
  <v-container>
      <v-row>
          <v-col md="3" offset-lg="1">
              <Categories />
          </v-col>
          <v-col md="9" lg="7">
              <CourseList v-bind:courses="courses"/>
          </v-col>
      </v-row>
  </v-container>
</div>
</template>

<script>
import CourseList from '@/components/courses/CourseList.vue'
import Categories from '@/components/courses/Categories.vue'
import axios from 'axios'


export default {
  components: {
    CourseList,
    Categories
  },
  data() {
         return {
            courses: []
         }
  },
  mounted (){
            axios
                .get('http://ec2-54-146-85-74.compute-1.amazonaws.com/v1/api/get_courses')
                .then((res)=>{this.courses = res.data.body})
                .catch(err => console.log(err))
  }
}
</script>