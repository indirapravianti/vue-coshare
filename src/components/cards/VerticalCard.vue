<template>
    <v-card
      outlined
    >
        <v-img
          :src="course.courseImage"
          height="200"
        />

        <v-card-subtitle class="font-weight-light">
          {{ course.courseCategory}}
        </v-card-subtitle>

        <v-card-title class="subtitle-1 font-weight-bold">
          {{ course.courseTitle }}
        </v-card-title>

        <v-card-subtitle class="font-weight-medium">
          {{ course.creator }}
        </v-card-subtitle>

        <v-card-actions>
            <v-btn class="pa-5 primary white--text" text>
                VIEW
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: "VerticalCard",
    props:["course"]
}
</script>