<template>
    <v-container>
        <h2 class="mt-8 primary--text">Let's create new course! ✨</h2>
        <p class="subtitle-1">Sharing is caring! Have a brand new course? Submit and share with your friends!</p>
        <v-form ref="form">
            <p class="font-weight-bold">Course title</p>
            <v-text-field v-model="title" :counter="20" :rules="titleRules" label="e.g. Flutter Course" required>
            </v-text-field>

            <p class="font-weight-bold">Course creator</p>
            <v-text-field v-model="creator" :counter="15" :rules="creatorRules" label="e.g. Indira" required>
            </v-text-field>

            <p class="font-weight-bold">Course description</p>
            <v-text-field v-model="desc" :counter="80" :rules="descRules" label="e.g. In this course, you will learn..." required>
            </v-text-field>

            <p class="font-weight-bold">Course category</p>
            <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" required
                label="Select one"></v-select>

            <p class="font-weight-bold">Course image</p>
            <v-text-field v-model="img" label="Insert valid image URL" :rules="imageRules" required></v-text-field>

            <p class="font-weight-bold">Syllabus</p>
            <div>
                <div v-for="(chapter, index) in syllabus" :key="index">
                    <div>
                        <v-text-field v-model="chapter.chapterName" :counter="25" :rules="cnRules" required
                            :name="`syllabus[${index}][chapterName]`" label="Chapter name"></v-text-field>
                    </div>
                    <div>
                        <v-text-field v-model="chapter.chapterVideo" :rules="cvRules" required
                            :name="`syllabus[${index}][chapterVideo]`" label="Chapter video (URL)"></v-text-field>
                    </div>
                </div>
            </div>
            <div class="mt-6 mb-6">
                <v-btn color="blue-grey darken-1" class="white--text" @click="addChapter">Add</v-btn>
            </div>
            <v-divider></v-divider>
            <div class="mt-6">
                <v-btn color="primary" @click.prevent="postCourse">Submit</v-btn>
                <v-btn color="error" class="ml-6" @click="reset">Reset Form</v-btn>
            </div>
            <v-alert color="error" :value="error" icon="mdi-close" class="white--text">Make sure all your form inputs are valid</v-alert>
        </v-form>
    </v-container>
</template>

<script>
import axios from 'axios'

export default {
    data: () => ({
        syllabus: [],
        title: '',
        creator: '',
        desc:'',
        select: '',
        img: '',
        name: '',
        video: '',
        error: false,
        items: [
            'Programming',
            'Data Science',
            'UX Design',
            'Web Development',
            'Marketing'
        ],
        titleRules: [
            v => !!v || 'Course title is required',
            v => (v && v.length <= 20) || 'Must be less than 20 characters',
        ],
        creatorRules: [
            v => !!v || 'Creator name is required',
            v => (v && v.length <= 15) || 'Must be less than 15 characters',
        ],
        descRules: [
            v => !!v || 'Course description is required',
            v => (v && v.length <= 80) || 'Must be less than 80 characters',
        ],
        imageRules: [
            v => !!v || 'Course image URL is required'
        ],
        cnRules: [
            v => !!v || 'Chapter name is required',
            v => (v && v.length <= 25) || 'Must be less than 25 characters',
        ],
        cvRules: [
            v => !!v || 'Chapter video URL is required',
        ],
        }),
    methods: {
        addChapter() {
            this.syllabus.push({
                chapterName: '',
                chapterVideo: ''
            })
        },
        reset () {
            this.$refs.form.reset()
        },
        postCourse() {
            axios({
                method: 'post',
                url: 'http://ec2-54-146-85-74.compute-1.amazonaws.com/v1/api/post_course',
                headers : {
                    'Authorization' : 'Bearer ' + this.$store.state.authKey
                },
                data: {
                    courseTitle: this.title,
                    creator: this.creator,
                    courseDesc: this.desc,
                    courseCategory: this.select,
                    courseImage: this.img,
                    syllabus: this.syllabus
                }
            })
            .then((response) => {
                if(response.data.statusCode == 200){
                    this.$router.push('/courses')
                }
                else{
                    this.error = true
                }
            })
        }
    }
}
</script>
