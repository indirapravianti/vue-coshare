<template>
<div>
  <v-container>
      <v-row>
        <v-col flex md="9" lg="8">
              <!-- <img :width="235" :height="235" src="/img/dummy.jpg"> -->
              <v-card color="third" depressed class="mx-auto elevation-0">
                <v-list-item three-line>
                  <v-img :src="singleCourse.courseImage" max-height="235" max-width="235" class="mr-5">
                  </v-img>
                  <v-list-item-content>
                    <div class="overline mb-4">
                      {{singleCourse.courseCategory}}
                    </div>
                    <v-list-item-title class="headline mb-1 font-weigt-bold">
                      {{singleCourse.courseTitle}}
                    </v-list-item-title>
                    <v-list-item-subtitle>{{singleCourse.courseDesc}}
                    </v-list-item-subtitle>
                    <v-card-actions>
                  <v-btn
                    color="primary" class=" mt-2 rounded-xl px-4 py-4"
                  >
                    Get started now
                  </v-btn>
                </v-card-actions>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
        </v-col>
        <v-col md="2" offset-lg="1" justify="center">
            <p class="font-weight-bold">Created by<br> {{singleCourse.creator}}</p>

            <v-btn depressed small color="#3b5998" class="white--text px-5 py-5 rounded-tr-xl rounded-bl-xl">
              <v-icon left>mdi-facebook</v-icon>
              <span>Share</span>
            </v-btn>
            <v-btn depressed small color="#00acee" class="white--text px-5 py-5 mt-4 rounded-tr-xl rounded-bl-xl">
              <v-icon left>mdi-twitter</v-icon>
              <span>Tweet</span>
            </v-btn>
        </v-col>
      </v-row>
      <v-divider></v-divider>
      <v-row>
        <v-col md="9" lg="8">
          <p class="font-weight-bold">Syllabus</p>
          <v-card depressed flat color="white" elevation="1.2" class="px-4 py-4" 
              v-for="chapter in singleCourse.syllabus" v-bind:key="chapter.chapterName">
            {{chapter.chapterName}}
          </v-card>
        </v-col>
        <v-col md="3" offset-lg="1" justify="center">
            <v-card elevation="0">
              <v-card-title class="font-weight-bold py-4 px-4">
                <v-icon left>mdi-trophy-award</v-icon>Leaderboard</v-card-title>
            </v-card>
        </v-col>
      </v-row>
  </v-container>
</div>
</template>

<script>
import axios from 'axios'
export default {
    props:['id'],
    data: function(){
      return {
        singleCourse: null
      }
    },
    methods: {
      getData() {
            var that = this
            axios.get('http://ec2-100-27-5-186.compute-1.amazonaws.com/v1/api/course?id=' + this.id)
                 .then(function(response) {
                    that.singleCourse = response.data.body
                })
        }
    },
    mounted: function() {
      this.getData()
    }
}
</script>